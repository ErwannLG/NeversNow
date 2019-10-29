import React from 'react';
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return(
      <TouchableOpacity style={{height: 50}} onPress={() => {this.props.navigation.navigate(nav)}}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>

        <View style={styles.topLinks}>
          <Text style={{paddingTop: 40, color: "white"}}>MenuDrawer</Text>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink('Home', 'Home')}
          {this.navLink('Map', 'Map')}
          {this.navLink('Paramètre', 'Paramètre')}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
  },
  topLinks: {
    height: 160,
    backgroundColor: '#302743'
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 7,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left'
  }
})
