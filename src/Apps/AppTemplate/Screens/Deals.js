import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../components/IconComponent';
let { height, width } = Dimensions.get('window');
// import {
//   assetDataUtils,
//   generatePseudoRandomSalt,
//   orderHashUtils,
//   signatureUtils,
// } from '0x.js';
export default class Deals extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      tabBarIcon: ({ tintColor }) => <Icon icon={require('../Assets/tune-white.png')} size={25}/>,
    };
  };



  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{margin: 20, marginTop: 50, marginBottom: 0, backgroundColor: 'transparent'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
            <Image source={require('../../../../Assets/cryptokitties-tag.png')} style={{
              resizeMode: 'contain', width: 20, height: 20, marginRight: 5,
            }}/>
            <Text style={{ color: '#9C9C9B', fontFamily: 'Avenir-Black', fontSize: 20, marginRight: 5, fontWeight: '700' }}>Buy</Text>
            <Text style={{ color: 'black', fontFamily: 'Avenir-Black', fontSize: 20, marginRight: 5, fontWeight: '700' }}>0.044 ETH</Text>
          </View>
        </View>
        <ScrollView style={{
          flex: 1,
        }} contentContainerStyle={{alignItems: 'center'}}>
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kittyContainer: {
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#cecece',
  },
});
