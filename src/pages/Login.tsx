import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Swal from "sweetalert2";

import Button from "../components/Button";
import FormLogin from "../components/FormLogin";
import group from "../images/group.png";

const Login: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fakeAPICall(email, password);
      console.log(response);
      navigate("/userlist");
    } catch (error) {
      setError("Login gagal, cek email dan password.");
    }

    setIsLoading(false);
  };

  const fakeAPICall = (
    email: string,
    password: string
  ): Promise<{ message: string }> => {
    return new Promise((resolve, reject) => {
      // delay 1 detik
      setTimeout(() => {
        if (email === "admin@gmail.com" && password === "admin123") {
          resolve({ message: "Login successful" });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
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
              <FormLogin
                id="email"
                name="email"
                type="email"
                label="Your Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLogin
                id="password"
                name="password"
                type="password"
                label="Your Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Button id="login" label="login" onClick={() => onLogin()} /> */}
              {isLoading ? (
              <Button id="login" label="loading..." disabled={true} />
                // <button disabled>Loading...</button>
                ) : (
                <Button id="login" label="login" onClick={handleLogin} />
                // <button onClick={handleLogin}>Login</button>
              )}
              {error && <p>{error}</p>}
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
