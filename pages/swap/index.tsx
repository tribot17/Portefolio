import Web3 from "web3";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { tokenList } from "../../data/tokenList";
import { token } from "../../interfaces/interface";
import Image from "next/image";
import { ethers } from "ethers";

const Index = () => {
  const [web3, setWeb3] = useState<any>();
  const [open, setOpen] = useState<Boolean>(false);
  const [buyOrSell, setBuyOrSell] = useState<Boolean>();
  const [buyToken, setBuyToken] = useState<token>(tokenList[0]);
  const [sellToken, setSellToken] = useState<token>(tokenList[2]);
  const [account, setAccount] = useState<any>(undefined);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    onChainChange();
  }, [account]);

  const onChainChange = () => {
    window.ethereum.on("chainChanged", async () => {
      const provider = handleWeb3(window.ethereum);
      const network = await provider.getNetwork();

      if (network.name !== "goerli")
        alert("The contract is host on the goerli tesnet");
    });
  };

  const handleWalletConnect = async () => {
    if (undefined && !account) {
      if (typeof window != "undefined" && typeof window.ethereum) {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        handleWeb3(ethereum);
      } else {
        alert("You need to install a wallet");
      }
    }
  };

  const handleWeb3 = (ethereum: any) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    setWeb3(provider);
    return provider;
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const { ethereum } = window;
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", async (accounts) => {
        setAccount(accounts[0]);
      });
    } else {
      setAccount("");
      console.log("Please install MetaMask");
    }
  };

  const TokenModal = ({ setOpen, Buy }: any) => {
    return (
      <div className="token_modal">
        <div className="token_choice_container">
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Selectionner un token
          </p>
          <ul>
            {tokenList.map((token, index) => (
              <li
                key={index}
                onClick={() => {
                  Buy ? setBuyToken(token) : setSellToken(token);
                  setOpen(false);
                }}
              >
                <Image
                  src={token.logo}
                  alt={token.name}
                  width={50}
                  height={50}
                />
                <div className="token_text">
                  <h3>{token.name}</h3>
                  <p>{token.symbol}</p>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="token_modal_close_button"
            onClick={() => setOpen(false)}
          >
            X
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="swap">
          <div className="swap_container">
            <div className="wallet_connect" onClick={handleWalletConnect}>
              <p>
                  {account && account.length > 0
                    ? `Connected: ${account.substring(
                        0,
                        6
                      )}...${account.substring(38)}`
                    : "Connecter votre wallet"}

              </p>
            </div>
            <div className="swap_text">
              <h1>Swap</h1>
              <div className="swap_input">
                <div className="input_and_token">
                  <input type={"number"} min="0" placeholder="0" />
                  <div
                    className="select_token"
                    onClick={() => {
                      setOpen(true);
                      setBuyOrSell(true);
                    }}
                  >
                    <Image
                      id="arrow_down"
                      src="/images/arrow_down_token.png"
                      alt={buyToken.name}
                      width={30}
                      height={20}
                    />
                    <Image
                      src={buyToken.logo}
                      alt={buyToken.name}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="input_and_token">
                  <input type={"number"} min="0" placeholder="0" />
                  <div
                    className="select_token"
                    onClick={() => {
                      setOpen(true);
                      setBuyOrSell(false);
                    }}
                  >
                    <Image
                      id="arrow_down"
                      src="/images/arrow_down_token.png"
                      alt={buyToken.name}
                      width={30}
                      height={20}
                    />
                    <Image
                      src={sellToken.logo}
                      alt={sellToken.name}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {open && <TokenModal setOpen={setOpen} buy={buyOrSell} />}
    </>
  );
};

export default Index;
