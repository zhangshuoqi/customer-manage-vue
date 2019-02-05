<template>
    <div class="details container">
        <router-link to="/" class="btn btn-secondary btn-sm">返回</router-link>
        <h1 class="page-header">
            {{ customer.name }}
            <span class="float-right">
                <router-link class="btn btn-primary" v-bind:to=" '/edit/' + customer.id ">编辑</router-link>
                <button class="btn btn-danger " v-on:click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <hr>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone">{{ customer.phone }}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone">{{ customer.email }}</span>
            </li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone">{{ customer.company }}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone">{{ customer.address }}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-phone">{{ customer.website }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'cumstomerdetail',
    data() {
        return {
            customer:""
        }
    },
    methods: {
        fetchData(id){
            this.$axios.get("http://localhost:3000/users/" + id)
                .then(res=>{
                    this.customer = res.data
                })
        },
        deleteCustomer(id){
            this.$axios.delete("http://localhost:3000/users/" + id)
                .then(res=>{
                    this.$router.push({path:'/',query:{alert:"用户删除成功!"}})
                })
                
        }
    },
    created () {
        this.fetchData(this.$route.params.id)
    }
}

</script>
