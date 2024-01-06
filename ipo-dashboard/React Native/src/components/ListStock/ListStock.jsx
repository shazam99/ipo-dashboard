import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourite } from '../../utils/actions';

const ListStock = ({ stock, index }) => {
    const dispatch = useDispatch();
    const favourite = useSelector((state) => state.favourite);
    const navigation = useNavigation();

    const handleSubmit = (symbol) => {
        if (!favourite.includes(symbol)) {
            favourite.push(symbol);
            dispatch(setFavourite(favourite));
        } else {
            return alert("Already a Favorite!");
        }
    };

    return (
        <View style={styles.row}>
            {/* <Text style={styles.index}>{index}</Text> */}
            <Text>{stock.symbol}</Text>
            <Text numberOfLines={1} style={styles.name}>{stock.name}</Text>
            <Text>{stock.currency}</Text>
            <Text>{stock.exchange}</Text>
            <TouchableOpacity
                style={styles.viewButton}
                onPress={() => navigation.navigate('Detail', { stockSymbol: stock.symbol })}
            >
                <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => handleSubmit(stock.symbol)}
            >
                <Text style={styles.buttonText}>Favorite</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
    },
    index: {
        fontWeight: 'bold',
    },
    name: {
        flex: 1,
        marginHorizontal: 10,
    },
    viewButton: {
        backgroundColor: '#3B71CA',
        padding: 5,
        margin:5,
        borderRadius: 5,
    },
    favoriteButton: {
        backgroundColor: '#DC4C64',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default ListStock;
