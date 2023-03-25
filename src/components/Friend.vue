<template>
    <div>Hello {{ name }}</div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    name:String
})
// const state = reactive({
//     name: 'Diana'
// })
</script>