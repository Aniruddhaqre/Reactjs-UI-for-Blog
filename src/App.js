import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";


function App() {
  const user = false;
  return (
    <>
      <Topbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/write" element={user ? <Write/> : <Register/> }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/login" element={user ? <Home/> : <Login/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
      </Routes>
    </>
  );
}

export default App;
