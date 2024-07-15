import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Flowbite>
      <PersistGate loading={null} persistor={persistor}>
        <App DarkThemeToggle={<DarkThemeToggle className="text-3xl" />} />
        {/* <DarkThemeToggle /> */}
      </PersistGate>
    </Flowbite>
  </Provider>
);
