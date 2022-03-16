<template>
  <div id="app">
    <Card/>
    <OptionsPicker/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Card from './layouts/card';
import OptionsPicker from './layouts/optionsPicker';

@Component({
    components: {
        Card,
        OptionsPicker,
    }
})

export default class App extends Vue {

}
</script>

<style>
  @import './styles.scss';
</style>
