<!-- @format -->

<template>
  <div class="home">
    <ul>
      <li>
        <p>1.判断数据的类型</p>
        <p @click="clickArr($event)" class="cursor">[1,2,3]</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {isType} from '@/utils/util.js';

export default {
  name: 'home',
  data() {
    return {
      bool: null
    };
  },
  components: {},
  created() {
    console.log(isType(String)('45'));
    console.log(isType(Array)('45'));
  },
  methods: {
    clickArr(ev) {
      console.log(ev.target.innerHTML);
      console.log(isType('String')('123'));
      if (isType('Array')([1])) {
        console.log('数组');
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
