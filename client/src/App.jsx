import "./App.css";
import Home from "./pages/Home";
function App({DarkThemeToggle}) {
  return (
    <>
      <Home DarkThemeToggle={DarkThemeToggle} />
    </>
  );
}

export default App;
