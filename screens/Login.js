import React from 'react';
import { BLACK_COLOR } from '../colors';
import styled from 'styled-components/native';

const Login = ({ navigation: { navigate } }) => {
	return (
		<Container>
			<Wrapper>
				<Text>Don't have an account?</Text>
				<Btn onPress={() => navigate('Join')}>
					<BtnText>Join ➭</BtnText>
				</Btn>
			</Wrapper>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	background-color: ${BLACK_COLOR};
	color: '#fff';
`;

const Wrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

const Text = styled.Text`
	font-size: 16px;
	text-align: center;
	color: #fff;
`;

const Btn = styled.TouchableOpacity``;

const BtnText = styled.Text`
	margin-left: 10px;
	font-size: 16px;
	color: #fff;
`;

export default Login;
