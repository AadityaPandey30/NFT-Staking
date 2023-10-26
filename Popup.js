import React from 'react';
// Popup for Connect Wallet button
const Popup = ({ show, onClose }) => {
  return show ?    // If show === true then this block is displayed
  (
    <div className="popup">
      <div className="popup-content">
        <h2>Connect</h2>
               <ul>
                   <a href='https://metamask.io/download/'><li>MetaMask</li></a>
                   <a href='https://www.coinbase.com/connect-dapp?uri=https%3A%2F%2Fnft-staking-contract.thirdweb-example.com%2Fmint'><li>Coinbase Wallet</li></a>
                   <a href=''><li>WalletConnect</li></a>
                   <a href='https://link.trustwallet.com/wc?uri=wc%3A5686aaaed080ded70362df1d0dcefc751530b2fb0efe0c1b8a97f273e9269644%402%3Frelay-protocol%3Dirn%26symKey%3D7e544197f03cf468d4566733eb08741538c67d2224717e83a00a2f56be88b071'><li>Trust Wallet</li></a>
                   <a href='https://rainbow.me/?uri=wc%3Adfb5c6711e932ccad9aa02b0444115db53b6a7c36cbb0680b650382b3e34df8a%402%3Frelay-protocol%3Dirn%26symKey%3D712295238b0a21db7bfbd42e26856cc646d7b5c9cb0df0d0e6629ea725a814c6&_branch_match_id=1175731453259393310&utm_source=branch&utm_campaign=walletconnect&utm_medium=referral&_branch_referrer=H4sIAAAAAAAAAw3OS2rDMBAA0NNomXo0I42kQimB0k1PMR%2BZBJLYKA7Gt2%2BWb%2Fcu27Y%2BP6dpPHSXdf2w5T7t9v0a16%2FdAp191mxcYuyN0Ey8iQAqpJRizK6ZlKUYsakCV1DOQBWVOiWfq4QEGOh39Jscp3Us22LLLdDPdTwC8vO4%2F%2FXjzRIRW0aqCoLRteisnrAj18xmnNjLO9JMwWdw6MzYuhTMUmMy%2FgcTEI5jxwAAAA%3D%3D'><li>Rainbow</li></a>
                   <a href='https://zerion.io/'><li>Zerion Wallet</li></a>
                   <a href='https://rainbow.me/?uri=wc%3Af112ea66b395a2dcce8fe02d99ed553a9fcf8b9d2ab1eb383e979cb4bc7a14be%402%3Frelay-protocol%3Dirn%26symKey%3D9b5276c37490e5e7f483cd1eb1ba906ce3b57536c2b872b31e5f8d8b6e386d59&_branch_match_id=1175731453259393310&utm_source=branch&utm_campaign=walletconnect&utm_medium=referral&_branch_referrer=H4sIAAAAAAAAAw3MwQrCMAwA0K%2FpUbcmTdsIIoJ48SuaNEVB3aiTsb%2FX47u8%2B7LMn8Mw9LesZZ73Or2GVU%2Ff%2Fjiu6vDcvAcrMQoyFaiqlpuNUJmtEmHhpi0LVyjiTTCjcWKVIJqKD2IujODw2u1Ztt3cp2XS6enw8uhvB%2FGzvW62%2FclCkKJiCjwaWWoho9b%2F6KXwGNVQKBFGBckJBL1RyzVLNMyxEv8AEFfSc8cAAAA%3D'><li>Phantom</li></a>
               </ul>
               <hr style={{width: '90%'}}></hr>
               <a href='https://blog.thirdweb.com/web3-wallet/'><p>New to Wallets?</p></a>
        <button onClick={onClose} style={{marginBottom: '15px'}}>Close</button>
      </div>
    </div>
  ) : null;  // If show === false, Null value shown
};

export default Popup;