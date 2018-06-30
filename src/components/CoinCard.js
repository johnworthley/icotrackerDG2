import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import styles from './stylesheet';
import { images } from '../Utils/CoinIcons';


const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d, market_cap_usd}) => {


    return (
        <View style={styles.coinContainer}>

            <View style={styles.upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={styles.coinSymbol}>{symbol}</Text>
                <Text style={styles.seperator}>|</Text>
                <Text style={styles.coinName}>{coin_name}</Text>
                <Text style={styles.coinPrice}>{price_usd}
                    <Text style={styles.moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={styles.statisticsContainer}>

                <Text style = {styles.words}>24h:
                     <Text style={styles.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style = {styles.words}> 7d:
                    <Text style={styles.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_7d} % </Text>
                </Text>
                 <Text style = {styles.words}> Mc:
                    <Text style={styles.market_cap_usd < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {market_cap_usd} M USD </Text>
                </Text>


            </View>

        </View>
    );
}
 console.log('AfterCoinCard');



export default CoinCard;
