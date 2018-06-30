import axios from 'axios';
//import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        var result = []
        var proxyurl1 = 'https://frozen-hamlet-59478.herokuapp.com/';
        var proxyurl2 = 'https://frozen-hamlet-59478.herokuapp.com/';
        var url1 = 'https://api.coinmarketcap.com/v1/ticker/bitcoin';
        var url2 = 'https://api.coinmarketcap.com/v1/ticker/wanchain';
        proxyurl1 += url1;
        proxyurl2 += url2;

         axios.get(proxyurl1)
            .then(res => result[0] = res.data[0])
            .then(()  => axios.get(proxyurl2))
            .then(res => result[1] = res.data[0])
            .then(res => console.log(result))
            .then(() => dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: result })) 
            .then(res => console.log("after successful api call"))
            .catch(err => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            });
    }
}