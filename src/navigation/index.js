import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, HomeScreenDetail} from '../screens';
import PushNotification from 'react-native-push-notification';
import {Provider} from 'react-redux';
import store from '../store';

const Stack = createStackNavigator();
const options = {
  title: 'WeatherApp',
  headerStyle: {
    backgroundColor: '#00804A',
  },
  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerBackTitleVisible: false,
  headerTintColor: '#fff',
};

function MainNavigator() {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'weather',
        channelName: 'WeatherApp',
        channelDescription: 'A channel to categorise your notifications',
        playSound: false,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={options} />
          <Stack.Screen
            name="HomeScreenDetail"
            component={HomeScreenDetail}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MainNavigator;
