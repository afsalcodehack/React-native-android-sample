
import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sidebar from '../common/sidebar';
import PosItemList from './posItemList';
import Invoice from './invoice';

var { View, Text, Component, StyleSheet, } = React;

class PointOfSale extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      data: [1,2,3]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Sidebar />
        <PosItemList onPress={()=>{
          var a = this.state.data;
          a.push(5)
          this.setState({data:a} )
        }} />
        <Invoice data={this.state.data} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  }
});

module.exports = PointOfSale;
