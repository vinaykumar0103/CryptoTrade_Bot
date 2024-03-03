import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from 'axios';

//INTERNAL IMPORT 

export const CONTEXT = React.createContext();

export const PROVIDER = ( { children} ) => {

    const TRADING_BOT = "Trading Bot";
    const [topTokens, setTopTokens] = useState([]);
    const [tradingCount, setTradingCount] = useState(0);
    const [loader, setLoader] = useState(false);

    let length;

    const LOAD_INTIAL_DATA = async () => {

        try {
            const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
            const query = `
            {
                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){
                id
                name
                decimals
                volume
                volumeUSD
                totalSupply
                feesUSD
                txCount
                poolCount
                totalValueLockedUSD
                totalValueLocked
                derivedETH
            }
        }`;

        const axiosData = await axios.post(URL, {query: query})
        setTopTokens(axiosData.data.data.tokens);
        console.log(axiosData.data.data.tokens);
            
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        LOAD_INTIAL_DATA();
    }, [])

    //BUY 
    const buyTokens = async () => {
        try {
            
        } catch (error) {
            
        }

    };

    //SELL
    const sellTokens = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    //TRADING
    const trading = async () => {
        try {
            
        } catch (error) {
            
        }

    };

    return (
        <CONTEXT.Provider
        value={{
            TRADING_BOT,
            topTokens,
            trading
        }}
        >
            {children}

        </CONTEXT.Provider>
    );
}