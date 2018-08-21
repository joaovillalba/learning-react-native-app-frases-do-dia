import React from 'react';
import { View, Text, AppRegistry, TouchableOpacity, Image } from 'react-native';

const Estilos = {
  main: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const App = () => {
  const { main, button, textButton } = Estilos;  

  return (
    <View style={main}>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity style={button}>
        <Text style={textButton}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('frasesdodia', () => App);
