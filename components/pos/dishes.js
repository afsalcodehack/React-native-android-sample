/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

import React from 'react-native';
import Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback,
  ListView,
} = React;

var _data = [
    { Category: [1, 2, 3]},
    { Category: [1, 2, 3]},
    { Category: [1, 2, 3]},
    { Category: [1, 2, 3]},
    { Category: [1, 2, 3]},
    { Category: [1, 2, 3]},
];
class Dishes extends React.Component {
    constructor(args) {
        super(args);
        var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.data)
        }
    }
    render() {
        return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow} style={{flex: 1}} />)
    }
    renderRow(rowData, sectionID: number, rowID: number) {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {
                    (()=>{
                        var items = [];
                        rowData.Category.map(() => {
                            items.push(<View style={{ width: 120, height: 120, backgroundColor: '#FFF', margin: 8}} />);
                        });

                        return items;
                    })()
                }

            </View>
       );
    }
}

let styles = StyleSheet.create({
  container: {
    width: 450,
    backgroundColor: 'whitesmoke',
    alignItems:'stretch',
    flexDirection: 'column',
    borderRightColor:'#766946',
    borderRightWidth: 5
  },
  title: {
    backgroundColor: '#FFF',
    height: 50,
    padding: 10
  },
  titleTextWrapper: {
    backgroundColor: '#FFF',
    padding: 5,
    borderTopColor: '#F4F4F4',
    borderTopWidth: 1
  }
});

module.exports = Dishes;
