<template>
  <div class="container">
    <div class="row">
        <div class="col-4  offset-4 p-2 card mt-5">
            <input type="text" v-model="search">
            <button class="btn btn-primary" @click="searchList"> ARA</button>
            <pre class="mt-3">{{ itemlist }}</pre>
            <pre class="mt-3">{{ filteredList }}</pre>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            search: "",
            itemlist: ["elma", "armut", "kiraz", "çilek"],
            // filteredList: []
        }
    },
    methods: {
        searchList(){
        //   this.filteredList = this.itemlist.filter((i) => i.includes(this.search));
        }
    },
    computed: {
        filteredList(){
            return this.itemlist.filter((i) => i.includes(this.search));
        }
    }
}
</script>

<style>

</style>