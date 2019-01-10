import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { HeaderButtonsStyles } from "app/styles/header-buttons.js";
import HeaderButtons, { Item } from "react-navigation-header-buttons";
import { connect } from "react-redux";
import { backgroundColor } from "app/styles/constants";

class Dashboard extends React.Component {
  // Navigation options for the specific component
  static navigationOptions = props => {
    const { params } = props.navigation.state;

    return {
      title: "Dashboard",
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButtonsStyles}>
          <Item
            title="more"
            iconName="ellipsis-v"
            onPress={props.navigation.getParam("onSettingsClicked")}
          />
        </HeaderButtons>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      onSettingsClicked: this._onSettingsClicked
    });
  }

  _onSettingsClicked = () => {
    alert("It worked");
  };

  render() {
    console.log("Displaying the dashboard inside render");
    return (
      <View style={styles.container}>
        <Button
          title="Go back!"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <Text>Wassup from the dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
