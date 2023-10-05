import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "./Navbar.css";
import Calculation from "./components/Calculation";
import { Layout } from "./Layout";
import Offset from "./components/Offset";
import { AuthProvider } from "./utils/useAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path={""} element={<Calculation />}></Route>
        <Route path={"calculation"} element={<Calculation />}></Route>
        <Route path={"offset"} element={<Offset />}></Route>
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Index />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
