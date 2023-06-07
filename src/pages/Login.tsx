import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Button from "../components/Button";
import group from "../images/group.png";
import api from "../axios/API";

import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleLogin = async () => {
    const user = {
      email: formik.values.email,
      password: formik.values.password,
    };

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await api.Login(user.email, user.password);
        console.log(response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login berhasil!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/userlist");
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Email atau Password Anda salah!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Email dan Password tidak boleh kosong!",
      });
    }
  };

  return (
    <div className="2xl:container grid grid-cols-2 place-items-center">
      <div className="bg-alta-blue p-16">
        <img className="p-16" src={group} alt="" />
      </div>
      <div className="p-12 text-center">
        <p className="pb-12 text-left">
          Alterra Academy adalah wadah transformasi digital untuk semua orang
          Indonesia untuk menjadi Talenta Digital dengan kualitas terbaik di
          Industri saat ini.
          <br />
          <br />
          Alterra Academy menawarkan solusi komprehensif untuk semua perusahaan
          yang berjuang untuk menemukan, mengembangkan, dan mengelola talenta
          teknologi dari level junior hingga senior.
        </p>
        <div>
          {showForm ? (
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email..."
                value={formik.values.email}
                onChange={formik.handleChange}
                className={`input input-bordered bg-white shadow-lg w-3/5 rounded-3xl m-1 ${
                  formik.values.email === "" ? "bg-white" : ""
                }`}
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your Password..."
                value={formik.values.password}
                onChange={formik.handleChange}
                className={`input input-bordered bg-white shadow-lg w-3/5 rounded-3xl m-1 ${
                  formik.values.password === "" ? "bg-white" : ""
                }`}
              />
              <Button id="login" label="login" onClick={handleLogin} />
            </div>
          ) : (
            <Button id="login" label="login" onClick={handleButtonClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
