<template>
        <FormHeading :heading="props.heading"/>
        
        <div class="form-inputs">
            <slot name="form_inputs"></slot>
        </div>

        <SubmitButton :loading="props.loading" :valid="props.valid"/>
        
        <div v-if="props.error" class="invalid_details_error">
            <slot name="invalid_details_error"></slot>
        </div>

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
const props = defineProps(['heading','message_1','message_2','valid','loading','error'])

defineEmits(['change-view'])
</script>

<style  scoped>
svg{
    fill: var(--color-text);
}

</style>