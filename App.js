import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store";
import { useScreens } from "react-native-screens";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "app/navigation";

import Dashboard from "app/features/dashboard/container";

// this makes react-navigation use react-native-screens.
// must be called before any rendering for setup.
useScreens();

// Creates and configures the store for redux
const store = configureStore();

// Creates the app container from the app navigatior object.
// this will setup the stack for the application, which is what
// gets displayed in the render
const AppContainer = createAppContainer(AppNavigator);

// This is the main application class, called from index.js
// Displays the application container.
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
