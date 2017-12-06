import React from 'react' ;
import {Text , View } from 'react-native';
import {TabNavigator} from 'react-navigation';

const HomeScreen = () => (
  <View>
      <Text>
        This is The home
        </Text>
    </View>
);
const SecondScreen = () => (
  <View>
      <Text>
        This is the Second
        </Text>
    </View>
);
const ThirdScreen = () => (
  <View>
    <Text>
        This is the third
      </Text>
    </View>
);
const FourthScreen = () => (
  <View>
    <Text>
      This is the fourth
      </Text>
    </View>
);
const FifthScreen = () => (
  <View>
    <Text>
      This is the fifth
      </Text>
    </View>
);
const Root = TabNavigator ({
  home : {
    screen : HomeScreen , 
    navigationOptions :{
      headerTitle : 'Homy'
    },
  },
  second :{
    screen : SecondScreen ,
    navigationOptions :{
      headerTitle : 'secondy'
    },
  },
  third : {
    screen : ThirdScreen ,
    navigationOptions :{
      headerTitle : 'thirdy'
    },
  },
  fourth :{
    screen : FourthScreen ,
    navigationOptions :{
      headerTitle : 'fourhty'
    },
  },
  fifth :{
    screen : FifthScreen ,
    navigationOptions :{
      headerTitle : 'fifthy'
    }
  }
});
export default Root ;