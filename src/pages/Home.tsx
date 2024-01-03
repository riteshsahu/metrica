import Navbar from "@components/layouts/Navbar/Navbar";
import Sidebar from "@components/layouts/Sidebar/Sidebar";
import { BREAKPOINT } from "@config/ui";
import { hideSidebar, showSidebar } from "@store/actions/app.action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "react-use";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { width: windowWidth } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < BREAKPOINT.lg) {
      dispatch(hideSidebar());
    } else {
      dispatch(showSidebar());
    }
  }, [windowWidth]);

  return (
    <div>
      <div>
        <div
          x-data="{ sidebarOpen: false }"
          className="flex h-screen bg-gray-200"
        >
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
