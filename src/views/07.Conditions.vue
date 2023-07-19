<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-2 p-2">
        <button
          class="btn btn-sm btn-warning"
          @click="showContainer = !showContainer"
        >
          Aç/Kapat
        </button>
        <h1 v-if="!showContainer" class="text-danger">BAŞLANGIÇTA GÖZÜKECEK</h1>
        <h1 v-else class="text-primary">SONRA GÖZÜKECEK</h1>
        <hr>

        <h3 :class="counterClass">{{ counter }}</h3>
        <button class="btn btn-sm btn-success" @click="counter++">Artır</button>
        <button class="btn btn-sm btn-danger" @click="counter--">Azalt</button>
        <p v-if="counter>0">Counter Pozitif</p>
        <p v-else-if="counter<0">Counter Negatif</p>
        <p v-else>Counter 0</p>
        <hr>

        <p v-show="counter>0">Counter Pozitif</p>
        <p v-show="counter<0">Counter Negatif</p>
        <p v-show="counter == 0">Counter 0</p>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  computed: {
        counterClass(){
            return{ "bg-success text-white": this.counter>0, "bg-danger text-white": this.counter<0};
  }
}
};
</script>

<style></style>
