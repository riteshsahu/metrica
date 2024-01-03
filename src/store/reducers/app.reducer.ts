import { App } from "../constants/app.constants";

const initialState = {
  sidebarOpen: true,
  search: "",
};

function AppReducer(state = initialState, action: any) {
  switch (action.type) {
    case App.SHOW_SIDEBAR:
      return {
        ...state,
        sidebarOpen: true,
      };

    case App.HIDE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false,
      };

    case App.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case App.UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
}

export default AppReducer;
