<template>
  <div style="justify-items: start">
    <div>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="favoriteLanguage"
      />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="css" v-model="favoriteLanguage" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="js" v-model="favoriteLanguage" />
      <label for="js">Java Script</label>
    </div>
  </div>

  <!-- check한 박스들의 value들이 배열에 저장되는 원리이다. 즉, v-model이 체크가 된 값들의 value에 바인딩 된다. -->
  <div>선택한 언어: {{ favoriteLanguage.toString() }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLanguage: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
