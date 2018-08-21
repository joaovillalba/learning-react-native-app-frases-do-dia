import React from 'react';
import { View, Text, AppRegistry, Button } from 'react-native';

const Estilos = {
  textStyle: {
    fontSize: 30,
    backgroundColor: 'aqua',    
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 1,
    textAlign: 'center',
    padding: 10,    
    textAlignVertical: 'center',
  },
  textStyle2: {
    fontSize: 19,
    backgroundColor: '#2A48FA',    
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 12,
    
  },
  textStyle3: {
    fontSize: 12,
    flex: 1,
    textAlign: 'center'
  },
  viewStyle: {
    backgroundColor: 'skyblue',
    //height: '100%',
    flex: 1,    
    justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'column',
  },
  viewStyle1: {        
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  viewStyle2: {        
    flex: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  } 
};

const App = () => {
  const { textStyle, textStyle2, textStyle3, viewStyle, viewStyle1, viewStyle2 } = Estilos;
  
  return (
    <View style={viewStyle}>
      <View style={viewStyle1}>
        <Text style={textStyle} >Frases do Dia</Text>
        <Text style={textStyle2} >Sua inspiração diária</Text>
      </View>
      <View style={viewStyle2}>
        <Button title='Cadastre-se' onPress={() => alert('Cadastrou-se')} />
        <Button title='Login' onPress={() => alert('Logou-se')} />          
      </View>
      <Text style={textStyle3}>Versão: 1.00</Text>
    </View>
  );
};

AppRegistry.registerComponent('frasesdodia', () => App);
