import React from "react";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/GeneralSearch";
import pencil from "../icons/pencil.png"
import bin from "../icons/bin.png"

const UserList = () => {
  return (
    <Navbar>
      <GeneralSearch />
      <div className="overflow-x-auto mt-6">
        <table className="table border-2">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>No.</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Team Role</th>
              <th>Status</th>
              <th className="text-green-700">Edit</th>
              <th className="text-red-700">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              <td>Text</td>
              <td><img src={pencil} className="w-5" alt="" /></td>
              <td><img src={bin} className="w-5" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Navbar>
  );
};

export default UserList;