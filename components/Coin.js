import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const Coin = ({ id, index, symbol }) => {
	const { navigate } = useNavigation();
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.spring(opacity, {
			toValue: 1,
			useNativeDriver: true,
			delay: index * 200,
		}).start();
	}, []);

	const scale = opacity.interpolate({
		inputRange: [0, 1],
		outputRange: [0.7, 1],
	});

	return (
		<TouchableOpacity
			style={{ flex: 0.31 }}
			onPress={() => navigate('Detail', { id, symbol })}
		>
			<Wrapper style={{ opacity, transform: [{ scale }] }}>
				<Icon
					source={{
						uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
					}}
				/>
				<CoinName>{symbol}</CoinName>
			</Wrapper>
		</TouchableOpacity>
	);
};

const Wrapper = styled(Animated.createAnimatedComponent(View))`
	padding: 20px;
	align-items: center;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.1);
`;

export const Icon = styled.Image`
	width: 30px;
	height: 30px;
	margin-bottom: 10px;
	border-radius: 20px;
`;

const CoinName = styled.Text`
	color: #fff;
	font-size: 16px;
	font-weight: 600;
`;

export default Coin;
