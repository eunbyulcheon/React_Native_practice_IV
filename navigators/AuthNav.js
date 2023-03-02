import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { BLACK_COLOR } from '../colors';
import Detail from '../screens/Detail';

const Nav = createNativeStackNavigator();

const AuthNav = () => (
	<Nav.Navigator
		screenOptions={{
			presentation: 'modal',
			headerStyle: {
				backgroundColor: `${BLACK_COLOR}`,
			},
			headerTintColor: '#fff',
		}}
	>
		<Nav.Screen name="Coins" component={Home} />
		<Nav.Screen name="Detail" component={Detail} />
	</Nav.Navigator>
);

export default AuthNav;
