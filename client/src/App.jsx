import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
function App({DarkThemeToggle}) {
  return (
    <>
      {/* <Home DarkThemeToggle={DarkThemeToggle} /> */}
      <Navigation/>
    </>
  );
}

export default App;
