import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';
import styles from './stylesheet';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        console.log('renderCoinCards' + crypto);

        return crypto.data.map((coin) =>
            <CoinCard
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
                market_cap_usd={(coin.market_cap_usd/1000000).toFixed(3)}
            />
        )
    }


    render() {

        const { crypto } = this.props;
        console.log('render' + crypto);

        if (crypto.isFetching) {
               console.log('isFetching1');
        }

        return (
            console.log('calling rendercoincards'),
            <View contentContainerStyle={styles.contentContainer}>
                {this.renderCoinCards()}
            </View>
        )
        
    }
}



function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
