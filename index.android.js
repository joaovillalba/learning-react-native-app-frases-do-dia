import React from 'react';
import { View, Text, AppRegistry, TouchableOpacity, Image, Alert } from 'react-native';

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

const NewPhrase = () => {
  let randomNum = Math.random();
  randomNum = Math.floor(randomNum * 5)  ; 

  let phrases = Array();
  phrases[0] = 'Se você pensa que pode, ou se pensa que não pode, de qualquer forma você estará certo.';
  phrases[1] = 'Fujões nunca vencem, e os vencedores nunca fojem!';
  phrases[2] = 'Jamais espere resultados diferentes tomando as mesmas atitudes.';
  phrases[3] = 'Seja sempre melhor do que foi ontem e pior do que será amanhã.';
  phrases[4] = 'Tente outra vez!';

  Alert.alert('Frase do dia', phrases[randomNum]);
}

const App = () => {
  const { main, button, textButton } = Estilos;  

  return (
    <View style={main}>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity 
        onPress={NewPhrase}
        style={button}>
        <Text style={textButton}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('frasesdodia', () => App);
