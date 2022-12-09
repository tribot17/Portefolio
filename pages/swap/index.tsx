import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { tokenList } from "../../data/tokenList";
import Image from "next/image";
import { token } from "../../interfaces/interface";

const Index = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [buyOrSell, setBuyOrSell] = useState<Boolean>();
  const [buyToken, setBuyToken] = useState<token>(tokenList[0]);
  const [sellToken, setSellToken] = useState<token>(tokenList[2]);

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
      animate={{ opacity: 1, y: "0px"  }}
        transition={{ duration: 0.5 }}
      >
        <div className="swap">
          <div className="swap_container">
            <div className="swap_text">
              <h1>Swap</h1>
              <div className="swap_input">
                <div className="input_and_token">
                  <input type={"number"} min="0" placeholder="0"/>
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
