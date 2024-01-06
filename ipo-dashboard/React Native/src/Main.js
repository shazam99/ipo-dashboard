// Import necessary modules from react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import necessary components and pages
import React from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import { View, Text, StyleSheet } from 'react-native';

import Stocks from './pages/Stocks/Stocks';
import Login from './pages/Login/Login';
import Favourites from './pages/Favourites/Favourites';
import Details from './pages/Detail/Details';
import Register from './pages/Login/Register';

// Create a native stack navigator
const Stack = createNativeStackNavigator();

function App() {
    const user = useSelector((state) => state.user);
    const { theme, colors } = useSelector((state) => state.theme);

    const isAuthenticated = (user) => {
        return user === true;
    };

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Stocks" component={isAuthenticated(user) ? Stocks : Login} />
                    <Stack.Screen name="Favourites" component={isAuthenticated(user) ? Favourites : Login} />
                    <Stack.Screen name="Detail" component={isAuthenticated(user) ? Details : Login} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
});

export default App;
