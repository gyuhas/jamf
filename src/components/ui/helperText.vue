<template>
    <div class="text-section">
        <h1>Card Title</h1>
        <p>Helper Text</p>
        <h3>Body Text </h3>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelperText extends Vue {
}
</script>

<style>
h1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 1rem;
    font-weight: 500;
    letter-spacing: .0125em;
    text-decoration: inherit;
    text-transform: inherit;
}
h3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    opacity: .6;
}
p {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .6rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
    opacity: .6; 
}
.text-section {
    padding-left: 16px;
    padding-right: 16px;
}
</style>