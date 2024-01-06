// Import necessary modules from react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import necessary components and pages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './utils/actions';


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Ipo from './pages/IPO/Ipo';
import Currency from './pages/Currency/Currency';

const Stack = createNativeStackNavigator();

function App() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const isAuthenticated = (user) => {
        return user === true;
        // return  true;
    };

    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen
                        name="Home"
                        component={isAuthenticated(user) ? Ipo : Login}
                        options={{
                            title: 'Home',
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() => {
                                         dispatch(setUser(false))
                                    }}
                                    style={isAuthenticated(user) ? styles.logoutButton : ""}
                                >
                                    {isAuthenticated(user) ? <Text style={styles.logoutText}>Logout</Text> : ""}
                                </TouchableOpacity>
                            ),
                        }}
                    />
                    <Stack.Screen name="Currency" component={isAuthenticated(user) ? Currency : Login} />
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
    logoutButton: {
        marginRight: 15,
        backgroundColor:"#E74C3C",
        padding:5,
        borderRadius: 5

    },
    logoutText: {
        color: 'white',
    },
});

export default App;
