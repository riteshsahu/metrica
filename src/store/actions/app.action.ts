import { App } from "../constants/app.constants";

export const showSidebar = () => ({
  type: App.SHOW_SIDEBAR,
});

export const hideSidebar = () => ({
  type: App.HIDE_SIDEBAR,
});

export const toggleSidebar = () => ({
  type: App.TOGGLE_SIDEBAR,
});

export const updateSearch = (payload: string) => ({
  type: App.UPDATE_SEARCH,
  payload,
});
