<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-2 card p-1">
        <h3 class="text-center">{{counter}}</h3>
        <div class="d-flex justify-content-center align-items-center">
          <button @click="counter++" class="btn mr-2 btn-sm btn-primary">+</button>
          <button @click="counter--" class="btn btn-sm btn-danger">-</button>
        </div>
        <div class="alert alert-warning mt-3"> {{ getCounterResult }}</div>
      </div>

      <div class="col-2 card p-1">
        <h3 class="text-center">{{counter2}}</h3>
        <div class="d-flex justify-content-center align-items-center">
          <button @click="counter2++" class="btn mr-2 btn-sm btn-primary">+</button>
          <button @click="counter2--" class="btn btn-sm btn-danger">-</button>
        </div>
        <div class="alert alert-warning mt-3"> {{ getCounter2Result }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        counter: 0,
        counter2: 0
    };
  },
  methods: {
    // getCounterResult() {
    //   console.log("Counter 1 çalıştı");
    //      return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    // },
    // getCounter2Result() {
    //   console.log("Counter 2 çalıştı");
    //      return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    // },
  },
  computed: {
    getCounterResult() {
      console.log("Counter 1 çalıştı");
         return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    },
    getCounter2Result() {
      console.log("Counter 2 çalıştı");
         return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    },

  }
//   methods : {
//     inc(){
//         this.counter++;
//     },
//     dec(){
//         this.counter--;
//     },
//   },
};
</script>
