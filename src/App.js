import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/layout/Navbar";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Notfound from "./components/Notfound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users/add" element={<AddUser/>} />
          <Route path="/users/view/:id" element={<ViewUser/>} />
          <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
