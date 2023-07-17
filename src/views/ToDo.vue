<template>
    <div class="row mt-5">
        <div class="col-4 offset-4">
            <h3 class="text-center" >Event</h3>
            <input @input="updateValue" type="text" class="form-control">
            <br/>
            <button class="btn btn-primary">Ekle</button>

        </div>
    </div>
</template>

<script>

export default{
    methods:{
        updateValue(event){
            console.log(event.target.value);
        }
    }
}
</script>
