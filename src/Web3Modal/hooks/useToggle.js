
import {ref} from "vue";
import {useEventBus} from "@vueuse/core";
const {on, emit} = useEventBus("modals");
export const useToggle = (isOpen) => {
	const unsubscribe = ref(null);
	const close = () => {
		if (isOpen.value) {
			unsubscribe.value();
			unsubscribe.value = null;
			isOpen.value = false;
		}
	};
	const open = () => {
		if (!isOpen.value) {
			emit("close");
			if (!unsubscribe.value) unsubscribe.value = on(close);
			isOpen.value = true;
		}
	};
	const toggle = () => {
		isOpen.value ? close() : open();
	};
	return {close, open, toggle}
};
