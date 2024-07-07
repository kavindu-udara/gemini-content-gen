import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App({DarkThemeToggle}) {
  return (
    <>
      {/* <Home DarkThemeToggle={DarkThemeToggle} /> */}
      {/* <Navigation/> */}
      {/* <SignUp/> */}
      <SignIn/>
    </>
  );
}

export default App;
