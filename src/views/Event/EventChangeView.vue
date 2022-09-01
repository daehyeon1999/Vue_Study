<template>
  <div>
    <!-- multi select -->
    <!-- 선택이 바뀔때마다 selectedCity 변수에 value 값을 바인딩 -->
    <!-- @change == v-on:change과 같다 -->
    <!-- event를 넘기고 싶을때는 $event를 사용한다 -->
    <select @change="changeCity($event)" v-model="selectedCity">
      <!-- 도시 선택 -->
      <option value="">==도시 선택==</option>
      <option
        :key="city.cityCode"
        :value="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>

    <select>
      <!-- 선택한 도시의 동 리스트 -->
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>

    <!-- filter 함수를 바로 불러오기 -->
    <select>
      <!-- 선택한 도시의 동 리스트 -->
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in (selectedDongList = dongList.filter(
          (dong) => dong.cityCode === selectedCity
        ))"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 유저가 선택한 도시
      selectedCity: '',

      // 도시 리스트
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],

      // 동 리스트
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주2동' }
      ],

      // 선택한 도시의 동 리스트
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      // 이벤트 출력
      console.log(event.target.tagName)
      // 동 리스트에서 필터를 적용(동의 cityCode가 선택한 cityCode가 같을때)하여 selectedDongList에 저장
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
