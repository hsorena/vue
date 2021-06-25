Vue.component('task' , {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list' , {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',
    data() {
        return {
            tasks:[
                { task:'Go to the store' , completed : true},
                { task:'Go to the email' , completed : false},
                { task:'Go to the farm' , completed : false},
                { task:'Go to work' , completed : false}
            ]
        };
    }
})

new Vue({
    el:'#root',

    data(){
        return{

        }
    }
});