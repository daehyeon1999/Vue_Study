<template>
  <!-- 단방향 databinding -->
  <!-- readonly한 경우 읽기만 가능해야한다. 하지만 v-model는 양방향 바인딩이기 때문에 사용자가 원하는 값으로 바꿀 위험이 있다. -->
  <!-- 그러므로 v-model를 쓰는 대신 직접 태그의 속성으로 값을 단방향으로 바인딩해야한다. -->
  <!-- 태그 속성에 접근하려면 v-bind:속성="변수" 이런식으로 사용하면 된다, -->
  <div><input type="text" name="" id="" v-bind:value="userId" readonly /></div>

  <!-- v-bind는 생략이 가능하다 -->
  <div><input type="text" name="" id="" :value="userId" readonly /></div>

  <br />
  <!-- 이미지 src 바인딩  -->
  <img :src="imgSrc" alt=" " style="width: 100px; height: 100px" />
  <br />

  <input type="search" name="" id="" v-model="text1" />
  <button :disabled="text1 === ''">조회</button>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: '',
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      text1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
