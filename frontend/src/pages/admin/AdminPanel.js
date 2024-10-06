import React from 'react';
// import { generateMockData } from './mockData'; // Ensure you import the updated mockData
import './AdminPanel.css'; // Import the CSS file for styling

const AdminPanel = () => {
  // const [mockData, setMockData] = useState({ users: [], transactions: [] });

  // useEffect(() => {
  //   const data = generateMockData(10, 50);
  //   console.log(data) // 10 users, 50 transactions
  //   setMockData(data);
  // }, []);
  

  const transactions = [
    {
        id: "e4b2e644-874d-482f-9e65-4fae0d394573",
        userId: "f13f33ad-89fd-4f93-9121-73862b6c994b",
        type: "Deposit",
        amount: 412.54,
        date: "2024-10-04T13:12:34.000Z",
        status: "Completed"
    },
    {
        id: "c1e2b3c4-56f7-8a9b-10e1-f2a3c4d5e678",
        userId: "f13f33ad-89fd-4f93-9121-73862b6c994b",
        type: "Withdrawal",
        amount: 150.00,
        date: "2024-10-03T10:05:00.000Z",
        status: "Pending"
    },
    {
        id: "a2b3c4d5-e6f7-8a9b-10e1-f2a3c4d5e789",
        userId: "f29a2f3c-66fd-4f93-9121-73862b6c994a",
        type: "Deposit",
        amount: 210.50,
        date: "2024-09-29T12:00:00.000Z",
        status: "Completed"
    },
    {
        id: "f4d5e6f7-g8h9-0i1j-2k3l-m4n5o6p7q8r9",
        userId: "f29a2f3c-66fd-4f93-9121-73862b6c994a",
        type: "Withdrawal",
        amount: 500.00,
        date: "2024-09-28T15:45:00.000Z",
        status: "Failed"
    },
    {
        id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
        userId: "f47c2e5a-77fd-4f93-9121-73862b6c994c",
        type: "Deposit",
        amount: 350.00,
        date: "2024-10-05T11:30:00.000Z",
        status: "Completed"
    },
    {
        id: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6",
        userId: "f47c2e5a-77fd-4f93-9121-73862b6c994c",
        type: "Withdrawal",
        amount: 100.00,
        date: "2024-10-01T09:15:00.000Z",
        status: "Completed"
    },
    {
        id: "e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t6",
        userId: "f61d2e3a-88fd-4f93-9121-73862b6c994d",
        type: "Deposit",
        amount: 250.75,
        date: "2024-09-30T14:25:00.000Z",
        status: "Completed"
    },
    {
        id: "f5g6h7i8-j9k0-l1m2-n3o4-p5q6r7s8t9u0",
        userId: "f61d2e3a-88fd-4f93-9121-73862b6c994d",
        type: "Withdrawal",
        amount: 200.00,
        date: "2024-10-02T16:05:00.000Z",
        status: "Pending"
    },
    {
        id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
        userId: "f72e3b4a-99fd-4f93-9121-73862b6c994e",
        type: "Deposit",
        amount: 150.30,
        date: "2024-10-03T13:20:00.000Z",
        status: "Completed"
    },
    {
        id: "h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v5w6",
        userId: "f72e3b4a-99fd-4f93-9121-73862b6c994e",
        type: "Withdrawal",
        amount: 50.00,
        date: "2024-10-04T08:15:00.000Z",
        status: "Completed"
    },
    {
        id: "i3j4k5l6-m7n8-o9p0-q1r2-s3t4u5v6w7x8",
        userId: "f81e4b5a-00fd-4f93-9121-73862b6c994f",
        type: "Deposit",
        amount: 400.00,
        date: "2024-10-05T10:30:00.000Z",
        status: "Completed"
    },
    {
        id: "j5k6l7m8-n9o0-p1q2-r3s4-t5u6v7w8x9y0",
        userId: "f81e4b5a-00fd-4f93-9121-73862b6c994f",
        type: "Withdrawal",
        amount: 120.00,
        date: "2024-10-01T12:45:00.000Z",
        status: "Completed"
    },
    {
        id: "k7l8m9n0-o1p2-q3r4-s5t6-u7v8w9x0y1z2",
        userId: "f92e5c6a-11fd-4f93-9121-73862b6c994g",
        type: "Deposit",
        amount: 320.50,
        date: "2024-10-04T14:15:00.000Z",
        status: "Completed"
    },
    {
        id: "l9m0n1o2-p3q4-r5s6-t7u8-v9w0x1y2z3a4",
        userId: "f92e5c6a-11fd-4f93-9121-73862b6c994g",
        type: "Withdrawal",
        amount: 60.00,
        date: "2024-10-05T11:00:00.000Z",
        status: "Pending"
    },
    {
        id: "m1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6",
        userId: "fa3d4e5b-22fd-4f93-9121-73862b6c994h",
        type: "Deposit",
        amount: 180.00,
        date: "2024-10-04T16:30:00.000Z",
        status: "Completed"
    },
    {
        id: "n3o4p5q6-r7s8-t9u0-v1w2-x3y4z5a6b7c8",
        userId: "fa3d4e5b-22fd-4f93-9121-73862b6c994h",
        type: "Withdrawal",
        amount: 30.00,
        date: "2024-10-02T09:50:00.000Z",
        status: "Completed"
    },
    {
        id: "o5p6q7r8-s9t0-u1v2-w3x4-y5z6a7b8c9d0",
        userId: "fb4e5c6a-33fd-4f93-9121-73862b6c994i",
        type: "Deposit",
        amount: 275.00,
        date: "2024-10-01T08:00:00.000Z",
        status: "Completed"
    },
    {
        id: "p7q8r9s0-t1u2-v3w4-x5y6-z7a8b9c0d1e2",
        userId: "fb4e5c6a-33fd-4f93-9121-73862b6c994i",
        type: "Withdrawal",
        amount: 45.00,
        date: "2024-10-03T07:30:00.000Z",
        status: "Pending"
    }
];


  return (
    <div className="admin-panel">
     
      {/* Transactions Table */}
      <h2>Transactions</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.userId}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
