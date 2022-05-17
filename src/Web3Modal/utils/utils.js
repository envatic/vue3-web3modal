
import {getAddress, isAddress as checkAddr} from "@ethersproject/address";
// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value) {
	if (!checkAddr(value)) return false;
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address, chars = 4) {
	const parsed = isAddress(address);
	if (!parsed) {
		throw Error(`Invalid 'address' parameter '${address}'.`);
	}
	return `${parsed.substring(0, chars + 2)}...${parsed.substring(
		42 - chars,
	)}`;
}
// shorten the checksummed version of the input address to have 0x + 4 characters at start and end

export function truncateTx(fullStr = "", strLen = "33", separator = "...") {
	if (fullStr.length <= strLen) return fullStr;
	var sepLen = separator.length,
		charsToShow = strLen - sepLen,
		frontChars = Math.ceil(charsToShow / 2),
		backChars = Math.floor(charsToShow / 2);
	return (
		fullStr.substring(0, frontChars + 3) +
		separator +
		fullStr.substring(fullStr.length - backChars - 3)
	);
}

