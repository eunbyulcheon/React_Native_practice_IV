# Social App

## Description 

A social cryptocurrency tracking app built with React Native and Firebase. 
<br/>

## Functionality

- [x] Depending on the `auth` state of the user (provided by `@react-native-firebase/auth`), the user is directed to the `Auth` stack navigator which contains the `Login` and `Join` screens, or the `Out` stack navigator which takes them to the `Home` screen and the `Detail` screen. 
- [x] Error Handling in the Join form.
- [x] Once logged in, the user is able to see a `FlatList` with data from Coinpaprika API fetched using React Query. 
- [x] The Coins screen displays an `<ActivityIndicator>` (a loader) when the `isLoading` state returned by React query is `true`. 
- [x] The Detail page displays charts based on price and time using the `<VictoryChart>` component from Victory.
