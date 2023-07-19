<template>
  <div>{{ title }}
  
  <pre >{{ itemList }}</pre>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: "Test başlığı",
            itemList: []
        };
    },
    beforeCreate(){
        console.log("beforeCreate çalıştı");
    },
    created(){
        console.log("created çalıştı");
        setTimeout(()=>{
            this.itemList= [1,2,3,4,5,6,7,8,9];
        }, 2000)
    },
    beforeMount(){
        console.log("beforeMount çalıştı");
    },
    mounted(){
        console.log("mounted çalıştı");
        setTimeout(()=>{
            this.title= "Başlık değişti";
        }, 3000)
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı");
    },
    updated(){
        console.log("updated çalıştı");
    },
    beforeUnmount(){
        console.log("beforeUnmount çalıştı");
    },
    unmounted(){
        console.log("unmounted çalıştı");
    }
}
</script>

<style>

</style>