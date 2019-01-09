import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { backgroundColor } from "app/styles/constants";

class ExerciseCreate extends React.Component {
  // Navigation options for the specific component
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: navigation.getParam("title", "Create Exercise")
    };
  };

  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={styles.container}>
        <Button
          title="Go back!"
          onPress={() => this.props.navigation.setParams({ title: "Updated!" })}
        />
        <Text>otherParam: {otherParam}</Text>
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
)(ExerciseCreate);
