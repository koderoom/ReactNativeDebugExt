
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props);

    let bglist = ['green',  'royalblue', 'tomato',  '#f44336', '#e91e63', '#9c27b0', '#2196f3', '#8bc34a', '#607d8b'];
    this.state = {'title' : 'Hello Native', 'bglist' : bglist, 'styles':styles, 'bgfy': styles.bgfy};

    this.onClickChangeBackground = this.onClickChangeBackground.bind(this);
  }


  onClickChangeBackground() {
      const newstyles = JSON.parse(JSON.stringify(styles));
      const random = Math.floor(Math.random() * this.state.bglist.length);

      newstyles.bgfy.backgroundColor = this.state.bglist[random];
      const newstate = {'bgfy': newstyles.bgfy};

      this.setState(newstate);
  }

  render() {
    return (
      <View style={[styles.container, this.state.bgfy]}>
          <Text style={styles.textify}>{this.state.title}</Text>
          <Button title='Click Here' color={this.state.bgfy.backgroundColor} onPress={this.onClickChangeBackground}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textify: {
    fontSize: 50,
    color:'white',
    fontFamily : 'cursive'
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bgfy : {
    backgroundColor: 'tomato'
  },
});
