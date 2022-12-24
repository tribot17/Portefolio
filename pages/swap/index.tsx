import Web3 from "web3";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { tokenList } from "../../data/tokenList";
import { token } from "../../interfaces/interface";
import Image from "next/image";
import { ethers } from "ethers";
<<<<<<< HEAD
import ERC20 from "../../contracts/ABI/ERC20.json";
import WETH from "../../contracts/ABI/WETH.json";


interface swapToken {
  buyToken:object,
  sellToken:object
}
=======
>>>>>>> a89f379768492cb7df0d0bfbdfe709110c731489

const Index = () => {
  const [web3, setWeb3] = useState<any>();
  const [open, setOpen] = useState<Boolean>(false);
  const [buyOrSell, setBuyOrSell] = useState<Boolean>();
  const [tokens, setTokens] = useState<swapToken>({
    buyToken: { token: tokenList[0], balance: 0 },
    sellToken: { token: tokenList[1], balance: 0 },
  });
  // const [buyToken, setBuyToken] = useState<token>(tokenList[0]);
  // const [buyTokenBalance, setBuyTokenBalance] = useState<number>(0);
  // const [sellTokenBalance, setSellTokenBalance] = useState<number>(0);
  const [sellToken, setSellToken] = useState<token>(tokenList[2]);
  const [account, setAccount] = useState<any>(undefined);
<<<<<<< HEAD
  const [provider, setProvider] = useState<any>();
=======

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
>>>>>>> a89f379768492cb7df0d0bfbdfe709110c731489

  useEffect(() => {
    setProvider(detectProvider());
    // onLogin();

    console.log(tokens)
  }, []);

  useEffect(() => {
    getUserBalance();
  }, [account]);

  const onLogin = async () => {
    const web3 = await new Web3(provider);
    setWeb3(web3);
    // getUserBalance();
  };

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      alert("No wallet detected, check out MetaMask");
    }
    return provider;
  };

  const onLoginHandler = async () => {
    setAccount(
      (
        await provider.request({
          method: "eth_requestAccounts",
        })
      )[0]
    );
    onLogin();
  };

  const getUserBalance = async () => {
    if (account) {
      const ETHbalance = await web3.eth.getBalance(account);
      console.log(ETHbalance);
    }
  };

  const TokenModal = ({ setOpen, buy }: any) => {
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
                  buy ? setTokens({...tokens, buyToken:{token, balance:0}}) : setTokens({...tokens, sellToken:{token, balance:0}});
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
<<<<<<< HEAD
            <div className="wallet_connect" onClick={onLoginHandler}>
              <p>
                {account && account.length > 0
                  ? `Connected: ${account.substring(
                      0,
                      6
                    )}...${account.substring(38)}`
                  : "Connecter votre wallet"}
=======
            <div className="wallet_connect" onClick={handleWalletConnect}>
              <p>
                  {account && account.length > 0
                    ? `Connected: ${account.substring(
                        0,
                        6
                      )}...${account.substring(38)}`
                    : "Connecter votre wallet"}

>>>>>>> a89f379768492cb7df0d0bfbdfe709110c731489
              </p>
            </div>
            <div className="swap_text">
              <h1>Swap</h1>
              <div className="swap_input">
                <div className="input_and_token">
<<<<<<< HEAD
                  <input
                    type={"number"}
                    min="0"
                    placeholder={tokens.buyToken.balance.toFixed(4)}
                  />
=======
                  <input type={"number"} min="0" placeholder="0" />
>>>>>>> a89f379768492cb7df0d0bfbdfe709110c731489
                  <div
                    className="select_token"
                    onClick={() => {
                      setBuyOrSell(true);
                      setOpen(true);
                    }}
                  >
                    <Image
                      id="arrow_down"
                      src="/images/arrow_down_token.png"
                      alt={tokens.buyToken.token.name}
                      width={30}
                      height={20}
                    />
                    <Image
                      src={tokens.buyToken.token.logo}
                      alt={tokens.buyToken.token.name}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="input_and_token">
                  <input
                    type={"number"}
                    min="0"
                    placeholder={tokens.buyToken.balance.toFixed(4)}
                  />
                  <div
                    className="select_token"
                    onClick={() => {
                      setBuyOrSell(false);
                      setOpen(true);
                    }}
                  >
                    <Image
                      id="arrow_down"
                      src="/images/arrow_down_token.png"
                      alt={tokens.sellToken.balance.name}
                      width={30}
                      height={20}
                    />
                    <Image
                      src={tokens.sellToken.token.logo}
                      alt={tokens.sellToken.token.name}
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
