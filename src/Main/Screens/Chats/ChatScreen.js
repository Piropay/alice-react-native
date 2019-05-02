import {Component} from "react";
import { Image, StyleSheet, Text, TouchableHighlight, ScrollView, Dimensions, View, TouchableWithoutFeedback } from 'react-native';
import React from "react";
import Icon from "../../../components/IconComponent";

let {height, width} = Dimensions.get('window');

type Props = {};
export default class ChatScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      tabBarIcon: ({tintColor}) => <Icon icon="ChatGrey" size={30}/>,
      headerStyle:
        {
          marginTop: -100,
          backgroundColor: 'transparent',
          zIndex: 100,
          borderBottomWidth: 0,
        },
    }
  };

  renderChat1() {
    return (<View>
      <View style={{width: width - 50, padding: 8, marginRight: 20, backgroundColor: '#dedede', borderRadius: 5, marginBottom: 5, marginTop: 5}}>
        <Text>Dude Status is tanking! Get out!</Text>
      </View>
      <Image source={require('../../../../Assets/coinmarketcap.png')} style={{flex: 1, resizeMode: 'contain', height: 180, width: width - 50, padding: 8, marginRight: 20, marginBottom: 5, marginTop: 5}}/>
      <View style={{width: width - 50, padding: 8, marginLeft: 20, marginRight: 5, backgroundColor: '#6024ce', borderRadius: 5, marginBottom: 5, marginTop: 5 }}>
        <Text style={{color: 'white'}}>Woah! What happened?</Text>
      </View>
      <View style={{width: width - 50, padding: 8, marginRight: 20, backgroundColor: '#dedede', borderRadius: 5, marginBottom: 5, marginTop: 5}}>
        <Text>Apparently there's a new better app</Text>
      </View>
      <View style={{width: width - 50, padding: 8, marginRight: 20, backgroundColor: '#dedede', borderRadius: 5, marginBottom: 5, marginTop: 5}}>
        <Text>Sell quick!</Text>
      </View>
      <TouchableWithoutFeedback onPress={this.placeOrder}>
        <Image source={require('../../../../Assets/radar-chat.png')} style={{flex: 1, resizeMode: 'contain', height: 220, width: width - 50, padding: 8, marginRight: 20, marginBottom: 5, marginTop: 5}}/>
      </TouchableWithoutFeedback>
    </View>)
  }

  navigate = (screen) => {
    console.log('navigating');
    this.props.navigation.navigate(screen);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1, width, height}}>
          <View style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 25, marginBottom: 10, width: 120}}>Chat</Text>
            <Image source={require('../../../../Assets/new-chat-logo.png')} style={{ resizeMode: 'contain', height: 25  }}/>
          </View>
          <TouchableHighlight onPress={() => this.navigate('Chat')}>
            <View style={{flex:1, flexDirection: 'row', marginBottom: 10}}>
              <Image source={require('../../../../Assets/profpic1.png')} style={{flex: 1, resizeMode: 'contain', height: 50}}/>
              <View style={{flex: 4, marginLeft: 5,}}>
                <Text style={{fontSize: 17, color: 'black'}}>Cristina Sandberg</Text>
                <Text style={{fontSize: 15, color: 'black'}}>1: attachment</Text>
              </View>
              <Text style={{flex: 1, color: 'black'}}>12:06</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.navigate('Chat2')}>
            <View style={{flex:1, flexDirection: 'row', marginBottom: 10}}>
              <Image source={require('../../../../Assets/profpic2.png')} style={{flex: 1, resizeMode: 'contain', height: 50}}/>
              <View style={{flex: 4, marginLeft: 5}}>
                <Text style={{fontSize: 17, color: 'black'}}>Rob Lovett</Text>
                <Text numberOfLines={1} style={{fontSize: 15, color: 'black', }}>Hey mate do you have some Aragon? I'm having governance problems</Text>
              </View>
              <Text style={{flex: 1, color: 'black'}}>10:08</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.navigate('Chat3')}>
            <View style={{flex:1, flexDirection: 'row', marginBottom: 10}}>
              <Image source={require('../../../../Assets/anon-avatar.png')} style={{flex: 1, resizeMode: 'contain', height: 50}}/>
              <View style={{flex: 4, marginLeft: 5}}>
                <Text style={{fontSize: 17, color: 'black'}}>ETHTRADER_SG</Text>
                <Text numberOfLines={1} style={{fontSize: 15, color: 'black', }}>Thanks for meeting up, really appreciate it</Text>
              </View>
              <Text style={{flex: 1, color: 'black'}}>10:08</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appSquare: {
    height: 65,
    width: 65,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
