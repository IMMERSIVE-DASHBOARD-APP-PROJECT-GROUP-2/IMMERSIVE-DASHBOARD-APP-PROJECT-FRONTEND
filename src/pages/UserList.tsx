import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/GeneralSearch";
import Pagination from "../components/Pagination";
import pencil from "../icons/pencil.png";
import bin from "../icons/bin.png";

interface User {
  no: number;
  user_id: string;
  fullname: string;
  email: string;
  team: string;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("http://34.123.236.1/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Navbar listname="User List">
      <GeneralSearch />
      <div className="overflow-x-auto mt-6">
        <table className="table border-2">
          <thead className="text-black">
            <tr>
              <th>No.</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-green-700">Edit</th>
              <th className="text-red-700">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.no}>
                <th>{user.no}</th>
                <td>{user.fullname}</td>
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
