<template lang="html">
  <div class="todos">
    <h1>{{ name }}</h1>
    <input type="radio" id="select-done" value="Done" v-model="picked">
    <label for="select-done">Done</label>
    <input type="radio" id="select-in-progress" value="InProgress" v-model="picked">
    <label for="select-in-progress">In progress</label>
    <input type="radio" id="select-todo"  value="Todo" v-model="picked">
    <label for="select-todo">Todo</label>

    <button v-on:click="update()">
      Apply state to selected tasks
    </button>
    <button v-on:click="archiveDone()">Archive all done tasks</button>
    <input type="checkbox" id="filter-tasks" v-model="stated">
    <label for="filter-tasks">Filter by state</label>

    <input type="text" v-model="filter" placeholder="Recherchez en détail!"><br/>
    <input type="text" v-model="message" placeholder="Rentrez champ tâche ici!" v-on:change="addTask()">

    <input type='checkbox' id="select-all" @click='checkAll()' v-model="selectedAll">
    <label for="select-all">Select all</label>
    <ul>
      <li v-for="(item, index) in tasks.filter(t0 => t0.name.startsWith(filter) && (!stated || t0.type.startsWith(picked)))" :key="index" >
        <input type="checkbox" v-model="checkedIds" :value="tasks.indexOf(item)" @change='updateCheckAll()'>
        {{ item.name }} [{{item.type}}]
        {{ tasks.indexOf(item) }}
        <button v-on:click="remove(index)">
          X
        </button>
        <input type="text" v-if="checkedIds.length === 1 && checkedIds.includes(index)" v-model="newName" placeholder="rename" @change="rename(index)">
      </li>
    </ul>
    <footer v-if="tasks.length!==0">
      Task count: {{ tasks.length }}
    </footer>
  </div>
</template>

<script lang="js">
import { Component, Vue } from 'vue-property-decorator';

// states
const TODO = "Todo";
/*const IN_PROGRESS = "InProgress";
const DONE = "Done";*/

class Task
{
  name="";
  type=TODO;

  constructor(message, _type) {
    this.name = message;
    this.type = _type;
  }
}

@Component
export default class Todos extends Vue {

  name = 'todos';
  props = [];

  message = '';
  filter = '';

  stated = true;
  tasks = [];
  // TODO
  picked = TODO;

  newName="";

  selectedAll = false;
  checkedIds = [];

  addTask() {
    console.log("added:" + this.message);
    this.tasks.push(new Task(this.message, this.picked))
    this.message = '';
    if (this.selectedAll)
    {
      this.selectedAll = false;
      this.checkAll();
    }
  }

  rename(index)
  {
    this.tasks[index].name = this.newName;
  }

  update() {
    this.checkedIds.forEach((v,i) => this.tasks[v].type = this.picked);
  }

  remove(index) {
    console.log("deleting " + this.tasks[index].name + " task!");
    this.checkedIds = [];
    this.selectedAll = false;
    this.tasks.splice(index, 1);
  }

  archiveDone() {
    this.checkedIds = [];
    this.selectedAll = false;
    this.tasks = this.tasks.filter(t => t.type !== "Done") ;
  }

  checkAll(){
    this.selectedAll = !this.selectedAll;
    this.checkedIds = [];
    if(this.selectedAll){ // Check all
      this.tasks.forEach((t,i) => this.checkedIds.push(i));
    }
  }
  updateCheckAll(){
    if(this.checkedIds.length === this.tasks.length){
      this.selectedAll = true;
    }else{
      this.selectedAll = false;
    }
  }
}

</script>

<style scoped lang="css">
  h1 {
    color: chocolate;
  }
</style>
