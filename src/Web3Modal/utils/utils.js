
// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address, chars = 4) {
    return `${address.substring(0, chars + 2)}...${address.substring(
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

