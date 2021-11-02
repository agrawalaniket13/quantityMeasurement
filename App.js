import React from "react";
import {View, Text, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Calculator from "./src/component/calculator";
import LengthFind from "./src/component/length";
import TempFind from "./src/component/temprature";
import QuanMeasure from "./src/component/quantity";
import SignupScreen from "./src/component/signupScreen";
import Headerr from "./src/component/header";

function Feed({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff7f50",
      }}>
      <Image
        style={{width: "65%", height: "30%"}}
        source={require("./src/images/reactlogo.png")}
      />
      <Text style={{fontWeight: "bold", fontSize: 20}}>
        Calculator And Quantity Measurement
      </Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Calculator" component={Calculator} />
      {/* <Drawer.Screen name="Length Find" component={LengthFind} /> */}
      {/* <Drawer.Screen name="TempFind" component={TempFind} /> */}
      <Drawer.Screen name="Quantity Measurement" component={QuanMeasure} />
      <Drawer.Screen name="User Registration" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="LengthFind" component={LengthFind} />
        <Stack.Screen name="TempFind" component={TempFind} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
