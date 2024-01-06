import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Loader from '../../components/Loader';
import {  XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';


const Detail = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const stockName = queryParams.get('stock');
    

    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [range, setRange] = useState('1w');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDetail = async () => {
            setChartData(null);
            setData(null)

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
                const data = await api.getChartData(stockName,range);
                setChartData(data);
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
        <div className='main mt-5' style={{ minHeight: 'calc(100vh - 300px)' }}>
            {loading && <Loader />}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error.message}. Please try again.
                </div>
            )}

            {data && <div>
                <h1>{companyName} Stock Overview</h1>
                <p className='mt-3'><strong>Latest Price:</strong> ${latestPrice}</p>
               
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>

                <select
                    className="form-select green-btn"
                    onChange={(e) => setRange(e.target.value)}
                    value={range}
                    style={{maxWidth:'400px',margin:'10px 0'}}
                >
                    <option value="1d">1 Day</option>
                    <option value="1w">1 Week</option>
                    <option value="1m">1 Month</option>
                    <option value="6m">6 Months</option>
                    <option value="1y">1 Year</option>
                </select>

                {/* <p><strong>Volume:</strong> {volume}</p> */}
                <p><strong>Last updated: </strong>{latestTime}</p>
                <p><strong>52-Week Range: </strong>${week52Low} - ${week52High}</p>
                <p><strong>Year-to-Date Change: </strong> {(ytdChange * 100).toFixed(2)}%</p>
                <p><strong>Market Status: </strong> {isUSMarketOpen ? 'Open' : 'Closed'}</p>
            </div>}
            
        </div>
    );
};

export default Detail;
