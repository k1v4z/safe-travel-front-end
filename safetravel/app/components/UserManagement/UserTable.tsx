import React from 'react';
import UserRow from './UserRow';

export interface User {
  id: string;
  username: string;
  role: string;
  status: string;
  lastLogin: string;
  avatar: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600 font-medium">
            <th className="px-4 py-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Username</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last login</th>
            <th className="px-4 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;