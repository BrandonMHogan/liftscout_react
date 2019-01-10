import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { backgroundColor } from "app/styles/constants";

class AppSettings extends React.Component {
  // Navigation options for the specific component
  static navigationOptions = props => {
    const { params } = props.navigation.state;

    return {
      title: params ? params.title : "Settings"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go back!"
          onPress={() =>
            this.props.navigation.navigate("ExerciseCreate", {
              itemId: 86,
              title: "From Settings"
            })
          }
        />
        <Text>Settings</Text>
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
)(AppSettings);
