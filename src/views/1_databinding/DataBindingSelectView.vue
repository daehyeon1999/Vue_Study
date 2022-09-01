<template>
  <div>
    <!-- 옵션의 value값을 바인딩함 -->
    <!-- v-model은 이렇게 값을 변경할수 있는 곳에만 쓸수 있다. -->
    <select v-model="selectedCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="052">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '052'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
