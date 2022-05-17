import { utils } from "ethers";
import { isAddress } from "@/Web3Modal/utils";
import {asyncComputed, get} from "@vueuse/core";
import {useActiveWeb3Vue} from "@/Web3Modal/hooks/index";
const {web3, chainId, active} = useActiveWeb3Vue(); 
export default function useENSName(address) {
	return asyncComputed(async () => {
		if (!isAddress(get(address))) return;
		if (!get(web3) || !get(chainId) || !get(active)) return;
		var lookup = address.toLowerCase().substr(2) + ".addr.reverse";
		var ResolverContract = await web3.value.eth.ens.resolver(lookup);
        var nh = utils.namehash.hash(lookup);
		return await ResolverContract.methods.name(nh).call();
	});
}
