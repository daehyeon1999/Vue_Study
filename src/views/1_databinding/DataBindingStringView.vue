<template>
  <div>
    <!-- 데이터를 바인딩 하고 싶으면 {{변수 이름}}을 넣으면 된다. -->
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 개발자의 품격',
      arr: [],
      obj: {}
    }
  },
  methods: {}
}
</script>

<style scoped></style>
