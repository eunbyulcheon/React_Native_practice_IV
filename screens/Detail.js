import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';
import { history, info } from '../api';
import { BLACK_COLOR } from '../colors';
import { Icon } from '../components/Coin';
import { Loader } from '../screens/Home';

const Detail = ({
	navigation,
	route: {
		params: { id, symbol },
	},
}) => {
	const [victoryData, setVictoryData] = useState(null);
	const { isLoading: infoLoading, data: infoData } = useQuery(
		['coinInfo', id],
		info
	);
	const { isLoading: historyLoading, data: historyData } = useQuery(
		['coinHistory', id],
		history
	);

	const loading = infoLoading || historyLoading;

	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<Icon
					style={{ marginTop: 10 }}
					source={{
						uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
					}}
				/>
			),
		});
	}, []);

	useEffect(() => {
		if (historyData) {
			setVictoryData(
				historyData.map((price) => ({
					x: new Date(price.timestamp).getTime(),
					y: price.price,
				}))
			);
		}
	}, [historyData]);

	return loading ? (
		<Loader>
			<ActivityIndicator color="#fff" size="large" />
		</Loader>
	) : (
		<Container>
			{victoryData ? (
				<VictoryChart height={360}>
					<VictoryLine
						animate
						interpolation="monotoneX"
						data={victoryData}
						style={{ data: { stroke: '#1abc9c' } }}
					/>
					<VictoryScatter
						data={victoryData}
						style={{ data: { fill: '#1abc9c' } }}
					/>
				</VictoryChart>
			) : null}
		</Container>
	);
};

const Container = styled.ScrollView`
	flex: 1;
	background-color: ${BLACK_COLOR};
`;

export default Detail;
