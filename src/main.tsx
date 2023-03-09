import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { applicationStore } from "store/application-store";

import Root from "./root";

import "../index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={applicationStore}>
      <Root />
    </ReduxProvider>
  </React.StrictMode>
);
