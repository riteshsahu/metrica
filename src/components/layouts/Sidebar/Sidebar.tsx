import { hideSidebar } from "@store/actions/app.action";
import { classNames } from "@utils/helpers";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import sidebarLinks from "./sidebarLinks";

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const sidebarOpen = useSelector<boolean>(
    (state: any) => state.app.sidebarOpen
  );
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div
        className={classNames(
          sidebarOpen ? "block" : "hidden",
          "fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
        )}
        onClick={() => dispatch(hideSidebar())}
      ></div>

      <div
        className={classNames(
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in",
          "fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-secondary overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
        )}
      >
        <div className="flex items-center logoContainer justify-center bg-primary">
          <div className="flex items-center p-12">
            <img src="/logo.svg" alt="Logo" />
          </div>
        </div>

        <div>
          <div className="flex items-center border-b border-opacity-10 border-black pt-10 pb-5 mx-3">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
              className="w-12 h-12 rounded-full mx-3"
            />
            <div>
              <div
                style={{
                  color: "#0C3F3F",
                }}
              >
                Yukuta
              </div>
              <div className="text-xs">yukhta@metrica.com</div>
            </div>
          </div>
          <nav className="mt-10">
            {sidebarLinks.map((dt) => {
              const Icon = dt.icon;
              return (
                <NavLink
                  key={dt.name}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? "text-primary" : "text-gray-1",
                      "flex items-center mt-4 py-2 px-6 relative pl-9"
                    )
                  }
                  to={dt.link}
                >
                  {({ isActive }) => (
                    <React.Fragment>
                      <Icon
                        className={classNames(
                          "sidebar-icon",
                          isActive && "active"
                        )}
                      />
                      <span className="mx-3">{dt.name}</span>
                      {isActive && (
                        <div className="h-full w-1 bg-primary absolute left-0 top-0" />
                      )}
                    </React.Fragment>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
