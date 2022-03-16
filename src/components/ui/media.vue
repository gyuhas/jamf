<template>
<div id="media">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Media extends Vue {
}
</script>

<style>
#media {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    box-sizing: border-box;
    margin-top: 56.25%;
    background: no-repeat url("../../assets/download.png");
    visibility: visible;
    z-index: 100;
    height: 100%;
}

</style>