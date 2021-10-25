import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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

export type RootStackParamList = {
  GetStarted: undefined;
  Welcome: undefined;
  Balance: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
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
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
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
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={{
            headerTitle: "",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
