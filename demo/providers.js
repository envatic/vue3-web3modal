import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
//import Authereum from "authereum";
//import { Venly } from "@venly/web3-provider";
//import Portis from "@portis/web3";
//import { Bitski } from "bitski";
//import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import ethProvider from "eth-provider";
//import DcentProvider from "dcent-provider";
//import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
export const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.VUE_APP_INFURA_KEY,
        },
    },

    frame: {
        package: ethProvider // required
    },
    torus: {
        package: Torus,
    },
    fortmatic: {
        package: Fortmatic,
        options: {
            key: process.env.VUE_APP_FORTMATIC_KEY,
        },
    },

    binancechainwallet: {
        package: true
    },

    
    /*coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "Web3modol", // Required
            infuraId: process.env.VUE_APP_INFURA_KEY, // Required
        }
    }*/
    /*dcentwallet: {
        package: DcentProvider, // required
        options: {
            rpcUrl: "https://mainnet.infura.io/v3/" + process.env.VUE_APP_INFURA_KEY // required
        }
    },
     burnerconnect: {
        package: BurnerConnectProvider, // required
        options: {
            defaultNetwork: "1"
        }
    },
    authereum: {
        package: Authereum,
    },
    portis: {
        package: Portis, // required
        options: {
            id: process.env.VUE_APP_PORTIS_ID, // required
        },
    },
     venly: {
        package: Venly, // required
        options: {
            clientId: process.env.VUE_APP_VENLY_CLIENT_ID // required
        }
    },
    bitski: {
        package: Bitski,
        options: {
            clientId: process.env.VUE_APP_BITSKI_CLIENT_ID,
            callbackUrl: window.location.href + "bitski-callback.html",
        },
    },
    */
};