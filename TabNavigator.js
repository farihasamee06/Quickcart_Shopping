import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeStackNavigator from "./HomeStackNavigator"; // Stack containing ProductList, ProductDetails, Shoes, Clothing
import Favorites from "./Screens/Favorites"; // Your Favorites screen component
import Cart from "./Screens/Cart"; // Your Cart screen component
import Profile from "./Screens/Profile"; // Your Profile screen component

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Favorites") {
            iconName = "heart-outline";
          } else if (route.name === "Cart") {
            iconName = "cart-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // Hides header on each tab
      })}
    >
      {/* Home tab with stack navigation */}
      <Tab.Screen name="Home" component={HomeStackNavigator} />

      {/* Other tabs */}
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
