export const parseSendReturn = (sendReturn) => {
	return Object.prototype.hasOwnProperty.call(sendReturn, "result")
		? sendReturn.result
		: sendReturn;
};
