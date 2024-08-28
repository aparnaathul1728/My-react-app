import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import TableComponent from '../components/tableComponent';

const UserPage = () => {
  const { users, setUsers, pageSize, setPageSize, searchTerm, setSearchTerm, currentPage, setCurrentPage } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users`, {
          params: {
            limit: pageSize,
            skip: (currentPage - 1) * pageSize,
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [pageSize, currentPage, setUsers]);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First Name' },
    { field: 'lastName', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'age', headerName: 'Age' },
    { field: 'phone', headerName: 'Phone' },
  ];

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-4 mt-10">Users</h1>
      <TableComponent
        data={filteredUsers}
        columns={columns}
        pageSize={pageSize}
        setPageSize={setPageSize}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default UserPage;
