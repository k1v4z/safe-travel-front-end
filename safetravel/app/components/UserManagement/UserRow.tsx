import React, { useState } from "react";
import { User } from "./User";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { toast } from "react-toastify";

interface UserRowProps {
  user: User;
  onDelete: (username: string) => void;
  onSetStatus: (username: string, currentStatus: string) => void;
  onUpdateRole: (username: string, newRole: string) => Promise<void>;
}

const formatDate = (dateString: string | null) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const UserRow: React.FC<UserRowProps> = ({
  user,
  onDelete,
  onSetStatus,
  onUpdateRole,
}) => {
  const [editingRole, setEditingRole] = useState(false);
  const roles = ["Partner", "Owner", "Admin", "Tourist"];

  // Safely setting the initial selectedRole from user data or fallback to "Tourist"
  const [selectedRole, setSelectedRole] = useState(
    Array.isArray(user.roles) && user.roles.length > 0 && user.roles[0]?.role?.name
      ? user.roles[0].role.name
      : "Tourist"
  );

  const handleRoleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value;

    if (!newRole || !roles.includes(newRole)) {
      toast.error("Invalid role selected.");
      return;
    }

    try {
      await onUpdateRole(user.username, newRole);
      setSelectedRole(newRole);
      setEditingRole(false);
    } catch (error) {
      console.error("Failed to update role:", error);
      toast.error("Error updating role. Please try again.");
    }
  };

  const getRoleColor = (roleName: string) => {
    switch (roleName) {
      case "Admin":
        return "bg-purple-100 text-purple-800";
      case "Partner":
        return "bg-green-100 text-green-800";
      case "Owner":
        return "bg-blue-100 text-blue-800";
      case "Tourist":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleImage = (roleName: string) => {
    switch (roleName) {
      case "Admin":
        return "/pictures/user.png";
      case "Partner":
        return "/pictures/deal.png";
      case "Owner":
        return "/pictures/owner.png";
      case "Tourist":
        return "/pictures/tourist.png";
      default:
        return "/pictures/viewer.png";
    }
  };

  return (
    <tr className="hover:bg-gray-50 text-sm text-gray-700">
      <td className="px-4 py-3">
        <input type="checkbox" className="form-checkbox" />
      </td>
      <td className="px-4 py-3 flex items-center gap-3">
        <img
          src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${user.username}`}
          alt={`${user.username}'s avatar`}
          className="w-8 h-8 rounded-full"
        />
        {user.username}
      </td>
      <td className="px-4 py-3">
        {editingRole ? (
          <select
            value={selectedRole}
            onChange={handleRoleChange}
            onBlur={() => setEditingRole(false)}
            className="border rounded p-1 text-sm"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        ) : (
          <span
            className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm cursor-pointer ${getRoleColor(selectedRole)}`}
            onClick={() => setEditingRole(true)} // Enable role editing on click
            title="Click to change role"
          >
            <Image
              src={getRoleImage(selectedRole)}
              alt={selectedRole}
              width={20}
              height={20}
            />
            {selectedRole}
          </span>
        )}
      </td>
      <td className="px-4 py-3">{formatDate(user.last_login)}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => onSetStatus(user.username, user.status)}
          className="inline-flex items-center gap-2 px-2 py-1 rounded text-sm cursor-pointer"
        >
          <span
            className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            <span className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
            {user.status}
          </span>
        </button>
      </td>
      <td className="px-4 py-3">
        <button onClick={() => onDelete(user.username)}>
          <i className="ri-delete-bin-line text-red-500 text-2xl hover:text-red-700"></i>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
