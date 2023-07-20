<template>
    <header>Ödev 1 | Template Üzerine Veri Yazdırmak</header>
  <div id="exercise" class="container">
      <div class="card">
        <!-- 1) Interpolation yani {{}} Syntax'ını kullanarak <p> elementinin içeriğini Name ve Age verileriyle doldurun-->
        <p>VueJS Muazzam bir Framework - {{name}} {{ age }}</p>
        <!-- 2) Yaşınızı 5 ile çarpıp <p> içerisinde yazdırınız -->
        <p class="mt-10">{{ age*5 }}</p>

        <!-- 3) Fonksiyon çağırarak 0 ile 1 arasında bir sayı üretip <p> içerisinde yazdırınız (Math.random()) -->
        <p class="mt-10"></p>

        <!-- 4) Google üzerinden bulacağınız herhangi bir fotoğrafı <img> elementinde gösterme işlemini yapınızı. Bunu yaparken "src" attribute' una bind etmeyi unutmayınız -->

        <!-- 5) Name değişkeninin değerinin <input /> içine yazdığınız değer ile anlık olarak değiştirilmesini sağlayınız. ("value" attribute kullanarak) -->
        <div class="mt-10">
          <input type="text" @input="name= $event.target.value" :value="name" />
        </div>
      </div>
    </div>
 <br>
 <hr>
 <header>Ödev 2 | Events</header>
    <div class="container" id="exercise">
      <div class="card text-center">
        <!-- 1) Butona tıklanıldığında bir alert kutusu çıkartınız -->
        <div class="mb-10">
          <button @click="showAlert" >Alert Göster</button>
        </div>
        <!-- 2) "keydown" event'ini dinleyerek value değişkeni içerisinde yazdığınız veriyi saklayın. (ipucu: event.target.value size yazdığınız değeri verebilir.) -->
        <div class="mb-10">
          <input type="text" @keydown="value1= $event.target.value"/>
          <p>{{ value1 }}</p>
        </div>
        <!-- 3) 2.Uygulamayı düzenleyerek eğer keydown ENTER ise yazdığınız verinin value değerine aktarılmasını sağlayın -->
        <div>
          <input type="text" @keydown.enter="value1= $event.target.value" />
          <p>{{ value1 }}</p>
        </div>
      </div>
    </div>
<br><hr>
<header>Ödev 3 | Reactivity</header>
    <div class="container">
      <div class="card">
        <div id="exercise">
          <!-- 1) value isimli property'nin değerine bakarak result için bir reactive kod yazınız. value 33'e eşit olmadığı durumlarda <p> elementinin içinde  "Henüz Bitmedi!!" 33 olduğunda ise "Tamamlandı" yazmalıdır.. Bunun için gördüğünüz reactivity türlerinden birini kullanınız. (Not : Butonlar yardımıyla value property'nin değerini değiştirebilirsiniz )) -->
          <!-- 1) Write a reactive code for result by looking at the value of the property named value. If value is not equal to 33, inside the <p> element "Not Finished Yet !!" When it is 33, it should write "Completed". For this, use one of the reactivity types you see. (Note: You can change the value of value property with the help of buttons) -->
          <div>
            <p class="mb-5">Şuanki Değer: {{ value2 }}</p>
            <button @click="value2+=5">Add 5</button>
            <button @click="value2+=1">Add 1</button>
            <p class="mt-5">{{ result }}</p>
          </div>
          <!-- 2) result property' değerini izleyerek 5 saniye sonra value'nun değerini sıfırlayınız. (ipucu: setTimeout(..., 5000) kullanılabilir.-->
          <!-- 2) Reset the value of value information after 5 seconds by following the value of result property. (hint: setTimeout (..., 5000) can be used -->
          <div class="mt-5">
            <input type="text" />
            <p class="mt-5">{{ value2 }}</p>
          </div>
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
            value1: "",
            value2: 0
        }
    },
    methods: {
        showAlert(){
            alert("button clicked!")
        }
    }

    }
</script>

<style>

</style>