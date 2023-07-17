<template>
  <div class="home">
    <!-- {{ chnageTitle('Bu başlangıçta değişecek bir bilgidir..') }} -->
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <a v-bind:href="eduflow.url" :target="eduflow.target" :alt="eduflow.alt" >{{ eduflow.title }}</a>
    <br/>
    <br/>
    <button v-on:click="chnageTitle('Bu 1. buton')">Title değiştir...</button>
    <button v-on:click="chnageTitle('Bu 2. buton')">Title-2 değiştir...</button>

    <div class="box" @click="chnageTitle('Box.tan gelen title')"></div>


  </div>
</template>

<script>
export default{
  data (){
    return {
      title: "Hello world diye başlayalım",
      content: "Lorem ipsum dolor sit amet..",
      eduflow: {
        title: "Vue.js ile ilgili herşey",
        target: "_blank",
        url: "https://vuejs.org/",
        alt: "Vue.js",
      }
    };
  },
  methods: {
    chnageTitle(pTitle){
      this.title= pTitle;
    }
  }
}
</script>

<style>
.box{
  margin-top: 10px;
  border: 1px solid #666;
  width: 200px;
  height: 200px;
  background-color: bisque;
}
</style>
