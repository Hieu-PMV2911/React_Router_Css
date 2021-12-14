import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SideBar from "./components/sidebar/SideBar";
function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        {/* use element because component not action */}
          <Route path="/" element={<Home />}/> 
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home /> : <Register />}/>
      </Routes>
      <Routes>
          <Route path="/login" element={user ? <Home /> : <Login />}/> 
      </Routes>
      <Routes>
          <Route path="/write" element={ user ? <Write /> : <Register/> }/> 
      </Routes>
      <Routes>
          <Route path="/settings" element={user ? <Settings /> : <Register />}/> 
      </Routes>
      <Routes>
          <Route path="/post/:postId" element={<Single />}/> 
      </Routes>
      <Routes>
          <Route path="/sidebar" element={<SideBar />}/> 
      </Routes>
    </Router>
  );
}

export default App;
