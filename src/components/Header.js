import React from 'react';
import { View, Text } from 'react-native';
import styles from './stylesheet';

const Header = () => {
    console.log('debuggin');
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
               AZURE BLACK ICO Presales
            </Text>
        </View>
    )
}


export default Header;
