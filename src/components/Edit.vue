<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div class="card bg-light">
        <h4 class="card-header">用户信息</h4>
        <div class="card-body">
          <div class="form-group">
            <label for>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div class="form-group">
            <label for>电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div class="form-group">
            <label for>邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div class="form-group">
            <label for>网址</label>
            <input
              type="text"
              class="form-control"
              placeholder="website"
              v-model="customer.website"
            >
          </div>
          <div class="form-group">
            <label for>公司名称</label>
            <input
              type="text"
              class="form-control"
              placeholder="company name"
              v-model="customer.company"
            >
          </div>
          <div class="form-group">
            <label for>住址</label>
            <textarea class="form-control" rows="10" placeholder="address" v-model="customer.address"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">确认</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: "add",
  data() {
    return {
      customer: {},
      alert:""
    };
  },
  methods: {
      getCustomer(id){
          this.$axios.get("http://localhost:3000/users/" + id)
            .then(res=>{
                console.log(res)
                this.customer = res.data
            })
      },
      updateCustomer(e){
          if (!this.customer.name || !this.customer.phone || !this.customer.email){
              this.alert = "请添加对应信息!"
          }else{
              let updateCustomer = {
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  website:this.customer.website,
                  company:this.customer.company,
                  address:this.customer.address,
              }
              this.$axios.put("http://localhost:3000/users/" + this.$route.params.id,updateCustomer)
                .then(response=>{
                    console.log(response)
                    this.$router.push({path:'/',query:{alert:"用户信息编辑成功!"}})
                });
              e.preventDefault();
          }
          e.preventDefault();
      }
  },
  created () {
      this.getCustomer(this.$route.params.id)
  },
  components: {
      Alert
  }
};
</script>
