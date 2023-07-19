<template>
    <input type="text" v-model="bgColor">
    <button @click="showBorder = !showBorder" >Border ekle/kaldır</button>
    <button @click="redBG = !redBG">kırmızı BG yap</button>
  <div class="box" :style="{backgroundColor : bgColor}" :class="boxClasses"></div>
</template>

<script>
export default {
    data(){
        return{
            boxClass: "border red",
            showBorder: false,
            redBG : false,
            bgColor: ""
        };
    },
    computed: {
        boxClasses(){
            return{border: this.showBorder, red: this.redBG}
        }
    }
   
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
}

div{
    display: flex-column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.box{
    width: 100px;
    height: 100px;
    background-color: #dedede;
}

.border{
    border: 3px dashed #666 !important;
}

.red{
    background-color: red;
}

.green{
    background-color: green;
}

.blue{
    background-color: blue;
}
 
</style>