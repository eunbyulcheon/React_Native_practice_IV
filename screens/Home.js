import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useQuery } from 'react-query';
import { coins } from '../api';
import Coin from '../components/Coin';
import styled from 'styled-components/native';
import { BLACK_COLOR } from '../colors';

const Home = () => {
	const { isLoading, data } = useQuery('coins', coins);
	const [cleanData, setCleanData] = useState([]);

	useEffect(() => {
		if (data) {
			setCleanData(
				data.filter((coin) => coin.rank != 0 && coin.is_active && !coin.is_new)
			);
		}
	}, [data]);

	if (isLoading) {
		return (
			<Loader>
				<ActivityIndicator color="#fff" size="large" />
			</Loader>
		);
	}

	return (
		<Container>
			<List
				numColumns={3}
				columnWrapperStyle={{
					justifyContent: 'space-between',
				}}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				data={cleanData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Coin index={item.index} symbol={item.symbol} />
				)}
			/>
		</Container>
	);
};

const Loader = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${BLACK_COLOR};
`;

const Container = styled.View`
	flex: 1;
	background-color: ${BLACK_COLOR};
`;

const List = styled.FlatList`
	width: 100%;
	padding: 20px 10px;
`;

export default Home;
