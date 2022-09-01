<template>
  <div>
    <div>
      <select name="" id="">
        <!-- :key는 v-bind:key와 같음 -->
        <option value=""></option>
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>
  </div>

  <br />

  <!-- table -->
  <table>
    <thead>
      <tr>
        <th>제품 번호</th>
        <th>제품명</th>
        <th>가격</th>
        <th>주문 수량</th>
        <th>합계</th>
      </tr>
    </thead>
    <tbody>
      <!-- drink의 drinkId를 key값으로 설정 -->
      <tr :key="drink.drinkId" v-for="drink in drinkList">
        <td>{{ drink.drinkId }}</td>
        <td>{{ drink.drinkName }}</td>
        <td>{{ drink.price }}</td>
        <td><input type="number" name="" id="" v-model="drink.quantity" /></td>
        <td>{{ drink.price * drink.quantity }}</td>
      </tr>
      <!-- 만일 key로 쓸만한 값이 없으면 -->
      <!-- <tr :key="index" v-for="(drink, index) in drinkList"></tr> -->
    </tbody>
  </table>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        { drinkId: 1, drinkName: '코카콜라', price: 700, quantity: 1 },
        { drinkId: 2, drinkName: '펩시', price: 500, quantity: 3 },
        { drinkId: 3, drinkName: '몬스터', price: 200, quantity: 5 },
        { drinkId: 4, drinkName: '갈아 만든 배', price: 800, quantity: 7 },
        { drinkId: 5, drinkName: '포카리 스웨트', price: 100, quantity: 10 }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
