<template>
	<Header />
	<div id="shoppier-background" class="bg-image position-relative overflow-hidden p-5 text-center bg-light">
		<div class="p-lg-5 mx-auto msy-3 bg-image p-5" id="note">
			<h1 class="index-title" style="margin-top: 17px;">Notter</h1>
			<p class="lead fw-normal">Your best stationary shop</p>
			<div v-if="!this.userStore.getUser.session_id">
				<router-link class="btn btn-outline-dark mb-5" to="register">Start buying</router-link>
			</div>
		</div>
	</div>
	<div class="container" style="margin-top: 30px;margin-bottom:50px">
		<div class="row">
			<div class="card" v-for="product in products" :key="product.id" style="background-color: #FAF1EA;width: 18rem; margin-left:40px; margin-top:30px;">
				<img style="margin-top:10px; border-radius:10px;" class="card-img-top" :src="'images/' + product.image" :alt="product.name">
				<div style="bottom: 0;" class="d-flex flex-column justify-content-evenly card-body">
				  <h4 class="card-title">{{product.name}}</h4>
				  <p class="card-text">{{product.description}}</p>
				  <p class="card-text" style="font-weight: bold;">{{product.price}}€</p>
				  <button @click="addToCart(product)" class="btn btn-warning" style="border: 1px; border-style:solid">Add to cart</button>
				</div>
			  </div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'

import { useBasketStore } from '@/store/basket'
import { useProductsStore } from '@/store/products'
import { useUserStore } from '@/store/user'

export default {
	setup() {
		const basketStore = useBasketStore()
		const productsStore = useProductsStore()
		const userStore = 	useUserStore()	
		return { basketStore, productsStore, userStore }
  	},
    components: {
        Header
	},
	data() {
		return {
			products: [],
		}
	},
	mounted() {
		this.getProducts();
	},
	methods: {
		addToCart(product){
			this.basketStore.incrementProduct(product.id)
		},
		async getProducts(){
			await this.productsStore.getProductsDB()
			this.products = this.productsStore.products
		}
	},
	computed: {

	}
}
</script>

<style scoped>
	#note{
		background-image: url('@/assets/images/note.png');
		background-position: 52% -28px; 
		background-size: contain;
		background-repeat: no-repeat;
		background-size: 416px;
	}
	#shoppier-background{
		background-image: url('@/assets/images/notebook-bg.jpg');
		margin-left: 12%;
		width: 78%;
		border-radius: 50px;
		box-shadow: 1px 1px 10px 1px #FFE5CC;
	}
</style>