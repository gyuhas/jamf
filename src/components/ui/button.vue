<template>
<div id="button">
  <button>Button</button>
    <button>Button</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
}
</script>

<style scoped>
#button {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    min-height: 52px;
    padding: 8px;
      justify-content: end;
}
button {
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: rgb(230, 225, 225);
  margin-left: 0;
  margin-right: 8px;
  padding: 0px 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 30px;
  border: transparent;
  color: black;
}
</style>