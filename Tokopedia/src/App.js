

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button
} from 'react-native';
import Dimensions from 'Dimensions';
const devWidth=Dimensions.get('window').width;
const devHeight=Dimensions.get('window').height;

var arr=['a','b','c','d','e','f','g','h','i'];
class App extends Component {
	
	constructor(props){
		super(props)
		this.state={
			items:arr,
			loading:true
		}
		this.reArrange=this.reArrange.bind(this);
	}

	componentDidMount(){
		this.setState({
			loading:false
		})
	}

	reArrange(){
		let temp=[];
		let maxShow=8;
		let rotation=(arr.length)-maxShow; 

		for(var i=arr.length-1;i>-1;i--){        // Using loop instead of array functions.
			let rI=i+rotation;					// forming new array 'temp' with rotated index. 
			if(rI>=arr.length)
				rI=rI-arr.length; 
			
				temp[rI]=arr[i]; 
			}
			arr=temp;							// updating original array 
				
		this.setState({
			items:arr,
			loading:false
		})
	}

	


	render(){	
		if(this.state.loading){
        return(
            <View style={styles.loader}>
              <ActivityIndicator size='large' animating={true} />
            </View>
          );
      }
		return (
			<View style={styles.container} >

			{this.state.items.map((item,index)=> index<8 ? <View style={styles.box} key={item}><Text> {item} </Text></View>: null)}

				<View style={styles.box}>
					<Button onPress={this.reArrange} title="Re-arrange" />
				</View>
			</View>
			)
	}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:devWidth,
    height:devHeight,
    flexDirection:'row',
 	flexWrap:'wrap'  
  },
  box:{
  	flexGrow:1,
  	width:devWidth/3,
  	height:devHeight/3,
  	justifyContent: 'center',
    alignItems: 'center',
    borderColor:"#f5f5f5",
    borderWidth:1
  },
  button:{

  },
  loader:{
    flex: 1, 
    margin:10,
    justifyContent: 'center',
  }
});


module.exports = App;

