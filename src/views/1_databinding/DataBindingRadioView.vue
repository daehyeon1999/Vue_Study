<template>
  <div style="justify-items: start">
    <div>
      <input type="radio" id="html" value="html" v-model="favoriteLanguage" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="css" value="css" v-model="favoriteLanguage" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" id="js" value="js" v-model="favoriteLanguage" />
      <label for="js">Java Script</label>
    </div>
  </div>
  <!--  -->
  <div>선택한 언어: {{ favoriteLanguage }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLanguage: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
