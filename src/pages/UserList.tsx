import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/GeneralSearch";
import Pagination from "../components/Pagination";
import pencil from "../icons/pencil.png";
import bin from "../icons/bin.png";

interface User {
  name: string;
  email: string;
  team: string;
  role: string;
  status: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async (): Promise<void> => {
    try {
      const token = "your-auth-token"; // Ganti dengan token autentikasi Anda
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get<User[]>("http://34.123.236.1/users", {
        headers,
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  return (
    <Navbar listname="User List">
      <GeneralSearch />
      <div className="overflow-x-auto mt-6">
        <table className="table border-2">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-green-700">Edit</th>
              <th className="text-red-700">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.team}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <img src={pencil} className="w-5" alt="" />
                </td>
                <td>
                  <img src={bin} className="w-5" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </Navbar>
  );
};

export default UserList;
