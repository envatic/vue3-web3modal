<template>
    <ButtonWhite v-if="!active"/>
    <ButtonPrimary v-else />
</template>
<script>
import {ButtonPrimary, ButtonWhite} from "../Button";
export default {
    props: {
        active:{
            type: Boolean,
            default: false,
        },
    },
    components: {
        ButtonPrimary,
        ButtonWhite,
    },
};
</script>