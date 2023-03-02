import React, { useRef, useState } from 'react';
import auth from '@react-native-firebase/auth';
import styled from 'styled-components/native';
import { BLACK_COLOR } from '../colors';
import { ActivityIndicator, Alert } from 'react-native';

const Join = () => {
	const passwordRef = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmitEmail = () => {
		passwordRef.current.focus();
	};

	const onSubmitPassword = async () => {
		if (email === '' || password === '') {
			Alert.alert('Complete the form.');
		}
		if (loading) return;
		setLoading(true);
		try {
			await auth().createUserWithEmailAndPassword(email, password);
		} catch (e) {
			switch (e.code) {
				case 'auth/weak-password': {
					Alert.alert('Write a stronger password.');
				}
			}
		}
	};

	return (
		<Container>
			<TextInput
				placeholder="Email"
				placeholderTextColor="#bdc3c7"
				keyboardType="email-address"
				returnKeyType="next"
				autoCapitalize="none"
				autoCorrect={false}
				value={email}
				onChangeText={(text) => setEmail(text)}
				onSubmitEditing={onSubmitEmail}
			/>
			<TextInput
				ref={passwordRef}
				placeholder="Password"
				placeholderTextColor="#bdc3c7"
				secureTextEntry
				returnKeyType="done"
				value={password}
				onChangeText={(text) => setPassword(text)}
				onSubmitEditing={onSubmitPassword}
			/>
			<Btn onPress={onSubmitPassword}>
				{loading ? (
					<ActivityIndicator color="#fff" />
				) : (
					<BtnText>Create Account</BtnText>
				)}
			</Btn>
		</Container>
	);
};

const Container = styled.View`
	flex: 1;
	padding: 60px 20px;
	align-items: center;
	background-color: ${BLACK_COLOR};
	color: #fff;
`;

const TextInput = styled.TextInput`
	width: 100%;
	padding: 10px 20px;
	border-radius: 20px;
	margin-bottom: 10px;
	background-color: rgba(255, 255, 255, 0.5);
	color: #fff;
	font-size: 16px;
`;

const Btn = styled.TouchableOpacity`
	width: 100%;
	margin-top: 10px;
	padding: 10px 20px;
	border-width: 1px;
	border-radius: 20px;
	border-color: rgba(255, 255, 255, 0.5);
	justify-content: center;
	align-items: center;
`;

const BtnText = styled.Text`
	color: #fff;
	font-size: 16px;
`;

export default Join;
