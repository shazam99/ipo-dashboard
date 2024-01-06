import React, { useEffect, useState } from 'react';

import './Currency.css';
import api from '../../service/api'
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';


const Currency = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { theme, colors } = useSelector((state) => state.theme);


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

    const handleDropdownChange = (event, setDropdown) => {
        const value = event.target.value;
        setDropdown(value);
        setConvertData(null)
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []);

    return (
        <div className='main mt-5' style={{
            background: colors[theme].background,
            color: colors[theme].text,
        }}>
            {loading && <Loader />}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error.message}. Please try again.
                </div>
            )}

            <div className="currency-container">
                <div className="row">
                    <h1 className="dashboard-title mb-2 mt-4 ">Currency Rates <button className='btn btn-sm btn-info' onClick={() => fetchCurrencyData()}>Refresh Rates</button></h1>


                    {data && data.map((conversion, index) => {
                        const formattedSymbol =
                            `${conversion.symbol.substring(0, 3)} to ${conversion.symbol.substring(3)}`;
                        return (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="card" style={{
                                    background: colors[theme].header,
                                    color: colors[theme].text,
                                }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{formattedSymbol}</h5>
                                        <p className="card-text">
                                            <span className="text-muted">Rate:</span> {conversion.rate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    

                </div>
                <hr />
                <div>
                    <div className="select-container">
                        <label>Select Currency 1:</label>
                        <select value={dropdown1} onChange={(e) => handleDropdownChange(e, setDropdown1)}>
                            {currencySymbols.map((symbol, index) => (
                                <option key={index} value={symbol}>
                                    {symbol}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="select-container">
                        <label>Select Currency 2:</label>
                        <select value={dropdown2} onChange={(e) => handleDropdownChange(e, setDropdown2)}>
                            {currencySymbols.map((symbol, index) => (
                                <option key={index} value={symbol}>
                                    {symbol}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="button-container  mb-5">
                        <button onClick={handleCurrencyChange} className='btn green-btn'>Get Exchange Rate</button>
                    </div>
                    {convertData && (
                        <div className='mt-2 mb-5'>
                            <p>
                                Exchange Rate for <b> {`${dropdown1}${dropdown2}`} : </b> {convertData[0].rate}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Currency;
