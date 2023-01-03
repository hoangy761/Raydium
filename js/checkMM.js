var connectMM = document.getElementById('header_connect_wallet-id');
var connect_swap = document.getElementById('connect_wallet');

var balance_Coin_top = document.getElementById('balance_Coin_top');
var balance_Coin_bottom = document.getElementById('balance_Coin_bottom');

var addressWallet ='';
var addressWalletShow='';

var getBalance_Coin_top = 12.72;
var getBalance_Coin_bottom = 20.856;
connectMM.onclick =  function getAddress_w(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        getAddress().then((data) => {
            console.log(data);
            addressWallet = data;

            addressWallet = addressWallet.split('');
            lengthAddress = addressWallet.length;
            addressWalletShow = addressWallet[0]+addressWallet[1]+addressWallet[2]+addressWallet[3]
            +'...'+addressWallet[(lengthAddress-4)]+addressWallet[(lengthAddress-3)]+addressWallet[(lengthAddress-2)]+addressWallet[(lengthAddress-1)];

            console.log(addressWalletShow);
            textAddress.innerText = addressWalletShow;
            connect_swap.innerHTML = 
            '<div><span>Swap</span></div>';
            balance_Coin_top.innerText ='Balance: ' + getBalance_Coin_top;
            balance_Coin_bottom.innerText ='Balance: ' + getBalance_Coin_bottom;
        }).catch((err) =>{
            console.log(err)
        })
        console.log(ethereum.networkVersion);
      }else{
       var conf =  confirm('Ban co muon install Metamask Wallet?');
       if(conf === true){
        window.location = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
       }
      }
}

connect_swap.onclick =  function getAddress_w(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        getAddress().then((data) => {
            console.log(data);
            addressWallet = data;

            addressWallet = addressWallet.split('');
            lengthAddress = addressWallet.length;
            addressWalletShow = addressWallet[0]+addressWallet[1]+addressWallet[2]+addressWallet[3]
            +'...'+addressWallet[(lengthAddress-4)]+addressWallet[(lengthAddress-3)]+addressWallet[(lengthAddress-2)]+addressWallet[(lengthAddress-1)];

            console.log(addressWalletShow);
            textAddress.innerText = addressWalletShow;
            connect_swap.innerHTML = 
            '<div><span>Swap</span></div>';
            balance_Coin_top.innerText ='Balance: ' + getBalance_Coin_top;
            balance_Coin_bottom.innerText ='Balance: ' + getBalance_Coin_bottom;
        }).catch((err) =>{
            console.log(err)
        })
        console.log(ethereum.networkVersion);
      }else{
       var conf =  confirm('Ban co muon install Metamask Wallet?');
       if(conf === true){
        window.location = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
       }
      }
}



async function getAddress(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

var textAddress = document.getElementById('header_connect_wallet-text-id');


ethereum.on('accountsChanged', (accounts) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
            addressWallet = accounts[0];

            addressWallet = addressWallet.split('');
            lengthAddress = addressWallet.length;
            addressWalletShow = addressWallet[0]+addressWallet[1]+addressWallet[2]+addressWallet[3]
            +'...'+addressWallet[(lengthAddress-4)]+addressWallet[(lengthAddress-3)]+addressWallet[(lengthAddress-2)]+addressWallet[(lengthAddress-1)];

            console.log(addressWalletShow);
            textAddress.innerText = addressWalletShow;

            alert('Changed Account successfully!!!');

            
  });
  
  ethereum.on('chainChanged', (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
    alert('Changed chain successfully!!!');
  });