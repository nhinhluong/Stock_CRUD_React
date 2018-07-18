import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native"
import {createStackNavigator} from 'react-navigation';

export default class HomePage  extends Component {
  constructor(props){
    super(props);
    this.state={
      chieucao:0
    }
  }
  clickMe(){
    this.setState({
      chieucao:this.state.chieucao + 100
    })
  }
  onPressLearnMore(){
      navigate('Home22', { name: 'Jane' });
  }
  render() {
    
    return(

      <View style={styles.container}>
      <Button
        onPress={this.onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

var ao = StyleSheet.create({
  bao:{width:100, height:100, backgroundColor:"yellow", margin:30 }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
