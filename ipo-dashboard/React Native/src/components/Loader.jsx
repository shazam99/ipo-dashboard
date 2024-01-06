import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// Loader Component
const Loader = () => {
    return (
        <View
            testID="loader-container" // Add this line
            style={styles.container}
        >
            <ActivityIndicator
                style={styles.spinner}
                size="large"
                color="#0000ff"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    spinner: {
        width: 80,
        height: 80,
    },
});

export default Loader;

