import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import Home from "./components/home";
import AllCategories from "./components/AllCategories";
import MyAccount from "./components/MyAccount";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import MyOrder from "./components/MyOrder";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCart from "./components/MyCart";
import Notifications from "./components/Notifications";
import { Divider, useTheme } from "@rneui/themed";
import PrivacyPolicy from "./components/others/PrivacyPolicy";
import { useState } from "react";

const Drawer = createDrawerNavigator();

export default function App() {

  const { theme } = useTheme();

  function CustomDrawerContent(props) {
    const { state, descriptors, navigation } = props;
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#61dafb' }}>
          <ImageBackground
            source={require('./assets/profile.png')}
            style={{ padding: 20 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: "flex-start", }}>
              <Image
                source={require('./assets/maha.png')}
                style={{ height: 70, width: 80, borderRadius: 50 }}
              >
              </Image>
              <View style={{ marginLeft: 10, flexDirection: "column", justifyContent: "center", }}>
                <Text style={{
                  // marginTop: 20,
                  color: "#FFFFFF",
                  fontSize: 18
                }}>Mahadev N</Text>
                <Text style={{
                  color: "#FFFFFF",
                  fontSize: 10
                }}>mnedode5@gmail.com</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.drawerLabel !== undefined
                  ? options.drawerLabel
                  : options.title !== undefined
                    ? options.title
                    : route.name;
              return (
                <View style={{ flexDirection: "column", padding: 15 }} key={index}>
                  <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center' }}>
                    <Icon
                      name={`${label === "Home" ? "home" : label === "All Categories" ? "category" :
                        label === "My Account" ? "account-box" : label === "My Order" ? "https" : label === "My Cart" ? "shopping-basket" : label === 'Notifications' ? "notifications" : ""}`}
                      size={25}
                    />
                    <Text style={styles.content} key={index} onPress={() => navigation.navigate(route.name)}>
                      {label}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={{ backgroundColor: "#FFFFFF" }}>
            <Divider width={1} color={theme?.colors?.primary} />
            <View style={{ flexDirection: "column", padding: 15, marginLeft: 15 }}>
              <Text style={styles.other}>Other</Text>
              <Text style={styles.others}>Terms & conditions</Text>
              <Text style={styles.others} onPress={() => console.log(navigation.navigate('Privacypolicy'))}>Privacy Policy</Text>
            </View>
          </View>
        </DrawerContentScrollView >
      </View >
    );
  }

  const LogoTitle = ({ navigation }) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", }}>
          <Image
            source={require('./assets/logo.png')}
            style={{ height: 25, width: 25, borderRadius: 50 }}
          ></Image>
          <Text style={styles.pname}>Maha</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", }}>
          <Icon name="add-shopping-cart" size={25} color="#FFFFFF" onPress={() => navigation.navigate('My Cart')} />
          <Icon name="notifications" size={25} color="#FFFFFF" style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Notifications')} />
        </View>
      </View>
    )
  }

  const RenderHeader = (props) => {
    return (
      <View>
        <Text style={styles.pname}>{props.title}</Text>
      </View>

    )
  }
  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor="#14c6f7"
        />
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerHideStatusBarOnOpen={true}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#61dafb',

            },
          }}
        >
          {/* <Drawer.Screen name="Home" component={BottomTabs} /> */}
          <Drawer.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerTitle: (props) => <LogoTitle {...props} navigation={navigation} />
            })}
          />
          <Drawer.Screen name="All Categories" component={AllCategories} />
          <Drawer.Screen name="My Account" component={MyAccount}
            options={({ navigation }) => ({
              headerShown: false,
              headerTitle: (props) => <RenderHeader {...props} navigation={navigation} title={"My Account"} />
            })}
          />
          <Drawer.Screen name="My Order" component={MyOrder}
            options={({ navigation }) => ({
              headerShown: false,
              headerTitle: (props) => <RenderHeader {...props} navigation={navigation} title={"My Order"} />
            })}
          />
          <Drawer.Screen name="My Cart" component={MyCart} />
          <Drawer.Screen
            name="Notifications"
            component={Notifications}
            options={({ navigation }) => ({
              // headerShown : false,
              headerTitle: (props) => <RenderHeader {...props} navigation={navigation} title={"Notifications"} />
            })}
          />
          <Drawer.Screen
            name="Privacypolicy"
            component={PrivacyPolicy}
            options={{
              // headerShown: false,
              // title: 'Privacy Policy',
              drawerLabel: () => null, // This hides the screen from the drawer
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer >
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 8,
  },
  other: {
    fontSize: 15,
    fontWeight: "500",
    color: "#D3D3D3"
  },
  others: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10
  },
  pname: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 25,
    color: "#FFFFFF",
    paddingLeft: 3
  },
});
