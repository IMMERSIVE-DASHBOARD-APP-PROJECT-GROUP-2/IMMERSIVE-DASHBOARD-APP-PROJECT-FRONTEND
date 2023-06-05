import React from "react";
import Button from "../components/Button";
import group from "../images/group.png";

const Login = () => {
  return (
    <div className="2xl:container grid grid-cols-2 place-items-center">
      <div className="bg-indigo-950 p-16">
        <img className="p-16" src={group} alt="" />
      </div>
      <div className="p-12">
        <p className="pb-16 text-left">
          Alterra Academy adalah wadah transformasi digital untuk semua orang
          Indonesia untuk menjadi Talenta Digital dengan kualitas terbaik di
          Industri saat ini.
          <br />
          <br />
          Alterra Academy menawarkan solusi komprehensif untuk semua perusahaan
          yang berjuang untuk menemukan, mengembangkan, dan mengelola talenta
          teknologi dari level junior hingga senior.
        </p>
        <Button id="login" label="login" />
      </div>
    </div>
  );
};

export default Login;
