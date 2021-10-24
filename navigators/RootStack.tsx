import { StatusBar } from "expo-status-bar";
import React from "react";

// screens
import GetStarted from "./../screens/GetStarted";
import Welcome from "./../screens/Welcome";
import Balance from "./../screens/Balance";

// custom components
import { colors } from "../components/colors";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../components/Headers/Profile";
import Greetings from "../components/Headers/Greetings";
import Avi from "./../assets/avi/avatar.png";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerTitleContainerStyle: {
            marginTop: 15,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{ backgroundColor: colors.tertiary }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitle: (props) => (
              <Greetings
                mainText="Hey Coby!"
                subText="Welcome back"
                {...props}
              />
            ),
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Balance" component={Balance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
