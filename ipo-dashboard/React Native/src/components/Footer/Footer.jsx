import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const { theme, colors } = useSelector((state) => state.theme);

    return (
        <View style={[styles.main, { backgroundColor: colors[theme].footer, color: colors[theme].text }]}>
            {/* Risk text */}
            <View style={styles.container}>
                <Text>
                    Explore the world of stock markets and discover the opportunities it brings. Investing in stocks can offer both financial growth and challenges. It's essential to understand the benefits, such as potential returns and wealth creation, as well as the risks associated with market fluctuations.
                </Text>
            </View>

            {/* Social media icons */}
            <View style={styles.container}>
                <TouchableOpacity style={styles.iconButton}><Text style={styles.iconText}><FaFacebook /></Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}><Text style={styles.iconText}><FaGithub /></Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}><Text style={styles.iconText}><FaInstagram /></Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}><Text style={styles.iconText}><FaLinkedin /></Text></TouchableOpacity>
            </View>

            {/* Attribution */}
            <View style={styles.attribution}>
                <Text style={styles.attributionText}>Stock App @2023 by </Text>
                <TouchableOpacity onPress={() => console.log('Navigate to GitHub')}>
                    <Text style={[styles.attributionText, styles.link]}>Siddharth</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        padding: 20,
        textAlign: 'center',
    },
    container: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconButton: {
        marginRight: 10,
        padding: 10,
    },
    iconText: {
        fontSize: 20,
    },
    attribution: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    attributionText: {
        color: 'rgba(0, 0, 0, 0.7)',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default Footer;
