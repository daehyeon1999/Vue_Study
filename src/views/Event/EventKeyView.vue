<template>
  <div>
    <!-- key누르는 이벤트가 발생하면 checkEnter 함수에 이벤트를 전달 -->
    <!-- <input type="search" @keyup="checkEnter($event)" v-model="searchText" /> -->

    <!-- keyup 이벤트에서 이미 enter를 눌렀는지 확인하는 옵션이 있다 -->
    <input type="search" @keyup.enter="doSearch" v-model="searchText" />
    <button @click="doSearch">조회</button>
  </div>
</template>

<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// 등 자주 사용하는 키들은 keyup 함수에서 기본적으로 제공한다.
// .stop == event.stopPropogation()
// .prevent == event.preventDefault()

export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // 조회 실행 함수
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      // 13은 Enter키
      // Enter키가 입력 되면,
      if (event.keyCode === 13) {
        // 조회 실행 함수 부름
        this.doSearch()
      }
    }
  }
}
</script>
