<template>
  <header>Ödev 3 | Reactivity</header>
    <div class="container">
      <div class="card">
        <div id="exercise">
          <!-- 1) value isimli property'nin değerine bakarak result için bir reactive kod yazınız. value 33'e eşit olmadığı durumlarda <p> elementinin içinde  "Henüz Bitmedi!!" 33 olduğunda ise "Tamamlandı" yazmalıdır.. Bunun için gördüğünüz reactivity türlerinden birini kullanınız. (Not : Butonlar yardımıyla value property'nin değerini değiştirebilirsiniz )) -->
          <!-- 1) Write a reactive code for result by looking at the value of the property named value. If value is not equal to 33, inside the <p> element "Not Finished Yet !!" When it is 33, it should write "Completed". For this, use one of the reactivity types you see. (Note: You can change the value of value property with the help of buttons) -->
          <div>
            <p class="mb-5" >Şuanki Değer: {{ value }}</p>
            <button @click="value+=5">Add 5</button>
            <button @click="value+=1">Add 1</button>
            <!-- Tek satırlık durumda turnery tag içinde yazılabilir -->
            <p class="mt-5">{{ value < 33 ? "Henuz bitmedi" : "Tamamlandı" }}</p>  

            <!-- Tek satır olmayan durumda ise script içine methods ile fonksiyon yazıp, p fonskiyonu burada çağırabiliriz -->
            <p>{{ result() }}</p> 
          </div>
          <!-- 2) result property' değerini izleyerek 5 saniye sonra value'nun değerini sıfırlayınız. (ipucu: setTimeout(..., 5000) kullanılabilir.-->
          <!-- 2) Reset the value of value information after 5 seconds by following the value of result property. (hint: setTimeout (..., 5000) can be used -->
          <div class="mt-5">
            <input type="text" />
            <p class="mt-5">{{ value }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: 0
        }
    },
    methods: {
        result() {
           return this.value < 33 ? "Henuz bitmedi" : "Tamamlandı"
       }
      }
    }
</script>

<style>

</style>