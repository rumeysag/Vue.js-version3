<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-2 card p-1">
        <h3 class="text-center">{{counter}}</h3>
        <div class="d-flex justify-content-center align-items-center">
          <button @click="counter++" class="btn mr-2 btn-sm btn-primary">+</button>
          <button @click="counter--" class="btn btn-sm btn-danger">-</button>
        </div>
        <div class="alert alert-warning mt-3"> {{ getCounterResult() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        counter: 0
    };
  },
  methods: {
    getCounterResult() {
         return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    },
  },
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
