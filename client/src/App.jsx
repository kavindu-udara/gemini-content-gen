import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App({DarkThemeToggle}) {
  return (
    <>
        <ToastContainer />
      {/* <Home DarkThemeToggle={DarkThemeToggle} /> */}
      {/* <Navigation/> */}
      {/* <SignUp/> */}
      <SignIn/>
    </>
  );
}

export default App;
