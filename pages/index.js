import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import {
Header, Footer, Search, Loader, Login, MovingSubmenu, Preloader, SideBar, Signup, useTimeout,
Home, TradeTokens, Networks, TopExchangeTokens, AddNetwork, Price, Profile, Setting, AddTokenPair, Trading
} from "../components/index";
import { CONTEXT } from "../context/context"


const index = () => {
  const { TRADING_BOT } = useContext(CONTEXT);

  // STATE VARIABLE
  const [activeComponent, setActiveComponent] = useState("Home");
  const [membershipType, SetMembershipType] = useState("Premium");
  const [authBackEndID, setAuthBackEndID] = useState("");
  const [network, setNetworks] = useState({});
  const [networkName, setNetworkName] = useState();


  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  return (
    <div>
      <MovingSubmenu />
      {/* <Preloader /> */}
       {
        activeComponent == "Signup" ? (
          <Signup
           axios={axios}
           setActiveComponent = { setActiveComponent }
           notifyError= { notifyError }
           notifySuccess = { notifySuccess } 
           />
          
        ): (
          
          <div className="techwave_fn_wrapper">
            <div className="techwave_fn_wrap">
              <Search />
              <Header 
              networkName={ networkName }
              setActiveComponent= { setActiveComponent }
              />
              <SideBar setActiveComponent = { setActiveComponent } />
              {
                activeComponent == "Home" ? (
                  <Home />
                ) : activeComponent == "Trade Tokens" ? (
                  <TradeTokens />

                ) : activeComponent == "Top Exchange Tokens" ? (
                  <TopExchangeTokens />

                ) : activeComponent == "Networks" ? (
                  <Networks networkName={networkName} />

                ) : activeComponent == "Trading" ? (
                  <Trading axios={axios}
                  />

                ) : activeComponent == "Pricing" ? (
                  <Price />
                )
                 : activeComponent == "Profile" ? (
                  <Profile setActiveComponent= {setActiveComponent} />
                 
                ) : activeComponent == "Setting" ? (
                  <Setting />
                )
                 : activeComponent == "Add Token pair" ? (
                  <AddTokenPair />
                
                ) : (
                  ""
                )

              }
              </div>
            </div>
          
          )}

          {activeComponent == "Login" ? (
            <Login
             setActiveComponent={setActiveComponent}
             axios={axios}
             notifyError= { notifyError }
             notifySuccess = { notifySuccess } 
              
              />
          ) : (
            ""
          )}
          
       
    </div>
  );
};

export default index;
