import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">


      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/fetchsample">Fetch Sample</Link>
        <Link to="/abortsample">Abort Sample</Link>
        <Link to="/axiossample">Axios Sample</Link>
        <Link to="/servicesample">Service Sample</Link>
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
