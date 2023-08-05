<template>
        <FormHeading :heading="props.heading"/>
        
        <div class="form-inputs">
            <slot></slot>
        </div>

        <ErrorMessage 
        :is_error="props.is_error"
        :error_message="props.error_message"
        />

        <SubmitButton />

        <ViewChangeButton 
        @change-view="$emit('change-view')"
        :message_1="props.message_1"
        :message_2="props.message_2"
        />
</template>

<script setup lang="ts">
import SubmitButton from '@/components/Button-Components/SubmitButton.vue';
import ViewChangeButton from '@/components/Button-Components/ViewChangeButton.vue';
import ErrorMessage from '@/components/Text-Components/ErrorMessage.vue';
import FormHeading from '@/components/Text-Components/FormHeading.vue';

const props = defineProps(['heading','message_1','message_2','is_error','error_message'])

</script>

<style  scoped>
svg{
    fill: var(--color-text);
}

</style>