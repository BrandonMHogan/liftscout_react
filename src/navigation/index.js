import React from "react";
import Dashboard from "app/features/home/dashboard/container";
import AppSettings from "app/features/home/settings/container";
import ExerciseList from "app/features/exercises/list/container";
import ExerciseCreate from "app/features/exercises/create/container";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {
  mainColor,
  thirdColor,
  actionBarTextColor
} from "app/styles/constants";
import Icons from "react-native-vector-icons/FontAwesome5";

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
    Dashboard: Dashboard,
    AppSettings: AppSettings
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

/**
 * Setup for the bottom tab navigation.
 */
export default createBottomTabNavigator(
  {
    Dashboard: DashboardStack,
    Exercises: ExerciseStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icons;
        let iconName;

        if (routeName === "Dashboard") {
          iconName = `home`;
        } else if (routeName === "Exercises") {
          iconName = `dumbbell`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: thirdColor,
      inactiveTintColor: "gray"
    }
  }
);
