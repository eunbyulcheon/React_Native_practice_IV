import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { BLACK_COLOR } from '../colors';

const Nav = createNativeStackNavigator();

const AuthNav = () => (
	<Nav.Navigator
		screenOptions={{
			headerStyle: {
				backgroundColor: `${BLACK_COLOR}`,
			},
			headerTintColor: '#fff',
		}}
	>
		<Nav.Screen name="Coins" component={Home} />
	</Nav.Navigator>
);

export default AuthNav;
