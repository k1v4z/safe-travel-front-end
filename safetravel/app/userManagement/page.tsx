"use client"; // Add this at the top of the file

import { useState } from 'react';
import FilterBar from '../components/UserManagement/FilterBar';
import UserTable from '../components/UserManagement/UserTable';
import Pagination from '../components/UserManagement/Pagination';


const users = [
  {
    id: '001',
    username: 'Thomas Pham',
    role: 'Administrator',
    status: 'Active',
    lastLogin: '7 Nov 2024',
    avatar: '/path/to/avatar1.png',
  },
  {
    id: '002',
    username: 'Ashley Tran',
    role: 'Viewer',
    status: 'Inactive',
    lastLogin: '2 Nov 2024',
    avatar: '/path/to/avatar2.png',
  },
  // Add more users here
];

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <FilterBar />
      <UserTable users={paginatedUsers} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;