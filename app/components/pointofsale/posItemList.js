
import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';

var { View, Text, Component, StyleSheet, ListView, ScrollView, Image, TouchableWithoutFeedback, } = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var listWidth = width - 330;
var rowItemCount = Math.round(listWidth / 110) - 1;

var _data = [
  { name: 'Crispy Turkey Salad', price:'40.00', image: 'http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/ck/03/11/turkey-salad-ck-550006-x.jpg?itok=gUCWjrEB'},
  { name: 'Dulse Cucumber Salad', price: '45.00', image: 'http://www.andreabeaman.com/health/wp-content/uploads/2014/08/P10300422.jpg'},
  { name: 'Garlic Shrimp Salad', price: '25.00', image: 'http://www.campbellskitchen.com/recipeimages/margarita-shrimp-salad-large-50994.jpg'},
  { name: 'Golden Squash Soup', price: '50.00', image: 'http://www.livingfresh.org/wp-content/uploads/2014/10/Fotolia_71074246_Subscription_Monthly_M.jpg'},
  { name: 'Spice Salmon', price: '35.00', image: 'http://sweetlifebake.com/wp-content/uploads/2011/09/spicy-salmon-018-1024x685.jpg'},
  { name: 'Boiled Large Shrimp', price: '14.00', image: 'http://4.bp.blogspot.com/-TklSQMvBXSw/VQwwFCNyPxI/AAAAAAAAM-Q/eIe48oCalVw/s1600/boiled%2Bshrimp.jpg'},
  { name: 'Braised Cod with Celery', price: '36.00', image: 'https://migrainemeals.files.wordpress.com/2008/07/braised_cod.jpg'},
  { name: 'Pasta with Clams', price: '24.00', image: 'http://www.gianni.tv/wp-content/uploads/2013/05/Spaghetti-with-Clams.jpg'},
  { name: 'Broiled Chicken Salad', price: '11.00', image: 'http://www.pitajungle.com/data/menu_items/1/6/8/large.jpg'},
  { name: 'Sautéed Chicken & Asparagus', price: '10.00', image: 'http://www.gimmesomeoven.com/wp-content/uploads/2013/04/Chicken-and-Asparagus-Stir-Fry-4.jpg'},
  { name: 'Spice Chicken in a Bowl', price: '25.00', image: 'http://drreedward.com/wp-content/uploads/2014/09/broiledChickenMustard.jpg'},
  { name: 'Chicken Chettinad', price: '45.00', image: 'http://i.ndtvimg.com/i/2015-01/chicken-chettinad_625x350_51421732749.jpg'},
  { name: 'Chicken Chilly', price: '145.00', image: 'http://4.bp.blogspot.com/-27dLDyFMDLE/TeNHKJDpnCI/AAAAAAAAAME/xX9SAKl06d4/s1600/Chilli-chicken.gif'},
  { name: 'Chicken Thandoori', price: '15.00', image: 'http://aramkitchen.com/wp-content/uploads/2013/09/legfinal1-piece-short.jpg'}
];

class PosItemList extends React.Component {
  constructor(args) {
    super(args);

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
                      //  let sourceIndex = Math.floor(Math.random() * uri.length - 1 ) + 1;
                        //let source = uri[sourceIndex]
                        dishes.push(
                          <TouchableWithoutFeedback onPress={()=>{this.props.onPress(dish)}}>
                            <Image source={{uri:dish.image}} style={{width:110, height: 110, margin: 5, backgroundColor: '#FFF', flexDirection: 'column'}}>
                              <View style={{flexDirection:'row'}}>
                                <View style={{flex: 1}}>
                                </View>
                                <View style={{backgroundColor: 'red', padding: 5}}>
                                  <Text style={{background: 'yellow',color: '#FFF'}}>{dish.price}</Text>
                                </View>
                              </View>
                              <View style={{flex: 1}}></View>
                              <View style={{padding: 5, backgroundColor: '#FFF'}}>
                                <Text>{dish.name}</Text>
                              </View>
                            </Image>
                          </TouchableWithoutFeedback>
                        );
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
