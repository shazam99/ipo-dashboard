import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../utils/actions';

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const newUser = {
            username,
            email,
            password,
        };

        dispatch(registerUser(newUser));
        navigation.navigate('Login');

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.main}>
            <View style={styles.loginDiv}>
                <View style={styles.loginFields}>
                    <Text style={styles.heading}>Register</Text>
                    <View style={styles.inputContainer}>
                        <Text>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

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

                    <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkText}>Login</Text>
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
        height: '100%',
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
    registerButton: {
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
    loginLink: {
        alignItems: 'flex-end',
        width: '100%',
    },
    linkText: {
        color: 'blue',
    },
});

export default Register;
