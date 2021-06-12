import { Provider } from "react-redux";
import { store } from "../Store";

export const bootstrapReduxStore = (app) => {
  return <Provider store={store}>{app}</Provider>;
};
