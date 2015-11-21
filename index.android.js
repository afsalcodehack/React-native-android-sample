/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

import React from 'react-native';
import { Titlebar } from './components/common/titlebar';
import { Infobar } from './components/common/infobar';
import { Dashboard } from './components/dashboard/dashboard';
import PointOfSale from './app/components/pointofsale/pointOfSale';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  BackAndroid,
} = React;

let _navigator  =  null;
let _initialRoute = { title: 'Dashboard', id: 'dashboard', component: PointOfSale };

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var Watermelon = React.createClass({

  getInitialState: function(){
    return { };
  },

  configureScene: function (route) {
      return Navigator.SceneConfigs.PushFromRight;
  },

  renderScene: function (route, navigator) {
      let Component = null;
      _navigator = navigator;

      if(route.component) {
        Component = route.component;
      }

      let appScene = (
          <View style={styles.container}>
             <Titlebar  />
             <Infobar roomNo={this.state.roomNo} navigator={_navigator}/>
             <View style={styles.appContainer}>
                <Component navigator={navigator} {...route.props} />
            </View>
          </View>
      );
      return appScene;
  },

  render: function () {
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={_initialRoute}
        configureScene={this.configureScene}
        renderScene={this.renderScene} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#d9232d'
  },
  appContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#FFF'
  },
  contentWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  shadowSeparator: {
    width: 5
  }
});

AppRegistry.registerComponent('Watermelon', () => Watermelon);
0
