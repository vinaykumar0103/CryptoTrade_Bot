import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from 'axios';

//INTERNAL IMPORT 

export const CONTEXT = React.createContext();

export const PROVIDER = ( { children} ) => {
    const TRADING_BOT = "Trading Bot";

    const LOAD_INTIAL_DATA = async () => {

    };

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
            buyTokens,
            sellTokens,
            trading
        }}
        >
            {children}

        </CONTEXT.Provider>
    );
}