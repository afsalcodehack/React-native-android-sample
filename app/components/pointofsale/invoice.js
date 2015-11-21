
import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var { View, Text, Component, StyleSheet, ListView, } = React;

var _data = [1,2,3, 6, 0, 7, 8];

class Invoice extends React.Component {
  constructor(args) {
    super(args);
  }
  renderRow(rowData, sectionID: number, rowID: number) {
    return (
      <View style={{flexDirection:'row', padding: 10, borderBottomColor:'#F4F4F4', borderBottomWidth: 1, alignItems: 'stretch', backgroundColor:'#FFF'}}>
        <View style={{padding:5, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Text style={{fontSize: 20}}>1</Text>
        </View>
        <View style={{padding:5, flex: 1, flexDirection: 'column'}}>
          <Text style={{fontSize: 18}}>{rowData.name}</Text>
          <Text style={{}}>Small Description/ 1 / 5</Text>
        </View>
        <View style={{ padding:5, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <Text style={{fontSize: 18}}>{rowData.price}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.props.dataSource} renderRow={this.renderRow} style={{flex: 1}} />
        <View style={styles.footerItem}>
          <Text style={{flex: 1, fontSize: 16}}>Sub-total</Text>
          <Text style={{fontSize: 18}}>125.00</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={{flex: 1, fontSize: 16}}>Discount</Text>
          <Text style={{fontSize: 18}}>0.00</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={{flex: 1, fontSize: 16}}>Tax</Text>
          <Text style={{fontSize: 18}}>0.00</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={{flex: 1, fontSize: 16}}>Total</Text>
          <Text style={{fontSize: 18}}>130.25</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2,backgroundColor:'#008BE8', flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="check" color="#FFF" size={18}/>
            <Text style={{color: '#FFF', fontSize: 18}}>Pay</Text>
          </View>
          <View style={{flex: 1,backgroundColor:'#DE6C74', flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="clock-o" color="#FFF" size={18}/>
            <Text style={{color: '#FFF', fontSize: 18}}>Cancel</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    width: 300,
    borderLeftColor: '#CCC',
    borderLeftWidth: 1,
    backgroundColor: '#F2F2F2',
  },
  footerItem: {
    backgroundColor: '#FFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#F4F4F4',
    flexDirection: 'row'
  }
});

module.exports = Invoice;
