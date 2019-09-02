"use strict";

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavigationService from "./NavigationService";

export default (text, next) => {
  return class Screen extends React.Component {
    render () {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{text}</Text>
          <TouchableOpacity style={{
            marginTop: 20,
            backgroundColor: 'yellow'
          }} onPress={() => NavigationService.navigate(next)}>
            <Text>{'Next'}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
};
