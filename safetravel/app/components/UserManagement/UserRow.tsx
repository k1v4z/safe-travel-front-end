import React from 'react';
import { User } from './User';
import Image from 'next/image';
import "remixicon/fonts/remixicon.css";
interface UserRowProps {
  user: User;
  onDelete: (username: string) => void;
  onSetStatus: (username: string, currentStatus: string) => void;
}
const formatDate = (dateString: string | null) => {
  if (!dateString) return "N/A"; // Nếu không có giá trị, trả về "N/A"
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date"; // Nếu không hợp lệ
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const UserRow: React.FC<UserRowProps> = ({ user, onDelete,onSetStatus   }) => {
  
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
        <span
          className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm ${
            user.role === 'Administrator'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {user.role === 'Administrator' ? (
            <Image
              src="/pictures/adminstra.png"
              alt="Admin Icon"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/pictures/viewer.png"
              alt="Viewer Icon"
              width={20}
              height={20}
            />
          )}
          Administrator
        </span>
      </td>

      <td className="px-4 py-3">{formatDate(user.last_login)}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => onSetStatus(user.username, user.status)}
          className="inline-flex items-center gap-2 px-2 py-1 rounded text-sm cursor-pointer"
        >
          <span
            className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm ${
              user.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                user.status === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
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
