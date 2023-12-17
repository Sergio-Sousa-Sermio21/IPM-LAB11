<template>
<div>
	<Header />
	<div style="margin:auto;" class="d-flex flex-column justify-content-center" v-if="this.products.length == 0">
		<h1 id="noItems">There is nothing in the basket!</h1>
		<router-link class="mx-auto btn btn-warning justify-content-center" to="/">Let's add some!!</router-link>
	</div>
	<div v-else>
		<div style="background-color: #fbcb90f6; border-radius:10px; padding-right:10px; padding-left:10px; box-shadow: 1px 1px 10px;" class="mx-5">
			<div v-for="product in products" :key="product.id" class="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
				<div class="me-auto d-block d-sm-flex align-items-center text-center text-sm-start">
					<div class="d-inline-block flex-shrink-0 mx-auto me-sm-4">
					<img style="margin-top: 13px; margin-left:3px;" :src="'images/' + product.image" :alt="product.name" width="160"></div>
					<h3 class="product-title fs-base mb-2">{{product.name}}</h3>
				</div>
				<div style="font-size:30px;" class="fs-lg text-accent pt-2"><b>{{product.price}}€</b></div>
				<div class="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
					<label style="padding-top: 25px;" class="form-label" for="quantity1">Quantity</label>
					<span style="display: inline-block;" class="form-control">{{this.basketStore.products.find(pr => pr.id == product.id).quantity}}</span>
					<div class="d-flex justify-content-evenly mt-2">
						<button @click="increment(product)" class="add_remove btn">+</button>
						<button @click="decrement(this.basketStore.products.find(pr => pr.id == product.id))" class="add_remove btn">-</button>
					</div>
					<button @click="removeProduct(product)" class="btn btn-link px-0 text-danger" type="button"><i class="ci-close-circle me-2"></i><span class="fs-sm">Remove</span></button>
				</div>
			</div>
		</div>
		<aside class="mx-auto col-lg-4 pt-4 pt-lg-0 ps-xl-5 ">
			<div class="bg-white rounded-3 shadow-lg p-4">
			<div class="py-2 px-xl-2">
				<div class="text-center mb-4 pb-3 border-bottom">
				<h2 class="h6 mb-3 pb-1">Total</h2>
				<h3 class="fw-normal">{{this.basketStore.totalAmount}}€</h3>
				</div>
				<button v-if="this.userStore.getUser.session_id" @click="checkout()" class="btn btn-warning btn-shadow d-block w-100 mt-4" to="/"><i class="ci-card fs-lg me-2"></i>Proceed to Order</button>
				<router-link v-else class="btn btn-warning btn-shadow d-block w-100 mt-4" to="/login"><i class="ci-card fs-lg me-2"></i>Log in to Order</router-link>
			</div>
			</div>
		</aside>
	</div>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { useBasketStore } from '@/store/basket'
import { useOrdersStore } from '@/store/orders'
import { useProductsStore } from '@/store/products'
import { useUserStore } from '@/store/user'

export default {
	setup() {
		const basketStore = useBasketStore()
		const ordersStore = useOrdersStore()
		const productsStore = useProductsStore()
		const userStore = 	useUserStore()
		return { basketStore, ordersStore, productsStore, userStore }
  	},
    components: {
    Footer,
    Header,
},
	data() {
		return {
			products: []
		}
	},
	mounted() {
		this.getBasketProducts();
	},
	methods: {
		increment(product){
			this.basketStore.incrementProduct(product.id, product.price);
		},
		decrement(product){
			if (product.quantity==1) {
				this.removeProduct(product);
			}else{
				this.basketStore.decrementProduct(product.id);
			}
		},
		removeProduct(product){
			this.basketStore.removeProduct(product.id);
			this.products = this.products.filter(function(element) {
          		return element.id !== product.id
        	})
		},
		getBasketProducts(){
			this.basketStore.products.forEach(product => {
				this.products.push(this.productsStore.getProduct(product.id));
			})
		},
		checkout(){
			this.ordersStore.addOrderDB({
				user_id:this.userStore.getUser.id,
				status_id:1,
				totalAmount:this.basketStore.totalAmount,
				items:this.basketStore.products
			})
			this.basketStore.clearBasket();
			this.$router.push('/message/4');
		}
	},
    computed: {

    },
}
</script>

<style scoped>
aside{
	display: block;
}
#noItems{
	background-image: url('@/assets/images/title-bg.png');
	background-repeat: no-repeat;
	background-position: 50% 50%;
	padding-top: 30px;
	padding-bottom: 30px;
	text-align: center;
}
.add_remove{
	background-color: white;
	border-radius: 50%;
	width: 40px;
	height: 40px;
}
</style>