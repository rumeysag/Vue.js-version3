<template>
  <div class="row mt-5">
    <div class="col-4 offset-4">
      <h3 class="text-center">Event</h3>
      <!-- <input
        @input="fullName = $event.target.value"
        :value="fullName" 
        type="text"
        class="form-control"
      /> -->
      <input  v-model="fullName" type="text" class="form-control"
      />
      <br />
      {{ fullName }}
      <br/>
      <button class="btn btn-primary">Ekle</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "küpeli",
    };
  },
  methods: {
    updateValue(event) {
      this.fullName = event.target.value;
    },
  },
};
</script>
