<template>
        <FormHeading :heading="props.heading"/>
        
        <div class="form-inputs">
            <slot></slot>
        </div>

        <SubmitButton :valid="props.valid"/>

        <ViewChangeButton 
        @change-view="$emit('change-view')"
        :message_1="props.message_1"
        :message_2="props.message_2"
        />
</template>

<script setup lang="ts">
import SubmitButton from '@/components/Button-Components/SubmitButton.vue';
import ViewChangeButton from '@/components/Button-Components/ViewChangeButton.vue';
import FormHeading from '@/components/Text-Components/FormHeading.vue';

const props = defineProps(['heading','message_1','message_2','valid'])

</script>

<style  scoped>
svg{
    fill: var(--color-text);
}

</style>