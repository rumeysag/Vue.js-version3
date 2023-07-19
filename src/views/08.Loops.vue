<template>
  <div class="container">
    <div class="row">
      <div class="col-8 p-2">
        <h3 class="text-center">ToDo List</h3>
        <div class="d-flex mb-4">
          <input
            type="text"
            class="form-control me-2"
            @keydown.enter="addTodo"
          />
          <!-- <button class="btn btn-sm btn-primary">Ekle</button> -->
        </div>
        <div  v-if="todoList.length > 0">
        <ul class="list-group">
          <li v-for="todo in todoList" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <input class="form-check-input" type="checkbox" v-model="todo.completed" :id="`completed-checkbox-${todo.id}`"/>
              <label class="form-check-label" :for="`completed-checkbox-${todo.id}`">{{ todo.text }}</label>
            </div>
            <button class="btn btn-sm btn-danger" @click="removeItem(todo)">Sil</button>
          </li>
        </ul>
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-success">Tamamlanmış görev sayısı: {{ completedItemCount }}</small>
            <small class="text-danger">Tamamlanmamış görev saysısı: {{ unCompletedItemCount }}</small>
        </div>
        </div>

        <div v-else class="alert alert-warning">Henüz eklenmiş bir todo bulunmamaktadır.</div>
      </div>
      <div class="col-4">
        <pre>{{ todoList }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
      {id: 1, text: "Vue Bootcamp Hafta 1", completed: false},
      {id: 2, text: "Vue Bootcamp Hafta 2", completed: false},
      {id: 3, text: "Vue Bootcamp Hafta 3", completed: false},
      {id: 4, text: "Vue Bootcamp Hafta 4", completed: false},
      {id: 5, text: "Vue Bootcamp Hafta 5", completed: false},
      {id: 6, text: "Vue Bootcamp Hafta 6", completed: false},
      {id: 7, text: "Vue Bootcamp Hafta 7", completed: false},
      ],
    };
  },
  methods: {
    addTodo(event) {
        this.todoList.push({
            id: new Date().getTime(),
            text: event.target.value,
            completed:false
        });
    //   this.todoList.push(event.target.value);
    //   event.target.value = ""; //input içindeki değeri enter.dan sonra sıfırlamak için!
    },
    removeItem(todoItem){
        this.todoList = this.todoList.filter(todo => todo !== todoItem);
    }
  },
  computed: {
completedItemCount(){
    return this.todoList.filter((t) => t.completed).length
},
unCompletedItemCount(){
    return this.todoList.filter((t) => !t.completed).length
}  

}
};
</script>

<style></style>
