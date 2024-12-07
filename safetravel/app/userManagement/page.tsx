"use client";

import { useState, useEffect } from "react";
import FilterBar from "../components/UserManagement/FilterBar";
import UserTable from "../components/UserManagement/UserTable";
import Pagination from "../components/UserManagement/Pagination";
import Sidebar from "../components/ActivityLocation/Sidebar";
import Header from "../components/ActivityLocation/Header";
import AddUserForm from "../components/UserManagement/AddUserForm";
import { User } from "../components/UserManagement/User";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // User list
  const [activeMenu, setActiveMenu] = useState("User");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const itemsPerPage = 10;
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchUsername, setSearchUsername] = useState<string | null>(null);

  useEffect(() => {
    if (searchUsername) return;

    setLoading(true);
    setError(null);

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users?page=${activePage}&pageSize=${itemsPerPage}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
  
        const data = await response.json();
        console.log("Fetched users:", data.users);  // Log dữ liệu users
        setUsers(data.users.users);
        setTotalPages(data.users.totalPages);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching users.");
        setLoading(false);
      }
    };
  

    fetchUsers();
  }, [activePage]);
  const handleUpdateRole = async (username: string, newRoleName: string) => {
    if (!username || !newRoleName || newRoleName.trim() === "") {
      toast.error("Username and role name are required.");
      return;
    }
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${username}/role`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newRole: newRoleName }),
          credentials: "include",
        }
      );
  
      if (!response.ok) {
        const errorDetails = await response.json();
        toast.error(errorDetails.message || "Failed to update role.");
        return;
      }
  
      const result = await response.json();

  
      // Update the user list with the new role information
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.username === username) {
            // Update the role for the specific user
            return {
              ...user,
              roles: user.roles.map((role) =>
                role.role.name === newRoleName
                  ? {
                      ...role,
                      role: {
                        ...role.role,
                        name: newRoleName, // Ensure the role name is updated
                      },
                    }
                  : role
              ),
            };
          }
          return user; // No change for other users
        })
      );
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("An error occurred while updating the role.");
    }
  };
  
  

  const handleSetStatus = async (username: string, currentStatus: string) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${username}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status.");
      }

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.username === username ? { ...user, status: newStatus } : user
        )
      );

      toast.success(`User ${username}'s status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update user status.");
    }
  };

  const handleSearchUser = async (username: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/search/${username}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          alert(`No user found with username: "${username}".`);
          return;
        }
        throw new Error(`Unexpected response: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data.user ? [data.user] : data.users);
    } catch (error) {
      toast.error("An error occurred while fetching user.");
    }
  };

  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setShowAddUserForm(false);
  };

  const handleDeleteUser = async (username: string) => {
    if (window.confirm(`Are you sure you want to delete user ${username}?`)) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${username}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.username !== username)
        );
        toast.success("User deleted successfully");
      } catch (error) {
        toast.error("Failed to delete user");
      }
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
      case "Trip Location":
        return <TripLocation />;
      case "Post":
        return <Post />;
      case "User":
        return (
          <>
            <FilterBar
              onAddUserClick={() => setShowAddUserForm(true)}
              onSearch={handleSearchUser} // Truyền hàm tìm kiếm vào FilterBar
            />            
            <UserTable users={users} onDelete={handleDeleteUser} onSetStatus={handleSetStatus} onUpdateRole={handleUpdateRole} />
            {searchUsername === null && (
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                setActivePage={setActivePage} // Cập nhật activePage khi thay đổi
              />
            )}
          </>
        );
      case "Setting":
        return <Setting />;
      default:
        return (
          <>
            <FilterBar
              onAddUserClick={() => setShowAddUserForm(true)}
              onSearch={handleSearchUser} // Truyền hàm tìm kiếm vào FilterBar
            />
            <UserTable users={users} onDelete={handleDeleteUser} onSetStatus={handleSetStatus} onUpdateRole={handleUpdateRole}/>
            {searchUsername === null && (
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                setActivePage={setActivePage} // Cập nhật activePage khi thay đổi
              />
            )}
          </>
        );
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <main className="flex-1 bg-[#326D7B] p-5 flex flex-col justify-between">
          <Header activeMenu={activeMenu} />
          <div
            className="bg-white p-4 rounded shadow flex flex-col mt-0 h-full"
            style={{ borderRadius: "9px" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              renderContent()
            )}
          </div>
        </main>
      </div>
      {showAddUserForm && (
        <AddUserForm
          onAddUser={handleAddUser}
          onClose={() => setShowAddUserForm(false)}
        />
      )}
    </div>
  );
};

// Các Component khác (Dashboard, TripLocation, Setting, Post)
const Dashboard: React.FC = () => (
  <div className="bg-white p-4 rounded shadow">
    <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
    <p>Dashboard content goes here...</p>
  </div>
);

const TripLocation: React.FC = () => (
  <div className="bg-white p-4 rounded shadow">
    <h1 className="text-2xl font-bold text-gray-700">Trip Location</h1>
    <p>Trip Location content goes here...</p>
  </div>
);

const Post: React.FC = () => (
  <div className="bg-white p-4 rounded shadow">
    <h1 className="text-2xl font-bold text-gray-700">Post</h1>
    <p>Post content goes here...</p>
  </div>
);

const Setting: React.FC = () => (
  <div className="bg-white p-4 rounded shadow">
    <h1 className="text-2xl font-bold text-gray-700">Setting</h1>
    <p>Setting content goes here...</p>
  </div>
);

export default Home;
