import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Drawer from 'react-native-drawer';
import HomePage from "./components/HomePage.js";
import LoginPage from "./components/LoginPage.js";
import {createStackNavigator} from 'react-navigation';

 class App extends React.Component {
  static navigationOptions = {
    header: null,
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Drawer
          tapToClose={true}
          openDrawerOffset={0.3}
          ref={(ref) => this._drawer = ref}
          content={
            <HomePage/>
          }
        >
          <View style = {{flex:1, backgroundColor:"blue", justifyContent: 'center',alignItems: 'center',}}>
            <TouchableOpacity onPress = {()=>{this.openControlPanel()}}>
              <Text>OPEN</Text>
            </TouchableOpacity>
            <Button
              title="Go to Login Page"
              onPress={() => navigate('Home22', {name : 'abc'})}
            />
          </View>
        </Drawer>

    );
  }
}
class DrawerMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name1 : this.props.navigation.state.params.name
    };
  }
  render() {
    return(
      <View style= {{flex:1, margin:40}}>
      <Text>{this.state.name1}</Text>
      <Text>{this.props.getinput}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default createStackNavigator({
  Home: {
    screen: App,
  },
  Home22: {
    screen: DrawerMenu,
  },
},
  {
    initialRouteName: 'Home',
  }
);
