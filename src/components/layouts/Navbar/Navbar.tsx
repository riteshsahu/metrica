import Button from "@components/elements/Button/Button";
import { showSidebar, updateSearch } from "@store/actions/app.action";
import { useDispatch, useSelector } from "react-redux";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.app.search);

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white ">
      <div className="flex items-center flex-1">
        <button
          onClick={() => dispatch(showSidebar())}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <div className="relative mx-4 lg:mx-0 flex-1">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            className="form-input w-full max-w-lg rounded-3xl pl-10 pr-4 bg-secondary px-5 py-2"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => dispatch(updateSearch(e.target.value))}
          />
        </div>
      </div>

      <div className="flex items-center">
        <div x-data="{ notificationOpen: false }" className="relative">
          <button className="flex mx-4 text-gray-600 focus:outline-none">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>

          <div
            x-show="notificationOpen"
            className="fixed inset-0 h-full w-full z-10"
            style={{ display: "none" }}
          ></div>
        </div>

        <div x-data="{ dropdownOpen: false }" className="relative">
          <Button color="danger">Logout</Button>
        </div>
      </div>
    </header>
  );
}
