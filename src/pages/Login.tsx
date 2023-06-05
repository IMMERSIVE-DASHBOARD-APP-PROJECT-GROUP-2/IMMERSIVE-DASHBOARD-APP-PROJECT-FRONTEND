import React, { useState } from "react";
import Button from "../components/Button";
import FormLogin from "../components/FormLogin";
import group from "../images/group.png";

const Login: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Nama:", name);
    // console.log("Email:", email);
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
              <form onSubmit={handleSubmit}>
                <FormLogin id="name" label="Your Name..." type="text" />
                <FormLogin id="password" label="Your Password..." type="password"/>
                <Button id="login" label="login" onClick={handleButtonClick} />
              </form>
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
