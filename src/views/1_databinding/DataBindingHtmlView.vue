<template>
  <div>
    <div>
      {{ htmlToString }}
    </div>
    <div v-html="htmlToString"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      htmlToString: '<p style="color:red;" >빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
