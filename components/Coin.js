import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';

const Coin = ({ index, symbol }) => {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.spring(opacity, {
			toValue: 1,
			useNativeDriver: true,
			delay: index * 100,
		}).start();
	}, []);

	const scale = opacity.interpolate({
		inputRange: [0, 1],
		outputRange: [0.7, 1],
	});

	return (
		<Wrapper style={{ flex: 0.31, opacity, transform: [{ scale }] }}>
			<Icon
				source={{
					uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
				}}
			/>
			<CoinName>{symbol}</CoinName>
		</Wrapper>
	);
};

const Wrapper = styled(Animated.createAnimatedComponent(View))`
	padding: 20px;
	align-items: center;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.1);
`;

const Icon = styled.Image`
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
