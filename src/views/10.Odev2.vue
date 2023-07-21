<template>
   <header>Ödev 2 | Events</header>
    <div class="container" id="exercise">
      <div class="card text-center">
        <!-- 1) Butona tıklanıldığında bir alert kutusu çıkartınız -->
        <div class="mb-10">
          <button @click="showAlert" >Alert Göster</button>
        </div>
        <!-- 2) "keydown" event'ini dinleyerek value değişkeni içerisinde yazdığınız veriyi saklayın. (ipucu: event.target.value size yazdığınız değeri verebilir.) -->
        <div class="mb-10">
          <input type="text" @keydown="value= $event.target.value"/>
          <p>{{ value }}</p>
        </div>
        <!-- 3) 2.Uygulamayı düzenleyerek eğer keydown ENTER ise yazdığınız verinin value değerine aktarılmasını sağlayın -->
        <div>
          <input type="text" @keydown.enter="value= $event.target.value" />
          <p>{{ value }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: "Rümeysa",
            age: 32,
            name2: "",
            value: "",
        }
    },
    methods: {
        showAlert() {
            alert("button clicked!")
        }
       },

}
</script>

<style>

</style>