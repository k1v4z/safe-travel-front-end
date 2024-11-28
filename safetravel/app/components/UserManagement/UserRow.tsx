import React from 'react';
import { User } from './UserTable';
import Image from 'next/image';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <tr className="hover:bg-gray-50 text-sm text-gray-700">
      <td className="px-4 py-3">
        <input type="checkbox" className="form-checkbox" />
      </td>
      <td className="px-4 py-3">{user.id}</td>
      <td className="px-4 py-3 flex items-center gap-3">
        <img
          src={user.avatar}
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
          {user.role}
        </span>
      </td>
      <td className="px-4 py-3">
        <span
          className={`inline-flex items-center gap-2 px-2 py-1 rounded text-sm ${
            user.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></span>
          {user.status}
        </span>
      </td>
      <td className="px-4 py-3">{user.lastLogin}</td>
      <td className="px-4 py-3 text-center">...</td>
    </tr>
  );
};

export default UserRow;
