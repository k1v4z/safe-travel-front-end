"use client";

import { useState, useEffect } from "react";
import FilterBar from "../components/UserManagement/FilterBar";
import UserTable from "../components/UserManagement/UserTable";
import Pagination from "../components/UserManagement/Pagination";
import Sidebar from "../components/ActivityLocation/Sidebar";
import Header from "../components/ActivityLocation/Header";

interface User {
  id: string;
  username: string;
  role: "Administrator" | "Viewer";
  status: "Active" | "Inactive";
  lastLogin: string;
  avatar: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Dữ liệu người dùng
  const [activeMenu, setActiveMenu] = useState("User");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddUserForm, setShowAddUserForm] = useState(false); // Hiển thị form thêm người dùng
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [loading, setLoading] = useState(true); // Trạng thái đang tải
  const [error, setError] = useState<string | null>(null); // Lỗi khi gọi API

  // Fetch dữ liệu người dùng từ API khi component mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
          method: "GET",
          credentials: 'include',
        });  // Thay thế bằng API thực tế
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        const data = await response.json();
        setUsers(data.users.users); // Lưu dữ liệu người dùng vào state
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Chạy một lần khi component mount

  // Thêm người dùng mới vào danh sách
  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]); // Thêm vào đầu danh sách
    setShowAddUserForm(false); // Đóng form sau khi thêm người dùng
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
            <FilterBar onAddUserClick={() => setShowAddUserForm(true)} />
            <UserTable users={paginatedUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        );
      case "Setting":
        return <Setting />;
      default:
        return (
          <>
            <FilterBar onAddUserClick={() => setShowAddUserForm(true)} />
            <UserTable users={paginatedUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newUser: User = {
                  id: String(users.length + 1).padStart(3, "0"),
                  username: formData.get("username") as string,
                  role: formData.get("role") as "Administrator" | "Viewer",
                  status: formData.get("status") as "Active" | "Inactive",
                  lastLogin: new Date().toLocaleDateString(),
                  avatar: "https://via.placeholder.com/150", // Thay bằng ảnh thực tế nếu có
                };
                console.log("New User Data:", newUser); // Debug dữ liệu người dùng mới
                handleAddUser(newUser);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Role</label>
                <select
                  name="role"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="Administrator">Administrator</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddUserForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#326D7B] text-white rounded"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
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
