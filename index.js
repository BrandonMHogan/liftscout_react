import { AppRegistry } from "react-native";
import React from "react";
import App from "./src/components/App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import configureStore from "./src/store";

const store = configureStore();

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
