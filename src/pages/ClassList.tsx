import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/GeneralSearch";
import Pagination from "../components/Pagination";
import pencil from "../icons/pencil.png";
import bin from "../icons/bin.png";

interface Class {
  no: number;
  class_name: string;
}

const ClassList: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Class[]>("http://34.123.236.1/classes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Navbar listname="Class List">
      <GeneralSearch />
      <div className="overflow-x-auto mt-6">
        <table className="table border-2">
          <thead className="text-black">
            <tr>
              <th>No.</th>
              <th>Class</th>
              <th className="text-green-700">Edit</th>
              <th className="text-red-700">Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.no}>
                <th>{classItem.no}</th>
                <td>{classItem.class_name}</td>
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

export default ClassList;
