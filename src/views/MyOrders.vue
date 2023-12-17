<template>
<div>
  <Header />
  <div v-if="this.orders!==undefined" style="background-color: #fbcb90f6; border-radius:10px; padding-right:10px; padding-left:10px; box-shadow: 1px 1px 10px;" class="mx-5">
    <div v-for="order in this.orders" :key="order.id" class="d-flex flex-row justify-content-between align-items-center my-2 pb-3 border-bottom">
      <div style="margin-left:10px;" class="me-auto d-block align-items-center text-center text-sm-start">
        <h2 style="margin-top: 20px;">Order nº{{order.id}}</h2>
        <h5 style="margin-top:20px">Purchased products:</h5>
        <h4 style="margin-left: 10px;" v-for="product in order.items" :key="product.id" class="product-title fs-base mb-2">
          {{product.quantity}}X{{product.price}}€ {{product.name}}
        </h4>
        <h5>Total: <b>{{order.total}}€</b></h5>
      </div>
      <div class="md-2 d-flex flex-column bd-highlight">
        <h5 class="me-auto bd-highlight">Created at {{order.created_at}}</h5>
        <h3 class="bd-highlight">Status: <b>{{order.status_description}}</b></h3>
      </div>
    </div>
  </div>
  <div v-else style="margin:auto;" class="d-flex flex-column justify-content-center">
    <h1 id="noOrders">There are no orders</h1>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'

import { useOrdersStore } from '@/store/orders'
import { useUserStore } from '@/store/user'

export default {
	setup() {
		const ordersStore = useOrdersStore()
    const userStore = useUserStore()
		return { ordersStore, userStore}
  	},    
    components: {
        Header
	},
	data() {
		return {
            isHidden: false,
            id: 0,
            orders: 
            [
            //{
            //"id":"11",
            //"customer_id":"20",
            //"created_at":"2021-12-03 18:20:31",
            //"status_id":"1",
            //"total":"190",
            //"order_items":[{"product_id":"2","name":"Salmon Roll","price":"18","quantity":"4"},{"product_id":"3","quantity":"3"},{"product_id":"4","quantity":"2"}]
            //}
            ]
		}
	},
	mounted() {
    this.getOrders();
	},
	methods: {
    async getOrders(){
      await this.ordersStore.getMyOrdersDB();
      this.orders = this.ordersStore.getOrders
    }
	},
    computed: {

    },
}
</script>

<style scoped>
#noOrders{
  text-align: center;
	background-image: url('@/assets/images/title-bg.png');
	background-position: 50% 50%;
	padding-top: 30px;
	padding-bottom: 30px;
	background-repeat: no-repeat;
}
</style>