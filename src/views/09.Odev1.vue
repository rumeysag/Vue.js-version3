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
          <input type="text" @input="name2= $event.target.value" :value="name2" />
          {{ name2 }}
        </div>
      </div>
    </div>
 <br>
 <hr>
<br><hr>
</template>

<script>
export default {
    data(){
        return{
            name: "Rümeysa",
            age: 32,
            name2: "",
            value2: 0
        }
      }
    }
    </script>

<style>

</style>