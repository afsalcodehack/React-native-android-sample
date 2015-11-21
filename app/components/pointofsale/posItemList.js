
import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';

var { View, Text, Component, StyleSheet, ListView, ScrollView, Image, TouchableWithoutFeedback, } = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var listWidth = width - 330;
var rowItemCount = Math.round(listWidth / 110) - 1;

var _data = [
];

var uri = [
  "http://www.cookingsgood.com/wp-content/uploads/2012/11/cherry-pastry1.jpg",
  "https://delicesandgourmandises.files.wordpress.com/2014/08/delicesgourmandises-sweets-dessert-pastry.jpg",
  "http://www.ecpi.edu/sites/default/files/baking-pastry.jpg",
  "http://www.awesomeconcierge.com/wp-content/uploads/2015/01/235.jpg",
  "http://hotcurrysauce.com/blog/wp-content/uploads/2013/10/START_Curry_Sauce_Thai_Red_Curry_recipe.jpg",
  "http://images.tastespotting.com/thumbnails/287495.jpg",
  "http://www.pinoyrecipe.net/wp-content/uploads/2008/10/thai-red-curry.jpg",
  "http://www.sunorchard.com/wp-content/themes/sun-orchard/img/products_intro_img.jpg",
  "http://yonanas.com/wp-content/uploads/2012/11/juice.jpg",
  "http://www.nubiarestaurant.com/wp-content/uploads/2015/09/burger_sandwich_1.jpg"
];

class PosItemList extends React.Component {
  constructor(args) {
    super(args);

    for(var i = 0; i < 25; i++ ){
      _data.push({});
    }

    var strucutredData = [];
    var selectedDataNode = [];
    _data.map((item, index) => {
      if(index % rowItemCount == 0) {
        strucutredData.push(selectedDataNode);
        selectedDataNode = []
      }
      selectedDataNode.push(item);
    });

    this.state = {
      dataSource: strucutredData,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabWrapper}>
          <View style={styles.tab}>
            <Icon name="user" size={20} />
            <Text style={styles.tabText}>SOFT DRINKS</Text>
          </View>
          <View style={styles.tab}>
            <Icon name="clock-o" size={20} />
            <Text style={styles.tabText}>COFFEE & TEA</Text>
          </View>
          <View style={[styles.tab]}>
            <Icon name="image" size={20} />
            <Text style={styles.tabText}>LUNCH</Text>
          </View>
          <View style={[styles.tab]}>
            <Icon name="image" size={20} />
            <Text style={styles.tabText}>DINNER</Text>
          </View>
          <View style={[styles.tab, { borderRightWidth: 0 }]}>
            <Icon name="image" size={20}  />
            <Text style={styles.tabText}>BREAKFAST</Text>
          </View>
        </View>
        <View style={styles.listWrapper}>
          <ScrollView style={{flex: 1}}>
            {(() => {
              var rows = [];
              this.state.dataSource.map((item) => {
                var dishes = [];
                rows.push(
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    {(() => {
                      item.map((dish) => {
                        let sourceIndex = Math.floor(Math.random() * uri.length - 1 ) + 1;
                        let source = uri[sourceIndex]
                        dishes.push(
                          <TouchableWithoutFeedback onPress={this.props.onPress}>
                          <Image source={{uri:source}} style={{width:110, height: 110, margin: 5, backgroundColor: '#FFF', flexDirection: 'column'}}>
                            <View style={{flexDirection:'row'}}>
                              <View style={{flex: 1}}>
                              </View>
                              <View style={{backgroundColor: 'red', padding: 5}}>
                                <Text style={{background: 'yellow',color: '#FFF'}}>{Math.floor(sourceIndex * 12.56)}</Text>
                              </View>
                            </View>
                            <View style={{flex: 1}}></View>
                            <View style={{padding: 5, backgroundColor: '#FFF'}}>
                              <Text> Chicken Chilly</Text>
                            </View>
                          </Image>
                          </TouchableWithoutFeedback>
                        ) ;
                      });
                      return dishes;
                    })()}
                    </View>
                  );
                })
                return rows;
              })()}
            </ScrollView>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  tabWrapper: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: '#D8E0F1',
    borderBottomWidth: 1,
  },
  tab: {
    flexDirection: 'column',
    borderRightColor: '#F4F4F4',
    borderRightWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    fontWeight: 'bold'
  },
  listWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15
  }
});

module.exports = PosItemList;
