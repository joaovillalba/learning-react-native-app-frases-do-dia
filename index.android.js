import React from 'react';
import { View, Text, AppRegistry, TouchableOpacity, Image } from 'react-native';

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
    paddingTop: 100
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
  },
  buttonStyle: {
    backgroundColor: '#48BBEC',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center' 
  },
  imageStyle: {
    justifyContent: 'center',
    width: 200, 
    height: 200,
    alignItems: 'center'
  }
};

const App = () => {
  const { textStyle, 
          textStyle2, 
          textStyle3, 
          viewStyle, 
          viewStyle1, 
          viewStyle2, 
          buttonStyle, 
          textoBotao,
          imageStyle } = Estilos;  

  return (
    <View style={viewStyle}>
      <View style={viewStyle1}>
        <Image style={imageStyle} source={require('./img/uvas.png')} >
          <Text>Legenda para a foto</Text>
        </Image>
        <Text style={textStyle} >Frases do Dia</Text>
        <Text style={textStyle2} >Sua inspiração diária</Text>
      </View>
      <View style={viewStyle2}>        
        <TouchableOpacity style={buttonStyle}>
          <Text style={textoBotao}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
      <Text style={textStyle3}>Versão: 1.00</Text>
    </View>
  );
};

AppRegistry.registerComponent('frasesdodia', () => App);
