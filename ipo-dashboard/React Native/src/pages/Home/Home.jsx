import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { GiTakeMyMoney } from 'react-icons/gi';
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {
    const { theme, colors } = useSelector((state) => state.theme);

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <View >
                <View style={[styles.topSection, { backgroundColor: colors[theme].background }]}>
                    <Text style={styles.title}>All things finance,{"\n"}right here.</Text>
                    <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/city1.png')} style={styles.image} />
                </View>

                <View style={styles.middleSection}>
                    <View style={styles.leftDivMiddle}>
                        <Text style={styles.subtitle}>Indian markets at{"\n"}your fingertips.</Text>
                        <Text style={[styles.paragraph, { color: colors[theme].textmuted }]}>
                            Long-term, Short-term, High-risk or Low-risk{"\n"}
                            be the kind of Investor you want!
                        </Text>
                    </View>
                    <View style={styles.rightDivMiddle}>
                        <Image source={require('../../assets/images/stock-vector.jpg')} style={styles.image} />
                    </View>
                </View>

                <View style={[styles.bottomSection, { backgroundColor: colors[theme].background }]}>
                    <GiTakeMyMoney style={styles.icon} />
                    <Text style={styles.subtitle}>Finance Simplified,{"\n"}in your language.</Text>
                    <Image source={require('../../assets/images/graph-image.jpg')} style={styles.image} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    topSection: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#282c34',
    },
    getStartedButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.2,
        borderRadius: 10,
    },
    middleSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 50,
    },
    leftDivMiddle: {
        flex: 1,
        marginRight: 10,
    },
    rightDivMiddle: {
        flex: 1,
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        textAlign: 'center',
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});

export default Home;
