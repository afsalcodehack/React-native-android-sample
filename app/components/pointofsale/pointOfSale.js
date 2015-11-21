
import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sidebar from '../common/sidebar';
import PosItemList from './posItemList';
import Invoice from './invoice';

var { View, Text, Component, StyleSheet, ListView, } = React;
var data = [];
class PointOfSale extends React.Component {
  constructor(args) {
    super(args);
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.dataSource.cloneWithRows(data)
    };
  }
  onPress(dish) {
    data.push(dish);
    this.setState({ dataSource :' New Value ', dataSource: this.dataSource.cloneWithRows(data)});
  }
  render() {
    return (
      <View style={styles.container}>
        <Sidebar />
        <PosItemList onPress={this.onPress.bind(this)} />
        <Invoice dataSource={this.state.dataSource} />
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
