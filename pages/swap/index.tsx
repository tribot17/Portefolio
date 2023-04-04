import Web3 from "web3";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { tokenList } from "../../data/tokenList";
import { token } from "../../interfaces/interface";
import Image from "next/image";
import { ethers } from "ethers";
import ERC20 from "../../contracts/ABI/ERC20.json";
import WETH from "../../contracts/ABI/WETH.json";

interface tokenInfo {
  name: string;
  address: string;
  symbol: string;
  logo: string;
}

interface tokenI {
  token: tokenInfo;
  balance: number | string;
}

interface swapToken {
  buyToken: tokenI;
  sellToken: tokenI;
}

interface Window {
  ethereum?: any;
}

const Index = () => {
  const [web3, setWeb3] = useState<any>();
  const [open, setOpen] = useState<Boolean>(false);
  const [buyOrSell, setBuyOrSell] = useState<Boolean>();
  const [tokens, setTokens] = useState<swapToken>({
    buyToken: { token: tokenList[0], balance: 0 },
    sellToken: { token: tokenList[1], balance: 0 },
  });
  const [account, setAccount] = useState<any>(undefined);
  const [provider, setProvider] = useState<any>();
  // const ethWindow: Window & typeof globalThis = window;
  // useEffect(() => {
  // setProvider(detectProvider());
  // if (provider) onLogin();
  // }, []);

  // const onLogin = async () => {
  //   const web3 = await new Web3(provider);
  //   setWeb3(web3);
  // };

  // const detectProvider = () => {
  //   let provider;
  //   if (ethWindow.ethereum) {
  //     provider = ethWindow.ethereum;
  //   } else {
  //     alert("No wallet detected, check out MetaMask");
  //   }

  //   return provider;
  // };

  const onLoginHandler = async () => {
    setAccount(
      (
        await provider.request({
          method: "eth_requestAccounts",
        })
      )[0]
    );
    // onLogin();
  };

  const getTokenBalance = async (token: token) => {
    if (token !== tokenList[0]) {
      let contract = new web3.eth.Contract(ERC20, token.address);
      return (
        parseInt(await contract.methods.balanceOf(account).call()) / 10 ** 18
      );
    } else {
      return parseInt(await web3.eth.getBalance(account)) / 10 ** 18;
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
                onClick={async () => {
                  buy
                    ? setTokens({
                        ...tokens,
                        buyToken: {
                          token,
                          balance: await getTokenBalance(token),
                        },
                      })
                    : setTokens({
                        ...tokens,
                        sellToken: {
                          token,
                          balance: await getTokenBalance(token),
                        },
                      });
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
        className="swap"
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="swap_container">
          <div className="wallet_connect" onClick={onLoginHandler}>
            <p>
              {account && account.length > 0
                ? `Connected: ${account.substring(0, 6)}...${account.substring(
                    38
                  )}`
                : "Connecter votre wallet"}
            </p>
          </div>
          <div className="swap_text">
            <h1>Swap</h1>
            <div className="swap_input">
              <div className="input_and_token">
                <input
                  type={"number"}
                  min="0"
                  placeholder={(+tokens.buyToken.balance).toFixed(4)}
                />
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
                  placeholder={(+tokens.sellToken.balance).toFixed(4)}
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
                    alt={tokens.sellToken.token.name}
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
      </motion.div>
      {open && <TokenModal setOpen={setOpen} buy={buyOrSell} />}
    </>
  );
};

export default Index;
