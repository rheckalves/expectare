import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@expectare/screens/Home';
import Settings from '@expectare/screens/Settings';
import Workspace from '@expectare/screens/Workspace';
import Icon from 'react-native-vector-icons/FontAwesome6';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://cbc1e23c2b8976ba343d8fde3526f9b5@o4507158997041152.ingest.us.sentry.io/4507158997237760',
});

const Tab = createBottomTabNavigator();

function tabBarIcon(name: string) {
  return ({color}: {color: string}) => (
    <Icon name={name} size={30} color={color} />
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFC107',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: tabBarIcon('house'),
          }}
        />
        <Tab.Screen
          name="Workspace"
          component={Workspace}
          options={{
            tabBarIcon: tabBarIcon('briefcase'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: tabBarIcon('gear'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;