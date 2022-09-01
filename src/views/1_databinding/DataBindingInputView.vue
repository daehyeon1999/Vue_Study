<template>
  <div>
    <!-- 양방향 데이터 바인딩 -->
    <!-- v-*로 된 속성들은 양방향 데이터 바인딩이 가능하다 -->
    <!-- v-model를 사용하면, 변수와 태그가 양방향으로 연결된다 -->
    <input type="text" v-model="userId" placeholder="Enter anything" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>

    <!-- input type이 문자열이기 때문에 이상하게 출력된다 -->
    <br />
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>

    <!-- v-model.number 함으로써, 입려되는 데이터가 숫자라는걸 명시한다. -->
    <br />
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'Jeremy'
    }
  }
}
</script>
