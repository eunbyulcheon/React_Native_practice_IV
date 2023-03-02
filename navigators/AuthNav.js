import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Nav = createNativeStackNavigator();

const AuthNav = () => (
	<Nav.Navigator>
		<Nav.Screen name="Home" component={Home} />
	</Nav.Navigator>
);

export default AuthNav;
