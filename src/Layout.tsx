import { ReactElement } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout({
  showSystemSidebar = true,
}: {
  showSystemSidebar?: boolean;
}): ReactElement {
  return (
    <>
      <Navbar />
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}
