import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
// import UserList from "./pages/UserList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="userlist" element={<UserList />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
