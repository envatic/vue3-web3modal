import {ref} from "vue";
import {useEventBus} from "@vueuse/core";
const {on, emit} = useEventBus("modals");
export const isOpen = ref(false);
const unsubscribe = ref(null);
export const close = () => {
	if (isOpen.value) {
		unsubscribe.value();
		unsubscribe.value = null;
		isOpen.value = false;
	}
};

export const open = () => {
	if (!isOpen.value) {
		emit("close");
		if (!unsubscribe.value) unsubscribe.value = on(close);
		isOpen.value = true;
	}
};

const toggle = () => {
	isOpen.value ? close() : open();
};

export const useWeb3ModalToggle = () => {
	return {
		isOpen,
		close,
		open,
		toggle,
	};
};
