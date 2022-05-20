(function(){var e={20364:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=20364,e.exports=t},39533:function(e,t,r){"use strict";var n=r(49242),o=r(94329),i=r(73396);const a=Symbol(),l=Symbol();function s(e,t){e.provide(a,t)}function c(){const e=(0,i.f3)(a);if(!e)throw"error, no providerOptions provided";return e}function d(e,t){e.provide(l,t)}function u(){const e=(0,i.f3)(l);if(!e)throw"error, no providerOptions provided";return e}var p=r(87139);function h(e,t,r,o,a,l){const s=(0,i.up)("NetworkSelector"),c=(0,i.up)("HeaderElement"),d=(0,i.up)("BalanceText"),u=(0,i.up)("Web3Status"),h=(0,i.up)("AccountElement"),g=(0,i.up)("HeaderControls"),m=(0,i.up)("HeaderFrame"),w=(0,i.up)("WalletModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,{"show-background":o.scrollY>45},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[o.active&&o.account&&o.isValidNetwork?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{"infura-key":e.infurakey},null,8,["infura-key"])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{active:!!o.account},{default:(0,i.w5)((()=>[o.active&&o.account&&o.isValidNetwork?((0,i.wg)(),(0,i.j4)(d,{key:0,style:{flexShrink:0,userSelect:"none"},pl:"1rem",pr:"1rem",tx:"text",color:"text1","font-weight":"500"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"balance",{},(()=>[(0,i.Uk)((0,p.zw)(parseFloat(o.etherBalance).toPrecision(5))+" "+(0,p.zw)(o.ether.symbol),1)]))])),_:3})):(0,i.kq)("",!0),(0,i.Wm)(u)])),_:3},8,["active"])])),_:3}),o.hasDropDown?((0,i.wg)(),(0,i.j4)(c,{key:1},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})):(0,i.kq)("",!0)])),_:3})])),_:3},8,["show-background"]),((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.WI)(e.$slots,"modal",{},(()=>[(0,i.wy)((0,i.Wm)(w,null,null,512),[[n.F8,e.isOpen]])]))]))],64)}var g=r(87757),m=r(86367),w=r.p+"img/ethereum-logo.9baffa6d.svg",f=r.p+"img/arbitrum_logo.58693b6a.svg",v=r.p+"img/optimistic_ethereum.3cbbb068.svg",b=r.p+"img/polygon-matic-logo.4de125e3.svg",y=r.p+"img/binance-logo.8e189297.svg";const x=Object.freeze({MAINNET:1,ROPSTEN:3,RINKEBY:4,GOERLI:5,KOVAN:42,ARBITRUM_ONE:42161,ARBITRUM_RINKEBY:421611,OPTIMISM:10,OPTIMISTIC_KOVAN:69,POLYGON:137,POLYGON_MUMBAI:80001,BINANCE:56,BINANCE_TESTNET:97}),k={[x.MAINNET]:"mainnet",[x.ROPSTEN]:"ropsten",[x.RINKEBY]:"rinkeby",[x.GOERLI]:"goerli",[x.KOVAN]:"kovan",[x.POLYGON]:"polygon",[x.POLYGON_MUMBAI]:"polygon_mumbai",[x.ARBITRUM_ONE]:"arbitrum",[x.ARBITRUM_RINKEBY]:"arbitrum_rinkeby",[x.OPTIMISM]:"optimism",[x.OPTIMISTIC_KOVAN]:"optimistic_kovan",[x.BINANCE]:"binance",[x.BINANCE_TESTNET]:"binance"},C=Object.freeze({L1:Symbol("l1"),L2:Symbol("l2")}),N={[x.MAINNET]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Ethereum",logoUrl:w,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.RINKEBY]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://rinkeby.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Rinkeby",logoUrl:w,nativeCurrency:{name:"Rinkeby Ether",symbol:"rETH",decimals:18}},[x.ROPSTEN]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://ropsten.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Ropsten",logoUrl:w,nativeCurrency:{name:"Ropsten Ether",symbol:"ropETH",decimals:18}},[x.KOVAN]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://kovan.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Kovan",logoUrl:w,nativeCurrency:{name:"Kovan Ether",symbol:"kovETH",decimals:18}},[x.GOERLI]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://goerli.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Görli",logoUrl:w,nativeCurrency:{name:"Görli Ether",symbol:"görETH",decimals:18}},[x.OPTIMISM]:{networkType:C.L2,bridge:"https://gateway.optimism.io/?chainId=1",docs:"https://optimism.io/",explorer:"https://optimistic.etherscan.io/",infoLink:"https://info.uniswap.org/#/optimism/",label:"Optimism",logoUrl:v,statusPage:"https://optimism.io/status",helpCenterUrl:"https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.OPTIMISTIC_KOVAN]:{networkType:C.L2,bridge:"https://gateway.optimism.io/",docs:"https://optimism.io/",explorer:"https://kovan-optimistic.etherscan.io/",infoLink:"https://info.uniswap.org/#/optimism/",label:"Optimistic Kovan",logoUrl:v,statusPage:"https://optimism.io/status",helpCenterUrl:"https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",nativeCurrency:{name:"Optimistic Kovan Ether",symbol:"kovOpETH",decimals:18}},[x.ARBITRUM_ONE]:{networkType:C.L2,bridge:"https://bridge.arbitrum.io/",docs:"https://offchainlabs.com/",explorer:"https://arbiscan.io/",infoLink:"https://info.uniswap.org/#/arbitrum",label:"Arbitrum",logoUrl:f,helpCenterUrl:"https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.ARBITRUM_RINKEBY]:{networkType:C.L2,bridge:"https://bridge.arbitrum.io/",docs:"https://offchainlabs.com/",explorer:"https://testnet.arbiscan.io/",infoLink:"https://info.uniswap.org/#/arbitrum/",label:"Arbitrum Rinkeby",logoUrl:f,helpCenterUrl:"https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",nativeCurrency:{name:"Rinkeby Arbitrum Ether",symbol:"rinkArbETH",decimals:18}},[x.POLYGON]:{networkType:C.L1,bridge:"https://wallet.polygon.technology/bridge",docs:"https://polygon.io/",explorer:"https://polygonscan.com/",infoLink:"https://info.uniswap.org/#/polygon/",label:"Polygon",logoUrl:b,nativeCurrency:{name:"Polygon Matic",symbol:"MATIC",decimals:18}},[x.POLYGON_MUMBAI]:{networkType:C.L1,bridge:"https://wallet.polygon.technology/bridge",docs:"https://polygon.io/",explorer:"https://mumbai.polygonscan.com/",infoLink:"https://info.uniswap.org/#/polygon/",label:"Polygon Mumbai",logoUrl:b,nativeCurrency:{name:"Polygon Mumbai Matic",symbol:"mMATIC",decimals:18}},[x.BINANCE]:{networkType:C.L1,docs:"https://www.binance.com",explorer:"https://www.bscscan.com/",infoLink:"https://www.binance.com",label:"Binance Smart Chain",logoUrl:y,nativeCurrency:{name:"BNB",symbol:"BNB",decimals:8}},[x.BINANCE_TESTNET]:{networkType:C.L1,docs:"https://testnet.binance.org/en/",explorer:"https://testnet.bscscan.com/",infoLink:"https://testnet.binance.org/en/",label:"Binance Test Chain",logoUrl:y,nativeCurrency:{name:"BNB",symbol:"TBNB",decimals:8}}};r(26699);var I=r(44870),$=r(72586);const S=(0,I.qj)({provider:null,etherjs:null,web3:null,chainId:null,account:null,accounts:[],active:null,error:"",etherBalance:null}),E=(0,i.Fl)((()=>null!=S.chainId&&Object.values(x).includes(S.chainId))),_=(0,i.Fl)((()=>S.provider?(0,$.getProviderInfo)(S.provider):null)),W=()=>({...(0,I.BK)(S),providerInfo:_,isValidNetwork:E}),T=()=>(0,m.jsu)((async()=>{if(!S.chainId)return 0;if(S.account||S.web3||S.chainId){const e=await S.web3.eth.getBalance(S.account);return S.web3.utils.fromWei(e.toString())}return 0})),P=()=>S.etherBalance=T(),A=()=>S.active=!0,B=()=>S.active=!1,O=e=>S.error=e??"",M=e=>S.provider=e,F=e=>S.etherjs=e,j=e=>S.web3=e,z=e=>S.chainId=e,R=e=>S.account=e,L=e=>S.accounts=e,Z=()=>{const e=u(),t={[x.MAINNET]:`https://mainnet.infura.io/v3/${e}`,[x.RINKEBY]:`https://rinkeby.infura.io/v3/${e}`,[x.ROPSTEN]:`https://ropsten.infura.io/v3/${e}`,[x.GOERLI]:`https://goerli.infura.io/v3/${e}`,[x.KOVAN]:`https://kovan.infura.io/v3/${e}`,[x.OPTIMISM]:`https://optimism-mainnet.infura.io/v3/${e}`,[x.OPTIMISTIC_KOVAN]:`https://optimism-kovan.infura.io/v3/${e}`,[x.ARBITRUM_ONE]:`https://arbitrum-mainnet.infura.io/v3/${e}`,[x.ARBITRUM_RINKEBY]:`https://arbitrum-rinkeby.infura.io/v3/${e}`,[x.POLYGON]:`https://polygon-mainnet.infura.io/v3/${e}`,[x.POLYGON_MUMBAI]:`https://polygon-mumbai.infura.io/v3/${e}`,[x.BINANCE]:"https://bsc-dataseed1.defibit.io/",[x.BINANCE_TESTNET]:"https://data-seed-prebsc-2-s1.binance.org:8545"},r={[x.MAINNET]:`wss://mainnet.infura.io/ws/v3/${e}`,[x.RINKEBY]:`wss://rinkeby.infura.io/ws/v3/${e}`,[x.ROPSTEN]:`wss://ropsten.infura.io/v3/${e}`,[x.GOERLI]:`wss://goerli.infura.io/v3/${e}`,[x.KOVAN]:`wss://kovan.infura.io/v3/${e}`};return{INFURA_WSS_URLS:r,INFURA_NETWORK_URLS:t}};r(21703);var U=r(42478);const D=e=>(0,i.Fl)((()=>V(e.value)?new K(e.value):Y(e.value)?new H(e.value):new U.sf(e.value))),q={[x.POLYGON]:new U.WU(x.POLYGON,"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",18,"WMATIC","Wrapped MATIC"),[x.POLYGON_MUMBAI]:new U.WU(x.POLYGON_MUMBAI,"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",18,"WMATIC","Wrapped MATIC"),[x.BINANCE]:new U.WU(x.BINANCE,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNC"),[x.POLYGON_MUMBAI]:new U.WU(x.POLYGON_MUMBAI,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB")},Y=e=>e===x.BINANCE||e===x.BINANCE_TESTNET;class H extends U.Yp{equals(e){return e.isNative&&e.chainId===this.chainId}get wrapped(){if(!Y(this.chainId))throw new Error("Not BNB");return q[this.chainId]}constructor(e){if(!V(e))throw new Error("Not BNB");super(e,8,"BNB","BNB")}}const V=e=>e===x.POLYGON_MUMBAI||e===x.POLYGON;class K extends U.Yp{equals(e){return e.isNative&&e.chainId===this.chainId}get wrapped(){if(!Y(this.chainId))throw new Error("Not BNB");return q[this.chainId]}constructor(e){if(!V(e))throw new Error("Not matic");super(e,18,"MATIC","Polygon Matic")}}var G=r(93365),J=r(35085),Q=r.n(J);const{chainId:X,isValidNetwork:ee}=W(),te=()=>{const{INFURA_NETWORK_URLS:e,INFURA_WSS_URLS:t}=Z(),r=(0,i.Fl)((()=>{if(!ee.value)return null;if(null==X.value)return null;const t=e[X.value??x.MAINNET];return new(Q())(t)})),n=(0,i.Fl)((()=>{if(!ee.value)return null;const e=t[X.value??x.MAINNET]??null;return e?new(Q())(new(Q().providers.WebsocketProvider)(e)):r.value}));return{infuraWss:n,infura:r}},{chainId:re,isValidNetwork:ne}=W(),oe=(0,I.qj)({[x.KOVAN]:null,[x.RINKEBY]:null,[x.ROPSTEN]:null,[x["GÖRLI"]]:null,[x.MAINNET]:null,[x.ARBITRUM_ONE]:null,[x.ARBITRUM_RINKEBY]:null,[x.OPTIMISM]:null,[x.OPTIMISTIC_KOVAN]:null,[x.POLYGON]:null,[x.POLYGON_MUMBAI]:null,[x.BINANCE]:null,[x.BINANCE_TESTNET]:null}),ie=(0,I.qj)({[x.KOVAN]:null,[x.RINKEBY]:null,[x.ROPSTEN]:null,[x["GÖRLI"]]:null,[x.MAINNET]:null,[x.ARBITRUM_ONE]:null,[x.ARBITRUM_RINKEBY]:null,[x.OPTIMISM]:null,[x.OPTIMISTIC_KOVAN]:null,[x.POLYGON]:null,[x.POLYGON_MUMBAI]:null,[x.BINANCE]:null,[x.BINANCE_TESTNET]:null}),ae=(0,I.iH)(null),le=(0,I.iH)(!1),se=({number:e,time:t})=>{re.value&&(oe[re.value]?oe[re.value]=Math.max(e,oe[re.value]):oe[re.value]=e,ie[re.value]?ie[re.value]=Math.max(t,ie[re.value]):ie[re.value]=t)},ce=(0,i.Fl)((()=>oe[re.value])),de=(0,i.Fl)((()=>ie[re.value??x.MAINNET])),ue=()=>{if(le.value)return;le.value=!0;const{infuraWss:e}=te(),t=(0,G.DI)(se,100),r=e=>{const r=parseInt(e.number),n=Math.max(r,ce.value),o=parseInt(e.number),i=Math.max(o,de.value);t({number:n,time:i})},n=()=>{null!=ae.value&&"function"==typeof ae.value&&ae.value.unsubscribe((()=>{ae.value=null})),le.value=!1};(0,i.YP)([re,ne],(([t,o])=>{n(),t&&o&&(e.value.eth.getBlock("latest").then(r).catch((e=>console.error(`Failed to get block number for chainId: ${t}`,e))),ae.value=e.value.eth.subscribe("newBlockHeaders").on("data",(e=>r(e))))}),{immediate:!0}),(0,i.Ah)(n)},{on:pe,emit:he}=(0,m.v1O)("modals"),ge=(0,I.iH)(!1),me=(0,I.iH)(null),we=()=>{ge.value&&(me.value(),me.value=null,ge.value=!1)},fe=()=>{ge.value||(he("close"),me.value||(me.value=pe(we)),ge.value=!0)},ve=()=>{ge.value?we():fe()},be=()=>({isOpen:ge,close:we,open:fe,toggle:ve}),{on:ye,emit:xe}=(0,m.v1O)("modals");function ke(e,t=4){return`${e.substring(0,t+2)}...${e.substring(42-t)}`}const Ce=Object.freeze({TRANSACTION:"transaction",TOKEN:"token",ADDRESS:"address",BLOCK:"block"}),Ne=e=>N[e].explorer;function Ie(e,t,r){const n=Ne(e);switch(r){case Ce.TRANSACTION:return`${n}/tx/${t}`;case Ce.TOKEN:return`${n}/token/${t}`;case Ce.BLOCK:return`${n}/block/${t}`;case Ce.ADDRESS:return`${n}/address/${t}`;default:return`${n}`}}function $e(e,t){const{INFURA_NETWORK_URLS:r}=Z(t),n=[r.value[e]]??0;if(n)return n;throw new Error("RPC URLs must use public endpoints")}async function Se({provider:e,chainId:t,chainIdHex:r,INFURA_KEY:n}){if(e)try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]})}catch(o){const i=o.message.includes("Unrecognized chain");if(4902!==o.code&&-32603!==o.code&&!i)throw o;{const i=N[t];await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.label,rpcUrls:$e(t,n),nativeCurrency:i.nativeCurrency,blockExplorerUrls:[i.explorer]}]});try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]})}catch(o){console.debug("Added network but could not switch chains",o)}}}}const Ee=(0,I.qj)([]),{chainId:_e,account:We,isValidNetwork:Te}=W(),Pe=(0,m.v1O)("transactions"),Ae=(0,m._aR)("transactions",{[x.MAINNET]:{},[x.ROPSTEN]:{},[x.RINKEBY]:{},[x.GOERLI]:{},[x.KOVAN]:{},[x.ARBITRUM_ONE]:{},[x.ARBITRUM_RINKEBY]:{},[x.OPTIMISM]:{},[x.OPTIMISTIC_KOVAN]:{},[x.POLYGON]:{},[x.POLYGON_MUMBAI]:{},[x.BINANCE]:{},[x.BINANCE_TESTNET]:{}}),Be=(0,I.iH)(!1),Oe=()=>{Ae.value[_e.value]&&(Ae.value[_e.value??x.MAINNET]={})},Me=({hash:e,blockNumber:t})=>{const r=Ae.value[_e.value]?.[e];if(r)return r.checked=(new Date).getTime(),r.lastCheckedBlockNumber?r.lastCheckedBlockNumber=Math.max(t,r.lastCheckedBlockNumber):r.lastCheckedBlockNumber=t},Fe=({hash:e,receipt:t})=>{console.log(`Finalizing  tx ${e}`);const r=Ae.value[_e.value]?.[e];r&&(r.receipt=t,r.confirmedTime=(new Date).getTime(),r.onSuccess&&r.onSuccess instanceof Function&&r.onSuccess(t),Pe.emit(r.hash,{...r,receipt:t,error:null}))},je=({hash:e,error:t})=>{console.log(`Failing  tx ${e}`);const r=Ae.value[_e.value]?.[e];r&&(r.onError&&r.onError instanceof Function&&r.onError(t),Pe.emit(r.hash,{...r,error:t,receipt:null}))},ze=(0,i.Fl)((()=>Ae.value[_e.value??x.MAINNET])),Re=(0,i.Fl)((()=>{const e=Ae.value[_e.value??x.MAINNET];return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.receipt)))}));function Le(e){return(new Date).getTime()-e.addedTime<864e5}function Ze(e){if(e.receipt)return!1;if(!e.lastCheckedBlockNumber)return!0;const t=ce.value-e.lastCheckedBlockNumber;console.log(`blocksSinceCheck ${t}`);const r=((new Date).getTime()-e.checked)/1e3/60;if(r>5)return!0;const n=((new Date).getTime()-e.addedTime)/1e3/60;return n>10?t>9:!(n>10)||t>2}const Ue=e=>{console.log(`checking tx: ${e}`);const{infuraWss:t}=te();let r=Ee.push(e);t.value.eth.getTransactionReceipt(e).then((t=>{Ee.splice(r-1,1),t?Fe({hash:t.transactionHash,receipt:t}):Me({hash:e,blockNumber:ce})})).catch((t=>{Ee.splice(r-1,1),je({hash:e,error:t})}))},De=()=>{if(Be.value)return;Be.value=!0;const{infuraWss:e}=te();return(0,i.YP)([ce,Te],((t,r)=>{r&&_e.value&&e.value&&t?Object.keys(Re.value).filter((e=>!Ee.includes(e))).filter((e=>Ze(Re.value[e]))).forEach((e=>{Ue(e)})):console.log(`check tx failed isValidNetwork: ${r}\n\t\t\t\tchain_id.value: ${_e.value} infura: ${e.value} lastBlockNumber: ${t}`)})),null};var qe=r(54271);const Ye=e=>(0,qe.Dh)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),He=e=>(0,qe.bK)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),Ve=e=>(0,qe.cp)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),Ke=e=>(0,qe.$_)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),Ge=e=>(0,qe.GQ)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e))));var Je=r(64604);const Qe={bg:String,backgroundColor:String,borderColor:String,color:String,borderRadius:Number,borderWidth:Number,f:[Number,Array,String],fontSize:[Number,Array,String],m:[Number,Array,String],mx:[Number,Array,String],my:[Number,Array,String],mt:[Number,Array,String],mr:[Number,Array,String],ml:[Number,Array,String],mb:[Number,Array,String],margin:[Number,Array,String],marginTop:[Number,Array,String],marginRight:[Number,Array,String],marginLeft:[Number,Array,String],marginBottom:[Number,Array,String],p:[Number,Array,String],py:[Number,Array,String],px:[Number,Array,String],pt:[Number,Array,String],pr:[Number,Array,String],pl:[Number,Array,String],pb:[Number,Array,String],padding:[Number,Array,String],paddingTop:[Number,Array,String],paddingRight:[Number,Array,String],paddingLeft:[Number,Array,String],paddingBottom:[Number,Array,String],width:[String,Number,Array,String],w:[String,Number,Array,String],boxShadow:[String,Number],fontWeight:[String,Number],letterSpacing:Number,lineHeight:Number,flex:[String,Array],align:[String,Array],justify:[String,Array],wrap:[String,Array],flexDirection:[String,Array],alignSelf:[String,Array]};var Xe=(e={})=>({...Qe,...e});const et=e=>(0,Je.ZP)(e.sx)(e.theme),tt=e=>(0,Je.ZP)(e.__css)(e.theme),rt=({theme:e,variant:t,tx:r="variants"})=>(0,Je.ZP)((0,Je.U2)(e,r+"."+t,(0,Je.U2)(e,t)))(e),nt=(0,g.ZP)("div",Xe({__css:Object,css:String,sx:Object,tx:String,variant:String}))`
  box-sizing:border-box;
  margin: 0;
  min-width: 0;
  ${et}
  ${tt}
  ${rt}
  ${Ye}
  ${He}
  ${Ve}
  ${Ke}
  ${Ge}
`,ot=((0,g.ZP)(nt)`
display:flex;
`,(0,i.Uk)((0,p.zw)(" ")+" "));function it(e,t,r,n,o,a){const l=(0,i.up)("NetworkIcon"),s=(0,i.up)("Text"),c=(0,i.up)("Web3StatusError"),d=(0,i.up)("PendingLoader"),u=(0,i.up)("RowBetween"),h=(0,i.up)("StatusIcon"),g=(0,i.up)("IconWrapper"),m=(0,i.up)("Web3StatusConnected"),w=(0,i.up)("Web3StatusConnect");return n.isValidNetwork?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[n.active&&n.account?((0,i.wg)(),(0,i.j4)(m,{key:0,id:"web3-status-connected",pending:n.hasPendingTransactions,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[n.hasPendingTransactions?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.pendingLength)+" "+(0,p.zw)(e.$$t("Pending")),1)])),_:1}),ot,(0,i.Wm)(d,{stroke:"white"})])),_:1})):((0,i.wg)(),(0,i.j4)(s,{key:1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.shortenAddress(n.account)),1)])),_:1})),!n.hasPendingTransactions&&n.active?((0,i.wg)(),(0,i.j4)(g,{key:2,size:16},{default:(0,i.w5)((()=>[(0,i.Wm)(h)])),_:1})):(0,i.kq)("",!0)])),_:1},8,["pending","onClick"])):n.error?((0,i.wg)(),(0,i.j4)(c,{key:1,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[(0,i.Wm)(l),n.error?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.error),1)])),_:1})):(0,i.kq)("",!0)])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(w,{key:2,id:"connect-wallet",faded:!n.account,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(e.$t("Connect"))+" ",1),n.isMobileScreen?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,p.zw)(e.$t("Wallet")),1)],64))])),_:1})])),_:1},8,["faded","onClick"]))],64)):((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(e.$t("Wrong Network")),1)])),_:1})])),_:1}))}var at=r(35386),lt={name:"TrashIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-trash",...o})}},st={name:"ActivityIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-activity",...o})}},ct={name:"ArrowDownIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-arrow-down",...o})}},dt={name:"CheckCircleIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle",...o})}},ut={name:"ChevronDownIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<polyline points="6 9 12 15 18 9"></polyline>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-down",...o})}},pt={name:"CopyIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-copy",...o})}},ht={name:"ExternalLinkIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-external-link",...o})}},gt={name:"TriangleIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-triangle",...o})}},mt={name:"XIcon",props:{size:{type:String,default:"24",validator:e=>!isNaN(e)||e.length>=2&&!isNaN(e.slice(0,e.length-1))&&"x"===e.slice(-1)}},functional:!0,setup:function(e,{attrs:t}){const{size:r}=(0,I.BK)(e),n=(0,i.Fl)((()=>"x"===r.value.slice(-1)?r.value.slice(0,r.value.length-1)+"em":parseInt(r.value)+"px")),o=(0,I.qj)({...t,width:(0,i.Fl)((()=>t.width??n.value)),height:(0,i.Fl)((()=>t.height??n.value))});return()=>(0,i.h)("svg",{innerHTML:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x",...o})}};function wt(e,t,r,n,o,a){const l=(0,i.up)("Box");return(0,i.wg)(),(0,i.j4)(l,{as:"button",tx:"buttons",variant:"primary",__css:e.css},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["__css"])}var ft={components:{Box:nt},data(){return{}}},vt=r(40089);const bt=(0,vt.Z)(ft,[["render",wt]]);var yt=bt;const xt=(0,g.ZP)(yt,{padding:String,width:String,borderRadius:String,altDisabledStyle:Boolean})`
	padding: ${({padding:e})=>e||"18px"};
	width: ${({width:e})=>e||"100%"};
	font-weight: 500;
	text-align: center;
	border-radius: 20px;
	border-radius: ${({borderRadius:e})=>e&&e};
	outline: none;
	border: 1px solid transparent;
	color: white;
	text-decoration: none;
	display: flex;
	justify-content: center;
	flex-wrap: nowrap;
	align-items: center;
	cursor: pointer;
	position: relative;
	z-index: 1;
	&:disabled {
		cursor: auto;
	}

	> * {
		user-select: none;
	}
`,kt=(0,g.ZP)(xt)`
	background-color: ${({theme:e})=>e.primary1};
	color: white;
	&:focus {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
		background-color: ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
	}
	&:hover {
		background-color: ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,at.darken)(.1,e.primary1)};
		background-color: ${({theme:e})=>(0,at.darken)(.1,e.primary1)};
	}
	&:disabled {
		background-color: ${({theme:e,altDisabledStyle:t,disabled:r})=>t?r?e.bg3:e.primary1:e.bg3};
		color: ${({theme:e,altDisabledStyle:t,disabled:r})=>t?r?e.text3:"white":e.text3};
		cursor: auto;
		box-shadow: none;
		border: 1px solid transparent;
		outline: none;
		opacity: ${({altDisabledStyle:e})=>e?"0.5":"1"};
	}
`,Ct=((0,g.ZP)(xt)`
	background-color: ${({theme:e})=>e.primary5};
	color: ${({theme:e})=>e.primaryText1};
	font-size: 16px;
	font-weight: 500;
	&:focus {
		box-shadow: 0 0 0 1pt
			${({theme:e,disabled:t})=>!t&&(0,at.darken)(.03,e.primary5)};
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.03,e.primary5)};
	}
	&:hover {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.03,e.primary5)};
	}
	&:active {
		box-shadow: 0 0 0 1pt
			${({theme:e,disabled:t})=>!t&&(0,at.darken)(.05,e.primary5)};
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.05,e.primary5)};
	}
	:disabled {
		opacity: 0.4;
		:hover {
			cursor: auto;
			background-color: ${({theme:e})=>e.primary5};
			box-shadow: none;
			border: 1px solid transparent;
			outline: none;
		}
	}
`,(0,g.ZP)(xt)`
	background-color: ${({theme:e})=>e.bg3};
	color: ${({theme:e})=>e.text2};
	font-size: 16px;
	font-weight: 500;
	&:focus {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.05,e.bg4)};
	}
	&:hover {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.05,e.bg4)};
	}
	&:active {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,at.darken)(.1,e.bg4)};
	}
`,(0,g.ZP)(xt)`
	border: 1px solid ${({theme:e})=>e.primary4};
	color: ${({theme:e})=>e.primary1};
	background-color: transparent;
	font-size: 16px;
	border-radius: 12px;
	padding: ${({padding:e})=>e||"10px"};

	&:focus {
		box-shadow: 0 0 0 1pt ${({theme:e})=>e.primary4};
		border: 1px solid ${({theme:e})=>e.primary3};
	}
	&:hover {
		border: 1px solid ${({theme:e})=>e.primary3};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${({theme:e})=>e.primary4};
		border: 1px solid ${({theme:e})=>e.primary3};
	}
	&:disabled {
		opacity: 50%;
		cursor: auto;
	}
	a:hover {
		text-decoration: none;
	}
`),Nt=((0,g.ZP)(xt)`
	background-color: ${({theme:e})=>e.primary1};
	color: white;

	&:focus {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
		background-color: ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
	}
	&:hover {
		background-color: ${({theme:e})=>(0,at.darken)(.05,e.primary1)};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,at.darken)(.1,e.primary1)};
		background-color: ${({theme:e})=>(0,at.darken)(.1,e.primary1)};
	}
	&:disabled {
		background-color: ${({theme:e})=>e.primary1};
		opacity: 50%;
		cursor: auto;
	}
`,(0,g.ZP)(kt)`
	color: white;
	padding: 4px 8px;
	height: 36px;
	font-weight: 500;
	background-color: ${({theme:e})=>e.bg3};
	background: radial-gradient(
			174.47% 188.91% at 1.84% 0%,
			#ff007a 0%,
			#2172e5 100%
		),
		#edeef2;
	width: fit-content;
	position: relative;
	cursor: pointer;
	border: none;
	white-space: no-wrap;
	:hover {
		opacity: 0.8;
	}
	:active {
		opacity: 0.9;
	}
`,(0,g.ZP)(xt)`
	border: 1px solid ${({theme:e})=>e.bg2};
	background-color: transparent;
	color: ${({theme:e})=>e.text1};

	&:focus {
		box-shadow: 0 0 0 1px ${({theme:e})=>e.bg4};
	}
	&:hover {
		box-shadow: 0 0 0 1px ${({theme:e})=>e.bg4};
	}
	&:active {
		box-shadow: 0 0 0 1px ${({theme:e})=>e.bg4};
	}
	&:disabled {
		opacity: 50%;
		cursor: auto;
	}
`,(0,g.ZP)(xt)`
	background-color: transparent;
	color: ${({theme:e})=>e.primary1};
	display: flex;
	justify-content: center;
	align-items: center;

	&:focus {
		text-decoration: underline;
	}
	&:hover {
		text-decoration: none;
	}
	&:active {
		text-decoration: none;
	}
	&:disabled {
		opacity: 50%;
		cursor: auto;
	}
`,(0,g.ZP)(xt)`
	border: 1px solid #edeef2;
	background-color: ${({theme:e})=>e.bg1};
	color: black;

	&:focus {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		box-shadow: 0 0 0 1pt ${(0,at.darken)(.05,"#edeef2")};
	}
	&:hover {
		box-shadow: 0 0 0 1pt ${(0,at.darken)(.1,"#edeef2")};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${(0,at.darken)(.1,"#edeef2")};
	}
	&:disabled {
		opacity: 50%;
		cursor: auto;
	}
`,["src","alt"]);function It(e,t,r,n,o,a){const l=(0,i.up)("Identicon");return n.isInjected?((0,i.wg)(),(0,i.j4)(l,{key:0})):((0,i.wg)(),(0,i.iD)("img",{key:1,src:n.provider.logo,alt:n.provider.name},null,8,Nt))}function $t(e,t,r,n,o,a){const l=(0,i.up)("Jazzicon"),s=(0,i.up)("StyledIdenticon");return n.account?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{diameter:16,address:n.account},null,8,["address"])])),_:1})):(0,i.kq)("",!0)}var St=r(78919);const Et=g.ZP.div`
		height: 1rem;
		width: 1rem;
		border-radius: 1.125rem;
		background-color: ${({theme:e})=>e.bg4};
		font-size: initial;
	`;var _t={components:{Jazzicon:St.Z,StyledIdenticon:Et},setup(){const{account:e}=W();return{account:e}}};const Wt=(0,vt.Z)(_t,[["render",$t]]);var Tt=Wt,Pt={components:{Identicon:Tt},setup(){const{providerInfo:e}=W(),t=(0,i.Fl)((()=>"injected"==e.value.id));return{provider:e,isInjected:t}}};const At=(0,vt.Z)(Pt,[["render",It]]);var Bt=At;const Ot=(0,i._)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1);function Mt(e,t,r,n,o,a){const l=(0,i.up)("StyledSVG");return(0,i.wg)(),(0,i.j4)(l,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:r.size,stroke:r.stroke},{default:(0,i.w5)((()=>[Ot])),_:1},8,["xmlns","size","stroke"])}const Ft=g.F4`
	        	  from {
	        		transform: rotate(0deg);
	        	  }
	        	  to {
	        		transform: rotate(360deg);
	        	  }
	        	`,jt=(0,g.ZP)("svg",{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}})`
		animation: 2s ${Ft} linear infinite;
		height: ${({size:e})=>e};
		width: ${({size:e})=>e};
		path {
			stroke: ${({stroke:e,theme:t})=>e||t.primary1};
		}
	`;var zt={components:{StyledSVG:jt},props:{size:{type:String,default:"16px"},stroke:{type:String,default:null}}};const Rt=(0,vt.Z)(zt,[["render",Mt]]);var Lt=Rt;const Zt=(0,g.ZP)(nt,{width:{type:String,required:!1,default:"100%"},align:{type:String,required:!1,default:"center"},justify:{type:String,required:!1,default:"flex-start"},padding:{type:String,required:!1,default:void 0},border:{type:String,required:!1,default:void 0},borderRadius:{type:String,required:!1,default:void 0}})`
	width: ${({width:e})=>e};
	display: flex;
	padding: 0;
	align-items: ${({align:e})=>e};
	justify-content: ${({justify:e})=>e};
	padding: ${({padding:e})=>e};
	border: ${({border:e})=>e};
	border-radius: ${({borderRadius:e})=>e};
`,Ut=(0,g.ZP)(Zt)`
	justify-content: space-between;
`,Dt=(g.ZP.div`
	display: flex;
	align-items: flex-end;
`,(0,g.ZP)(Zt,{gap:{type:String,required:!1,default:void 0},justify:{type:String,required:!1,default:void 0}})`
	flex-wrap: wrap;
	${({gap:e})=>e&&`margin:-${e};`}
	${({justify:e})=>e&&`justify-content: ${e};`}
  & > * {
		margin: ${({gap:e})=>e} !important;
	}
`),qt=(0,g.ZP)(Zt,{gap:{type:String,required:!1,default:void 0},justify:{type:String,required:!1,default:void 0}})`
	width: fit-content;
	${({gap:e})=>e&&`margin: -${e};`}
`;const Yt=(0,g.ZP)(Lt)`
		margin-top: 4px;
	`,Ht=(0,g.ZP)("div",{size:Number})`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		& > * {
			height: ${({size:e})=>e?e+"px":"32px"};
			width: ${({size:e})=>e?e+"px":"32px"};
		}
	`,Vt=(0,g.ZP)(Ct)`
		${({theme:e})=>e.flexRowNoWrap}
		width: 100%;
		align-items: center;
		padding: 0.5rem;
		border-radius: 14px;
		cursor: pointer;
		user-select: none;
		height: 36px;
		margin-right: 2px;
		margin-left: 1px;
		:focus {
			outline: none;
		}
	`,Kt=(0,g.ZP)(Vt)`
		background-color: ${({theme:e})=>e.red1};
		border: 1px solid ${({theme:e})=>e.red1};
		color: ${({theme:e})=>e.white};
		font-weight: 500;
		:hover,
		:focus {
			background-color: ${({theme:e})=>(0,at.darken)(.1,e.red1)};
		}
	`,Gt=(0,g.ZP)(Vt,{faded:Boolean})`
		background-color: ${({theme:e})=>e.primary4};
		border: none;

		color: ${({theme:e})=>e.primaryText1};
		font-weight: 500;

		:hover,
		:focus {
			border: 1px solid ${({theme:e})=>(0,at.darken)(.05,e.primary4)};
			color: ${({theme:e})=>e.primaryText1};
		}

		${({faded:e})=>e&&g.iv`
				background-color: ${({theme:e})=>e.primary5};
				border: 1px solid ${({theme:e})=>e.primary5};
				color: ${({theme:e})=>e.primaryText1};

				:hover,
				:focus {
					border: 1px solid ${({theme:e})=>(0,at.darken)(.05,e.primary4)};
					color: ${({theme:e})=>(0,at.darken)(.05,e.primaryText1)};
				}
			`}
	`,Jt=(0,g.ZP)(Vt,{pending:Boolean})`
		background-color: ${({pending:e,theme:t})=>e?t.primary1:t.bg1};
		border: 1px solid
			${({pending:e,theme:t})=>e?t.primary1:t.bd1};
		color: ${({pending:e,theme:t})=>e?t.white:t.text1};
		font-weight: 600;
		:hover,
		:focus {
			border: 1px solid ${({theme:e})=>(0,at.darken)(.05,e.bd3)};
			:focus {
				border: 1px solid
					${({pending:e,theme:t})=>e?(0,at.darken)(.1,t.primary1):(0,at.darken)(.1,t.bg2)};
			}
		}
	`,Qt=g.ZP.p`
		flex: 1 1 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 0.5rem 0 0.25rem;
		font-size: 1rem;
		width: fit-content;
		font-weight: 500;
	`,Xt=(0,g.ZP)(st)`
		margin-left: 0.25rem;
		margin-right: 0.5rem;
		width: 16px;
		height: 16px;
	`;var er={components:{Web3StatusError:Kt,IconWrapper:Ht,Web3StatusConnect:Gt,Web3StatusConnected:Jt,Text:Qt,NetworkIcon:Xt,StatusIcon:Bt,PendingLoader:Yt,RowBetween:Ut},setup(){function e(e,t){return t.addedTime-e.addedTime}const{account:t,error:r,active:n,isValidNetwork:o}=W(),a=(0,i.Fl)((()=>{const t=Object.values(ze?.value??{});return t.filter(Le).sort(e)})),l=(0,i.Fl)((()=>!!Object.keys(Re.value).length)),s=(0,i.Fl)((()=>Object.keys(Re.value).length)),{toggle:c,isOpen:d}=be(),u=(0,i.Fl)((()=>a?.value?.filter((e=>e.receipt))?.map((e=>e.hash))??[])),p=(0,m.ach)("(min-width: 768)");return{confirmed:u,isOpen:d,isMobileScreen:p,toggleWalletModal:c,hasPendingTransactions:l,active:n,error:r,account:t,isValidNetwork:o,shortenAddress:ke,pending:Re,pendingLength:s}}};const tr=(0,vt.Z)(er,[["render",it]]);var rr=tr;function nr(e,t,r,o,a,l){const s=(0,i.up)("CloseColor"),c=(0,i.up)("CloseIcon"),d=(0,i.up)("HeaderRow"),u=(0,i.up)("ContentWrapper"),h=(0,i.up)("UpperSection"),g=(0,i.up)("AccountDetails"),m=(0,i.up)("HoverText"),w=(0,i.up)("PendingView"),f=(0,i.up)("ConnectModal"),v=(0,i.up)("wrapper"),b=(0,i.up)("ModalOverlay");return(0,i.wg)(),(0,i.j4)(b,{"is-open":a.showing},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(v,null,{default:(0,i.w5)((()=>[o.error?((0,i.wg)(),(0,i.j4)(h,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Error Connecting")),1)])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("h5",null,(0,p.zw)(l.t("Error connecting. Try refreshing the page")),1)])),_:1})])),_:1})):(0,i.kq)("",!0),o.isValidNetwork?o.isValidNetwork&&o.connected&&o.active&&"account"===o.walletView?((0,i.wg)(),(0,i.j4)(g,{key:2,connector:o.provider,"ens-name":e.ENSName,address:o.account,"chain-id":o.chainId},null,8,["connector","ens-name","address","chain-id"])):((0,i.wg)(),(0,i.j4)(h,{key:3},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),o.connected&&o.active&&"account"!==o.walletView?((0,i.wg)(),(0,i.j4)(d,{key:0,color:"blue"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{onClick:t[0]||(t[0]=(0,n.iM)((e=>l.goBAck()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Back")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(d,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Connect to a wallet")),1)])),_:1})])),_:1})),"pending"===o.walletView?((0,i.wg)(),(0,i.j4)(u,{key:2},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{connector:a.pendingWallet,error:l.pendingError},null,8,["connector","error"])])),_:1})):((0,i.wg)(),(0,i.j4)(f,{key:3,provider:o.provider,providers:l.providers},null,8,["provider","providers"]))])),_:1})):((0,i.wg)(),(0,i.j4)(h,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Invalid Network")),1)])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("h5",null,(0,p.zw)(l.t("Your Wallets Network is not supported")),1)])),_:1})])),_:1}))])),_:1},512),[[n.F8,a.showing]])])),_:1},8,["is-open"])}const or=e=>Object.prototype.hasOwnProperty.call(e,"result")?e.result:e;var ir=r(80354),ar=r.n(ir),lr=r(69049),sr=r.n(lr);g.ZP.button`
	outline: none;
	border: none;
	font-size: inherit;
	padding: 0;
	margin: 0;
	background: none;
	cursor: pointer;
	:hover {
		opacity: 0.7;
	}
	:focus {
		text-decoration: underline;
		outline: 0;
	}
`,(0,g.ZP)("button",{warning:Boolean})`
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 3rem;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${({warning:e,theme:t})=>e?t.red1:t.primary1}
  color: ${({theme:e})=>e.white};
  width: 100%;
  :hover,
  :focus {
    background-color: ${({warning:e,theme:t})=>(0,at.darken)(.05,e?t.red1:t.primary1)};
  }
  :active {
    background-color: ${({warning:e,theme:t})=>(0,at.darken)(.1,e?t.red1:t.primary1)};
  }
  :disabled {
    background-color: ${({theme:e})=>e.bg1};
    color: ${({theme:e})=>e.text4};
    cursor: auto;
  }
`,(0,g.ZP)(mt)`
	cursor: pointer;
`,(0,g.ZP)(mt)`
	cursor: pointer;
`,(0,g.ZP)("div",{stroke:{type:String,required:!1,default:""},marginRight:{type:String,required:!1,default:""},marginLeft:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"20px"}})`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({size:e})=>e};
	height: ${({size:e})=>e};
	margin-right: ${({marginRight:e})=>e||0};
	margin-left: ${({marginLeft:e})=>e||0};
	& > * {
		stroke: ${({theme:e,stroke:t})=>t||e.blue1};
	}
`;const cr=(0,g.ZP)("button",{disabled:Boolean})`
	border: none;
	text-decoration: none;
	background: none;

	cursor: ${({disabled:e})=>e?"default":"pointer"};
	color: ${({theme:e,disabled:t})=>t?e.text2:e.primary1};
	font-weight: 500;

	:hover {
		text-decoration: ${({disabled:e})=>e?null:"underline"};
	}

	:focus {
		outline: none;
		text-decoration: ${({disabled:e})=>e?null:"underline"};
	}

	:active {
		text-decoration: none;
	}
`,dr=(0,g.ZP)("a")`
	text-decoration: none;
	cursor: pointer;
	color: ${({theme:e})=>e.primary1};
	font-weight: 500;

	:hover {
		text-decoration: underline;
	}

	:focus {
		outline: none;
		text-decoration: underline;
	}

	:active {
		text-decoration: none;
	}
`,ur=g.ZP.a`
	text-decoration: none;
	cursor: pointer;
	color: ${({theme:e})=>e.primary1};
	font-weight: 500;

	:hover {
		text-decoration: underline;
	}

	:focus {
		outline: none;
		text-decoration: underline;
	}

	:active {
		text-decoration: none;
	}
`,pr=(g.ZP.a`
	text-decoration: none;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	display: flex;

	:hover {
		text-decoration: none;
		opacity: 0.7;
	}

	:focus {
		outline: none;
		text-decoration: none;
	}

	:active {
		text-decoration: none;
	}
`,(0,g.ZP)(ht)`
	height: 16px;
	width: 18px;
	margin-left: 10px;
	stroke: ${({theme:e})=>e.blue1};
`,(0,g.ZP)(lt)`
	height: 16px;
	width: 18px;
	margin-left: 10px;
	stroke: ${({theme:e})=>e.text3};

	cursor: pointer;
	align-items: center;
	justify-content: center;
	display: flex;

	:hover {
		opacity: 0.7;
	}
`,g.F4`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`),hr=(g.ZP.img`
	animation: ${pr} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
	padding: 2rem 0 0 0;
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`,g.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),gr=g.ZP.img`
	animation: 2s ${hr} linear infinite;
	width: 16px;
	height: 16px;
`,mr=((0,g.ZP)(dr)`
	color: ${({theme:e})=>e.text1};
`,(0,g.ZP)(gr,{size:String})`
	height: ${({size:e})=>e};
	width: ${({size:e})=>e};
`,g.ZP.span`
	${({theme:e})=>e.mediaWidth.upToSmall`
    display: none;
  `};
`,g.ZP.span`
	${({theme:e})=>e.mediaWidth.upToExtraSmall`
    display: none;
  `};
`,g.ZP.span`
	display: none;
	${({theme:e})=>e.mediaWidth.upToExtraSmall`
    display: block;
  `};
`,g.ZP.div`
	background-color: ${({theme:e})=>e.bg2};
	padding: 2rem;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	${({theme:e})=>e.mediaWidth.upToMedium`
padding: 1 rem `};
`);function wr(e,t,r,n,o,a){const l=(0,i.up)("StyledLink");return(0,i.wg)(),(0,i.j4)(l,{target:r.target,rel:r.rel},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["target","rel"])}var fr={components:{StyledLink:ur},props:{target:{type:String,required:!1,default:"_blank"},rel:{type:String,required:!1,default:"noopener noreferrer"}}};const vr=(0,vt.Z)(fr,[["render",wr]]);var br=vr;function yr(e,t,r,n,o,a){const l=(0,i.up)("TxtDiv");return(0,i.wg)(),(0,i.j4)(l,{istyles:a.textStyle},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["istyles"])}const xr=(0,g.ZP)("div",{istyles:Object})`
		box-sizing: border-box;
		margin: 0px 0px 0px 6px;
		min-width: 0px;
		${e=>g.iv`
				${e.istyles}
			`}
	`;var kr={components:{TxtDiv:xr},inheritAttrs:!1,props:{type:{type:String,required:!1,default:""},fontWeight:{type:Number,required:!1,default:null},fontSize:{type:String,required:!1,default:null},error:{type:Boolean,required:!1,default:!1}},setup(){const e=Pr();return{theme:e}},computed:{textStyle(){return{fontWeight:this.fontWeight??500,fontSize:this.fontSize??"14px",...this.styleType,...this.$attrs,...this.color}},color(){return this.$attrs.color?.startsWith("#")||this.$attrs.color?.startsWith("rgb")?{color:this.$attrs.color}:this.theme[this.$attrs?.color]?{color:this.theme[this.$attrs?.color]}:{}},styleType(){switch(this.type.toLowerCase()){case"main":return{color:this.theme["text2"]};case"link":return{color:this.theme["primary1"]};case"black":return{color:this.theme["text1"]};case"white":return{color:this.theme["white"]};case"body":return{fontWeight:this.fontWeight??400,fontSize:this.fontSize??"16px"};case"largeHeader":return{fontWeight:this.fontWeight??600,fontSize:this.fontSize??"24px"};case"mediumHeader":return{fontSize:this.fontSize??"20px"};case"subHeader":return{fontWeight:this.fontWeight??400,fontSize:this.fontSize??"14px"};case"small":return{fontSize:this.fontSize??"11px"};case"blue":return{color:this.theme["blue1"]};case"yellow":return{color:this.theme["yellow1"]};case"darkGray":return{color:this.theme["text3"]};case"gray":return{color:this.theme["bg3"]};case"italic":return{fontSize:"12px",fontStyle:"italic",color:this.theme["text2"]};case"error":return{fontSize:"12px",color:this.error?this.theme["red1"]:this.theme["text2"]};default:return{}}}}};const Cr=(0,vt.Z)(kr,[["render",yr]]);var Nr=Cr;const Ir=(0,m.e7M)(),$r=(0,G.OT)(Ir),Sr={upToExtraSmall:500,upToSmall:720,upToMedium:960,upToLarge:1280},Er=Object.keys(Sr).reduce(((e,t)=>(e[t]=(e,r,n)=>g.iv`
			@media (max-width: ${Sr[t]}px) {
				${(0,g.iv)(e,r,n)}
			}
		`,e)),{}),_r="#FFFFFF",Wr="#000000",Tr=(0,I.qj)({colors:null,white:_r,black:Wr,text1:(0,i.Fl)((()=>Ir.value?"#FFFFFF":"#000000")),text2:(0,i.Fl)((()=>Ir.value?"#C3C5CB":"#565A69")),text3:(0,i.Fl)((()=>Ir.value?"#6C7284":"#888D9B")),text4:(0,i.Fl)((()=>Ir.value?"#565A69":"#C3C5CB")),bg0:(0,i.Fl)((()=>Ir.value?"#191B1F":"#FFF")),bg1:(0,i.Fl)((()=>Ir.value?"#212429":"#F7F8FA")),bg2:(0,i.Fl)((()=>Ir.value?"#2C2F36":"#EDEEF2")),bg3:(0,i.Fl)((()=>Ir.value?"#40444F":"#CED0D9")),bg4:(0,i.Fl)((()=>Ir.value?"#565A69":"#888D9B")),bd0:(0,i.Fl)((()=>Ir.value?"#191B1F":"#FFF")),bd1:(0,i.Fl)((()=>Ir.value?"#212429":"#F7F8FA")),bd2:(0,i.Fl)((()=>Ir.value?"#2C2F36":"#EDEEF2")),bd3:(0,i.Fl)((()=>Ir.value?"#40444F":"#CED0D9")),modalBG:(0,i.Fl)((()=>Ir.value?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)")),primary1:(0,i.Fl)((()=>Ir.value?"#2172E5":"#E8006F")),primary3:(0,i.Fl)((()=>Ir.value?"#4D8FEA":"#FF99C9")),primary4:(0,i.Fl)((()=>Ir.value?"#376bad70":"#F6DDE8")),primary5:(0,i.Fl)((()=>Ir.value?"#153d6f70":"#FDEAF1")),primaryText1:(0,i.Fl)((()=>Ir.value?"#5090ea":"#D50066")),red1:"#FD4040",green1:"#27AE60",yellow2:"#F3841E",blue1:"#a78253",grids:{sm:8,md:12,lg:24},shadow1:(0,i.Fl)((()=>Ir.value?"#000":"#2F80ED")),mediaWidth:{...Er},flexColumnNoWrap:g.iv`
			display: flex;
			flex-flow: column nowrap;
		`,flexRowNoWrap:g.iv`
			display: flex;
			flex-flow: row nowrap;
		`});function Pr(){const e=(0,i.f3)("theme");if(!e)throw new Error("No Theme provided!");return e}const Ar=["src"],Br={key:0},Or={key:1},Mr={key:0},Fr=(0,i._)("span",{style:{marginLeft:"4px"}},"Copy Address",-1),jr=(0,i._)("span",{style:{marginLeft:"4px"}},"View on Etherscan",-1),zr=(0,i._)("span",{style:{marginLeft:"4px"}},"View on Etherscan",-1),Rr=(0,i.Uk)("Recent Transactions"),Lr=(0,i.Uk)("(clear all)"),Zr=(0,i.Uk)("Your transactions will appear here...");function Ur(e,t,r,o,a,l){const s=(0,i.up)("CloseColor"),c=(0,i.up)("CloseIcon"),d=(0,i.up)("HeaderRow"),u=(0,i.up)("WalletName"),h=(0,i.up)("WalletAction"),g=(0,i.up)("AccountGroupingRow"),m=(0,i.up)("Jazzicon"),w=(0,i.up)("MainWalletAction"),f=(0,i.up)("IconWrapper"),v=(0,i.up)("AccountControl"),b=(0,i.up)("Copy"),y=(0,i.up)("LinkIcon"),x=(0,i.up)("AddressLink"),k=(0,i.up)("InfoCard"),C=(0,i.up)("YourAccount"),N=(0,i.up)("AccountSection"),I=(0,i.up)("UpperSection"),$=(0,i.up)("TextWrapper"),S=(0,i.up)("LinkStyledButton"),E=(0,i.up)("AutoRow"),_=(0,i.up)("Transaction"),W=(0,i.up)("TransactionListWrapper"),T=(0,i.up)("LowerSection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(I,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.toggleWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Account")),1)])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Connected with"))+" "+(0,p.zw)(r.connector.name),1)])),_:1}),(0,i._)("div",null,["injected"!==r.connector.type?((0,i.wg)(),(0,i.j4)(h,{key:0,style:(0,p.j5)({fontSize:".825rem",fontWeight:400,marginRight:"8px"}),onClick:t[0]||(t[0]=(0,n.iM)((t=>e.logOut()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Disconnect")),1)])),_:1},8,["style"])):(0,i.kq)("",!0),(0,i.Wm)(h,{style:(0,p.j5)({fontSize:".825rem",fontWeight:400}),onClick:t[1]||(t[1]=(0,n.iM)((e=>l.setWalletView("options")),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Change")),1)])),_:1},8,["style"])])])),_:1}),(0,i.Wm)(g,{id:"web3-account-identifier-row"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(f,{size:"16"},{default:(0,i.w5)((()=>["injected"===r.connector.type?((0,i.wg)(),(0,i.j4)(m,{key:0,diameter:24,address:r.address},null,8,["address"])):((0,i.wg)(),(0,i.iD)("img",{key:1,src:r.connector.logo,alt:"wallet connect logo"},null,8,Ar)),"portis"===r.connector.id?((0,i.wg)(),(0,i.j4)(w,{key:2,onClick:t[2]||(t[2]=e=>r.connector._portis.showPortis())},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Show Portis")),1)])),_:1})):(0,i.kq)("",!0)])),_:1}),e.ENSName?((0,i.wg)(),(0,i.iD)("p",Br,(0,p.zw)(e.ENSName),1)):((0,i.wg)(),(0,i.iD)("p",Or,(0,p.zw)(r.address&&a.shortenAddress(r.address)),1))])])),_:1})])),_:1}),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[r.address?((0,i.wg)(),(0,i.iD)("div",Mr,[(0,i.Wm)(b,{"to-copy":r.address},{default:(0,i.w5)((()=>[Fr])),_:1},8,["to-copy"]),r.ensName?((0,i.wg)(),(0,i.j4)(x,{key:0,"has-e-n-s":!!r.ensName,"is-e-n-s":!0,href:a.getEtherscanLink(r.chainId,r.ensName,"address")},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"16"}),jr])),_:1},8,["has-e-n-s","href"])):(0,i.kq)("",!0),(0,i.Wm)(x,{"has-e-n-s":!!r.ensName,"is-e-n-s":!1,href:a.getEtherscanLink(r.chainId,r.address,"address")},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"16"}),zr])),_:1},8,["has-e-n-s","href"])])):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o.txs.length>0?((0,i.wg)(),(0,i.j4)(T,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{mb:"1rem",style:{justifyContent:"space-between"}},{default:(0,i.w5)((()=>[(0,i.Wm)($,{type:"body"},{default:(0,i.w5)((()=>[Rr])),_:1}),(0,i.Wm)(S,{onClick:(0,n.iM)(o.clearAllTransactions,["prevent"])},{default:(0,i.w5)((()=>[Lr])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.txs,(t=>((0,i.wg)(),(0,i.j4)(_,{key:t.hash,link:a.getEtherscanLink(r.chainId,e.hash,"transaction"),tx:t},null,8,["link","tx"])))),128))])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(T,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)($,{type:"body",color:l.theme.text1},{default:(0,i.w5)((()=>[Zr])),_:1},8,["color"])])),_:1}))],64)}function Dr(e,t,r,o,a,l){const s=(0,i.up)("CheckCircle"),c=(0,i.up)("TransactionStatusText"),d=(0,i.up)("Copy",!0),u=(0,i.up)("CopyIcon");return(0,i.wg)(),(0,i.j4)(u,{onClick:t[0]||(t[0]=(0,n.iM)((e=>l.copyThis(r.toCopy)),["prevent"]))},{default:(0,i.w5)((()=>[a.isCopied?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{size:"16"}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Copied")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(c,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{size:"16"})])),_:1})),a.isCopied?(0,i.kq)("",!0):(0,i.WI)(e.$slots,"default",{key:2})])),_:3})}var qr=r(51945),Yr=r.n(qr);const Hr=(0,g.ZP)(cr)`
		color: ${({theme:e})=>e.text3};
		flex-shrink: 0;
		display: flex;
		text-decoration: none;
		font-size: 0.825rem;
		:hover,
		:active,
		:focus {
			text-decoration: none;
			color: ${({theme:e})=>e.text2};
		}
	`,Vr=g.ZP.span`
		margin-left: 0.25rem;
		font-size: 0.825rem;
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
	`;var Kr={components:{TransactionStatusText:Vr,CopyIcon:Hr,CheckCircle:dt,Copy:pt},props:{toCopy:String,timeout:{type:Number,required:!1,default:500}},data(){return{isCopied:!1}},watch:{isCopied(e){e&&setTimeout((()=>{this.isCopied=!1}),this.timeout)}},methods:{copyThis(e){this.isCopied=Yr()(e)},t(e){return this.$t instanceof Function?this.$t(e):e}}};const Gr=(0,vt.Z)(Kr,[["render",Dr]]);var Jr=Gr;function Qr(e,t,r,n,o,a){const l=(0,i.up)("TransactionStatusText"),s=(0,i.up)("RowFixed"),c=(0,i.up)("Loader"),d=(0,i.up)("CheckCircleIcon"),u=(0,i.up)("TriangleIcon"),h=(0,i.up)("IconWrapper"),g=(0,i.up)("TransactionState"),m=(0,i.up)("TransactionWrapper");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{href:r.link,pending:a.pending,success:a.success},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.tx.summary?r.tx.summary:r.tx.hash)+" ↗",1)])),_:1})])),_:1}),(0,i.Wm)(h,{pending:a.pending,success:"success"},{default:(0,i.w5)((()=>[a.pending?((0,i.wg)(),(0,i.j4)(c,{key:0})):a.success?((0,i.wg)(),(0,i.j4)(d,{key:1,size:16})):((0,i.wg)(),(0,i.j4)(u,{key:2,size:16}))])),_:1},8,["pending"])])),_:1},8,["href","pending","success"])])),_:1})}const Xr=(0,i._)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1);function en(e,t,r,n,o,a){const l=(0,i.up)("StyledSVG");return(0,i.wg)(),(0,i.j4)(l,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:r.size,stroke:r.stroke},{default:(0,i.w5)((()=>[Xr])),_:1},8,["xmlns","size","stroke"])}const tn=g.F4`
	                	from { transform: rotate(0deg);}
	                	to {transform: rotate(360deg);}`,rn=(0,g.ZP)("svg",{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}})`
		animation: 2s ${tn} linear infinite;
		height: ${({size:e})=>e};
		width: ${({size:e})=>e};
		path {
			stroke: ${({stroke:e,theme:t})=>e||t.primary1};
		}
	`;var nn={components:{StyledSVG:rn},props:{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}}};const on=(0,vt.Z)(nn,[["render",en]]);var an=on;const ln=g.ZP.div``,sn=g.ZP.div`
		margin-right: 0.5rem;
		display: flex;
		align-items: center;
		:hover {
			text-decoration: underline;
		}
	`,cn=(0,g.ZP)(br,{pending:{type:Boolean},success:{type:Boolean,required:!1}})`
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-decoration: none !important;
		border-radius: 0.5rem;
		padding: 0.25rem 0rem;
		font-weight: 500;
		font-size: 0.825rem;
		color: ${({theme:e})=>e.primary1};
	`,dn=(0,g.ZP)("div",{pending:{type:Boolean},success:{type:Boolean,required:!1}})`
		color: ${({pending:e,success:t,theme:r})=>e?r.primary1:t?r.green1:r.red1};
	`;var un={components:{IconWrapper:dn,TransactionState:cn,TransactionStatusText:sn,TransactionWrapper:ln,RowFixed:qt,Loader:an,CheckCircleIcon:dt,TriangleIcon:gt},props:{tx:{type:Object,required:!0},link:{type:String,required:!0}},computed:{summary(){return this.tx.summary},pending(){return!this.tx.receipt},success(){return!this.pending&&this.tx&&(1===this.tx.receipt.status||"undefined"===typeof this.tx.receipt.status)}}};const pn=(0,vt.Z)(un,[["render",Qr]]);var hn=pn;const gn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		padding: 1rem 1rem;
		font-weight: 500;
		color: ${e=>"blue"===e.color?({theme:e})=>e.primary1:"inherit"};
		${({theme:e})=>e.mediaWidth.upToMedium`
	                            													    padding: 1rem;
	                            													  `};
	`,mn=g.ZP.div`
		position: relative;

		h5 {
			margin: 0;
			margin-bottom: 0.5rem;
			font-size: 1rem;
			font-weight: 400;
		}

		h5:last-child {
			margin-bottom: 0px;
		}

		h4 {
			margin-top: 0;
			font-weight: 500;
		}
	`,wn=g.ZP.div`
		padding: 1rem;
		border: 1px solid ${({theme:e})=>e.bg3};
		border-radius: 20px;
		position: relative;
		display: grid;
		grid-row-gap: 12px;
		margin-bottom: 20px;
	`,fn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		color: ${({theme:e})=>e.text1};

		div {
			${({theme:e})=>e.flexRowNoWrap}
			align-items: center;
		}
	`,vn=g.ZP.div`
		background-color: ${({theme:e})=>e.bg1};
		padding: 0rem 1rem;
		${({theme:e})=>e.mediaWidth.upToMedium`padding: 0rem 1rem 1.5rem 1rem;`};
	`,bn=g.ZP.div`
		h5 {
			margin: 0 0 1rem 0;
			font-weight: 400;
		}

		h4 {
			margin: 0;
			font-weight: 500;
		}
	`,yn=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap}
		padding: 1.5rem;
		flex-grow: 1;
		overflow: auto;
		background-color: ${({theme:e})=>e.bg2};
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;

		h5 {
			margin: 0;
			font-weight: 400;
			color: ${({theme:e})=>e.text3};
		}
	`,xn=g.ZP.div`
		display: flex;
		justify-content: space-between;
		min-width: 0;
		width: 100%;

		font-weight: 500;
		font-size: 1.25rem;

		a:hover {
			text-decoration: underline;
		}

		p {
			min-width: 0;
			margin: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,kn=(0,g.ZP)(br)`
		font-size: 0.825rem;
		color: ${({theme:e})=>e.text3};
		margin-left: 1rem;
		font-size: 0.825rem;
		display: flex;
		:hover {
			color: ${({theme:e})=>e.text2};
		}
	`,Cn=g.ZP.div`
		position: absolute;
		right: 1rem;
		top: 14px;
		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	`,Nn=(0,g.ZP)(mt)`
		path {
			stroke: ${({theme:e})=>e.text4};
		}
	`,In=g.ZP.div`
		width: initial;
		font-size: 0.825rem;
		font-weight: 500;
		color: ${({theme:e})=>e.text3};
	`,$n=(0,g.ZP)("div",{size:{type:[Number,String],required:!1,default:32}})`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		margin-right: 8px;
		& > img,
		span {
			height: ${({size:e})=>e+"px"};
			width: ${({size:e})=>e+"px"};
		}
		${({theme:e})=>e.mediaWidth.upToMedium`
	                            													    align-items: flex-end;
	                            													  `};
	`,Sn=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap};
	`,En=(0,g.ZP)(Ct)`
		width: fit-content;
		font-weight: 400;
		margin-left: 8px;
		font-size: 0.825rem;
		padding: 4px 6px;
		:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	`,_n=(0,g.ZP)(En)`
		color: ${({theme:e})=>e.primary1};
	`;var Wn={components:{Jazzicon:St.Z,MainWalletAction:_n,WalletAction:En,TransactionListWrapper:Sn,IconWrapper:$n,HeaderRow:gn,UpperSection:mn,InfoCard:wn,AccountGroupingRow:fn,WalletName:In,CloseColor:Nn,CloseIcon:Cn,AddressLink:kn,AccountControl:xn,LowerSection:yn,YourAccount:bn,AccountSection:vn,AutoRow:Dt,Copy:Jr,Transaction:hn,LinkIcon:ht,LinkStyledButton:cr,TextWrapper:Nr},inject:["setWalletView","theme"],props:{address:{type:String,required:!0},chainId:{type:[Number,String],required:!0},connector:{type:Object,required:!0},ensName:{type:String,required:!1}},setup(){const e=(0,i.Fl)((()=>Object.values(ze.value))),{close:t}=be();return{txs:e,toggleWeb3Modal:t,clearAllTransactions:Oe}},data(){return{getEtherscanLink:Ie,shortenAddress:ke}},methods:{t(e){return this.$t instanceof Function?this.$t(e):e}}};const Tn=(0,vt.Z)(Wn,[["render",Ur]]);var Pn=Tn;const An=(0,i._)("span",null,"New to Ethereum?  ",-1),Bn=(0,i.Uk)("Learn more about wallets");function On(e,t,r,o,a,l){const s=(0,i.up)("ProviderComponent"),c=(0,i.up)("option-grid"),d=(0,i.up)("ExternalLink"),u=(0,i.up)("Blurb"),p=(0,i.up)("ContentWrapper");return(0,i.wg)(),(0,i.j4)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.providersArray,((e,t)=>((0,i.wg)(),(0,i.j4)(s,{id:`connect-${e.name}`,key:e.name,ref_for:!0,ref:"prvs_"+t,provider:e,onClick:(0,n.iM)((t=>l.selectProvidex(e)),["prevent"])},null,8,["id","provider","onClick"])))),128))])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[An,(0,i.Wm)(d,{href:"https://ethereum.org/wallets/"},{default:(0,i.w5)((()=>[Bn])),_:1})])),_:1})])),_:1})}const Mn=(0,i._)("div",null,null,-1),Fn=["src","alt"];function jn(e,t,r,n,o,a){const l=(0,i.up)("GreenCircle"),s=(0,i.up)("CircleWrapper"),c=(0,i.up)("HeaderText"),d=(0,i.up)("SubHeader"),u=(0,i.up)("OptionCardLeft"),h=(0,i.up)("IconWrapper"),g=(0,i.up)("OptionCardClickable");return(0,i.wg)(),(0,i.j4)(g,{clickable:n.canClick,active:r.provider.active&&n.activated},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{title:r.showDescription?"":r.provider.decription,color:r.provider.color},{default:(0,i.w5)((()=>[r.provider.active&&n.activated?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[Mn])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,p.zw)(r.provider.name),1)])),_:1},8,["title","color"]),r.showDescription?((0,i.wg)(),(0,i.j4)(d,{key:0},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.provider.description),1)])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(h,{size:r.provider.size},{default:(0,i.w5)((()=>[(0,i._)("img",{src:r.provider.logo,alt:r.provider.name},null,8,Fn)])),_:1},8,["size"])])),_:1},8,["clickable","active"])}const zn=(0,g.ZP)("button",{active:Boolean})`
		background-color: ${({theme:e,active:t})=>t?e.bg3:e.bg2};
		padding: 1rem;
		outline: none !important;
		border: 1px solid;
		border-radius: 12px;
		width: 100% !important;
		&:focus {
			box-shadow: 0 0 0 1px ${({theme:e})=>e.primary1};
		}
		border-color: ${({theme:e,active:t})=>t?"transparent":e.bg3};
	`,Rn=(0,g.ZP)(zn)`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 2rem;
		padding: 1rem;
	`,Ln=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap};
		justify-content: center;
		height: 100%;
	`,Zn=(0,g.ZP)(Rn,{clickable:Boolean})`
		margin-top: 0;
		&:hover {
			cursor: ${({clickable:e})=>e?"pointer":""};
			border: ${({clickable:e,theme:t})=>e?`1px solid ${t.primary1}`:""};
		}
		opacity: ${({disabled:e})=>e?"0.5":"1"};
	`,Un=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap}
		justify-content: center;
		align-items: center;

		&:first-child {
			height: 8px;
			width: 8px;
			margin-right: 8px;
			background-color: ${({theme:e})=>e.green1};
			border-radius: 50%;
		}
	`,Dn=g.ZP.div`
		color: ${({theme:e})=>e.green1};
		display: flex;
		justify-content: center;
		align-items: center;
	`,qn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		color: ${e=>"blue"===e.color?({theme:e})=>e.primary1:({theme:e})=>e.text1};
		font-size: 1rem;
		font-weight: 500;
	`,Yn=g.ZP.div`
		color: ${({theme:e})=>e.text1};
		margin-top: 10px;
		font-size: 12px;
	`,Hn=(0,g.ZP)("div",{size:{type:Number,required:!1,default:24}})`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		& > img,
		span {
			height: ${({size:e})=>e+"px"};
			width: ${({size:e})=>e+"px"};
		}
		${({theme:e})=>e.mediaWidth.upToMedium`
	                                        align-items: flex-end;
	                                      `};
	`;var Vn={components:{IconWrapper:Hn,SubHeader:Yn,HeaderText:qn,CircleWrapper:Dn,GreenCircle:Un,OptionCardClickable:Zn,OptionCardLeft:Ln},props:{provider:{type:Object,required:!1,default:null},showDescription:{type:Boolean,required:!1,default:!1},clickable:{type:Boolean,required:!1,default:!0}},setup(e){const{active:t}=W(),r=(0,i.Fl)((()=>{const r=e.provider.active&&t.value;return e.clickable&&!r}));return{canClick:r,activated:t}}};const Kn=(0,vt.Z)(Vn,[["render",jn]]);var Gn=Kn;const Jn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap}
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		${({theme:e})=>e.mediaWidth.upToMedium`margin: 1 rem; font - size: 12 px;`};
	`,Qn=g.ZP.div`
		display: grid;
		grid-gap: 10px;
		${({theme:e})=>e.mediaWidth.upToMedium` grid - template - columns: 1 fr; grid - gap: 10 px;`};
	`;var Xn={components:{ExternalLink:br,OptionGrid:Qn,Blurb:Jn,ContentWrapper:mr,ProviderComponent:Gn},inject:["selectProvider"],props:{providers:{type:[Array,Object],default:null}},computed:{providersArray(){return Object.values(this.providers)}},mounted(){this.$nextTick((()=>this.$refs?.prvs_0?.$el?.focus()))},methods:{selectProvidex(e){this.selectProvider(e)}}};const eo=(0,vt.Z)(Xn,[["render",On]]);var to=eo;function ro(e,t,r,o,a,l){const s=(0,i.up)("DialogContent"),c=(0,i.up)("StyledDialogOverlay");return(0,i.wg)(),(0,i.j4)(n.uT,{name:"fade",appear:""},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(c,{onClick:(0,n.iM)(o.onDismiss,["prevent"])},{default:(0,i.w5)((()=>[o.isMobile?((0,i.wg)(),(0,i.j4)(s,{key:0,ref:"target","aria-label":"dialog content","min-height":r.minHeight,"max-height":r.maxHeight,mobile:o.isMobile,style:(0,p.j5)({transform:`translateY(${o.sprung>0?o.sprung:0}px)`}),onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["min-height","max-height","mobile","style"])):((0,i.wg)(),(0,i.j4)(s,{key:1,"aria-label":"dialog content","min-height":r.minHeight,"max-height":r.maxHeight,mobile:o.isMobile,onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["min-height","max-height","mobile"]))])),_:3},8,["onClick"]),[[n.F8,r.isOpen]])])),_:3})}var no=r(56913),oo=r(32257),io=r.n(oo),ao=r(46836);const lo=g.ZP.div`
		 {
			background: rgba(0, 0, 0, 0.33);
			opacity: 1;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			top: 0;
			overflow: auto;
			z-index: 1002;
			width: 100%;
			height: 100%;
			background-color: transparent;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${({theme:e})=>e.modalBG};
		}
	`,so=(0,g.ZP)("div",{minHeight:Number,maxHeight:Number,mobile:Boolean,isOpen:Boolean})`
		 {
			overflow-y: ${({mobile:e})=>e?"scroll":"hidden"};
			background: #fff;
			outline: none;
			margin: 0 0 2rem 0;
			background-color: ${({theme:e})=>e.bg1};
			box-shadow: 0 4px 8px 0
				${({theme:e})=>io()(.95,e.shadow1)};
			padding: 0px;
			width: 50vw;
			overflow-y: ${({mobile:e})=>e?"scroll":"hidden"};
			overflow-x: hidden;
			align-self: ${({mobile:e})=>e?"flex-end":"center"};
			max-width: 420px;
			${({maxHeight:e})=>e&&g.iv`
					max-height: ${e}vh;
				`}
			${({minHeight:e})=>e&&g.iv`
					min-height: ${e}vh;
				`}
																																						    display: flex;
			border-radius: 20px;
			${({theme:e})=>e.mediaWidth.upToMedium` width: 65vw; margin: 0;`}
			${({theme:e,mobile:t})=>e.mediaWidth.upToSmall`width: 85vw; ${t&&g.iv`
						width: 100vw;
						border-radius: 20px;
						border-bottom-top-radius: 0;
						border-bottom-right-radius: 0;
					`}`}
		}
	`;var co={components:{StyledDialogOverlay:lo,DialogContent:so},props:{isOpen:{type:Boolean,required:!0},minHeight:{type:Number,required:!1},maxHeight:{type:Number,required:!1,default:90}},setup(){const e=(0,I.iH)(0),t=(0,ao.S)(e,{stiffness:210,damping:20,mass:1}),r=(0,i.f3)("onDismiss"),n=(0,I.iH)(null),o=(0,i.Fl)((()=>n.value?.$el??null));if(no.isMobile){const{lengthY:t}=(0,m.YvF)(o,{passive:!0,onSwipe(){if(t.value<0){const r=Math.abs(t.value);e.value=r}else e.value=0},onSwipeEnd(){if(t.value<0&&Math.abs(t.value)>200)return r(),e.value=0;e.value=0}})}return{sprung:t,top:e,target:n,isMobile:no.isMobile,targetHtml:o,onDismiss:r}},data(){return{lastPosY:0,isDragging:!1}},methods:{onDrag(e){if(this.isDragging||(this.isDragging=!0),this.positionY=16==e.direction?e.deltaY:0,e.isFinal){if(this.isDragging=!1,e.deltaY>300||e.velocity>.3&&16==e.direction)return this.onDismiss();this.positionY=0}}}};const uo=(0,vt.Z)(co,[["render",ro]]);var po=uo;function ho(e,t,r,o,a,l){const s=(0,i.up)("ErrorButton"),c=(0,i.up)("ErrorGroup"),d=(0,i.up)("StyledLoader"),u=(0,i.up)("LoadingWrapper"),h=(0,i.up)("LoadingMessage"),g=(0,i.up)("Provider"),m=(0,i.up)("PendingSection");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{error:r.error},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[r.error?((0,i.wg)(),(0,i.j4)(c,{key:0,onClick:t[0]||(t[0]=(0,n.iM)((e=>l.retryConnection()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i._)("div",null,(0,p.zw)(l.t("Error connecting"))+".",1),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Try Again ")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Wm)(d),(0,i.Uk)(" "+(0,p.zw)(l.t("Initializing...")),1)],64))])),_:1})])),_:1},8,["error"]),((0,i.wg)(),(0,i.j4)(g,{key:r.connector.name,desc:!0,clickable:!1,provider:r.connector},null,8,["provider"]))])),_:1})}const go=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		width: 100%;
		& > * {
			width: 100%;
		}
	`,mo=(0,g.ZP)(an)`
		margin-right: 1rem;
	`,wo=(0,g.ZP)("div",{error:{type:Boolean,required:!1,default:!1}})`
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
		justify-content: flex-start;
		border-radius: 12px;
		margin-bottom: 20px;
		color: ${({theme:e,error:t})=>t?e.red1:"inherit"};
		border: 1px solid ${({theme:e,error:t})=>t?e.red1:e.text4};

		& > * {
			padding: 1rem;
		}
	`,fo=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
		justify-content: flex-start;
	`,vo=g.ZP.div`
		border-radius: 8px;
		font-size: 12px;
		color: ${({theme:e})=>e.text1};
		background-color: ${({theme:e})=>e.bg4};
		margin-left: 1rem;
		padding: 0.5rem;
		font-weight: 600;
		user-select: none;

		&:hover {
			cursor: pointer;
			background-color: ${({theme:e})=>(0,at.darken)(.1,e.text4)};
		}
	`,bo=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
		justify-content: center;
	`;var yo={components:{LoadingWrapper:bo,ErrorButton:vo,ErrorGroup:fo,LoadingMessage:wo,StyledLoader:mo,PendingSection:go,Provider:Gn},inject:["retryConnection"],props:{connector:{type:Object,required:!0},error:{type:Boolean,required:!1,default:!1}},methods:{t(e){return this.$t instanceof Function?this.$t(e):e}}};const xo=(0,vt.Z)(yo,[["render",ho]]);var ko=xo,Co=r(71259),No=r.n(Co);const Io=g.ZP.div`
		position: absolute;
		right: 1rem;
		top: 14px;
		color: ${({theme:e})=>e.text4};
		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	`,$o=(0,g.ZP)(mt,{size:Number})`
		path {
			stroke: ${({theme:e})=>e.text4};
		}
	`,So=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap}
		margin: 0;
		padding: 0;
		width: 100%;
	`,Eo=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		padding: 1rem 1rem;
		font-weight: 500;
		color: ${e=>"blue"===e.color?({theme:e})=>e.primary1:"inherit"};
		${({theme:e})=>e.mediaWidth.upToMedium` padding: 1 rem; `};
	`,_o=g.ZP.div`
		position: relative;
		h5 {
			margin: 0;
			margin-bottom: 0.5rem;
			font-size: 1rem;
			font-weight: 400;
		}
		h5:last-child {
			margin-bottom: 0px;
		}
		h4 {
			margin-top: 0;
			font-weight: 500;
		}
	`,Wo=g.ZP.div`
		:hover {
			cursor: pointer;
		}
	`;var To={components:{UpperSection:_o,HoverText:Wo,ContentWrapper:mr,HeaderRow:Eo,ModalOverlay:po,Wrapper:So,CloseIcon:Io,ConnectModal:to,CloseColor:$o,AccountDetails:Pn,PendingView:ko},provide(){return{retryConnection:this.retryConnection,selectProvider:this.selectProvider,onClose:this.closeWeb3Modal,onDismiss:this.closeWeb3Modal,setWalletView:this.setWalletView}},setup(){const{isOpen:e,close:t}=be(),r=c();ue(),De();const n=(0,I.qj)({cacheProvider:!0,disableInjectedProvider:!1,providerOptions:r,network:""});P();const{etherBalance:o,provider:a,etherjs:l,web3:s,chainId:d,account:u,active:p,error:h,isValidNetwork:g}=W(),m=(0,i.Fl)((()=>!!s?.value??null)),w=(0,I.iH)(m.value?"account":"options");return{connected:m,account:u,walletView:w,chainId:d,show:e,isValidNetwork:g,closeWeb3Modal:t,isMobile:no.isMobile,etherBalance:o,provider:a,etherjs:l,web3:s,active:p,error:h,activate:A,deactivate:B,setError:O,setProvider:M,setLibrary:F,setWeb3:j,setChainId:z,setAccount:R,setAccounts:L,options:n,useActiveWeb3Vue:W}},data(){return{colors:{WalletConnect:"#4196FC",Coinbase:"#315CF5",Portis:"#4A6C9B",Fortmatic:"#6748FF",Squarelink:"#3964df",Torus:"#006be8",Arkane:"#b5289e",Authereum:"#252A68","Burner Connect":"#c5a66d",UniLogin:"#0f0c4a","MEW wallet":"#003945","D'CENT":"#298a88",MetaMask:"#E8831D",Safe:"#282c34",Nifty:"#5B2DA7",Dapper:"#2F1D56",Opera:"#000",Trust:"#105baa",imToken:"#468BDF",Status:"#4360DF",Tokenary:"#2C7CF5"},availableProviders:[],pendingWallet:null,showing:!1,web3walletConnector:{},providerController:{}}},computed:{providers(){return this.availableProviders.reduce(((e,t)=>{const r=(0,$.getProviderInfoByName)(t.name);return console.log(this.providerInfo.name,r.name),e[t.name]={...r,...t,mobile:!0,color:this.colors[t.name]??"#000",active:this.providerInfo.id==r.id},e}),{})},cachedProvider(){return this.providerController.cachedProvider},providerInfo(){return(0,$.getProviderInfo)(this.web3)},pendingError(){return this.error.length>0}},watch:{show(e,t){e&&!t?(this.showing=e,this.setError(null),this.providerIsAuthorized(this.web3).then((e=>{e&&this.active&&this.connected?this.walletView="account":this.walletView="options"}))):this.showing=e}},created(){return this.web3walletConnector=new $.Web3WalletConnector(this.options),this.providerController=this.web3walletConnector.providerController,this.providerController.on($.CONNECT_EVENT,(e=>this.onConnect(e))),this.providerController.on($.ERROR_EVENT,(e=>this.onError(e))),this.availableProviders=this.providerController.getUserOptions(),this._onConnect()},methods:{t(e){return this.$t instanceof Function?this.$t(e):e},setWalletView(e){this.walletView=e},clearCachedProvider(){return this.providerController.clearCachedProvider()},async selectProvider(e){return(!e.active||!this.active)&&(this.pendingWallet=e,this.walletView="pending",e.onClick())},async retryConnection(){return this.setError(null),this.pendingWallet.onClick()},async connect(){return this.setError(null),this.walletView=this.connected?"account":"options",await this.connectWeb3()},async connectWeb3(){if(this.cachedProvider)return this.pendingWallet=sr()(this.providers,(e=>e.id==this.cachedProvider)),void await this.providerController.connectToCachedProvider();this.providers&&1===this.providers.length&&this.providers[0].name&&await this.providers[0].onClick()},onError(e){this.setError(e??"Connection Failed")},initWeb3(e){const t=new(Q())(e);return t.eth.extend({methods:[{name:"chainId",call:"eth_chainId",outputFormatter:t.utils.hexToNumber}]}),t},onConnect:ar()((async function(e){const t=this.initWeb3(e);this.setWeb3(t),await this.subscribeProvider(e);const r=await this.web3.eth.getAccounts(),n=await this.web3.eth.chainId();this.setChainId(this.web3.utils.hexToNumber(n)??null),this.setProvider(this.pendingWallet),this.setAccount(r[0]??null),this.setAccounts(r??[]),this.activate(),this.showing&&(this.closeWeb3Modal(),this.walletView="account")}),200,{leading:!0}),async _onConnect(){const e=await No()();if(!e)return!1;if(this.isMobile&&this.providers&&1===this.providers.length&&this.providers[0].name)return void await this.providers[0].onClick();const t=this.initWeb3(e),r=await this.providerIsAuthorized(t);if(r&&"injected"==this.cachedProvider)return this.connectWeb3();this.setWeb3(t),await this.subscribeProvider(e),this.setProvider((0,$.getInjectedProvider)()),this.networkId=await this.web3.eth.net.getId();const n=await this.web3.eth.chainId();this.setChainId(this.web3.utils.hexToNumber(n)??null),this.deactivate()},async subscribeProvider(e){e.on&&!window.ethereum.isTrust&&(e.on("accountsChanged",(e=>{this.setAccount(e[0]??null)})),e.on("chainChanged",(async e=>{let t=this.web3.utils.hexToNumber(e)??null;this.setChainId(t)})))},goBAck(){this.walletView="account"},async providerIsAuthorized(e){if(e)try{const t=await e.currentProvider.request({method:"eth_requestAccounts"});return or(t).length>0}catch(t){return!1}}}};const Po=(0,vt.Z)(To,[["render",nr]]);var Ao=Po;function Bo(e,t,r,o,a,l){const s=(0,i.up)("SelectorLogo"),c=(0,i.up)("SelectorLabel"),d=(0,i.up)("StyledChevronDown"),u=(0,i.up)("SelectorControls"),h=(0,i.up)("FlyoutHeader"),g=(0,i.up)("Row"),m=(0,i.up)("FlyoutMenu"),w=(0,i.up)("SelectorWrapper");return(0,i.wg)(),(0,i.j4)(w,{ref:"node"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{interactive:"",onClick:o.toggle},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{interactive:"",src:o.info.logoUrl},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(o.info.label),1)])),_:1}),(0,i.Wm)(d)])),_:1},8,["onClick"]),o.isOpen?((0,i.wg)(),(0,i.j4)(m,{key:0,"on-mouse-leave":o.toggle},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(o.t("Select a network")),1)])),_:1}),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.MAINNET,onClick:t[0]||(t[0]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.MAINNET})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.POLYGON,onClick:t[1]||(t[1]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.POLYGON})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.OPTIMISM,onClick:t[2]||(t[2]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.OPTIMISM})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.ARBITRUM_ONE,onClick:t[3]||(t[3]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.ARBITRUM_ONE})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.BINANCE,onClick:t[4]||(t[4]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.BINANCE})),["prevent"]))},null,8,["target-chain"])])),_:1},8,["on-mouse-leave"])):(0,i.kq)("",!0)])),_:1},512)}function Oo(e,t,r,n,o,a){const l=(0,i.up)("SelectRowItem"),s=(0,i.up)("LinkOutCircle"),c=(0,i.up)("ExternalLink"),d=(0,i.up)("ActiveRowLinkList"),u=(0,i.up)("ActiveRowWrapper");return n.active?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{"logo-url":n.logoUrl,label:n.label,active:""},null,8,["logo-url","label"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[n.bridge?((0,i.wg)(),(0,i.j4)(c,{key:0,href:n.bridge},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.BridgeLabel)+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0),n.explorer?((0,i.wg)(),(0,i.j4)(c,{key:1,href:n.explorer},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.ExplorerLabel)+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0),n.helpCenterUrl?((0,i.wg)(),(0,i.j4)(c,{key:2,href:n.helpCenterUrl},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.t("Help Center"))+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(l,{key:1,"logo-url":n.logoUrl,label:n.label},null,8,["logo-url","label"]))}function Mo(e,t,r,n,o,a){const l=(0,i.up)("Logo"),s=(0,i.up)("NetworkLabel"),c=(0,i.up)("FlyoutRowActiveIndicator"),d=(0,i.up)("FlyoutRow");return(0,i.wg)(),(0,i.j4)(d,{active:r.active},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{src:r.logoUrl},null,8,["src"]),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.label),1)])),_:1}),r.active?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])),_:1},8,["active"])}const Fo=(0,g.ZP)("div",{active:Boolean})`
		align-items: center;
		background-color: ${({active:e,theme:t})=>e?t.bg1:"transparent"};
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		font-weight: 500;
		justify-content: space-between;
		padding: 6px 8px;
		text-align: left;
		width: 100%;
	`,jo=g.ZP.div`
		background-color: ${({theme:e})=>e.green1};
		border-radius: 50%;
		height: 9px;
		width: 9px;
	`,zo=g.ZP.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`,Ro=g.ZP.div`
		flex: 1 1 auto;
	`;var Lo={components:{NetworkLabel:Ro,Logo:zo,FlyoutRowActiveIndicator:jo,FlyoutRow:Fo},props:{active:{type:Boolean,default:!1},logoUrl:{type:String,required:!0},label:{type:String,required:!0}}};const Zo=(0,vt.Z)(Lo,[["render",Mo]]);var Uo=Zo;const Do=g.ZP.div`
		display: flex;
		flex-direction: column;
		padding: 0 8px;
		& > a {
			align-items: center;
			color: ${({theme:e})=>e.text2};
			display: flex;
			flex-direction: row;
			font-size: 14px;
			font-weight: 500;
			justify-content: space-between;
			padding: 8px 0 4px;
			text-decoration: none;
		}
		& > a:first-child {
			margin: 0;
			margin-top: 0px;
			padding-top: 10px;
		}
	`,qo=g.ZP.div`
		background-color: ${({theme:e})=>e.bg1};
		border-radius: 8px;
		cursor: pointer;
		padding: 8px;
		width: 100%;
	`,Yo=(0,g.ZP)(ct)`
		transform: rotate(230deg);
		width: 16px;
		height: 16px;
	`;var Ho={components:{LinkOutCircle:Yo,ActiveRowWrapper:qo,ExternalLink:br,SelectRowItem:Uo,ActiveRowLinkList:Do},props:{targetChain:{type:[String,Number],validator:e=>Object.values(x).includes(e)}},setup(e){const{chainId:t}=W(),r=(0,i.Fl)((()=>t.value===e.targetChain)),{helpCenterUrl:n,explorer:a,bridge:l,label:s,logoUrl:c}=N[e.targetChain],{t:d}=(0,o.QT)(),u=(0,i.Fl)((()=>{switch(t.value){case x.ARBITRUM_ONE:case x.ARBITRUM_RINKEBY:return d("Arbitrum Bridge");case x.OPTIMISM:case x.OPTIMISTIC_KOVAN:return d("Optimism Gateway");case x.POLYGON:case x.POLYGON_MUMBAI:return d("Polygon Bridge");default:return d("Bridge")}})),p=(0,i.Fl)((()=>{switch(t.value){case x.BINANCE:case x.BINANCE_TESTNET:return d("Bscscan");case x.ARBITRUM_ONE:case x.ARBITRUM_RINKEBY:return d("Arbiscan");case x.OPTIMISM:case x.OPTIMISTIC_KOVAN:return d("Optimistic Etherscan");case x.POLYGON:case x.POLYGON_MUMBAI:return d("Polygonscan");default:return d("Etherscan")}}));return{ExplorerLabel:p,BridgeLabel:u,helpCenterUrl:n,explorer:a,bridge:l,label:s,logoUrl:c,active:r,t:d}}};const Vo=(0,vt.Z)(Ho,[["render",Oo]]);var Ko=Vo;const Go=g.ZP.div`
		color: ${({theme:e})=>e.text2};
		font-weight: 400;
	`,Jo=g.ZP.div`
		align-items: flex-start;
		background-color: ${({theme:e})=>e.bg0};
		border: 1px solid ${({theme:e})=>e.bd0};
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),
			0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		font-size: 16px;
		overflow: auto;
		padding: 16px;
		position: absolute;
		top: 64px;
		width: 272px;
		z-index: 99;
		& > *:not(:last-child) {
			margin-bottom: 12px;
		}
		@media screen and (min-width: ${Sr.upToSmall}px) {
			top: 50px;
		}
	`,Qo=g.ZP.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`,Xo=g.ZP.div`
		flex: 1 1 auto;
	`,ei=(0,g.ZP)(Xo)`
		display: none;
		@media screen and (min-width: ${Sr.upToMedium}px) {
			display: block;
			margin-right: 8px;
		}
	`,ti=(0,g.ZP)("div",{interactive:Boolean})`
		  align-items: center;
          background-color: ${({theme:e})=>e.bg0};
          border: 1px solid ${({theme:e})=>e.bd0};
          border-radius: 16px;
          color: ${({theme:e})=>e.text1};
          cursor: ${({interactive:e})=>e?"pointer":"auto"};
          display: flex;
          font-weight: 500;
          justify-content: space-between;
          padding: 6px 8px;
	`,ri=(0,g.ZP)(Qo,{interactive:Boolean})`
		margin-right: ${({interactive:e})=>e?8:0}px;
		@media screen and (min-width: ${Sr.upToMedium}px) {
			margin-right: 8px;
		}
	`,ni=g.ZP.div`
		@media screen and (min-width: ${Sr.upToMedium}px) {
			position: relative;
		}
	`,oi=(0,g.ZP)(ut)`
		width: 16px;
	`;var ii={props:{infuraKey:{type:String,required:!0}},components:{StyledChevronDown:oi,SelectorWrapper:ni,SelectorLogo:ri,SelectorControls:ti,SelectorLabel:ei,FlyoutMenu:Jo,FlyoutHeader:Go,Row:Ko},setup(e){const{t:t}=(0,o.QT)(),r=e=>{const t=Object.entries(k).find((([,t])=>t===e)),r=t?.[0];return r?parseInt(r):void 0},n=e=>k[e]||"",{chainId:a,web3:l}=W(),s=(0,I.iH)(null),c=(0,I.iH)(!1),d=()=>c.value=!0,u=()=>c.value=!1;(0,m.i9H)(s,(()=>u()));const p=()=>c.value?u():d(),h=(0,i.Fl)((()=>a.value?N[a.value]:void 0)),g=(0,m.ltg)("history"),w=(0,i.Fl)((()=>g.chain)),f=(0,i.Fl)((()=>w.value?r(w.value):null)),v=({targetChain:t,skipToggle:r=!1})=>{t!=a.value&&Se({provider:l.value.currentProvider,chainId:t,chainIdHex:l.value.utils.numberToHex(t),INFURA_KEY:e.infuraKey}).then((()=>{r||p(),g.chain=n(t)})).catch((e=>{console.error("Failed to switch networks",e),a.value&&(g.chain=n(a.value)),r||p()}))};return(0,i.YP)([a,f],(([e,t],[r])=>{e&&r&&(e!==r?g.chain=n(e):t&&t!==e&&v({targetChain:t,skipToggle:!0}))})),(0,i.ic)((()=>{a.value&&!f.value&&(g.chain=n(a.value))})),{SupportedChainId:x,info:h,t:t,chainId:a,web3:l,node:s,isOpen:c,open:d,close:u,toggle:p,handleChainSwitch:v}}};const ai=(0,vt.Z)(ii,[["render",Bo]]);var li=ai;const si=(0,g.ZP)("div",{showBackground:Boolean})`
		/* display: grid; */
		grid-template-columns: 120px 1fr 120px;
		align-items: center;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		width: 100%;
		top: 0;
		position: relative;
		z-index: 21;
		position: relative;
		/* Background slide effect on scroll. */
		background-image: ${({theme:e})=>`linear-gradient(to bottom, transparent 50%, ${e.bg0} 50% )}}`};
		background-position: ${({showBackground:e})=>e?"0 -100%":"0 0"};
		background-size: 100% 200%;
		box-shadow: 0px 0px 0px 1px
			${({theme:e,showBackground:t})=>t?e.bg2:"transparent;"};
		transition: background-position 0.1s, box-shadow 0.1s;
		background-blend-mode: hard-light;

		${({theme:e})=>e.mediaWidth.upToLarge`
			    grid-template-columns: 48px 1fr 1fr;
			  `};

		${({theme:e})=>e.mediaWidth.upToMedium`
			    padding:  1rem;
			    grid-template-columns: 1fr 1fr;
			  `};

		${({theme:e})=>e.mediaWidth.upToSmall`
			    padding:  1rem;
			    grid-template-columns: 36px 1fr;
			  `};
	`,ci=g.ZP.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-self: flex-end;
	`,di=g.ZP.div`
		display: flex;
		align-items: center;

		&:not(:first-child) {
			margin-left: 0.5em;
		}

		/* addresses safari's lack of support for "gap" */
		& > *:not(:first-child) {
			margin-left: 8px;
		}

		${({theme:e})=>e.mediaWidth.upToMedium`
		    align-items: center;
		  `};
	`,ui=(0,g.ZP)("div",{active:Boolean})`
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid
			${({theme:e,active:t})=>e.bd0};
		background-color: ${({theme:e,active:t})=>e.bg0};
		border-radius: 16px;
		white-space: nowrap;
		width: 100%;
		height: 40px;
		:focus {
			border: 1px solid blue;
		}
	`,pi=(0,g.ZP)(nt,{tx:String})`
		${({theme:e})=>e.mediaWidth.upToMedium`display: none;`};
       
	`;var hi={components:{BalanceText:pi,AccountElement:ui,HeaderElement:di,HeaderControls:ci,HeaderFrame:si,NetworkSelector:li,Web3Status:rr,WalletModal:Ao},setup(e,{slots:t}){const{account:r,chainId:n,active:o,isValidNetwork:a,etherBalance:l}=W(),s=D(n),{y:c}=(0,m.baj)(),d=(0,i.Fl)((()=>{const{nativeCurrency:{symbol:e}}=N[n.value??x.MAINNET];return e})),u=(0,i.Fl)((()=>!!t.default&&!!r.value));return{nativeCurrencySymbol:d,scrollY:c,etherBalance:l,ether:s,account:r,chainId:n,hasDropDown:u,active:o,isValidNetwork:a}}};const gi=(0,vt.Z)(hi,[["render",h]]);var mi=gi;function wi({infuraKey:e,providerOptions:t,theme:r=(0,I.qj)({}),global:n=!1}){const o={install(o){const i=Object.assign(Tr,(0,I.BK)(r));i.colors=i,console.log(i,r),o.provide("theme",Tr),s(o,t),d(o,e),n&&(o.component("Web3Manager",mi),o.component("Web3Modal",Ao))}};return o}const fi=(0,I.qj)({colors:null,white:"#FFFFFF",black:"#000000",text1:(0,i.Fl)((()=>Ir.value?"#FFFFFF":"#000000")),text2:(0,i.Fl)((()=>Ir.value?"#C3C5CB":"#565A69")),text3:(0,i.Fl)((()=>Ir.value?"#6C7284":"#888D9B")),text4:(0,i.Fl)((()=>Ir.value?"#565A69":"#C3C5CB")),bg0:(0,i.Fl)((()=>Ir.value?"#191B1F":"#FFF")),bg1:(0,i.Fl)((()=>Ir.value?"#212429":"#F7F8FA")),bg2:(0,i.Fl)((()=>Ir.value?"#2C2F36":"#EDEEF2")),bg3:(0,i.Fl)((()=>Ir.value?"#40444F":"#CED0D9")),bg4:(0,i.Fl)((()=>Ir.value?"#565A69":"#888D9B")),bd0:(0,i.Fl)((()=>Ir.value?"#191B1F":"#CED0D9")),bd1:(0,i.Fl)((()=>Ir.value?"#212429":"#CED0D9")),bd2:(0,i.Fl)((()=>Ir.value?"#2C2F36":"#EDEEF2")),bd3:(0,i.Fl)((()=>Ir.value?"#40444F":"#CED0D9")),modalBG:(0,i.Fl)((()=>Ir.value?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)")),primary1:(0,i.Fl)((()=>Ir.value?"#2172E5":"#1e7e6b")),primary3:(0,i.Fl)((()=>Ir.value?"#4D8FEA":"#90c3b9")),primary4:(0,i.Fl)((()=>Ir.value?"#376bad70":"#a4d2c9")),primary5:(0,i.Fl)((()=>Ir.value?"#153d6f70":"#c2eae2")),primaryText1:(0,i.Fl)((()=>Ir.value?"#5090ea":"#1e7e6b")),red1:"#FD4040",green1:"#27AE60",yellow2:"#F3841E",blue1:"#a78253",shadow1:(0,i.Fl)((()=>Ir.value?"#000":"#2F80ED"))});var vi=r(84922),bi=r(7439),yi=r.n(bi),xi=r(87990),ki=r(33066),Ci=r.n(ki),Ni=r(76795),Ii=r(94723),$i=r.n(Ii),Si=r(77729),Ei=r(12129),_i=r.n(Ei),Wi=r(85828),Ti=r(5633),Pi=r.n(Ti);const Ai={walletconnect:{package:vi.Z,options:{infuraId:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_INFURA_KEY}},dcentwallet:{package:Wi.Z,options:{rpcUrl:"https://mainnet.infura.io/v3/"+{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_INFURA_KEY}},frame:{package:_i()},torus:{package:xi.ZP},fortmatic:{package:yi(),options:{key:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_FORTMATIC_KEY}},burnerconnect:{package:Pi(),options:{defaultNetwork:"1"}},authereum:{package:Ci()},portis:{package:$i(),options:{id:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_PORTIS_ID}},binancechainwallet:{package:!0},venly:{package:Ni.x,options:{clientId:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_VENLY_CLIENT_ID}},bitski:{package:Si.bV,options:{clientId:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_BITSKI_CLIENT_ID,callbackUrl:window.location.href+"bitski-callback.html"}}},Bi={id:"app",class:"flex flex-col min-h-screen font-roboto dark:bg-gray-900"},Oi={class:"border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30"},Mi={class:"container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10"},Fi=(0,i.uE)('<div class="flex justify-between"><a href="/" class="text-gray-800 dark:text-gray-200"><div class="flex items-center"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" class="h-7 w-7 -mt-2 flex-shrink-0"><path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF"></path></svg><p class="text-xl ml-2"> Vue3 Web3<strong>modal</strong></p></div></a><div class="flex items-center space-x-2 lg:hidden"><button class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"><svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-700 dark:text-gray-300"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button></div></div>',1),ji={class:"flex flex-col space-y-4 lg:hidden",style:{display:"none"}},zi=(0,i._)("div",{class:"flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"},[(0,i._)("a",{href:"/",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Home"),(0,i._)("a",{href:"https://github.com/zobitnet/vue3-web3-modal",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Github")],-1),Ri={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"},Li=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 transform -rotate-90"},[(0,i._)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Zi=[Li],Ui={class:"hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2"},Di=(0,i._)("div",{class:"flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"},[(0,i._)("a",{href:"/",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Home"),(0,i._)("a",{href:"https://github.com/zobitnet/vue3-web3-modal",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Github")],-1),qi={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"},Yi=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 transform -rotate-90"},[(0,i._)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Hi=[Yi],Vi={class:"flex-1 lg:mt-20"},Ki={class:"container px-4 mx-auto mt-8"},Gi={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between"},Ji={class:"flex flex-col w-full items-center"},Qi=(0,i._)("span",{class:"font-light text-gray-400"},"require vue3. ",-1),Xi=(0,i._)("div",{class:"flex flex-col mt-2 space-y-1 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-4"},[(0,i._)("h3",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-200"}," Show on Button Click "),(0,i._)("a",{href:"/u/tailwindcss",class:"text-gray-400 hover:underline"},'@click="showWeb3Modal()"')],-1),ea={class:"mt-2 text-gray-500 dark:text-gray-400 lg:max-w-xl description-link"},ta={class:"mt-8 space-y-4 lg:flex lg:space-x-4 lg:space-y-0"},ra=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-5 h-5"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),na=(0,i._)("span",null,"Click to Show Modal",-1),oa=[ra,na],ia=(0,i.uE)('<div class="bg-gray-100 dark:bg-gray-800"><div class="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between"><div class="w-48 text-gray-700 dark:text-gray-200"><div class="flex items-center"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" class="h-7 w-7 -mt-2 flex-shrink-0"><path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF"></path></svg><p class="text-xl ml-2"> Vue3<strong> Web3 Modal</strong></p></div></div><p class="text-sm text-center text-gray-500 dark:text-gray-300"> © 2022 zobit.net. </p><div class="flex items-center space-x-6"><a href="https://zobit.net" class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary">Zobit</a><a href="https://github.com/zobitnet/vue3-web3-modal/licence.md" class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary">MIT Licence</a><a href="https://twitter.com/zobitchat" target="_blink" class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current"><path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"></path></svg></a><a href="https://github.com/zobitnet/vue3-web3-modal/" target="_blink" class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"><svg viewBox="0 0 30 30" class="w-6 h-6 fill-current"><path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"></path></svg></a></div></div></div>',1);function aa(e,t,r,o,a,l){const s=(0,i.up)("Web3Manager");return(0,i.wg)(),(0,i.iD)("div",Bi,[(0,i._)("header",Oi,[(0,i._)("div",Mi,[Fi,(0,i._)("div",ji,[zi,(0,i._)("div",Ri,[(0,i._)("button",{type:"button",onClick:t[0]||(t[0]=e=>o.toggleDark()),"aria-label":"Color Mode",class:"flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"},Zi)])]),(0,i._)("div",Ui,[Di,(0,i._)("div",qi,[(0,i._)("button",{onClick:t[1]||(t[1]=e=>o.toggleDark()),type:"button","aria-label":"Color Mode",class:"flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"},Hi),(0,i.Wm)(s)])])])]),(0,i._)("main",Vi,[(0,i._)("section",Ki,[(0,i._)("div",Gi,[(0,i._)("div",Ji,[Qi,Xi,(0,i._)("p",ea,(0,p.zw)(o.account??" ModalNot Connected"),1),(0,i._)("div",ta,[(0,i._)("a",{onClick:t[2]||(t[2]=(0,n.iM)((e=>o.showWeb3Modal()),["prevent"])),href:"#",class:"items-center hidden px-4 py-2 space-x-3 text-gray-600 transition-colors duration-300 transform border rounded-lg lg:flex dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"},oa)])])])])]),ia])}var la={components:{Web3Manager:mi},setup(){const{account:e}=W(),{open:t}=be();return{showWeb3Modal:t,account:e,toggleDark:$r}}};const sa=(0,vt.Z)(la,[["render",aa]]);var ca=sa,da={en:{Account:"Account",Arbiscan:"Arbiscan","Arbitrum Bridge":"Arbitrum Bridge",Bridge:"Bridge",Bscscan:"Bscscan",Change:"Change","Check network status":"Check network status",close:"close",Connect:"Connect","Connect to a wallet":"Connect to a wallet","Connected with":"Connected with",Copied:"Copied",dashboard:"dashboard",Disconnect:"Disconnect","Error connecting":"Error connecting","Error Connecting":"Error Connecting","Error connecting. Try refreshing the page":"Error connecting. Try refreshing the page",Etherscan:"Etherscan","Help Center":"Help Center","here.":"here.","Initializing...":"Initializing...","Invalid Network":"Invalid Network","Network Warning":"Network Warning",onDismiss:"onDismiss","Optimism Gateway":"Optimism Gateway","Optimistic Etherscan":"Optimistic Etherscan",Pending:"Pending","Polygon Bridge":"Polygon Bridge",Polygonscan:"Polygonscan","Select a network":"Select a network","Show Portis":"Show Portis","Try Again ":"Try Again ",Wallet:"Wallet","Wrong Network":"Wrong Network","You may have lost your network connection, or {label} might be down right now.":"You may have lost your network connection, or {label} might be down right now.","You may have lost your network connection.":"You may have lost your network connection.","Your Wallets Network is not supported":"Your Wallets Network is not supported"},de:{Account:"Account",Arbiscan:"Arbiscan","Arbitrum Bridge":"Arbitrum Bridge",Bridge:"Bridge",Bscscan:"Bscscan",Change:"Change","Check network status":"Check network status",close:"close",Connect:"Connect","Connect to a wallet":"Connect to a wallet","Connected with":"Connected with",Copied:"Copied",dashboard:"dashboard",Disconnect:"Disconnect","Error connecting":"Error connecting","Error Connecting":"Error Connecting","Error connecting. Try refreshing the page":"Error connecting. Try refreshing the page",Etherscan:"Etherscan","Help Center":"Help Center","here.":"here.","Initializing...":"Initializing...","Invalid Network":"Invalid Network","Network Warning":"Network Warning",onDismiss:"onDismiss","Optimism Gateway":"Optimism Gateway","Optimistic Etherscan":"Optimistic Etherscan",Pending:"Pending","Polygon Bridge":"Polygon Bridge",Polygonscan:"Polygonscan","Select a network":"Select a network","Show Portis":"Show Portis","Try Again ":"Try Again ",Wallet:"Wallet","Wrong Network":"Wrong Network","You may have lost your network connection, or {label} might be down right now.":"You may have lost your network connection, or {label} might be down right now.","You may have lost your network connection.":"You may have lost your network connection.","Your Wallets Network is not supported":"Your Wallets Network is not supported"}};const ua={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_INFURA_KEY,pa=wi({infuraKey:ua,providerOptions:Ai,theme:fi,global:!0}),ha=(0,o.o)({locale:"en",fallbackLocale:"en",translations:da}),ga=(0,n.ri)(ca);ga.use(ha),ga.use(pa),ga.config.devtools=!0,ga.mount("#app")},82363:function(){},72764:function(){},95693:function(){},66984:function(){},82494:function(){},5070:function(){},88677:function(){},62808:function(){},36563:function(){},80950:function(){},93734:function(){},90573:function(){},64900:function(){},28566:function(){},46601:function(){},89214:function(){},8623:function(){},20113:function(){},7748:function(){},85568:function(){},40127:function(){},27790:function(){},56619:function(){},77108:function(){},71156:function(){},52361:function(){},94616:function(){},22644:function(){},50522:function(){},66882:function(){},23230:function(){},55896:function(){},87500:function(){},33557:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self["webpackChunkvue3_web3modal"]=self["webpackChunkvue3_web3modal"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(39533)}));n=r.O(n)})();
//# sourceMappingURL=app.24e54a33.js.map