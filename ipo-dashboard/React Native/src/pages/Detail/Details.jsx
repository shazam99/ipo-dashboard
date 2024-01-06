import React, { useEffect, useState } from 'react';
import { View, Text, Picker } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

import api from './../../services/api';
import Loader from './../../components/Loader';

const Detail = () => {
    const route = useRoute();
    const stockName = route.params?.stockSymbol;

    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [range, setRange] = useState('1w');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDetail = async () => {
            setChartData(null);
            setData(null);

            try {
                setLoading(true);
                const stocksData = await api.getSingleStock(stockName);
                setData(stocksData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        const fetchChart = async () => {
            try {
                setLoading(true);
                const chartData = await api.getChartData(stockName, range);
                setChartData(chartData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
        fetchChart();
    }, [range, stockName]);

    if (!data) {
        return <Loader />;
    }

    const {
        companyName,
        latestPrice,
        latestTime,
        week52High,
        week52Low,
        ytdChange,
        isUSMarketOpen,
    } = data;

    return (
        <View style={{ flex: 1, margin: 16 }}>
            {loading && <Loader />}

            {error && (
                <View>
                    <Text style={{ color: 'red' }}>
                        Error: {error.message}. Please try again.
                    </Text>
                </View>
            )}

            {data && chartData && (
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        {companyName} Stock Overview
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Latest Price:</Text> ${latestPrice}
                    </Text>

                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart height={400}
                            data={chartData.map(entry => ({ label: entry.label, close: entry.close }))}
                        >
                            <XAxis dataKey="label" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="close"
                                fill="rgba(134, 132, 248, 0.5)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>

                    <Picker
                        selectedValue={range}
                        onValueChange={(itemValue) => setRange(itemValue)}
                        style={{ width: 200, marginTop: 10 }}
                    >
                        <Picker.Item label="1 Day" value="1d" />
                        <Picker.Item label="1 Week" value="1w" />
                        <Picker.Item label="1 Month" value="1m" />
                        <Picker.Item label="6 Months" value="6m" />
                        <Picker.Item label="1 Year" value="1y" />
                    </Picker>

                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Last updated: </Text>
                        {latestTime}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>52-Week Range: </Text>${week52Low} - ${week52High}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Year-to-Date Change: </Text>
                        {(ytdChange * 100).toFixed(2)}%
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Market Status: </Text>
                        {isUSMarketOpen ? 'Open' : 'Closed'}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default Detail;
