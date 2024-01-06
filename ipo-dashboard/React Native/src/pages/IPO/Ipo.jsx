import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import api from './../../services/api';
import Loader from './../../components/Loader';

const Ipo = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { theme, colors } = useSelector((state) => state.theme);

    useEffect(() => {
        const fetchIPO = async () => {
            setLoading(true);
            try {
                const ipoData = await api.getIPOs();
                setData(ipoData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchIPO();
    }, []);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const handleCurrency = () => {
        navigation.navigate('Currency');
    }
    return (
        <View style={styles.main}>
            {loading && <Loader />}

            {error && (
                <View style={[styles.alert, { backgroundColor: colors[theme].background }]}>
                    <Text style={{ color: colors[theme].text }}>
                        Error: {error.message}. Please try again.
                    </Text>
                </View>
            )}

            {data && (
                <ScrollView
                    style={{ backgroundColor: colors[theme].background, color: colors[theme].text }}
                >
                    <View style={styles.header}>
                        <Text style={[styles.display6, { color: colors[theme].text }]}>
                            Upcoming IPOs
                        </Text>
                        <TouchableOpacity
                            style={styles.currencyButton}
                            onPress={() => {
                                handleCurrency()
                            }}
                        >
                            <Text style={styles.currencyButtonText}>Currency</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        {data.map((ipo, index) => (
                            <View key={index} style={[styles.card, { backgroundColor: colors[theme].header }]}>
                                <ScrollView
                                    style={[
                                        styles.cardBody,
                                        { overflowY: 'auto', scrollbarColor: '#19BA92 #f0f0f0' },
                                    ]}
                                >
                                    <Text style={styles.cardTitle}>{ipo.companyName}</Text>
                                    <Text style={styles.cardText}>
                                        <Text style={{ fontWeight: 'bold', color: colors[theme].text }}>
                                            Symbol:
                                        </Text>{' '}
                                        {ipo.symbol}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        <Text style={{ fontWeight: 'bold', color: colors[theme].text }}>
                                            Offering Date:
                                        </Text>{' '}
                                        {ipo.offeringDate}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        <Text style={{ fontWeight: 'bold', color: colors[theme].text }}>
                                            Price Range:
                                        </Text>{' '}
                                        ${ipo.priceRangeLow} - ${ipo.priceRangeHigh}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        <Text style={{ fontWeight: 'bold', color: colors[theme].text }}>
                                            Shares:
                                        </Text>{' '}
                                        {ipo.shares}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        <Text style={{ fontWeight: 'bold', color: colors[theme].text }}>
                                            Managers:
                                        </Text>{' '}
                                        {truncateText(ipo.managers, 20)}
                                    </Text>
                                </ScrollView>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 5,
    },
    alert: {
        padding: 10,
    },
    display6: {
        fontSize: 24,
        marginLeft: 4,
        marginTop: 3,
        marginBottom: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    currencyButton: {
        backgroundColor: '#19BA92', // Add your desired color
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    currencyButtonText: {
        color: 'white',
        fontSize: 16,
    },
    container: {
        marginTop: 4,
        marginHorizontal: 10,
    },
    card: {
        marginBottom: 4,
        padding: 10,
        borderRadius: 8,
    },
    cardBody: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        padding: 10,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 20,
        color: 'blue', // Add your desired color
    },
    cardText: {
        marginBottom: 5,
        color: 'black', // Add your desired color
    },
});

export default Ipo;
