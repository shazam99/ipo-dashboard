import React, { useEffect, useState } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';
import api from '../../services/api';

const Currency = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [convertData, setConvertData] = useState(null);

    const currencySymbols = ["USD", "EUR", "GBP", "JPY", "INR", "CAD"];
    const [dropdown1, setDropdown1] = useState(currencySymbols[0]);
    const [dropdown2, setDropdown2] = useState(currencySymbols[1]);

    const fetchCurrencyData = async () => {
        setData(null);
        setLoading(true);
        try {
            const cData = await api.getTopCurrecnyConversion();
            setData(cData);
        } catch (error) {
            console.error('Error fetching Currency Data:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCurrencyChange = async () => {
        try {
            const currencyPair = `${dropdown1}${dropdown2}`;
            const convertData = await api.getMyCurrency(currencyPair);
            setConvertData(convertData);
        } catch (error) {
            console.error('Error fetching Convert Currency:', error);
            setError(error);
        }
    };

    const handleDropdownChange = (value, setDropdown) => {
        setDropdown(value);
        setConvertData(null);
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []);

    return (
        <View style={styles.container}>
            {loading && <Text style={styles.loadingText}>Loading...</Text>}

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error: {error.message}. Please try again.</Text>
                </View>
            )}

            <View style={styles.currencyContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Currency Rates</Text>
                    <Button title="Refresh Rates" onPress={fetchCurrencyData} color="#4CAF50" />
                </View>

                {data &&
                    data.map((conversion, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.cardText}>
                                {`${conversion.symbol.substring(0, 3)} to ${conversion.symbol.substring(3)}`}
                            </Text>
                            <Text style={styles.cardText}>Rate: {conversion.rate}</Text>
                        </View>
                    ))}
            </View>

            <View style={styles.selectContainer}>
                <Text style={styles.label}>Select Currency 1:</Text>
                <Picker
                    selectedValue={dropdown1}
                    onValueChange={(value) => handleDropdownChange(value, setDropdown1)}
                    style={styles.picker}>
                    {currencySymbols.map((symbol, index) => (
                        <Picker.Item key={index} label={symbol} value={symbol} />
                    ))}
                </Picker>
            </View>

            <View style={styles.selectContainer}>
                <Text style={styles.label}>Select Currency 2:</Text>
                <Picker
                    selectedValue={dropdown2}
                    onValueChange={(value) => handleDropdownChange(value, setDropdown2)}
                    style={styles.picker}>
                    {currencySymbols.map((symbol, index) => (
                        <Picker.Item key={index} label={symbol} value={symbol} />
                    ))}
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Get Exchange Rate" onPress={handleCurrencyChange} color="#4CAF50" />
            </View>

            {convertData && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>{`Exchange Rate for ${dropdown1}${dropdown2}: ${convertData[0].rate}`}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
    },
    errorContainer: {
        marginVertical: 10,
        backgroundColor: '#FFC0CB',
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        fontSize: 16,
        color: '#D0021B',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginRight : 10
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    cardText: {
        fontSize: 16,
        color: '#333',
    },
    selectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        marginRight: 10,
        color: '#333',
    },
    picker: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    resultContainer: {
        marginVertical: 10,
    },
    resultText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Currency;
