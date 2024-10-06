import React from 'react';
import './AdminPanel.css';

const AdminUser = () => {

const users = [
  {
      id: "f13f33ad-89fd-4f93-9121-73862b6c994b",
      username: "johndoe",
      email: "johndoe@example.com",
      walletBalance: 324.43,
      createdAt: "2022-05-12T07:22:33.000Z"
  },
  {
      id: "f29a2f3c-66fd-4f93-9121-73862b6c994a",
      username: "janedoe",
      email: "janedoe@example.com",
      walletBalance: 456.78,
      createdAt: "2021-08-25T12:15:43.000Z"
  },
  {
      id: "f47c2e5a-77fd-4f93-9121-73862b6c994c",
      username: "alice",
      email: "alice@example.com",
      walletBalance: 678.90,
      createdAt: "2023-01-10T14:20:55.000Z"
  },
  {
      id: "f61d2e3a-88fd-4f93-9121-73862b6c994d",
      username: "bob",
      email: "bob@example.com",
      walletBalance: 123.45,
      createdAt: "2022-11-30T09:00:00.000Z"
  },
  {
      id: "f72e3b4a-99fd-4f93-9121-73862b6c994e",
      username: "charlie",
      email: "charlie@example.com",
      walletBalance: 210.50,
      createdAt: "2024-03-15T17:40:12.000Z"
  },
  {
      id: "f81e4b5a-00fd-4f93-9121-73862b6c994f",
      username: "david",
      email: "david@example.com",
      walletBalance: 99.99,
      createdAt: "2023-05-05T11:25:36.000Z"
  },
  {
      id: "f92e5c6a-11fd-4f93-9121-73862b6c994g",
      username: "eve",
      email: "eve@example.com",
      walletBalance: 500.00,
      createdAt: "2024-04-21T08:15:24.000Z"
  },
  {
      id: "fa3d4e5b-22fd-4f93-9121-73862b6c994h",
      username: "frank",
      email: "frank@example.com",
      walletBalance: 325.10,
      createdAt: "2022-12-02T19:00:00.000Z"
  },
  {
      id: "fb4e5c6a-33fd-4f93-9121-73862b6c994i",
      username: "grace",
      email: "grace@example.com",
      walletBalance: 765.43,
      createdAt: "2023-02-14T07:45:56.000Z"
  },
  {
      id: "fc5e6d7b-44fd-4f93-9121-73862b6c994j",
      username: "henry",
      email: "henry@example.com",
      walletBalance: 150.00,
      createdAt: "2024-01-01T10:00:00.000Z"
  },
  {
      id: "fd6e7d8c-55fd-4f93-9121-73862b6c994k",
      username: "isabel",
      email: "isabel@example.com",
      walletBalance: 300.00,
      createdAt: "2023-06-19T14:30:00.000Z"
  },
  {
      id: "fe7f8e9d-66fd-4f93-9121-73862b6c994l",
      username: "jack",
      email: "jack@example.com",
      walletBalance: 400.00,
      createdAt: "2024-02-10T12:00:00.000Z"
  },
  {
      id: "fg8h9i0e-77fd-4f93-9121-73862b6c994m",
      username: "karen",
      email: "karen@example.com",
      walletBalance: 280.25,
      createdAt: "2022-04-20T15:20:30.000Z"
  },
  {
      id: "fh9i0j1f-88fd-4f93-9121-73862b6c994n",
      username: "leo",
      email: "leo@example.com",
      walletBalance: 350.50,
      createdAt: "2023-09-15T13:50:00.000Z"
  },
  {
      id: "fi0j1k2g-99fd-4f93-9121-73862b6c994o",
      username: "mona",
      email: "mona@example.com",
      walletBalance: 600.75,
      createdAt: "2022-03-28T17:45:12.000Z"
  },
  {
      id: "fj1k2l3h-0af0-4f93-9121-73862b6c994p",
      username: "nate",
      email: "nate@example.com",
      walletBalance: 220.00,
      createdAt: "2023-07-30T11:05:45.000Z"
  },
  {
      id: "fk2l3m4i-1bg1-4f93-9121-73862b6c994q",
      username: "olivia",
      email: "olivia@example.com",
      walletBalance: 460.80,
      createdAt: "2024-05-18T08:15:00.000Z"
  },
  {
      id: "fl3m4n5j-2cg2-4f93-9121-73862b6c994r",
      username: "peter",
      email: "peter@example.com",
      walletBalance: 312.40,
      createdAt: "2024-08-25T10:20:22.000Z"
  },
  {
      id: "fm4n5o6k-3dh3-4f93-9121-73862b6c994s",
      username: "quinn",
      email: "quinn@example.com",
      walletBalance: 530.90,
      createdAt: "2023-03-14T18:00:00.000Z"
  },
  {
      id: "fn5o6p7l-4ei4-4f93-9121-73862b6c994t",
      username: "rachel",
      email: "rachel@example.com",
      walletBalance: 225.60,
      createdAt: "2023-11-02T09:15:00.000Z"
  }
];

return (
  <div className="admin-panel">
   
<h2>Users</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Wallet Balance</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>${user.walletBalance.toFixed(2)}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default AdminUser;
