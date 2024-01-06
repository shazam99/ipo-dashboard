import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';
import './IPO.css'

const IPO = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { theme, colors } = useSelector((state) => state.theme);

    useEffect(() => {
        const fetchStocks = async () => {
            setLoading(true);
            try {
                const ipoData = await api.getIPOs();
                setData(ipoData);
                console.log(ipoData)
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };



    return (
        <div className="main mt-5">
            {loading && <Loader />}

            {error && (
                <div className="alert alert-danger" role="alert">
                    Error: {error.message}. Please try again.
                </div>
            )}

            {data && (
                <div className='stockspage' style={{
                    background: colors[theme].background,
                    color: colors[theme].text,
                }}>
                    <h1 className='display-6 mx-2 mt-3 mb-3'>Upcoming IPOs</h1>
                    <div className="container mt-4">
                        <div className="row">
                            {data.map((ipo, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card" style={{
                                        background: colors[theme].header,
                                        color: colors[theme].text,
                                    }}>
                                        <div className="card-body  custom-scrollbar">
                                            <h5 className="card-title text-primary">{ipo.companyName}</h5>
                                            <p className="card-text">
                                                <strong className="text-secondary">Symbol:</strong> {ipo.symbol}
                                            </p>
                                            <p className="card-text">
                                                <strong className="text-secondary">Offering Date:</strong> {ipo.offeringDate}
                                            </p>
                                            <p className="card-text">
                                                <strong className="text-secondary">Price Range:</strong> ${ipo.priceRangeLow} - ${ipo.priceRangeHigh}
                                            </p>
                                            <p className="card-text">
                                                <strong className="text-secondary">Shares:</strong> {ipo.shares}
                                            </p>
                                            <p className="card-text">
                                                <strong className="text-secondary">Managers:</strong> {truncateText(ipo.managers, 20)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default IPO;
