import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserList from "./pages/UserList";
import ClassList from "./pages/ClassList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="classlist" element={<ClassList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
