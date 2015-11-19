/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author Jasim
 */
'use strict';

var React = require('react-native');
var Animatable = require('react-native-animatable');
var Icon = require('react-native-vector-icons/FontAwesome');
var Category = require('./category');
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
var total = 0;
var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class PointOfSale extends React.Component{
    constructor(args) {
        super(args);
        this.state = {
            dataSource: dataSource.cloneWithRows(posData),
            total : total

        }
    }

   getTotal() {
     var _total=0;
     if(posData.length > 0) {
       for (var i = 0; i <= posData.length; i++) {
          _total = total + (posData[i].price * posData[i].qty);
       }
     }
        this.setState({total:_total})
   }

   getFilter(item){
     return function(_store){
       return _store.catId == item.id;
     }
   }

   onItemFilter(item){
     var result =  _itemStore.filter(this.getFilter(item));
     this.setState({ dataSource: dataSource.cloneWithRows(_itemStore)})
   }

    onItemPress(rowData) {
      //var newdata = update(posData,{$push:{ name: 'Test', icon: 'list'}});
        var flag=false;
      if(posData.length > 0){
        for(var i = 0; i <= posData.length-1;i++){
          if(posData[i].id==rowData.id){
            flag=true;
            posData[i].qty = posData[i].qty +  1;
            this.getTotal();
            this.setState({ dataSource: dataSource.cloneWithRows(posData)})
            break;
          }
        }
      }

        if(flag==false){
          this.getTotal();
          posData.splice(0,0,{id:rowData.id, name:rowData.itemName, qty:1 , price : rowData.price });
          this.setState({ dataSource: dataSource.cloneWithRows(posData)})

        }



    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.categoryBar}>
             <Category onItemFilter={this.onItemFilter.bind(this)}/>
          </View>
          <View style={{ width: 450, backgroundColor: 'whitesmoke', alignItems:'stretch', flexDirection: 'column', borderRightColor:'#766946', borderRightWidth: 5}}>
              <View style={{ backgroundColor: '#FFF', height: 50, padding: 10 }}>
                  <Text style={{fontSize: 25}}>Title Goes Here...</Text>
              </View>
              <View style={{ backgroundColor: '#FFF', padding: 5, borderTopColor: '#F4F4F4',borderTopWidth: 1 }}>
                  <TextInput placeholder="Search Something Here..." />
              </View>
              <View style={{alignItems: 'center', flex: 1}}>
                  <Dishes source={this.state.dataSource} onItemPress={this.onItemPress.bind(this)} />
              </View>
          </View>

          <View style={{flex:1, flexDirection: 'column', alignItems:'stretch', backgroundColor: 'whitesmoke',padding: 10}}>
              <View style={{borderWidth: 1, borderColor: '#DFE0E2', flexDirection: 'column', alignItems: 'stretch', backgroundColor: '#FBFBFB', padding: 10}}>
                  <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 20}}> Order Number: #3659556</Text>
                  </View>
                  <View style={{borderColor:'#D6D6D6', borderWidth: 1, margin: 10, width: null, flex: 1,backgroundColor: '#FFF', padding: 5}}>
                      <View style={{borderBottomStyle: 'dashed', borderBottomWidth: 1, borderBottomColor: "#D6D6D6",padding: 8, flexDirection: 'row'}}>
                          <Text style={{ flex: 2, fontWeight : 'bold'}}>Name</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Qty</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Each</Text>
                          <Text style={{ flex: 0.5, fontWeight : 'bold'}}>Price</Text>
                      </View>
                      <View style={{height: 250}}>
                            <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}  />
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text> Sub Total: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>{total}</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Total</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Text style={{color: '#A51919', fontSize: 20}}>$7.25</Text>
                          </View>
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Discount: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>$ 0.00</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>

                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>

                          </View>
                      </View>
                      <View style={{flexDirection: 'row', padding: 5}}>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>tabText: </Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text> $1.34</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-start'}}>
                              <Text>Balance Due</Text>
                          </View>
                          <View style={{flex: 1, alignItems: 'flex-end'}}>
                              <Text style={{color: '#A51919', fontSize: 20}}>{this.state.total}</Text>
                          </View>
                      </View>
                  </View>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex:1}}></View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8}}>
                            <Text style={{color: '#FFF'}}>
                                Hold Order
                            </Text>
                      </View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8}}>
                            <Text style={{color: '#FFF'}}>
                                Cancel Order
                            </Text>
                      </View>
                      <View style={{borderColor:'#F4F4F4', borderWidth: 5, borderRadius: 20, backgroundColor: '#0085BE', padding: 8, marginRight: 10 }}>
                            <Text style={{color: '#FFF'}}>
                                Send Order
                            </Text>
                      </View>
                  </View>

              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{width: 100, height: 80, borderRadius: 8, backgroundColor: '#0085BE', margin: 10, marginTop: 25, padding: 28, paddingLeft: 25}}>
                      <Text style={{color: '#FFF',fontSize:18}}>
                         Print
                      </Text>
                  </View>
                  <View style={{flex:1}}></View>

                  <View style={{width: 100, height: 80, borderRadius: 8, backgroundColor: '#0085BE', margin: 10, marginTop: 25, padding: 28, paddingLeft: 30}}>
                      <Text style={{color: '#FFF',fontSize:18}}>
                         Paid
                      </Text>
                  </View>
              </View>
          </View>
      </View>
    );
  }
  renderRow(rowData, sectionID: number, rowID: number) {
      return (
          <View style={{borderBottomStyle: 'dashed', borderBottomWidth: 1, borderBottomColor: "#D6D6D6",padding: 8, flexDirection: 'row'}}>
              <Text style={{ flex: 2}}>{rowData.name}</Text>
              <Text style={{ flex: 0.5}}>{rowData.qty}</Text>
              <Text style={{ flex: 0.5}}>{rowData.price}</Text>
              <Text style={{ flex: 0.5}}>{ rowData.qty * rowData.price }</Text>
          </View>
     );
  }
}

var posData=[];

var data =[
    { name: 'One', icon: 'globe'},
    { name: 'Two', icon: 'pencil'},
    { name: 'Three', icon: 'umbrella' },
    { name: 'Four', icon: 'car'},
    { name: 'Five', icon: 'cog' },
    { name: 'Six', icon: 'link'},
    { name: 'Seven', icon: 'file-text'}
]

var imageUrl = 'http://img.8-ball.net/2015/09/01/restaurant-full-of-food-plates-l-3de1f91c04bf4687.png';
var _itemStore=[{ Category: [{id:1,catId:1,itemName:'Biriyani',price:'123',image:imageUrl}, {id:2,catId:2,itemName:'Pizza',price:'55',image:imageUrl}, {id:3,catId:5,itemName:'Ghee Rice',price:'78',image:imageUrl}]},
{ Category: [{id:4,catId:2,itemName:'Rice',price:'321',image:imageUrl}, {id:4,catId:1,itemName:'Chicken Fry',price:'66',image:imageUrl}, {id:6,catId:3,itemName:'Grilled',price:'76',image:imageUrl}]},
{ Category: [{id:7,catId:1,itemName:'Chicken curry',price:'122',image:imageUrl}, {id:8,catId:4,itemName:'Mutton Fry',price:'43',image:imageUrl}, {id:9,catId:5,itemName:'Beef Fry',price:'56',image:imageUrl}]},
{ Category: [{id:10,catId:2,itemName:'Mutton curry',price:'112',image:imageUrl}, {id:11,catId:3,itemName:'Fish Curry',price:'23',image:imageUrl}, {id:12,catId:2,itemName:'Chilly Chicken',price:'45',image:imageUrl}]},
{ Category: [{id:12,catId:3,itemName:'Tea',price:'32',image:imageUrl}, {id:14,catId:4,itemName:'Fish Fry',price:'67',image:imageUrl}, {id:15,catId:2,itemName:'Mutton Biriyani',price:'23',image:imageUrl}]},
{ Category: [{id:16,catId:1,itemName:'Beef',price:'11',image:imageUrl}, {id:17,catId:2,itemName:'Prawns',price:'87',image:imageUrl}, {id:18,catId:1,itemName:'Biriyani',price:'12',image:imageUrl}]},
];
var _data = [];
class Dishes extends React.Component {
    constructor(args) {
        super(args);
        var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: dataSource.cloneWithRows(_data)
        }
    }
    render() {
        return (<ListView dataSource={this.props.source} renderRow={this.renderRow.bind(this)} style={{flex: 1}} />)
    }
    renderRow(rowData, sectionID: number, rowID: number) {
        return (
            <View style={{flexDirection:'row', alignItems:'center'}}>
                {
                    (()=>{
                        var items = [];
                        rowData.Category.map((rowData) => {
                            items.push(
                              <TouchableHighlight onPress={()=>this.props.onItemPress(rowData)} underlayColor="white">
                                <View style={{ }}>
                                <Image source={{uri: rowData.image}} style={{alignItems:'flex-end', width: 120, height: 120,margin: 8,borderWidth:3,borderColor:'#ccc'}}>
                                    <Text style={{height:25,width:70,backgroundColor:'#ccc',textAlign:'center',fontSize:18}}>Rs/-{rowData.price}</Text>
                                    <Text style={{height:25, width:120,backgroundColor:'#fff',textAlign:'center',marginTop:70,fontSize:18}} >{rowData.itemName}</Text>
                                </Image>
                              </View>
                              </TouchableHighlight>
                            );
                        });

                        return items;
                    })()
                }

            </View>
       );
    }
}

class RecieptView extends React.Component {
    constructor(args) {
        super(args);
    }
    render() {
        return (
            <Image source={require('image!pos_bg')} style={{width: 500, height: 500}} >
            </Image>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    categoryBar: {
        width: 90,
        borderRightColor: '#CCC',
        borderRightWidth: 1
    },
    button: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        flexDirection: 'column',
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
});

module.exports = PointOfSale;
