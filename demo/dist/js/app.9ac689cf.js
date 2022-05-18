(function(){var e={20364:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=20364,e.exports=t},31100:function(e,t,r){"use strict";var n=r(49242),o=r(94329),i=r(73396);const a=Symbol(),l=Symbol();function s(e,t){e.provide(a,t)}function c(){const e=(0,i.f3)(a);if(!e)throw"error, no providerOptions provided";return e}function d(e,t){e.provide(l,t)}function u(){const e=(0,i.f3)(l);if(!e)throw"error, no providerOptions provided";return e}var p=r(87139);function h(e,t,r,o,a,l){const s=(0,i.up)("NetworkSelector"),c=(0,i.up)("HeaderElement"),d=(0,i.up)("BalanceText"),u=(0,i.up)("Web3Status"),h=(0,i.up)("AccountElement"),g=(0,i.up)("HeaderControls"),m=(0,i.up)("HeaderFrame"),f=(0,i.up)("WalletModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,{"show-background":o.scrollY>45},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[o.active&&o.account&&o.isValidNetwork?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{"infura-key":e.infurakey},null,8,["infura-key"])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{active:!!o.account},{default:(0,i.w5)((()=>[o.active&&o.account&&o.isValidNetwork?((0,i.wg)(),(0,i.j4)(d,{key:0,style:{flexShrink:0,userSelect:"none"},pl:"1rem",pr:"1rem",tx:"text",color:"text1","font-weight":"500"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"balance",{},(()=>[(0,i.Uk)((0,p.zw)(parseFloat(o.etherBalance).toPrecision(5))+" "+(0,p.zw)(o.ether.symbol),1)]))])),_:3})):(0,i.kq)("",!0),(0,i.Wm)(u)])),_:3},8,["active"])])),_:3}),o.hasDropDown?((0,i.wg)(),(0,i.j4)(c,{key:1},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})):(0,i.kq)("",!0)])),_:3})])),_:3},8,["show-background"]),((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.WI)(e.$slots,"modal",{},(()=>[(0,i.wy)((0,i.Wm)(f,null,null,512),[[n.F8,e.isOpen]])]))]))],64)}var g=r(87757),m=r(86367),f=r.p+"img/ethereum-logo.9baffa6d.svg",w=r.p+"img/arbitrum_logo.58693b6a.svg",b=r.p+"img/optimistic_ethereum.3cbbb068.svg",v=r.p+"img/polygon-matic-logo.4de125e3.svg",y=r.p+"img/binance-logo.8e189297.svg";const x=Object.freeze({MAINNET:1,ROPSTEN:3,RINKEBY:4,GOERLI:5,KOVAN:42,ARBITRUM_ONE:42161,ARBITRUM_RINKEBY:421611,OPTIMISM:10,OPTIMISTIC_KOVAN:69,POLYGON:137,POLYGON_MUMBAI:80001,BINANCE:56,BINANCE_TESTNET:97}),k={[x.MAINNET]:"mainnet",[x.ROPSTEN]:"ropsten",[x.RINKEBY]:"rinkeby",[x.GOERLI]:"goerli",[x.KOVAN]:"kovan",[x.POLYGON]:"polygon",[x.POLYGON_MUMBAI]:"polygon_mumbai",[x.ARBITRUM_ONE]:"arbitrum",[x.ARBITRUM_RINKEBY]:"arbitrum_rinkeby",[x.OPTIMISM]:"optimism",[x.OPTIMISTIC_KOVAN]:"optimistic_kovan",[x.BINANCE]:"binance",[x.BINANCE_TESTNET]:"binance"},C=Object.freeze({L1:Symbol("l1"),L2:Symbol("l2")}),N={[x.MAINNET]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Ethereum",logoUrl:f,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.RINKEBY]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://rinkeby.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Rinkeby",logoUrl:f,nativeCurrency:{name:"Rinkeby Ether",symbol:"rETH",decimals:18}},[x.ROPSTEN]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://ropsten.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Ropsten",logoUrl:f,nativeCurrency:{name:"Ropsten Ether",symbol:"ropETH",decimals:18}},[x.KOVAN]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://kovan.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Kovan",logoUrl:f,nativeCurrency:{name:"Kovan Ether",symbol:"kovETH",decimals:18}},[x.GOERLI]:{networkType:C.L1,docs:"https://docs.uniswap.org/",explorer:"https://goerli.etherscan.io/",infoLink:"https://info.uniswap.org/#/",label:"Görli",logoUrl:f,nativeCurrency:{name:"Görli Ether",symbol:"görETH",decimals:18}},[x.OPTIMISM]:{networkType:C.L2,blockWaitMsBeforeWarning:15e5,bridge:"https://gateway.optimism.io/?chainId=1",docs:"https://optimism.io/",explorer:"https://optimistic.etherscan.io/",infoLink:"https://info.uniswap.org/#/optimism/",label:"Optimism",logoUrl:b,statusPage:"https://optimism.io/status",helpCenterUrl:"https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.OPTIMISTIC_KOVAN]:{networkType:C.L2,blockWaitMsBeforeWarning:15e5,bridge:"https://gateway.optimism.io/",docs:"https://optimism.io/",explorer:"https://kovan-optimistic.etherscan.io/",infoLink:"https://info.uniswap.org/#/optimism/",label:"Optimistic Kovan",logoUrl:b,statusPage:"https://optimism.io/status",helpCenterUrl:"https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ",nativeCurrency:{name:"Optimistic Kovan Ether",symbol:"kovOpETH",decimals:18}},[x.ARBITRUM_ONE]:{networkType:C.L2,blockWaitMsBeforeWarning:6e5,bridge:"https://bridge.arbitrum.io/",docs:"https://offchainlabs.com/",explorer:"https://arbiscan.io/",infoLink:"https://info.uniswap.org/#/arbitrum",label:"Arbitrum",logoUrl:w,helpCenterUrl:"https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}},[x.ARBITRUM_RINKEBY]:{networkType:C.L2,blockWaitMsBeforeWarning:6e5,bridge:"https://bridge.arbitrum.io/",docs:"https://offchainlabs.com/",explorer:"https://testnet.arbiscan.io/",infoLink:"https://info.uniswap.org/#/arbitrum/",label:"Arbitrum Rinkeby",logoUrl:w,helpCenterUrl:"https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum",nativeCurrency:{name:"Rinkeby Arbitrum Ether",symbol:"rinkArbETH",decimals:18}},[x.POLYGON]:{networkType:C.L1,blockWaitMsBeforeWarning:6e5,bridge:"https://wallet.polygon.technology/bridge",docs:"https://polygon.io/",explorer:"https://polygonscan.com/",infoLink:"https://info.uniswap.org/#/polygon/",label:"Polygon",logoUrl:v,nativeCurrency:{name:"Polygon Matic",symbol:"MATIC",decimals:18}},[x.POLYGON_MUMBAI]:{networkType:C.L1,blockWaitMsBeforeWarning:6e5,bridge:"https://wallet.polygon.technology/bridge",docs:"https://polygon.io/",explorer:"https://mumbai.polygonscan.com/",infoLink:"https://info.uniswap.org/#/polygon/",label:"Polygon Mumbai",logoUrl:v,nativeCurrency:{name:"Polygon Mumbai Matic",symbol:"mMATIC",decimals:18}},[x.BINANCE]:{networkType:C.L1,blockWaitMsBeforeWarning:6e5,docs:"https://www.binance.com",explorer:"https://www.bscscan.com/",infoLink:"https://www.binance.com",label:"Binance Smart Chain",logoUrl:y,nativeCurrency:{name:"BNB",symbol:"BNB",decimals:8}},[x.BINANCE_TESTNET]:{networkType:C.L1,blockWaitMsBeforeWarning:6e5,docs:"https://testnet.binance.org/en/",explorer:"https://testnet.bscscan.com/",infoLink:"https://testnet.binance.org/en/",label:"Binance Test Chain",logoUrl:y,nativeCurrency:{name:"BNB",symbol:"TBNB",decimals:8}}};r(26699);var _=r(44870),I=r(72586),$=r(44258),E=(r(21703),r(80594));function S(e){if(!(0,E.UJ)(e))return!1;try{return(0,E.Kn)(e)}catch{return!1}}function W(e,t=4){const r=S(e);if(!r)throw Error(`Invalid 'address' parameter '${e}'.`);return`${r.substring(0,t+2)}...${r.substring(42-t)}`}const P=()=>{const e=u(),t={[x.MAINNET]:`https://mainnet.infura.io/v3/${e}`,[x.RINKEBY]:`https://rinkeby.infura.io/v3/${e}`,[x.ROPSTEN]:`https://ropsten.infura.io/v3/${e}`,[x.GOERLI]:`https://goerli.infura.io/v3/${e}`,[x.KOVAN]:`https://kovan.infura.io/v3/${e}`,[x.OPTIMISM]:`https://optimism-mainnet.infura.io/v3/${e}`,[x.OPTIMISTIC_KOVAN]:`https://optimism-kovan.infura.io/v3/${e}`,[x.ARBITRUM_ONE]:`https://arbitrum-mainnet.infura.io/v3/${e}`,[x.ARBITRUM_RINKEBY]:`https://arbitrum-rinkeby.infura.io/v3/${e}`,[x.POLYGON]:`https://polygon-mainnet.infura.io/v3/${e}`,[x.POLYGON_MUMBAI]:`https://polygon-mumbai.infura.io/v3/${e}`,[x.BINANCE]:"https://bsc-dataseed1.defibit.io/",[x.BINANCE_TESTNET]:"https://data-seed-prebsc-2-s1.binance.org:8545"},r={[x.MAINNET]:`wss://mainnet.infura.io/ws/v3/${e}`,[x.RINKEBY]:`wss://rinkeby.infura.io/ws/v3/${e}`,[x.ROPSTEN]:`wss://ropsten.infura.io/v3/${e}`,[x.GOERLI]:`wss://goerli.infura.io/v3/${e}`,[x.KOVAN]:`wss://kovan.infura.io/v3/${e}`};return{INFURA_WSS_URLS:r,INFURA_NETWORK_URLS:t}};var T=r(42478);const A=e=>(0,i.Fl)((()=>j(e.value)?new F(e.value):O(e.value)?new M(e.value):new T.sf(e.value))),B={[x.POLYGON]:new T.WU(x.POLYGON,"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",18,"WMATIC","Wrapped MATIC"),[x.POLYGON_MUMBAI]:new T.WU(x.POLYGON_MUMBAI,"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",18,"WMATIC","Wrapped MATIC"),[x.BINANCE]:new T.WU(x.BINANCE,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNC"),[x.POLYGON_MUMBAI]:new T.WU(x.POLYGON_MUMBAI,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB")},O=e=>e===x.BINANCE||e===x.BINANCE_TESTNET;class M extends T.Yp{equals(e){return e.isNative&&e.chainId===this.chainId}get wrapped(){if(!O(this.chainId))throw new Error("Not BNB");return B[this.chainId]}constructor(e){if(!j(e))throw new Error("Not BNB");super(e,8,"BNB","BNB")}}const j=e=>e===x.POLYGON_MUMBAI||e===x.POLYGON;class F extends T.Yp{equals(e){return e.isNative&&e.chainId===this.chainId}get wrapped(){if(!O(this.chainId))throw new Error("Not BNB");return B[this.chainId]}constructor(e){if(!j(e))throw new Error("Not matic");super(e,18,"MATIC","Polygon Matic")}}const z=Object.freeze({TRANSACTION:"transaction",TOKEN:"token",ADDRESS:"address",BLOCK:"block"}),R=e=>N[e].explorer;function L(e,t,r){const n=R(e);switch(r){case z.TRANSACTION:return`${n}/tx/${t}`;case z.TOKEN:return`${n}/token/${t}`;case z.BLOCK:return`${n}/block/${t}`;case z.ADDRESS:return`${n}/address/${t}`;default:return`${n}`}}var Z=r(83966),U=r(36482);function D(e,t){const{INFURA_NETWORK_URLS:r}=P(t),n=[r.value[e]]??0;if(n)return n;throw new Error("RPC URLs must use public endpoints")}async function Y({provider:e,chainId:t,INFURA_KEY:r}){if(!e)return;const n=(0,U.Ou)(Z.O$.from(t).toHexString());try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]})}catch(o){const i=o.message.includes("Unrecognized chain");if(4902!==o.code&&-32603!==o.code&&!i)throw o;{const i=N[t];await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.label,rpcUrls:D(t,r),nativeCurrency:i.nativeCurrency,blockExplorerUrls:[i.explorer]}]});try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]})}catch(o){console.debug("Added network but could not switch chains",o)}}}}var q=r(93365),V=r(51501),H=r.n(V);const K=(0,_.qj)({provider:null,etherjs:null,web3:null,chainId:null,account:null,accounts:[],active:null,error:"",etherBalance:null}),G=(H().BigInt(0),(0,m.jsu)((async()=>{if(S((0,q.U2)(K.account))&&(0,q.U2)(K.web3)&&(0,q.U2)(K.chainId)&&(0,q.U2)(K.active)){var e=K.account.toLowerCase().substr(2)+".addr.reverse",t=await K.state.web3.eth.ens.resolver(e),r=$.VM.hash(e);return await t.methods.name(r).call()}}))),J=(0,i.Fl)((()=>null!=K.chainId&&Object.values(x).includes(K.chainId))),X=(0,i.Fl)((()=>K.provider?(0,I.getProviderInfo)(K.provider):null)),Q=()=>({...(0,_.BK)(K),providerInfo:X,accountEns:G,isValidNetwork:J}),ee=()=>(0,m.jsu)((async()=>{if(!K.chainId)return 0;if(K.account||K.web3||K.chainId){const e=await K.web3.eth.getBalance(K.account);return K.web3.utils.fromWei(e.toString())}return 0})),te=()=>K.etherBalance=ee(),re=()=>K.active=!0,ne=()=>K.active=!1,oe=e=>K.error=e??"",ie=e=>K.provider=e,ae=e=>K.etherjs=e,le=e=>K.web3=e,se=e=>K.chainId=e,ce=e=>K.account=e,de=e=>K.accounts=e;var ue=r(35085),pe=r.n(ue);const{chainId:he,isValidNetwork:ge}=Q(),me=()=>{const{INFURA_NETWORK_URLS:e,INFURA_WSS_URLS:t}=P(),r=(0,i.Fl)((()=>{if(!ge.value)return null;if(null==he.value)return null;const t=e[he.value??x.MAINNET];return new(pe())(t)})),n=(0,i.Fl)((()=>{if(!ge.value)return null;const e=t[he.value??x.MAINNET]??null;return e?new(pe())(new(pe().providers.WebsocketProvider)(e)):r.value}));return{infuraWss:n,infura:r}},{chainId:fe,isValidNetwork:we}=Q(),be=(0,_.qj)({[x.KOVAN]:null,[x.RINKEBY]:null,[x.ROPSTEN]:null,[x["GÖRLI"]]:null,[x.MAINNET]:null,[x.ARBITRUM_ONE]:null,[x.ARBITRUM_RINKEBY]:null,[x.OPTIMISM]:null,[x.OPTIMISTIC_KOVAN]:null,[x.POLYGON]:null,[x.POLYGON_MUMBAI]:null,[x.BINANCE]:null,[x.BINANCE_TESTNET]:null}),ve=(0,_.qj)({[x.KOVAN]:null,[x.RINKEBY]:null,[x.ROPSTEN]:null,[x["GÖRLI"]]:null,[x.MAINNET]:null,[x.ARBITRUM_ONE]:null,[x.ARBITRUM_RINKEBY]:null,[x.OPTIMISM]:null,[x.OPTIMISTIC_KOVAN]:null,[x.POLYGON]:null,[x.POLYGON_MUMBAI]:null,[x.BINANCE]:null,[x.BINANCE_TESTNET]:null}),ye=(0,_.iH)(null),xe=(0,_.iH)(!1),ke=({number:e,time:t})=>{fe.value&&(be[fe.value]?be[fe.value]=Math.max(e,be[fe.value]):be[fe.value]=e,ve[fe.value]?ve[fe.value]=Math.max(t,ve[fe.value]):ve[fe.value]=t)},Ce=(0,i.Fl)((()=>be[fe.value])),Ne=(0,i.Fl)((()=>ve[fe.value??x.MAINNET])),_e=()=>{if(xe.value)return;xe.value=!0;const{infuraWss:e}=me(),t=(0,q.DI)(ke,100),r=e=>{const r=parseInt(e.number),n=Math.max(r,Ce.value),o=parseInt(e.number),i=Math.max(o,Ne.value);t({number:n,time:i})},n=()=>{null!=ye.value&&"function"==typeof ye.value&&ye.value.unsubscribe((()=>{ye.value=null})),xe.value=!1};(0,i.YP)([fe,we],(([t,o])=>{n(),t&&o&&(e.value.eth.getBlock("latest").then(r).catch((e=>console.error(`Failed to get block number for chainId: ${t}`,e))),ye.value=e.value.eth.subscribe("newBlockHeaders").on("data",(e=>r(e))))}),{immediate:!0}),(0,i.Ah)(n)},{on:Ie,emit:$e}=(0,m.v1O)("modals"),Ee=(0,_.iH)(!1),Se=(0,_.iH)(null),We=()=>{Ee.value&&(Se.value(),Se.value=null,Ee.value=!1)},Pe=()=>{Ee.value||($e("close"),Se.value||(Se.value=Ie(We)),Ee.value=!0)},Te=()=>{Ee.value?We():Pe()},Ae=()=>({isOpen:Ee,close:We,open:Pe,toggle:Te}),{on:Be,emit:Oe}=(0,m.v1O)("modals");const Me=(0,_.qj)([]),{chainId:je,account:Fe,isValidNetwork:ze}=Q(),Re=(0,m.v1O)("transactions"),Le=(0,m._aR)("transactions",{[x.MAINNET]:{},[x.ROPSTEN]:{},[x.RINKEBY]:{},[x.GOERLI]:{},[x.KOVAN]:{},[x.ARBITRUM_ONE]:{},[x.ARBITRUM_RINKEBY]:{},[x.OPTIMISM]:{},[x.OPTIMISTIC_KOVAN]:{},[x.POLYGON]:{},[x.POLYGON_MUMBAI]:{},[x.BINANCE]:{},[x.BINANCE_TESTNET]:{}}),Ze=(0,_.iH)(!1),Ue=()=>{Le.value[je.value]&&(Le.value[je.value??x.MAINNET]={})},De=({hash:e,blockNumber:t})=>{const r=Le.value[je.value]?.[e];if(r)return r.checked=(new Date).getTime(),r.lastCheckedBlockNumber?r.lastCheckedBlockNumber=Math.max(t,r.lastCheckedBlockNumber):r.lastCheckedBlockNumber=t},Ye=({hash:e,receipt:t})=>{console.log(`Finalizing  tx ${e}`);const r=Le.value[je.value]?.[e];r&&(r.receipt=t,r.confirmedTime=(new Date).getTime(),r.onSuccess&&r.onSuccess instanceof Function&&r.onSuccess(t),Re.emit(r.hash,{...r,receipt:t,error:null}))},qe=({hash:e,error:t})=>{console.log(`Failing  tx ${e}`);const r=Le.value[je.value]?.[e];r&&(r.onError&&r.onError instanceof Function&&r.onError(t),Re.emit(r.hash,{...r,error:t,receipt:null}))},Ve=(0,i.Fl)((()=>Le.value[je.value??x.MAINNET])),He=(0,i.Fl)((()=>{const e=Le.value[je.value??x.MAINNET];return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.receipt)))}));function Ke(e){return(new Date).getTime()-e.addedTime<864e5}function Ge(e){if(e.receipt)return!1;if(!e.lastCheckedBlockNumber)return!0;const t=Ce.value-e.lastCheckedBlockNumber;console.log(`blocksSinceCheck ${t}`);const r=((new Date).getTime()-e.checked)/1e3/60;if(r>5)return!0;const n=((new Date).getTime()-e.addedTime)/1e3/60;return n>10?t>9:!(n>10)||t>2}const Je=e=>{console.log(`checking tx: ${e}`);const{infuraWss:t}=me();let r=Me.push(e);t.value.eth.getTransactionReceipt(e).then((t=>{Me.splice(r-1,1),t?Ye({hash:t.transactionHash,receipt:t}):De({hash:e,blockNumber:Ce})})).catch((t=>{Me.splice(r-1,1),qe({hash:e,error:t})}))},Xe=()=>{if(Ze.value)return;Ze.value=!0;const{infuraWss:e}=me();return(0,i.YP)([Ce,ze],((t,r)=>{r&&je.value&&e.value&&t?Object.keys(He.value).filter((e=>!Me.includes(e))).filter((e=>Ge(He.value[e]))).forEach((e=>{Je(e)})):console.log(`check tx failed isValidNetwork: ${r}\n\t\t\t\tchain_id.value: ${je.value} infura: ${e.value} lastBlockNumber: ${t}`)})),null};var Qe=r(54271);const et=e=>(0,Qe.Dh)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),tt=e=>(0,Qe.bK)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),rt=e=>(0,Qe.cp)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),nt=e=>(0,Qe.$_)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e)))),ot=e=>(0,Qe.GQ)(Object.fromEntries(Object.entries(e).filter((([,e])=>void 0!=e))));var it=r(64604);const at={bg:String,backgroundColor:String,borderColor:String,color:String,borderRadius:Number,borderWidth:Number,f:[Number,Array,String],fontSize:[Number,Array,String],m:[Number,Array,String],mx:[Number,Array,String],my:[Number,Array,String],mt:[Number,Array,String],mr:[Number,Array,String],ml:[Number,Array,String],mb:[Number,Array,String],margin:[Number,Array,String],marginTop:[Number,Array,String],marginRight:[Number,Array,String],marginLeft:[Number,Array,String],marginBottom:[Number,Array,String],p:[Number,Array,String],py:[Number,Array,String],px:[Number,Array,String],pt:[Number,Array,String],pr:[Number,Array,String],pl:[Number,Array,String],pb:[Number,Array,String],padding:[Number,Array,String],paddingTop:[Number,Array,String],paddingRight:[Number,Array,String],paddingLeft:[Number,Array,String],paddingBottom:[Number,Array,String],width:[String,Number,Array,String],w:[String,Number,Array,String],boxShadow:[String,Number],fontWeight:[String,Number],letterSpacing:Number,lineHeight:Number,flex:[String,Array],align:[String,Array],justify:[String,Array],wrap:[String,Array],flexDirection:[String,Array],alignSelf:[String,Array]};var lt=(e={})=>({...at,...e});const st=e=>(0,it.ZP)(e.sx)(e.theme),ct=e=>(0,it.ZP)(e.__css)(e.theme),dt=({theme:e,variant:t,tx:r="variants"})=>(0,it.ZP)((0,it.U2)(e,r+"."+t,(0,it.U2)(e,t)))(e),ut=(0,g.ZP)("div",lt({__css:Object,css:String,sx:Object,tx:String,variant:String}))`
  box-sizing:border-box;
  margin: 0;
  min-width: 0;
  ${st}
  ${ct}
  ${dt}
  ${et}
  ${tt}
  ${rt}
  ${nt}
  ${ot}
`,pt=((0,g.ZP)(ut)`
display:flex;
`,(0,i.Uk)((0,p.zw)(" ")+" "));function ht(e,t,r,n,o,a){const l=(0,i.up)("NetworkIcon"),s=(0,i.up)("Text"),c=(0,i.up)("Web3StatusError"),d=(0,i.up)("PendingLoader"),u=(0,i.up)("RowBetween"),h=(0,i.up)("StatusIcon"),g=(0,i.up)("IconWrapper"),m=(0,i.up)("Web3StatusConnected"),f=(0,i.up)("Web3StatusConnect");return n.isValidNetwork?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[n.active&&n.account?((0,i.wg)(),(0,i.j4)(m,{key:0,id:"web3-status-connected",pending:n.hasPendingTransactions,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[n.hasPendingTransactions?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.pendingLength)+" "+(0,p.zw)(e.$$t("Pending")),1)])),_:1}),pt,(0,i.Wm)(d,{stroke:"white"})])),_:1})):((0,i.wg)(),(0,i.j4)(s,{key:1},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.ENSName||n.shortenAddress(n.account)),1)])),_:1})),!n.hasPendingTransactions&&n.active?((0,i.wg)(),(0,i.j4)(g,{key:2,size:16},{default:(0,i.w5)((()=>[(0,i.Wm)(h)])),_:1})):(0,i.kq)("",!0)])),_:1},8,["pending","onClick"])):n.error?((0,i.wg)(),(0,i.j4)(c,{key:1,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[(0,i.Wm)(l),n.error?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.error),1)])),_:1})):(0,i.kq)("",!0)])),_:1},8,["onClick"])):((0,i.wg)(),(0,i.j4)(f,{key:2,id:"connect-wallet",faded:!n.account,onClick:n.toggleWalletModal},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(e.$t("Connect"))+" ",1),n.isMobileScreen?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,p.zw)(e.$t("Wallet")),1)],64))])),_:1})])),_:1},8,["faded","onClick"]))],64)):((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(e.$t("Wrong Network")),1)])),_:1})])),_:1}))}var gt=r(77467),mt=r(52733);function ft(e,t,r,n,o,a){const l=(0,i.up)("Box");return(0,i.wg)(),(0,i.j4)(l,{as:"button",tx:"buttons",variant:"primary",__css:e.css},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["__css"])}var wt={components:{Box:ut},data(){return{}}},bt=r(40089);const vt=(0,bt.Z)(wt,[["render",ft]]);var yt=vt;const xt=(0,g.ZP)(yt,{padding:String,width:String,borderRadius:String,altDisabledStyle:Boolean})`
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
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
		background-color: ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
	}
	&:hover {
		background-color: ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,gt._j)(.1,e.primary1)};
		background-color: ${({theme:e})=>(0,gt._j)(.1,e.primary1)};
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
			${({theme:e,disabled:t})=>!t&&(0,gt._j)(.03,e.primary5)};
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.03,e.primary5)};
	}
	&:hover {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.03,e.primary5)};
	}
	&:active {
		box-shadow: 0 0 0 1pt
			${({theme:e,disabled:t})=>!t&&(0,gt._j)(.05,e.primary5)};
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.05,e.primary5)};
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
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.05,e.bg4)};
	}
	&:hover {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.05,e.bg4)};
	}
	&:active {
		background-color: ${({theme:e,disabled:t})=>!t&&(0,gt._j)(.1,e.bg4)};
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
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
		background-color: ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
	}
	&:hover {
		background-color: ${({theme:e})=>(0,gt._j)(.05,e.primary1)};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${({theme:e})=>(0,gt._j)(.1,e.primary1)};
		background-color: ${({theme:e})=>(0,gt._j)(.1,e.primary1)};
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
		box-shadow: 0 0 0 1pt ${(0,gt._j)(.05,"#edeef2")};
	}
	&:hover {
		box-shadow: 0 0 0 1pt ${(0,gt._j)(.1,"#edeef2")};
	}
	&:active {
		box-shadow: 0 0 0 1pt ${(0,gt._j)(.1,"#edeef2")};
	}
	&:disabled {
		opacity: 50%;
		cursor: auto;
	}
`,["src","alt"]);function _t(e,t,r,n,o,a){const l=(0,i.up)("Identicon");return n.isInjected?((0,i.wg)(),(0,i.j4)(l,{key:0})):((0,i.wg)(),(0,i.iD)("img",{key:1,src:n.provider.logo,alt:n.provider.name},null,8,Nt))}function It(e,t,r,n,o,a){const l=(0,i.up)("Jazzicon"),s=(0,i.up)("StyledIdenticon");return n.account?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{diameter:16,address:n.account},null,8,["address"])])),_:1})):(0,i.kq)("",!0)}var $t=r(78919);const Et=g.ZP.div`
		height: 1rem;
		width: 1rem;
		border-radius: 1.125rem;
		background-color: ${({theme:e})=>e.bg4};
		font-size: initial;
	`;var St={components:{Jazzicon:$t.Z,StyledIdenticon:Et},setup(){const{account:e}=Q();return{account:e}}};const Wt=(0,bt.Z)(St,[["render",It]]);var Pt=Wt,Tt={components:{Identicon:Pt},setup(){const{providerInfo:e}=Q(),t=(0,i.Fl)((()=>"injected"==e.value.id));return{provider:e,isInjected:t}}};const At=(0,bt.Z)(Tt,[["render",_t]]);var Bt=At;const Ot=(0,i._)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1);function Mt(e,t,r,n,o,a){const l=(0,i.up)("StyledSVG");return(0,i.wg)(),(0,i.j4)(l,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:r.size,stroke:r.stroke},{default:(0,i.w5)((()=>[Ot])),_:1},8,["xmlns","size","stroke"])}const jt=g.F4`
	        	  from {
	        		transform: rotate(0deg);
	        	  }
	        	  to {
	        		transform: rotate(360deg);
	        	  }
	        	`,Ft=(0,g.ZP)("svg",{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}})`
		animation: 2s ${jt} linear infinite;
		height: ${({size:e})=>e};
		width: ${({size:e})=>e};
		path {
			stroke: ${({stroke:e,theme:t})=>e||t.primary1};
		}
	`;var zt={components:{StyledSVG:Ft},props:{size:{type:String,default:"16px"},stroke:{type:String,default:null}}};const Rt=(0,bt.Z)(zt,[["render",Mt]]);var Lt=Rt;const Zt=(0,g.ZP)(ut,{width:{type:String,required:!1,default:"100%"},align:{type:String,required:!1,default:"center"},justify:{type:String,required:!1,default:"flex-start"},padding:{type:String,required:!1,default:void 0},border:{type:String,required:!1,default:void 0},borderRadius:{type:String,required:!1,default:void 0}})`
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
`),Yt=(0,g.ZP)(Zt,{gap:{type:String,required:!1,default:void 0},justify:{type:String,required:!1,default:void 0}})`
	width: fit-content;
	${({gap:e})=>e&&`margin: -${e};`}
`;const qt=(0,g.ZP)(Lt)`
		margin-top: 4px;
	`,Vt=(0,g.ZP)("div",{size:Number})`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		& > * {
			height: ${({size:e})=>e?e+"px":"32px"};
			width: ${({size:e})=>e?e+"px":"32px"};
		}
	`,Ht=(0,g.ZP)(Ct)`
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
	`,Kt=(0,g.ZP)(Ht)`
		background-color: ${({theme:e})=>e.red1};
		border: 1px solid ${({theme:e})=>e.red1};
		color: ${({theme:e})=>e.white};
		font-weight: 500;
		:hover,
		:focus {
			background-color: ${({theme:e})=>(0,gt._j)(.1,e.red1)};
		}
	`,Gt=(0,g.ZP)(Ht,{faded:Boolean})`
		background-color: ${({theme:e})=>e.primary4};
		border: none;

		color: ${({theme:e})=>e.primaryText1};
		font-weight: 500;

		:hover,
		:focus {
			border: 1px solid ${({theme:e})=>(0,gt._j)(.05,e.primary4)};
			color: ${({theme:e})=>e.primaryText1};
		}

		${({faded:e})=>e&&g.iv`
				background-color: ${({theme:e})=>e.primary5};
				border: 1px solid ${({theme:e})=>e.primary5};
				color: ${({theme:e})=>e.primaryText1};

				:hover,
				:focus {
					border: 1px solid ${({theme:e})=>(0,gt._j)(.05,e.primary4)};
					color: ${({theme:e})=>(0,gt._j)(.05,e.primaryText1)};
				}
			`}
	`,Jt=(0,g.ZP)(Ht,{pending:Boolean})`
		background-color: ${({pending:e,theme:t})=>e?t.primary1:t.bg1};
		border: 1px solid
			${({pending:e,theme:t})=>e?t.primary1:t.bd1};
		color: ${({pending:e,theme:t})=>e?t.white:t.text1};
		font-weight: 600;
		:hover,
		:focus {
			border: 1px solid ${({theme:e})=>(0,gt._j)(.05,e.bd3)};
			:focus {
				border: 1px solid
					${({pending:e,theme:t})=>e?(0,gt._j)(.1,t.primary1):(0,gt._j)(.1,t.bg2)};
			}
		}
	`,Xt=g.ZP.p`
		flex: 1 1 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0 0.5rem 0 0.25rem;
		font-size: 1rem;
		width: fit-content;
		font-weight: 500;
	`,Qt=(0,g.ZP)(mt.AHY)`
		margin-left: 0.25rem;
		margin-right: 0.5rem;
		width: 16px;
		height: 16px;
	`;var er={components:{Web3StatusError:Kt,IconWrapper:Vt,Web3StatusConnect:Gt,Web3StatusConnected:Jt,Text:Xt,NetworkIcon:Qt,StatusIcon:Bt,PendingLoader:qt,RowBetween:Ut},setup(){function e(e,t){return t.addedTime-e.addedTime}const{accountEns:t,account:r,error:n,active:o,isValidNetwork:a}=Q(),l=(0,i.Fl)((()=>{const t=Object.values(Ve?.value??{});return t.filter(Ke).sort(e)})),s=(0,i.Fl)((()=>!!Object.keys(He.value).length)),c=(0,i.Fl)((()=>Object.keys(He.value).length)),{toggle:d,isOpen:u}=Ae(),p=(0,i.Fl)((()=>l?.value?.filter((e=>e.receipt))?.map((e=>e.hash))??[])),h=(0,m.ach)("(min-width: 768)");return{confirmed:p,isOpen:u,isMobileScreen:h,toggleWalletModal:d,hasPendingTransactions:s,active:o,error:n,account:r,ENSName:t,isValidNetwork:a,shortenAddress:W,pending:He,pendingLength:c}}};const tr=(0,bt.Z)(er,[["render",ht]]);var rr=tr;function nr(e,t,r,o,a,l){const s=(0,i.up)("CloseColor"),c=(0,i.up)("CloseIcon"),d=(0,i.up)("HeaderRow"),u=(0,i.up)("ContentWrapper"),h=(0,i.up)("UpperSection"),g=(0,i.up)("AccountDetails"),m=(0,i.up)("HoverText"),f=(0,i.up)("PendingView"),w=(0,i.up)("ConnectModal"),b=(0,i.up)("wrapper"),v=(0,i.up)("ModalOverlay");return(0,i.wg)(),(0,i.j4)(v,{"is-open":a.showing},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(b,null,{default:(0,i.w5)((()=>[o.error?((0,i.wg)(),(0,i.j4)(h,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Error Connecting")),1)])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("h5",null,(0,p.zw)(l.t("Error connecting. Try refreshing the page")),1)])),_:1})])),_:1})):(0,i.kq)("",!0),o.isValidNetwork?o.isValidNetwork&&o.connected&&o.active&&"account"===o.walletView?((0,i.wg)(),(0,i.j4)(g,{key:2,connector:o.provider,"ens-name":o.ENSName,address:o.account,"chain-id":o.chainId},null,8,["connector","ens-name","address","chain-id"])):((0,i.wg)(),(0,i.j4)(h,{key:3},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),o.connected&&o.active&&"account"!==o.walletView?((0,i.wg)(),(0,i.j4)(d,{key:0,color:"blue"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{onClick:t[0]||(t[0]=(0,n.iM)((e=>l.goBAck()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Back")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(d,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Connect to a wallet")),1)])),_:1})])),_:1})),"pending"===o.walletView?((0,i.wg)(),(0,i.j4)(u,{key:2},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{connector:a.pendingWallet,error:l.pendingError},null,8,["connector","error"])])),_:1})):((0,i.wg)(),(0,i.j4)(w,{key:3,provider:o.provider,providers:l.providers},null,8,["provider","providers"]))])),_:1})):((0,i.wg)(),(0,i.j4)(h,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.closeWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Invalid Network")),1)])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i._)("h5",null,(0,p.zw)(l.t("Your Wallets Network is not supported")),1)])),_:1})])),_:1}))])),_:1},512),[[n.F8,a.showing]])])),_:1},8,["is-open"])}const or=e=>Object.prototype.hasOwnProperty.call(e,"result")?e.result:e;var ir=r(73738),ar=r.n(ir),lr=r(56581),sr=r.n(lr);g.ZP.button`
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
    background-color: ${({warning:e,theme:t})=>(0,gt._j)(.05,e?t.red1:t.primary1)};
  }
  :active {
    background-color: ${({warning:e,theme:t})=>(0,gt._j)(.1,e?t.red1:t.primary1)};
  }
  :disabled {
    background-color: ${({theme:e})=>e.bg1};
    color: ${({theme:e})=>e.text4};
    cursor: auto;
  }
`,(0,g.ZP)(mt.b0D)`
	cursor: pointer;
`,(0,g.ZP)(mt.b0D)`
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
`,(0,g.ZP)(mt.h0n)`
	height: 16px;
	width: 18px;
	margin-left: 10px;
	stroke: ${({theme:e})=>e.blue1};
`,(0,g.ZP)(mt.XHJ)`
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
`);function fr(e,t,r,n,o,a){const l=(0,i.up)("StyledLink");return(0,i.wg)(),(0,i.j4)(l,{target:r.target,rel:r.rel},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["target","rel"])}var wr={components:{StyledLink:ur},props:{target:{type:String,required:!1,default:"_blank"},rel:{type:String,required:!1,default:"noopener noreferrer"}}};const br=(0,bt.Z)(wr,[["render",fr]]);var vr=br;function yr(e,t,r,n,o,a){const l=(0,i.up)("TxtDiv");return(0,i.wg)(),(0,i.j4)(l,{istyles:a.textStyle},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["istyles"])}const xr=(0,g.ZP)("div",{istyles:Object})`
		box-sizing: border-box;
		margin: 0px 0px 0px 6px;
		min-width: 0px;
		${e=>g.iv`
				${e.istyles}
			`}
	`;var kr={components:{TxtDiv:xr},inheritAttrs:!1,props:{type:{type:String,required:!1,default:""},fontWeight:{type:Number,required:!1,default:null},fontSize:{type:String,required:!1,default:null},error:{type:Boolean,required:!1,default:!1}},setup(){const e=Tr();return{theme:e}},computed:{textStyle(){return{fontWeight:this.fontWeight??500,fontSize:this.fontSize??"14px",...this.styleType,...this.$attrs,...this.color}},color(){return this.$attrs.color?.startsWith("#")||this.$attrs.color?.startsWith("rgb")?{color:this.$attrs.color}:this.theme[this.$attrs?.color]?{color:this.theme[this.$attrs?.color]}:{}},styleType(){switch(this.type.toLowerCase()){case"main":return{color:this.theme["text2"]};case"link":return{color:this.theme["primary1"]};case"black":return{color:this.theme["text1"]};case"white":return{color:this.theme["white"]};case"body":return{fontWeight:this.fontWeight??400,fontSize:this.fontSize??"16px"};case"largeHeader":return{fontWeight:this.fontWeight??600,fontSize:this.fontSize??"24px"};case"mediumHeader":return{fontSize:this.fontSize??"20px"};case"subHeader":return{fontWeight:this.fontWeight??400,fontSize:this.fontSize??"14px"};case"small":return{fontSize:this.fontSize??"11px"};case"blue":return{color:this.theme["blue1"]};case"yellow":return{color:this.theme["yellow1"]};case"darkGray":return{color:this.theme["text3"]};case"gray":return{color:this.theme["bg3"]};case"italic":return{fontSize:"12px",fontStyle:"italic",color:this.theme["text2"]};case"error":return{fontSize:"12px",color:this.error?this.theme["red1"]:this.theme["text2"]};default:return{}}}}};const Cr=(0,bt.Z)(kr,[["render",yr]]);var Nr=Cr;const _r=(0,m.e7M)(),Ir=(0,q.OT)(_r),$r={upToExtraSmall:500,upToSmall:720,upToMedium:960,upToLarge:1280},Er=Object.keys($r).reduce(((e,t)=>(e[t]=(e,r,n)=>g.iv`
			@media (max-width: ${$r[t]}px) {
				${(0,g.iv)(e,r,n)}
			}
		`,e)),{}),Sr="#FFFFFF",Wr="#000000",Pr=(0,_.qj)({colors:null,white:Sr,black:Wr,text1:(0,i.Fl)((()=>_r.value?"#FFFFFF":"#000000")),text2:(0,i.Fl)((()=>_r.value?"#C3C5CB":"#565A69")),text3:(0,i.Fl)((()=>_r.value?"#6C7284":"#888D9B")),text4:(0,i.Fl)((()=>_r.value?"#565A69":"#C3C5CB")),bg0:(0,i.Fl)((()=>_r.value?"#191B1F":"#FFF")),bg1:(0,i.Fl)((()=>_r.value?"#212429":"#F7F8FA")),bg2:(0,i.Fl)((()=>_r.value?"#2C2F36":"#EDEEF2")),bg3:(0,i.Fl)((()=>_r.value?"#40444F":"#CED0D9")),bg4:(0,i.Fl)((()=>_r.value?"#565A69":"#888D9B")),bd0:(0,i.Fl)((()=>_r.value?"#191B1F":"#FFF")),bd1:(0,i.Fl)((()=>_r.value?"#212429":"#F7F8FA")),bd2:(0,i.Fl)((()=>_r.value?"#2C2F36":"#EDEEF2")),bd3:(0,i.Fl)((()=>_r.value?"#40444F":"#CED0D9")),modalBG:(0,i.Fl)((()=>_r.value?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)")),primary1:(0,i.Fl)((()=>_r.value?"#2172E5":"#E8006F")),primary3:(0,i.Fl)((()=>_r.value?"#4D8FEA":"#FF99C9")),primary4:(0,i.Fl)((()=>_r.value?"#376bad70":"#F6DDE8")),primary5:(0,i.Fl)((()=>_r.value?"#153d6f70":"#FDEAF1")),primaryText1:(0,i.Fl)((()=>_r.value?"#5090ea":"#D50066")),red1:"#FD4040",green1:"#27AE60",yellow2:"#F3841E",blue1:"#a78253",grids:{sm:8,md:12,lg:24},shadow1:(0,i.Fl)((()=>_r.value?"#000":"#2F80ED")),mediaWidth:{...Er},flexColumnNoWrap:g.iv`
			display: flex;
			flex-flow: column nowrap;
		`,flexRowNoWrap:g.iv`
			display: flex;
			flex-flow: row nowrap;
		`});function Tr(){const e=(0,i.f3)("theme");if(!e)throw new Error("No Theme provided!");return e}const Ar=["src"],Br={key:0},Or={key:1},Mr={key:0},jr=(0,i._)("span",{style:{marginLeft:"4px"}},"Copy Address",-1),Fr=(0,i._)("span",{style:{marginLeft:"4px"}},"View on Etherscan",-1),zr=(0,i._)("span",{style:{marginLeft:"4px"}},"View on Etherscan",-1),Rr=(0,i.Uk)("Recent Transactions"),Lr=(0,i.Uk)("(clear all)"),Zr=(0,i.Uk)("Your transactions will appear here...");function Ur(e,t,r,o,a,l){const s=(0,i.up)("CloseColor"),c=(0,i.up)("CloseIcon"),d=(0,i.up)("HeaderRow"),u=(0,i.up)("WalletName"),h=(0,i.up)("WalletAction"),g=(0,i.up)("AccountGroupingRow"),m=(0,i.up)("Jazzicon"),f=(0,i.up)("MainWalletAction"),w=(0,i.up)("IconWrapper"),b=(0,i.up)("AccountControl"),v=(0,i.up)("Copy"),y=(0,i.up)("LinkIcon"),x=(0,i.up)("AddressLink"),k=(0,i.up)("InfoCard"),C=(0,i.up)("YourAccount"),N=(0,i.up)("AccountSection"),_=(0,i.up)("UpperSection"),I=(0,i.up)("TextWrapper"),$=(0,i.up)("LinkStyledButton"),E=(0,i.up)("AutoRow"),S=(0,i.up)("Transaction"),W=(0,i.up)("TransactionListWrapper"),P=(0,i.up)("LowerSection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{onClick:(0,n.iM)(o.toggleWeb3Modal,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1},8,["onClick"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Account")),1)])),_:1}),(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Connected with"))+" "+(0,p.zw)(r.connector.name),1)])),_:1}),(0,i._)("div",null,["injected"!==r.connector.type?((0,i.wg)(),(0,i.j4)(h,{key:0,style:(0,p.j5)({fontSize:".825rem",fontWeight:400,marginRight:"8px"}),onClick:t[0]||(t[0]=(0,n.iM)((t=>e.logOut()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Disconnect")),1)])),_:1},8,["style"])):(0,i.kq)("",!0),(0,i.Wm)(h,{style:(0,p.j5)({fontSize:".825rem",fontWeight:400}),onClick:t[1]||(t[1]=(0,n.iM)((e=>l.setWalletView("options")),["prevent"]))},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Change")),1)])),_:1},8,["style"])])])),_:1}),(0,i.Wm)(g,{id:"web3-account-identifier-row"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(w,{size:"16"},{default:(0,i.w5)((()=>["injected"===r.connector.type?((0,i.wg)(),(0,i.j4)(m,{key:0,diameter:24,address:r.address},null,8,["address"])):((0,i.wg)(),(0,i.iD)("img",{key:1,src:r.connector.logo,alt:"wallet connect logo"},null,8,Ar)),"portis"===r.connector.id?((0,i.wg)(),(0,i.j4)(f,{key:2,onClick:t[2]||(t[2]=e=>r.connector._portis.showPortis())},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Show Portis")),1)])),_:1})):(0,i.kq)("",!0)])),_:1}),e.ENSName?((0,i.wg)(),(0,i.iD)("p",Br,(0,p.zw)(e.ENSName),1)):((0,i.wg)(),(0,i.iD)("p",Or,(0,p.zw)(r.address&&a.shortenAddress(r.address)),1))])])),_:1})])),_:1}),(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[r.address?((0,i.wg)(),(0,i.iD)("div",Mr,[(0,i.Wm)(v,{"to-copy":r.address},{default:(0,i.w5)((()=>[jr])),_:1},8,["to-copy"]),r.ensName?((0,i.wg)(),(0,i.j4)(x,{key:0,"has-e-n-s":!!r.ensName,"is-e-n-s":!0,href:a.getEtherscanLink(r.chainId,r.ensName,"address")},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"16"}),Fr])),_:1},8,["has-e-n-s","href"])):(0,i.kq)("",!0),(0,i.Wm)(x,{"has-e-n-s":!!r.ensName,"is-e-n-s":!1,href:a.getEtherscanLink(r.chainId,r.address,"address")},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{size:"16"}),zr])),_:1},8,["has-e-n-s","href"])])):(0,i.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o.txs.length>0?((0,i.wg)(),(0,i.j4)(P,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{mb:"1rem",style:{justifyContent:"space-between"}},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{type:"body"},{default:(0,i.w5)((()=>[Rr])),_:1}),(0,i.Wm)($,{onClick:(0,n.iM)(o.clearAllTransactions,["prevent"])},{default:(0,i.w5)((()=>[Lr])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.txs,(t=>((0,i.wg)(),(0,i.j4)(S,{key:t.hash,link:a.getEtherscanLink(r.chainId,e.hash,"transaction"),tx:t},null,8,["link","tx"])))),128))])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(P,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{type:"body",color:l.theme.text1},{default:(0,i.w5)((()=>[Zr])),_:1},8,["color"])])),_:1}))],64)}function Dr(e,t,r,o,a,l){const s=(0,i.up)("CheckCircle"),c=(0,i.up)("TransactionStatusText"),d=(0,i.up)("Copy",!0),u=(0,i.up)("CopyIcon");return(0,i.wg)(),(0,i.j4)(u,{onClick:t[0]||(t[0]=(0,n.iM)((e=>l.copyThis(r.toCopy)),["prevent"]))},{default:(0,i.w5)((()=>[a.isCopied?((0,i.wg)(),(0,i.j4)(c,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{size:"16"}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Copied")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(c,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{size:"16"})])),_:1})),a.isCopied?(0,i.kq)("",!0):(0,i.WI)(e.$slots,"default",{key:2})])),_:3})}var Yr=r(51945),qr=r.n(Yr);const Vr=(0,g.ZP)(cr)`
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
	`,Hr=g.ZP.span`
		margin-left: 0.25rem;
		font-size: 0.825rem;
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
	`;var Kr={components:{TransactionStatusText:Hr,CopyIcon:Vr,CheckCircle:mt.rE2,Copy:mt.TIy},props:{toCopy:String,timeout:{type:Number,required:!1,default:500}},data(){return{isCopied:!1}},watch:{isCopied(e){e&&setTimeout((()=>{this.isCopied=!1}),this.timeout)}},methods:{copyThis(e){this.isCopied=qr()(e)},t(e){return this.$t instanceof Function?this.$t(e):e}}};const Gr=(0,bt.Z)(Kr,[["render",Dr]]);var Jr=Gr;function Xr(e,t,r,n,o,a){const l=(0,i.up)("TransactionStatusText"),s=(0,i.up)("RowFixed"),c=(0,i.up)("Loader"),d=(0,i.up)("CheckCircleIcon"),u=(0,i.up)("TriangleIcon"),h=(0,i.up)("IconWrapper"),g=(0,i.up)("TransactionState"),m=(0,i.up)("TransactionWrapper");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{href:r.link,pending:a.pending,success:a.success},{default:(0,i.w5)((()=>[(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.tx.summary?r.tx.summary:r.tx.hash)+" ↗",1)])),_:1})])),_:1}),(0,i.Wm)(h,{pending:a.pending,success:"success"},{default:(0,i.w5)((()=>[a.pending?((0,i.wg)(),(0,i.j4)(c,{key:0})):a.success?((0,i.wg)(),(0,i.j4)(d,{key:1,size:16})):((0,i.wg)(),(0,i.j4)(u,{key:2,size:16}))])),_:1},8,["pending"])])),_:1},8,["href","pending","success"])])),_:1})}const Qr=(0,i._)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1);function en(e,t,r,n,o,a){const l=(0,i.up)("StyledSVG");return(0,i.wg)(),(0,i.j4)(l,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",size:r.size,stroke:r.stroke},{default:(0,i.w5)((()=>[Qr])),_:1},8,["xmlns","size","stroke"])}const tn=g.F4`
	                	from { transform: rotate(0deg);}
	                	to {transform: rotate(360deg);}`,rn=(0,g.ZP)("svg",{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}})`
		animation: 2s ${tn} linear infinite;
		height: ${({size:e})=>e};
		width: ${({size:e})=>e};
		path {
			stroke: ${({stroke:e,theme:t})=>e||t.primary1};
		}
	`;var nn={components:{StyledSVG:rn},props:{size:{type:String,required:!1,default:"16px"},stroke:{type:String,required:!1,default:null}}};const on=(0,bt.Z)(nn,[["render",en]]);var an=on;const ln=g.ZP.div``,sn=g.ZP.div`
		margin-right: 0.5rem;
		display: flex;
		align-items: center;
		:hover {
			text-decoration: underline;
		}
	`,cn=(0,g.ZP)(vr,{pending:{type:Boolean},success:{type:Boolean,required:!1}})`
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
	`;var un={components:{IconWrapper:dn,TransactionState:cn,TransactionStatusText:sn,TransactionWrapper:ln,RowFixed:Yt,Loader:an,CheckCircleIcon:mt.rE2,TriangleIcon:mt.FEE},props:{tx:{type:Object,required:!0},link:{type:String,required:!0}},computed:{summary(){return this.tx.summary},pending(){return!this.tx.receipt},success(){return!this.pending&&this.tx&&(1===this.tx.receipt.status||"undefined"===typeof this.tx.receipt.status)}}};const pn=(0,bt.Z)(un,[["render",Xr]]);var hn=pn;const gn=g.ZP.div`
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
	`,fn=g.ZP.div`
		padding: 1rem;
		border: 1px solid ${({theme:e})=>e.bg3};
		border-radius: 20px;
		position: relative;
		display: grid;
		grid-row-gap: 12px;
		margin-bottom: 20px;
	`,wn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		color: ${({theme:e})=>e.text1};

		div {
			${({theme:e})=>e.flexRowNoWrap}
			align-items: center;
		}
	`,bn=g.ZP.div`
		background-color: ${({theme:e})=>e.bg1};
		padding: 0rem 1rem;
		${({theme:e})=>e.mediaWidth.upToMedium`padding: 0rem 1rem 1.5rem 1rem;`};
	`,vn=g.ZP.div`
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
	`,kn=(0,g.ZP)(vr)`
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
	`,Nn=(0,g.ZP)(mt.b0D)`
		path {
			stroke: ${({theme:e})=>e.text4};
		}
	`,_n=g.ZP.div`
		width: initial;
		font-size: 0.825rem;
		font-weight: 500;
		color: ${({theme:e})=>e.text3};
	`,In=(0,g.ZP)("div",{size:{type:[Number,String],required:!1,default:32}})`
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
	`,$n=g.ZP.div`
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
	`,Sn=(0,g.ZP)(En)`
		color: ${({theme:e})=>e.primary1};
	`;var Wn={components:{Jazzicon:$t.Z,MainWalletAction:Sn,WalletAction:En,TransactionListWrapper:$n,IconWrapper:In,HeaderRow:gn,UpperSection:mn,InfoCard:fn,AccountGroupingRow:wn,WalletName:_n,CloseColor:Nn,CloseIcon:Cn,AddressLink:kn,AccountControl:xn,LowerSection:yn,YourAccount:vn,AccountSection:bn,AutoRow:Dt,Copy:Jr,Transaction:hn,LinkIcon:mt.h0n,LinkStyledButton:cr,TextWrapper:Nr},inject:["setWalletView","theme"],props:{address:{type:String,required:!0},chainId:{type:[Number,String],required:!0},connector:{type:Object,required:!0},ensName:{type:String,required:!1}},setup(){const e=(0,i.Fl)((()=>Object.values(Ve.value))),{close:t}=Ae();return{txs:e,toggleWeb3Modal:t,clearAllTransactions:Ue}},data(){return{getEtherscanLink:L,shortenAddress:W}},methods:{t(e){return this.$t instanceof Function?this.$t(e):e}}};const Pn=(0,bt.Z)(Wn,[["render",Ur]]);var Tn=Pn;const An=(0,i._)("span",null,"New to Ethereum?  ",-1),Bn=(0,i.Uk)("Learn more about wallets");function On(e,t,r,o,a,l){const s=(0,i.up)("ProviderComponent"),c=(0,i.up)("option-grid"),d=(0,i.up)("ExternalLink"),u=(0,i.up)("Blurb"),p=(0,i.up)("ContentWrapper");return(0,i.wg)(),(0,i.j4)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.providersArray,((e,t)=>((0,i.wg)(),(0,i.j4)(s,{id:`connect-${e.name}`,key:e.name,ref_for:!0,ref:"prvs_"+t,provider:e,onClick:(0,n.iM)((t=>l.selectProvidex(e)),["prevent"])},null,8,["id","provider","onClick"])))),128))])),_:1}),(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[An,(0,i.Wm)(d,{href:"https://ethereum.org/wallets/"},{default:(0,i.w5)((()=>[Bn])),_:1})])),_:1})])),_:1})}const Mn=(0,i._)("div",null,null,-1),jn=["src","alt"];function Fn(e,t,r,n,o,a){const l=(0,i.up)("GreenCircle"),s=(0,i.up)("CircleWrapper"),c=(0,i.up)("HeaderText"),d=(0,i.up)("SubHeader"),u=(0,i.up)("OptionCardLeft"),h=(0,i.up)("IconWrapper"),g=(0,i.up)("OptionCardClickable");return(0,i.wg)(),(0,i.j4)(g,{clickable:n.canClick,active:r.provider.active&&n.activated},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{title:r.showDescription?"":r.provider.decription,color:r.provider.color},{default:(0,i.w5)((()=>[r.provider.active&&n.activated?((0,i.wg)(),(0,i.j4)(s,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[Mn])),_:1})])),_:1})):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,p.zw)(r.provider.name),1)])),_:1},8,["title","color"]),r.showDescription?((0,i.wg)(),(0,i.j4)(d,{key:0},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.provider.description),1)])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(h,{size:r.provider.size},{default:(0,i.w5)((()=>[(0,i._)("img",{src:r.provider.logo,alt:r.provider.name},null,8,jn)])),_:1},8,["size"])])),_:1},8,["clickable","active"])}const zn=(0,g.ZP)("button",{active:Boolean})`
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
	`,Yn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		color: ${e=>"blue"===e.color?({theme:e})=>e.primary1:({theme:e})=>e.text1};
		font-size: 1rem;
		font-weight: 500;
	`,qn=g.ZP.div`
		color: ${({theme:e})=>e.text1};
		margin-top: 10px;
		font-size: 12px;
	`,Vn=(0,g.ZP)("div",{size:{type:Number,required:!1,default:24}})`
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
	`;var Hn={components:{IconWrapper:Vn,SubHeader:qn,HeaderText:Yn,CircleWrapper:Dn,GreenCircle:Un,OptionCardClickable:Zn,OptionCardLeft:Ln},props:{provider:{type:Object,required:!1,default:null},showDescription:{type:Boolean,required:!1,default:!1},clickable:{type:Boolean,required:!1,default:!0}},setup(e){const{active:t}=Q(),r=(0,i.Fl)((()=>{const r=e.provider.active&&t.value;return e.clickable&&!r}));return{canClick:r,activated:t}}};const Kn=(0,bt.Z)(Hn,[["render",Fn]]);var Gn=Kn;const Jn=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap}
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		${({theme:e})=>e.mediaWidth.upToMedium`margin: 1 rem; font - size: 12 px;`};
	`,Xn=g.ZP.div`
		display: grid;
		grid-gap: 10px;
		${({theme:e})=>e.mediaWidth.upToMedium` grid - template - columns: 1 fr; grid - gap: 10 px;`};
	`;var Qn={components:{ExternalLink:vr,OptionGrid:Xn,Blurb:Jn,ContentWrapper:mr,ProviderComponent:Gn},inject:["selectProvider"],props:{providers:{type:[Array,Object],default:null}},computed:{providersArray(){return Object.values(this.providers)}},mounted(){this.$nextTick((()=>this.$refs?.prvs_0?.$el?.focus()))},methods:{selectProvidex(e){this.selectProvider(e)}}};const eo=(0,bt.Z)(Qn,[["render",On]]);var to=eo;function ro(e,t,r,o,a,l){const s=(0,i.up)("DialogContent"),c=(0,i.up)("StyledDialogOverlay");return(0,i.wg)(),(0,i.j4)(n.uT,{name:"fade",appear:""},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(c,{onClick:(0,n.iM)(o.onDismiss,["prevent"])},{default:(0,i.w5)((()=>[o.isMobile?((0,i.wg)(),(0,i.j4)(s,{key:0,ref:"target","aria-label":"dialog content","min-height":r.minHeight,"max-height":r.maxHeight,mobile:o.isMobile,style:(0,p.j5)({transform:`translateY(${o.sprung>0?o.sprung:0}px)`}),onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["min-height","max-height","mobile","style"])):((0,i.wg)(),(0,i.j4)(s,{key:1,"aria-label":"dialog content","min-height":r.minHeight,"max-height":r.maxHeight,mobile:o.isMobile,onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3},8,["min-height","max-height","mobile"]))])),_:3},8,["onClick"]),[[n.F8,r.isOpen]])])),_:3})}var no=r(56913),oo=r(46836);const io=g.ZP.div`
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
	`,ao=(0,g.ZP)("div",{minHeight:Number,maxHeight:Number,mobile:Boolean,isOpen:Boolean})`
		 {
			overflow-y: ${({mobile:e})=>e?"scroll":"hidden"};
			background: #fff;
			outline: none;
			margin: 0 0 2rem 0;
			background-color: ${({theme:e})=>e.bg1};
			box-shadow: 0 4px 8px 0
				${({theme:e})=>(0,gt.DZ)(.95,e.shadow1)};
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
	`;var lo={components:{StyledDialogOverlay:io,DialogContent:ao},props:{isOpen:{type:Boolean,required:!0},minHeight:{type:Number,required:!1},maxHeight:{type:Number,required:!1,default:90}},setup(){const e=(0,_.iH)(0),t=(0,oo.S)(e,{stiffness:210,damping:20,mass:1}),r=(0,i.f3)("onDismiss"),n=(0,_.iH)(null),o=(0,i.Fl)((()=>n.value?.$el??null));if(no.isMobile){const{lengthY:t}=(0,m.YvF)(o,{passive:!0,onSwipe(){if(t.value<0){const r=Math.abs(t.value);e.value=r}else e.value=0},onSwipeEnd(){if(t.value<0&&Math.abs(t.value)>200)return r(),e.value=0;e.value=0}})}return{sprung:t,top:e,target:n,isMobile:no.isMobile,targetHtml:o,onDismiss:r}},data(){return{lastPosY:0,isDragging:!1}},methods:{onDrag(e){if(this.isDragging||(this.isDragging=!0),this.positionY=16==e.direction?e.deltaY:0,e.isFinal){if(this.isDragging=!1,e.deltaY>300||e.velocity>.3&&16==e.direction)return this.onDismiss();this.positionY=0}}}};const so=(0,bt.Z)(lo,[["render",ro]]);var co=so;function uo(e,t,r,o,a,l){const s=(0,i.up)("ErrorButton"),c=(0,i.up)("ErrorGroup"),d=(0,i.up)("StyledLoader"),u=(0,i.up)("LoadingWrapper"),h=(0,i.up)("LoadingMessage"),g=(0,i.up)("Provider"),m=(0,i.up)("PendingSection");return(0,i.wg)(),(0,i.j4)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{error:r.error},{default:(0,i.w5)((()=>[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[r.error?((0,i.wg)(),(0,i.j4)(c,{key:0,onClick:t[0]||(t[0]=(0,n.iM)((e=>l.retryConnection()),["prevent"]))},{default:(0,i.w5)((()=>[(0,i._)("div",null,(0,p.zw)(l.t("Error connecting"))+".",1),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(l.t("Try Again ")),1)])),_:1})])),_:1})):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Wm)(d),(0,i.Uk)(" "+(0,p.zw)(l.t("Initializing...")),1)],64))])),_:1})])),_:1},8,["error"]),((0,i.wg)(),(0,i.j4)(g,{key:r.connector.name,desc:!0,clickable:!1,provider:r.connector},null,8,["provider"]))])),_:1})}const po=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap};
		align-items: center;
		justify-content: center;
		width: 100%;
		& > * {
			width: 100%;
		}
	`,ho=(0,g.ZP)(an)`
		margin-right: 1rem;
	`,go=(0,g.ZP)("div",{error:{type:Boolean,required:!1,default:!1}})`
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
	`,mo=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
		justify-content: flex-start;
	`,fo=g.ZP.div`
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
			background-color: ${({theme:e})=>(0,gt._j)(.1,e.text4)};
		}
	`,wo=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		align-items: center;
		justify-content: center;
	`;var bo={components:{LoadingWrapper:wo,ErrorButton:fo,ErrorGroup:mo,LoadingMessage:go,StyledLoader:ho,PendingSection:po,Provider:Gn},inject:["retryConnection"],props:{connector:{type:Object,required:!0},error:{type:Boolean,required:!1,default:!1}},methods:{t(e){return this.$t instanceof Function?this.$t(e):e}}};const vo=(0,bt.Z)(bo,[["render",uo]]);var yo=vo,xo=r(71259),ko=r.n(xo);const Co=g.ZP.div`
		position: absolute;
		right: 1rem;
		top: 14px;
		color: ${({theme:e})=>e.text4};
		&:hover {
			cursor: pointer;
			opacity: 0.6;
		}
	`,No=(0,g.ZP)(mt.b0D,{size:Number})`
		path {
			stroke: ${({theme:e})=>e.text4};
		}
	`,_o=g.ZP.div`
		${({theme:e})=>e.flexColumnNoWrap}
		margin: 0;
		padding: 0;
		width: 100%;
	`,Io=g.ZP.div`
		${({theme:e})=>e.flexRowNoWrap};
		padding: 1rem 1rem;
		font-weight: 500;
		color: ${e=>"blue"===e.color?({theme:e})=>e.primary1:"inherit"};
		${({theme:e})=>e.mediaWidth.upToMedium` padding: 1 rem; `};
	`,$o=g.ZP.div`
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
	`,Eo=g.ZP.div`
		:hover {
			cursor: pointer;
		}
	`;var So={components:{UpperSection:$o,HoverText:Eo,ContentWrapper:mr,HeaderRow:Io,ModalOverlay:co,Wrapper:_o,CloseIcon:Co,ConnectModal:to,CloseColor:No,AccountDetails:Tn,PendingView:yo},provide(){return{retryConnection:this.retryConnection,selectProvider:this.selectProvider,onClose:this.closeWeb3Modal,onDismiss:this.closeWeb3Modal,setWalletView:this.setWalletView}},setup(){const{isOpen:e,close:t}=Ae(),r=c();_e(),Xe();const n=(0,_.qj)({cacheProvider:!0,disableInjectedProvider:!1,providerOptions:r,network:""});te();const{etherBalance:o,provider:a,etherjs:l,web3:s,chainId:d,account:u,active:p,error:h,isValidNetwork:g,accountEns:m}=Q(),f=(0,i.Fl)((()=>!!s?.value??null)),w=(0,_.iH)(f.value?"account":"options");return{connected:f,ENSName:m,account:u,walletView:w,chainId:d,show:e,isValidNetwork:g,closeWeb3Modal:t,isMobile:no.isMobile,etherBalance:o,provider:a,etherjs:l,web3:s,active:p,error:h,activate:re,deactivate:ne,setError:oe,setProvider:ie,setLibrary:ae,setWeb3:le,setChainId:se,setAccount:ce,setAccounts:de,options:n,useActiveWeb3Vue:Q}},data(){return{colors:{WalletConnect:"#4196FC",Coinbase:"#315CF5",Portis:"#4A6C9B",Fortmatic:"#6748FF",Squarelink:"#3964df",Torus:"#006be8",Arkane:"#b5289e",Authereum:"#252A68","Burner Connect":"#c5a66d",UniLogin:"#0f0c4a","MEW wallet":"#003945","D'CENT":"#298a88",MetaMask:"#E8831D",Safe:"#282c34",Nifty:"#5B2DA7",Dapper:"#2F1D56",Opera:"#000",Trust:"#105baa",imToken:"#468BDF",Status:"#4360DF",Tokenary:"#2C7CF5"},availableProviders:[],pendingWallet:null,showing:!1,web3walletConnector:{},providerController:{}}},computed:{providers(){return this.availableProviders.reduce(((e,t)=>{const r=(0,I.getProviderInfoByName)(t.name);return console.log(this.providerInfo.name,r.name),e[t.name]={...r,...t,mobile:!0,color:this.colors[t.name]??"#000",active:this.providerInfo.id==r.id},e}),{})},cachedProvider(){return this.providerController.cachedProvider},providerInfo(){return(0,I.getProviderInfo)(this.web3)},pendingError(){return this.error.length>0}},watch:{show(e,t){e&&!t?(this.showing=e,this.setError(null),this.providerIsAuthorized(this.web3).then((e=>{e&&this.active&&this.connected?this.walletView="account":this.walletView="options"}))):this.showing=e}},created(){return this.web3walletConnector=new I.Web3WalletConnector(this.options),this.providerController=this.web3walletConnector.providerController,this.providerController.on(I.CONNECT_EVENT,(e=>this.onConnect(e))),this.providerController.on(I.ERROR_EVENT,(e=>this.onError(e))),this.availableProviders=this.providerController.getUserOptions(),this._onConnect()},methods:{t(e){return this.$t instanceof Function?this.$t(e):e},setWalletView(e){this.walletView=e},clearCachedProvider(){return this.providerController.clearCachedProvider()},async selectProvider(e){return(!e.active||!this.active)&&(this.pendingWallet=e,this.walletView="pending",e.onClick())},async retryConnection(){return this.setError(null),this.pendingWallet.onClick()},async connect(){return this.setError(null),this.walletView=this.connected?"account":"options",await this.connectWeb3()},async connectWeb3(){if(this.cachedProvider)return this.pendingWallet=sr()(this.providers,(e=>e.id==this.cachedProvider)),void await this.providerController.connectToCachedProvider();this.providers&&1===this.providers.length&&this.providers[0].name&&await this.providers[0].onClick()},onError(e){this.setError(e??"Connection Failed")},initWeb3(e){const t=new(pe())(e);return t.eth.extend({methods:[{name:"chainId",call:"eth_chainId",outputFormatter:t.utils.hexToNumber}]}),t},onConnect:ar()((async function(e){const t=this.initWeb3(e);this.setWeb3(t),await this.subscribeProvider(e);const r=await this.web3.eth.getAccounts(),n=await this.web3.eth.chainId();this.setChainId(this.web3.utils.hexToNumber(n)??null),this.setProvider(this.pendingWallet),this.setAccount(r[0]??null),this.setAccounts(r??[]),this.activate(),this.showing&&(this.closeWeb3Modal(),this.walletView="account")}),200,{leading:!0}),async _onConnect(){const e=await ko()();if(!e)return!1;if(this.isMobile&&this.providers&&1===this.providers.length&&this.providers[0].name)return void await this.providers[0].onClick();const t=this.initWeb3(e),r=await this.providerIsAuthorized(t);if(r&&"injected"==this.cachedProvider)return this.connectWeb3();this.setWeb3(t),await this.subscribeProvider(e),this.setProvider((0,I.getInjectedProvider)()),this.networkId=await this.web3.eth.net.getId();const n=await this.web3.eth.chainId();this.setChainId(this.web3.utils.hexToNumber(n)??null),this.deactivate()},async subscribeProvider(e){e.on&&!window.ethereum.isTrust&&(e.on("accountsChanged",(e=>{this.setAccount(e[0]??null)})),e.on("chainChanged",(async e=>{let t=this.web3.utils.hexToNumber(e)??null;this.setChainId(t)})))},goBAck(){this.walletView="account"},async providerIsAuthorized(e){if(e)try{const t=await e.currentProvider.request({method:"eth_requestAccounts"});return or(t).length>0}catch(t){return!1}}}};const Wo=(0,bt.Z)(So,[["render",nr]]);var Po=Wo;function To(e,t,r,o,a,l){const s=(0,i.up)("SelectorLogo"),c=(0,i.up)("SelectorLabel"),d=(0,i.up)("StyledChevronDown"),u=(0,i.up)("SelectorControls"),h=(0,i.up)("FlyoutHeader"),g=(0,i.up)("Row"),m=(0,i.up)("FlyoutMenu"),f=(0,i.up)("SelectorWrapper");return(0,i.wg)(),(0,i.j4)(f,{ref:"node"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{interactive:"",onClick:o.toggle},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{interactive:"",src:o.info.logoUrl},null,8,["src"]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(o.info.label),1)])),_:1}),(0,i.Wm)(d)])),_:1},8,["onClick"]),o.isOpen?((0,i.wg)(),(0,i.j4)(m,{key:0,"on-mouse-leave":o.toggle},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(o.t("Select a network")),1)])),_:1}),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.MAINNET,onClick:t[0]||(t[0]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.MAINNET})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.POLYGON,onClick:t[1]||(t[1]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.POLYGON})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.OPTIMISM,onClick:t[2]||(t[2]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.OPTIMISM})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.ARBITRUM_ONE,onClick:t[3]||(t[3]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.ARBITRUM_ONE})),["prevent"]))},null,8,["target-chain"]),(0,i.Wm)(g,{"target-chain":o.SupportedChainId.BINANCE,onClick:t[4]||(t[4]=(0,n.iM)((e=>o.handleChainSwitch({targetChain:o.SupportedChainId.BINANCE})),["prevent"]))},null,8,["target-chain"])])),_:1},8,["on-mouse-leave"])):(0,i.kq)("",!0)])),_:1},512)}function Ao(e,t,r,n,o,a){const l=(0,i.up)("SelectRowItem"),s=(0,i.up)("LinkOutCircle"),c=(0,i.up)("ExternalLink"),d=(0,i.up)("ActiveRowLinkList"),u=(0,i.up)("ActiveRowWrapper");return n.active?((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{"logo-url":n.logoUrl,label:n.label,active:""},null,8,["logo-url","label"]),(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[n.bridge?((0,i.wg)(),(0,i.j4)(c,{key:0,href:n.bridge},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.BridgeLabel)+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0),n.explorer?((0,i.wg)(),(0,i.j4)(c,{key:1,href:n.explorer},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.ExplorerLabel)+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0),n.helpCenterUrl?((0,i.wg)(),(0,i.j4)(c,{key:2,href:n.helpCenterUrl},{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(n.t("Help Center"))+" ",1),(0,i.Wm)(s)])),_:1},8,["href"])):(0,i.kq)("",!0)])),_:1})])),_:1})):((0,i.wg)(),(0,i.j4)(l,{key:1,"logo-url":n.logoUrl,label:n.label},null,8,["logo-url","label"]))}function Bo(e,t,r,n,o,a){const l=(0,i.up)("Logo"),s=(0,i.up)("NetworkLabel"),c=(0,i.up)("FlyoutRowActiveIndicator"),d=(0,i.up)("FlyoutRow");return(0,i.wg)(),(0,i.j4)(d,{active:r.active},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{src:r.logoUrl},null,8,["src"]),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,p.zw)(r.label),1)])),_:1}),r.active?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])),_:1},8,["active"])}const Oo=(0,g.ZP)("div",{active:Boolean})`
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
	`,Mo=g.ZP.div`
		background-color: ${({theme:e})=>e.green1};
		border-radius: 50%;
		height: 9px;
		width: 9px;
	`,jo=g.ZP.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`,Fo=g.ZP.div`
		flex: 1 1 auto;
	`;var zo={components:{NetworkLabel:Fo,Logo:jo,FlyoutRowActiveIndicator:Mo,FlyoutRow:Oo},props:{active:{type:Boolean,default:!1},logoUrl:{type:String,required:!0},label:{type:String,required:!0}}};const Ro=(0,bt.Z)(zo,[["render",Bo]]);var Lo=Ro;const Zo=g.ZP.div`
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
	`,Uo=g.ZP.div`
		background-color: ${({theme:e})=>e.bg1};
		border-radius: 8px;
		cursor: pointer;
		padding: 8px;
		width: 100%;
	`,Do=(0,g.ZP)(mt.veu)`
		transform: rotate(230deg);
		width: 16px;
		height: 16px;
	`;var Yo={components:{LinkOutCircle:Do,ActiveRowWrapper:Uo,ExternalLink:vr,SelectRowItem:Lo,ActiveRowLinkList:Zo},props:{targetChain:{type:[String,Number],validator:e=>Object.values(x).includes(e)}},setup(e){const{chainId:t}=Q(),r=(0,i.Fl)((()=>t.value===e.targetChain)),{helpCenterUrl:n,explorer:a,bridge:l,label:s,logoUrl:c}=N[e.targetChain],{t:d}=(0,o.QT)(),u=(0,i.Fl)((()=>{switch(t.value){case x.ARBITRUM_ONE:case x.ARBITRUM_RINKEBY:return d("Arbitrum Bridge");case x.OPTIMISM:case x.OPTIMISTIC_KOVAN:return d("Optimism Gateway");case x.POLYGON:case x.POLYGON_MUMBAI:return d("Polygon Bridge");default:return d("Bridge")}})),p=(0,i.Fl)((()=>{switch(t.value){case x.BINANCE:case x.BINANCE_TESTNET:return d("Bscscan");case x.ARBITRUM_ONE:case x.ARBITRUM_RINKEBY:return d("Arbiscan");case x.OPTIMISM:case x.OPTIMISTIC_KOVAN:return d("Optimistic Etherscan");case x.POLYGON:case x.POLYGON_MUMBAI:return d("Polygonscan");default:return d("Etherscan")}}));return{ExplorerLabel:p,BridgeLabel:u,helpCenterUrl:n,explorer:a,bridge:l,label:s,logoUrl:c,active:r,t:d}}};const qo=(0,bt.Z)(Yo,[["render",Ao]]);var Vo=qo;const Ho=g.ZP.div`
		color: ${({theme:e})=>e.text2};
		font-weight: 400;
	`,Ko=g.ZP.div`
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
		@media screen and (min-width: ${$r.upToSmall}px) {
			top: 50px;
		}
	`,Go=g.ZP.img`
		height: 20px;
		width: 20px;
		margin-right: 8px;
	`,Jo=g.ZP.div`
		flex: 1 1 auto;
	`,Xo=(0,g.ZP)(Jo)`
		display: none;
		@media screen and (min-width: ${$r.upToMedium}px) {
			display: block;
			margin-right: 8px;
		}
	`,Qo=(0,g.ZP)("div",{interactive:Boolean})`
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
	`,ei=(0,g.ZP)(Go,{interactive:Boolean})`
		margin-right: ${({interactive:e})=>e?8:0}px;
		@media screen and (min-width: ${$r.upToMedium}px) {
			margin-right: 8px;
		}
	`,ti=g.ZP.div`
		@media screen and (min-width: ${$r.upToMedium}px) {
			position: relative;
		}
	`,ri=(0,g.ZP)(mt.v4q)`
		width: 16px;
	`;var ni={props:{infuraKey:{type:String,required:!0}},components:{StyledChevronDown:ri,SelectorWrapper:ti,SelectorLogo:ei,SelectorControls:Qo,SelectorLabel:Xo,FlyoutMenu:Ko,FlyoutHeader:Ho,Row:Vo},setup(e){const{t:t}=(0,o.QT)(),r=e=>{const t=Object.entries(k).find((([,t])=>t===e)),r=t?.[0];return r?parseInt(r):void 0},n=e=>k[e]||"",{chainId:a,web3:l}=Q(),s=(0,_.iH)(null),c=(0,_.iH)(!1),d=()=>c.value=!0,u=()=>c.value=!1;(0,m.i9H)(s,(()=>u()));const p=()=>c.value?u():d(),h=(0,i.Fl)((()=>a.value?N[a.value]:void 0)),g=(0,m.ltg)("history"),f=(0,i.Fl)((()=>g.chain)),w=(0,i.Fl)((()=>f.value?r(f.value):null)),b=({targetChain:t,skipToggle:r=!1})=>{t!=a.value&&Y({provider:l.value.currentProvider,chainId:t,INFURA_KEY:e.infuraKey}).then((()=>{r||p(),g.chain=n(t)})).catch((e=>{console.error("Failed to switch networks",e),a.value&&(g.chain=n(a.value)),r||p()}))};return(0,i.YP)([a,w],(([e,t],[r])=>{e&&r&&(e!==r?g.chain=n(e):t&&t!==e&&b({targetChain:t,skipToggle:!0}))})),(0,i.ic)((()=>{a.value&&!w.value&&(g.chain=n(a.value))})),{SupportedChainId:x,info:h,t:t,chainId:a,web3:l,node:s,isOpen:c,open:d,close:u,toggle:p,handleChainSwitch:b}}};const oi=(0,bt.Z)(ni,[["render",To]]);var ii=oi;const ai=(0,g.ZP)("div",{showBackground:Boolean})`
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
	`,li=g.ZP.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-self: flex-end;
	`,si=g.ZP.div`
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
	`,ci=(0,g.ZP)("div",{active:Boolean})`
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
	`,di=(0,g.ZP)(ut,{tx:String})`
		${({theme:e})=>e.mediaWidth.upToMedium`display: none;`};
       
	`;var ui={components:{BalanceText:di,AccountElement:ci,HeaderElement:si,HeaderControls:li,HeaderFrame:ai,NetworkSelector:ii,Web3Status:rr,WalletModal:Po},setup(e,{slots:t}){const{account:r,chainId:n,active:o,isValidNetwork:a,etherBalance:l}=Q(),s=A(n),{y:c}=(0,m.baj)(),d=(0,i.Fl)((()=>{const{nativeCurrency:{symbol:e}}=N[n.value??x.MAINNET];return e})),u=(0,i.Fl)((()=>!!t.default&&!!r.value));return{nativeCurrencySymbol:d,scrollY:c,etherBalance:l,ether:s,account:r,chainId:n,hasDropDown:u,active:o,isValidNetwork:a}}};const pi=(0,bt.Z)(ui,[["render",h]]);var hi=pi;function gi({infuraKey:e,providerOptions:t,theme:r=(0,_.qj)({}),global:n=!1}){const o={install(o){const i=Object.assign(Pr,(0,_.BK)(r));i.colors=i,console.log(i,r),o.provide("theme",Pr),s(o,t),d(o,e),n&&(o.component("Web3Manager",hi),o.component("Web3Modal",Po))}};return o}const mi=(0,_.qj)({colors:null,white:"#FFFFFF",black:"#000000",text1:(0,i.Fl)((()=>_r.value?"#FFFFFF":"#000000")),text2:(0,i.Fl)((()=>_r.value?"#C3C5CB":"#565A69")),text3:(0,i.Fl)((()=>_r.value?"#6C7284":"#888D9B")),text4:(0,i.Fl)((()=>_r.value?"#565A69":"#C3C5CB")),bg0:(0,i.Fl)((()=>_r.value?"#191B1F":"#FFF")),bg1:(0,i.Fl)((()=>_r.value?"#212429":"#F7F8FA")),bg2:(0,i.Fl)((()=>_r.value?"#2C2F36":"#EDEEF2")),bg3:(0,i.Fl)((()=>_r.value?"#40444F":"#CED0D9")),bg4:(0,i.Fl)((()=>_r.value?"#565A69":"#888D9B")),bd0:(0,i.Fl)((()=>_r.value?"#191B1F":"#CED0D9")),bd1:(0,i.Fl)((()=>_r.value?"#212429":"#CED0D9")),bd2:(0,i.Fl)((()=>_r.value?"#2C2F36":"#EDEEF2")),bd3:(0,i.Fl)((()=>_r.value?"#40444F":"#CED0D9")),modalBG:(0,i.Fl)((()=>_r.value?"rgba(0,0,0,.425)":"rgba(0,0,0,0.3)")),primary1:(0,i.Fl)((()=>_r.value?"#2172E5":"#1e7e6b")),primary3:(0,i.Fl)((()=>_r.value?"#4D8FEA":"#90c3b9")),primary4:(0,i.Fl)((()=>_r.value?"#376bad70":"#a4d2c9")),primary5:(0,i.Fl)((()=>_r.value?"#153d6f70":"#c2eae2")),primaryText1:(0,i.Fl)((()=>_r.value?"#5090ea":"#1e7e6b")),red1:"#FD4040",green1:"#27AE60",yellow2:"#F3841E",blue1:"#a78253",shadow1:(0,i.Fl)((()=>_r.value?"#000":"#2F80ED"))});var fi=r(84922),wi=r(7439),bi=r.n(wi),vi=r(52148),yi=r(33066),xi=r.n(yi),ki=r(76795),Ci=r(94723),Ni=r.n(Ci),_i=r(77729),Ii=r(12129),$i=r.n(Ii),Ei=r(85828),Si=r(5633),Wi=r.n(Si);const Pi={walletconnect:{package:fi.Z,options:{infuraId:"7cd6581eaad84a5e9084450a8c9a90e8"}},dcentwallet:{package:Ei.Z,options:{rpcUrl:"https://mainnet.infura.io/v3/7cd6581eaad84a5e9084450a8c9a90e8"}},frame:{package:$i()},torus:{package:vi.ZP},fortmatic:{package:bi(),options:{key:{NODE_ENV:"production",VUE_APP_INFURA_KEY:"7cd6581eaad84a5e9084450a8c9a90e8",VUE_APP_MIX_FORTMATIC_KEY:"pk_live_5C97AC964FED4B62",VUE_APP_MIX_PORTIS_ID:"04001ec9-5ec5-4040-aeff-4a955ea9bccb",VUE_APP_BITSKI_CLIENT_ID:"35cf542c-d1c7-4cfc-b1f4-80d8dca162f5",VUE_APP_VENLY_CLIENT_ID:"Testaccount",BASE_URL:"/"}.VUE_APP_FORTMATIC_KEY}},burnerconnect:{package:Wi(),options:{defaultNetwork:"1"}},authereum:{package:xi()},portis:{package:Ni(),options:{id:{NODE_ENV:"production",VUE_APP_INFURA_KEY:"7cd6581eaad84a5e9084450a8c9a90e8",VUE_APP_MIX_FORTMATIC_KEY:"pk_live_5C97AC964FED4B62",VUE_APP_MIX_PORTIS_ID:"04001ec9-5ec5-4040-aeff-4a955ea9bccb",VUE_APP_BITSKI_CLIENT_ID:"35cf542c-d1c7-4cfc-b1f4-80d8dca162f5",VUE_APP_VENLY_CLIENT_ID:"Testaccount",BASE_URL:"/"}.VUE_APP_PORTIS_ID}},binancechainwallet:{package:!0},venly:{package:ki.x,options:{clientId:"Testaccount"}},bitski:{package:_i.bV,options:{clientId:"35cf542c-d1c7-4cfc-b1f4-80d8dca162f5",callbackUrl:window.location.href+"bitski-callback.html"}}},Ti={id:"app",class:"flex flex-col min-h-screen font-roboto dark:bg-gray-900"},Ai={class:"border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30"},Bi={class:"container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10"},Oi=(0,i.uE)('<div class="flex justify-between"><a href="/" class="text-gray-800 dark:text-gray-200"><div class="flex items-center"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" class="h-7 w-7 -mt-2 flex-shrink-0"><path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF"></path></svg><p class="text-xl ml-2"> Vue3 Web3<strong>modal</strong></p></div></a><div class="flex items-center space-x-2 lg:hidden"><button class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none"><svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-700 dark:text-gray-300"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button></div></div>',1),Mi={class:"flex flex-col space-y-4 lg:hidden",style:{display:"none"}},ji=(0,i._)("div",{class:"flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"},[(0,i._)("a",{href:"/",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Home"),(0,i._)("a",{href:"https://github.com/zobitnet/vue3-web3-modal",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Github")],-1),Fi={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"},zi=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 transform -rotate-90"},[(0,i._)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Ri=[zi],Li={class:"hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2"},Zi=(0,i._)("div",{class:"flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"},[(0,i._)("a",{href:"/",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Home"),(0,i._)("a",{href:"https://github.com/zobitnet/vue3-web3-modal",class:"text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 transition-colors duration-300"},"Github")],-1),Ui={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"},Di=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 transform -rotate-90"},[(0,i._)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),Yi=[Di],qi={class:"flex-1 lg:mt-20"},Vi={class:"container px-4 mx-auto mt-8"},Hi={class:"flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between"},Ki={class:"flex flex-col w-full items-center"},Gi=(0,i._)("span",{class:"font-light text-gray-400"},"require vue3. ",-1),Ji=(0,i._)("div",{class:"flex flex-col mt-2 space-y-1 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-4"},[(0,i._)("h3",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-200"}," Show on Button Click "),(0,i._)("a",{href:"/u/tailwindcss",class:"text-gray-400 hover:underline"},'@click="showWeb3Modal()"')],-1),Xi={class:"mt-2 text-gray-500 dark:text-gray-400 lg:max-w-xl description-link"},Qi={class:"mt-8 space-y-4 lg:flex lg:space-x-4 lg:space-y-0"},ea=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-5 h-5"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1),ta=(0,i._)("span",null,"Click to Show Modal",-1),ra=[ea,ta],na=(0,i.uE)('<div class="bg-gray-100 dark:bg-gray-800"><div class="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between"><div class="w-48 text-gray-700 dark:text-gray-200"><div class="flex items-center"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" class="h-7 w-7 -mt-2 flex-shrink-0"><path d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z" fill="#0ED3CF"></path></svg><p class="text-xl ml-2"> Vue3<strong> Web3 Modal</strong></p></div></div><p class="text-sm text-center text-gray-500 dark:text-gray-300"> © 2022 zobit.net. </p><div class="flex items-center space-x-6"><a href="https://zobit.net" class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary">Zobit</a><a href="https://github.com/zobitnet/vue3-web3-modal/licence.md" class="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:underline hover:text-primary dark:hover:text-primary">MIT Licence</a><a href="https://twitter.com/zobitchat" target="_blink" class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current"><path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"></path></svg></a><a href="https://github.com/zobitnet/vue3-web3-modal/" target="_blink" class="text-gray-500 transition-colors duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary"><svg viewBox="0 0 30 30" class="w-6 h-6 fill-current"><path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z"></path></svg></a></div></div></div>',1);function oa(e,t,r,o,a,l){const s=(0,i.up)("Web3Manager");return(0,i.wg)(),(0,i.iD)("div",Ti,[(0,i._)("header",Ai,[(0,i._)("div",Bi,[Oi,(0,i._)("div",Mi,[ji,(0,i._)("div",Fi,[(0,i._)("button",{type:"button",onClick:t[0]||(t[0]=e=>o.toggleDark()),"aria-label":"Color Mode",class:"flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"},Ri)])]),(0,i._)("div",Li,[Zi,(0,i._)("div",Ui,[(0,i._)("button",{onClick:t[1]||(t[1]=e=>o.toggleDark()),type:"button","aria-label":"Color Mode",class:"flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"},Yi),(0,i.Wm)(s)])])])]),(0,i._)("main",qi,[(0,i._)("section",Vi,[(0,i._)("div",Hi,[(0,i._)("div",Ki,[Gi,Ji,(0,i._)("p",Xi,(0,p.zw)(o.account??" ModalNot Connected"),1),(0,i._)("div",Qi,[(0,i._)("a",{onClick:t[2]||(t[2]=(0,n.iM)((e=>o.showWeb3Modal()),["prevent"])),href:"#",class:"items-center hidden px-4 py-2 space-x-3 text-gray-600 transition-colors duration-300 transform border rounded-lg lg:flex dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"},ra)])])])])]),na])}var ia={components:{Web3Manager:hi},setup(){const{account:e}=Q(),{open:t}=Ae();return{showWeb3Modal:t,account:e,toggleDark:Ir}}};const aa=(0,bt.Z)(ia,[["render",oa]]);var la=aa,sa={en:{Account:"Account",Arbiscan:"Arbiscan","Arbitrum Bridge":"Arbitrum Bridge",Bridge:"Bridge",Bscscan:"Bscscan",Change:"Change","Check network status":"Check network status",close:"close",Connect:"Connect","Connect to a wallet":"Connect to a wallet","Connected with":"Connected with",Copied:"Copied",dashboard:"dashboard",Disconnect:"Disconnect","Error connecting":"Error connecting","Error Connecting":"Error Connecting","Error connecting. Try refreshing the page":"Error connecting. Try refreshing the page",Etherscan:"Etherscan","Help Center":"Help Center","here.":"here.","Initializing...":"Initializing...","Invalid Network":"Invalid Network","Network Warning":"Network Warning",onDismiss:"onDismiss","Optimism Gateway":"Optimism Gateway","Optimistic Etherscan":"Optimistic Etherscan",Pending:"Pending","Polygon Bridge":"Polygon Bridge",Polygonscan:"Polygonscan","Select a network":"Select a network","Show Portis":"Show Portis","Try Again ":"Try Again ",Wallet:"Wallet","Wrong Network":"Wrong Network","You may have lost your network connection, or {label} might be down right now.":"You may have lost your network connection, or {label} might be down right now.","You may have lost your network connection.":"You may have lost your network connection.","Your Wallets Network is not supported":"Your Wallets Network is not supported"},de:{Account:"Account",Arbiscan:"Arbiscan","Arbitrum Bridge":"Arbitrum Bridge",Bridge:"Bridge",Bscscan:"Bscscan",Change:"Change","Check network status":"Check network status",close:"close",Connect:"Connect","Connect to a wallet":"Connect to a wallet","Connected with":"Connected with",Copied:"Copied",dashboard:"dashboard",Disconnect:"Disconnect","Error connecting":"Error connecting","Error Connecting":"Error Connecting","Error connecting. Try refreshing the page":"Error connecting. Try refreshing the page",Etherscan:"Etherscan","Help Center":"Help Center","here.":"here.","Initializing...":"Initializing...","Invalid Network":"Invalid Network","Network Warning":"Network Warning",onDismiss:"onDismiss","Optimism Gateway":"Optimism Gateway","Optimistic Etherscan":"Optimistic Etherscan",Pending:"Pending","Polygon Bridge":"Polygon Bridge",Polygonscan:"Polygonscan","Select a network":"Select a network","Show Portis":"Show Portis","Try Again ":"Try Again ",Wallet:"Wallet","Wrong Network":"Wrong Network","You may have lost your network connection, or {label} might be down right now.":"You may have lost your network connection, or {label} might be down right now.","You may have lost your network connection.":"You may have lost your network connection.","Your Wallets Network is not supported":"Your Wallets Network is not supported"}};const ca="7cd6581eaad84a5e9084450a8c9a90e8",da=gi({infuraKey:ca,providerOptions:Pi,theme:mi,global:!0}),ua=(0,o.o)({locale:"en",fallbackLocale:"en",translations:sa}),pa=(0,n.ri)(la);pa.use(ua),pa.use(da),pa.config.devtools=!0,pa.mount("#app")},82363:function(){},72764:function(){},95693:function(){},66984:function(){},82494:function(){},5070:function(){},88677:function(){},62808:function(){},36563:function(){},80950:function(){},93734:function(){},90573:function(){},64900:function(){},28566:function(){},46601:function(){},89214:function(){},8623:function(){},20113:function(){},7748:function(){},85568:function(){},40127:function(){},27790:function(){},56619:function(){},77108:function(){},71156:function(){},52361:function(){},94616:function(){},22644:function(){},50522:function(){},66882:function(){},23230:function(){},55896:function(){},87500:function(){},33557:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var d=s(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self["webpackChunkvue3_web3modal"]=self["webpackChunkvue3_web3modal"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(31100)}));n=r.O(n)})();
//# sourceMappingURL=app.9ac689cf.js.map