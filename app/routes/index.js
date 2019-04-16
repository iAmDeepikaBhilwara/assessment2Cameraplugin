import React,{Component}from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Invoice from '../pages/Invoice';

// import themes from "../styles/theme.style";

const Route = createStackNavigator(
  {
      Home:Home,
      Products:Products,
      Cart:Cart,
      Invoice:Invoice
    // Products: {
    //   screen: Products
    // },
    // Cart: {
    //   screen: Cart
    // },
    // Home: {
    //   screen: Home
    // },
    // Invoice: {
    //     screen: Invoice
    //   }
  },
  {
    initialRouteName: "Home"
  },
//   {
//     navigationOptions: {
//       headerStyle: {
//         // backgroundColor: themes.BACKGROUND_COLOR,
//         paddingHorizontal: 10
//       },
//       headerTintColor: "#fff"
//     }
//   },
);
const  RouterConfig= createAppContainer(Route);

export default RouterConfig;