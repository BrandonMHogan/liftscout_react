import Dashboard from "app/features/dashboard/container";
import Settings from "app/features/settings/container";
import ExerciseList from "app/features/exercises/list/container";
import ExerciseCreate from "app/features/exercises/create/container";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { mainColor, actionBarTextColor } from "app/styles/constants";

const navigationOptions = {
  headerStyle: {
    backgroundColor: mainColor
  },
  headerTintColor: actionBarTextColor,
  headerBackTitle: null,
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const DashboardStack = createStackNavigator(
  {
    Dashboard: Dashboard
  },
  {
    initialRouteName: "Dashboard",
    defaultNavigationOptions: navigationOptions,
    navigationOptions: {
      tabBarLabel: "Dashboard"
    }
  }
);

const ExerciseStack = createStackNavigator(
  {
    ExerciseList: ExerciseList,
    ExerciseCreate: ExerciseCreate
  },
  {
    initialRouteName: "ExerciseList",
    defaultNavigationOptions: navigationOptions,
    navigationOptions: {
      tabBarLabel: "Exercises"
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: Settings
  },
  {
    initialRouteName: "Settings",
    defaultNavigationOptions: navigationOptions,
    navigationOptions: {
      tabBarLabel: "Settings"
    }
  }
);

export default createBottomTabNavigator({
  Dashboard: DashboardStack,
  Exercises: ExerciseStack,
  Settings: SettingsStack
});
