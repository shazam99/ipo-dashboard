import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/actions';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const registerUser = useSelector((state) => state.registerUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (registerUser.length !== 0) {
            for (let i = 0; i < registerUser.length; i++) {
                if (registerUser[i].email === email) {
                    if (registerUser[i].password === password) {
                        dispatch(setUser(true));
                        navigation.navigate('Home');
                        return;
                    }
                }
            }
        }

        alert('Invalid credentials');
    };

    return (
        <View style={styles.main}>
            <View style={styles.loginDiv}>
                <View style={styles.loginFields}>
                    <Text style={styles.heading}>Login</Text>
                    <View style={styles.inputContainer}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.linkText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    loginDiv: {
        height: 'calc(100% - 350px)',
    },
    loginFields: {
        maxWidth: 500,
        margin: 100,
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        borderBottomWidth: 1,
        padding: 5,
    },
    loginButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerLink: {
        alignItems: 'flex-end',
        width: '100%',
    },
    linkText: {
        color: 'blue',
    },
});

export default Login;
