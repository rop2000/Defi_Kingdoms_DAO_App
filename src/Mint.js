import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";


function Minter() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
    const [claimingNft, setClaimingNft] = useState(false);  
    const [numNFT, setNumNFT] = useState(1);
  
    const claimNFTs = (_amount) => {
      if (_amount <= 0) {
        return;
      }
      setFeedback("Minting your Big Bloater...");
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(blockchain.account, _amount)
        .send({
          gasLimit: "285000",
          to: "0x827acb09a2dc20e39c9aad7f7190d9bc53534192",
          from: blockchain.account,
          value: blockchain.web3.utils.toWei((500 * _amount).toString(), "ether"),
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          setFeedback(
            "WOW, you now own a piece of shit bloater, thanks for the rent money."
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };
  
    const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    useEffect(() => {
        let element =  document.getElementById('snow-canvas');
        if (typeof(element) != 'undefined' && element != null)
        {
            document.getElementById("snow-canvas").remove();
        }
    }, []);

    useEffect(() => {
      getData();
    }, [blockchain.account]);

  return (
  
    // linear(to-b, #6EBC51, #05113D)
    <>
    <section class="hero is-medium is-black">
    <div class="hero-body">
    <div class="columns is-mobile is-vcentered">
        <div class="column is-half is-offset-one-quarter">
        <div class="box">
        
            {/* <Image mt={-10} src={BloaterRotateGif} boxSize="300px" ></Image> */}
            {/* <figure class="image is-16by9">
                <img src={DaoImg}/>
            </figure> */}
          <div class="container"
          >
            {Number(data.totalSupply) == 10000 ? (
              <>
                <p class="subtitle">
                  The lake is rid of bloaters...
                </p>
              </>
            ) : (
              <>
                <div class="container" border="2px" pt={2} borderColor="gray" borderRadius="20px">
                   {/* <HStack spacing='24px'>
                    <Stat>
                      <StatLabel><strong>Mint Cost</strong></StatLabel>
                      <StatNumber>500 <strong>ONE</strong></StatNumber>
                      <StatHelpText>
                        <StatArrow type='increase' />
                        Gas Not Included
                      </StatHelpText>
                    </Stat>

                    <Stat pl={40}>
                      <StatLabel>Volume</StatLabel>
                      <StatNumber>{Number(data.totalSupply)*500} ONE</StatNumber>
                      <StatHelpText>
                        <Tag borderRadius="2px" variant='subtle' colorScheme="whiteAlpha">{data.totalSupply} MINTS</Tag>
                      </StatHelpText>
                    </Stat>
                    </HStack> */}
               </div>
               
                {blockchain.account === "" ||
                blockchain.smartContract === null ? 
                
                (
                  <div class="box" pt={5}>
                    <button class="button is-normal is-responsive"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                    >
                        CONNECT
                    </button>
                    
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <p class="subtitle" style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </p>
                      </>
                    ) : null}
                  </div>
                ) 
                : 
                (
                  <div class="container" p={5}>
                  
          
                    
                    <div class="container">
                      {/* <RangeSlider defaultValue={[1,10]} min={1} max={10} step={1}
                      onChangeEnd={(val) => setNumNFT(val[0])}
                      >
                        <RangeSliderTrack bg='tomato'>
                          <RangeSliderFilledTrack bg='orange.100' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0}>
                        
                        </RangeSliderThumb>
                      </RangeSlider> */}
                    </div>
                    
                    <button class="button is-normal is-responsive"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(numNFT);
                        getData();
                      }}
                    >
                      {claimingNft ? <button class="button is-primary is-loading"></button>
                      : 
                      <p class="subtitle"
                      fontSize='3xl'
                      fontWeight='bold'
                      >
                       {'MINT ' + numNFT} 
                      </p>
                      }
                    </button>
                  </div>
                )}

              </>
            )}
          </div>
         
            <p class="subtitle"
              color="white" fontSize="3xl"
            >
              {data.totalSupply}/10000 MINTED
            </p>
        </div>
            <div class="container">
      
              <p class="subtitle" color="white">
                Please make sure you are connected to the right network (Harmony
                Mainnet) and the correct address. Please note: Once you make the
                purchase, you cannot undo this action.
              </p>
            
              <p class="subtitle" color="white">
                We have set the gas limit to 5000000 for the contract to successfully
                mint your NFT. We recommend that you don't change the gas limit.
              </p>
           
            </div>
        </div>
        </div>
    </div>
    </section>
    
    <section class="hero is-medium is-primary">
        <div class="hero-body"></div>    
    </section>

    </>
  );
}
export default Minter;
