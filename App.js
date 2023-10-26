import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App()
{
  const [isPopupVisible, setPopupVisible] = useState(false);  //State for Connect wallet button

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  function MintNFT()   // MintNFT content for minting your NFTs
  {
    return (
      <div className="mint-nft">
        <h1 style={{margin:'10px'}}>Mint An NFT</h1>
        <p>Here is where we use our NFT Drop contract to allow users to mint one of the NFTs that we lazy minted.</p>
        <hr></hr>
        <button className='walConnect' onClick={openPopup}>Connect Wallet</button>
      </div>
    );
  };
  
  function StakeNFT()   // StakeNFT content for staking NFTs
  {
    return (
      <div className="stake-nft">
        <h1 style={{margin:'10px'}}>Stake Your NFTs</h1>
        <p>It allows holders to earn passive income from their NFT holdings while maintaining ownership.</p>
        <hr></hr>
        <button className='walConnect' onClick={openPopup}>Connect Wallet</button>
      </div>
    );
  };

  return (
    <div className="home">
      <h1>Thirdweb Deploy - Custom Staking Contract</h1>
      <div className="action-buttons">
        <Router>
          <div className='options'>
          <Link to='/mintnft' className='links glow-on-hover'><><h1>Mint a new NFT</h1><p>Use the NFT Drop Contract to claim an NFT from the collection.</p></></Link>
          <Link to='/stakenft' className='links glow-on-hover'><><h1>Stake new NFTs</h1><p>Use the custom staking contract deployed via <b>thirdweb deploy</b> to stake your NFTs, and earn tokens from the token Contract</p></></Link><br></br>
          </div>
        <Route path='/mintnft'><MintNFT /></Route>
        <Route path='/stakenft'><StakeNFT /></Route>
        {/* for popup */}
        <Popup show={isPopupVisible} onClose={closePopup} />  
        </Router>
      </div>
    </div>
  );
};

export default App
