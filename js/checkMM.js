var connectMM = document.getElementById('header_connect_wallet-id');

var addressWallet ='';
var addressWalletShow='';
connectMM.onclick = function getAddress_w(){
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