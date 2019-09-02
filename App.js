
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Main from './navigationConfig';
import NavigationService from './NavigationService';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Main 
          ref={router => NavigationService.setTopLevelNavigator(router)}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
