<template>
<div id="options-picker">
  <div class="options">
    <div class="form-field ">
     <ul>
      <li v-for="(n, index) in comps" :key="index">
      <label>
        <input
          type="checkbox"
          v-model="inputs"
          :value="index"
          @click="changeComp(n)"
          :disabled="inputs.length > 0 && inputs.indexOf(index) === -1" 
          number> {{ n }}
      </label>
    </li>
  </ul>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
    data: {
    }
})export default class OptionsPicker extends Vue {
    private comps = ['CardSimple', 'CardLight', 'CardImageTop', 'CardImageMiddle'];
    private inputs = [];

    changeComp(n: string) {
      this.$store.commit('setCurrentComp', n);
    }
}
</script>

