import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import api from './../../services/api';
import ListStock from './../../components/ListStock/ListStock';
import Loader from '../../components/Loader';

const Stocks = () => {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const stocksPerPage = 50;
    const { theme, colors } = useSelector((state) => state.theme);

    useEffect(() => {
        const fetchStocks = async () => {
            setLoading(true);
            try {
                const stocksData = await api.getStocks();
                setData(stocksData);
                setFilteredData(stocksData);
            } catch (error) {
                console.error('Error fetching Stocks:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    if (!filteredData) {
        return <Loader />;
    }

    const handleSearch = () => {
        if (data) {
            const term = searchTerm.toLowerCase();
            const filtered = data.filter(
                (stock) =>
                    stock.symbol.toLowerCase().includes(term) ||
                    stock.name.toLowerCase().includes(term)
            );
            setFilteredData(filtered);

            // Reset current page to 1 after search
            setCurrentPage(1);
        }
    };

    const indexOfLastStock = currentPage * stocksPerPage;
    const indexOfFirstStock = indexOfLastStock - stocksPerPage;
    const currentStocks = filteredData.slice(indexOfFirstStock, indexOfLastStock);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(filteredData.length / stocksPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <View style={[styles.main, { backgroundColor: colors[theme].background }]}>
            {loading && <Loader />}

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error: {error.message}. Please try again.</Text>
                </View>
            )}

            {data && (
                <View style={styles.stockspage}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search by symbol or name"
                            onChangeText={(text) => setSearchTerm(text)}
                        />
                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.buttonText}>Search</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={currentStocks}
                        keyExtractor={(item) => item.symbol}
                        renderItem={({ item, index }) => (
                            <ListStock stock={item} index={index + indexOfFirstStock} />
                        )}
                        style={styles.flatList}
                    />

                    {/* Pagination controls */}
                    <View style={styles.pagination}>
                        {/* Previous page button */}
                        <TouchableOpacity
                            style={styles.paginationButton}
                            disabled={currentPage === 1}
                            onPress={() => paginate(currentPage - 1)}
                        >
                            <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity>

                        {/* Current page */}
                        <Text style={styles.currentPage}>{currentPage}</Text>

                        {/* Next page button */}
                        <TouchableOpacity
                            style={styles.paginationButton}
                            disabled={currentPage === Math.ceil(filteredData.length / stocksPerPage)}
                            onPress={() => paginate(currentPage + 1)}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    errorContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    errorText: {
        color: 'red',
    },
    stockspage: {
        minHeight: 'calc(100% - 350px)',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        padding: 5,
    },
    searchButton: {
        backgroundColor: 'darkblue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
    },
    flatList: {
        flex: 1,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    paginationButton: {
        backgroundColor: 'darkblue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    currentPage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 5,
    },
});

export default Stocks;
