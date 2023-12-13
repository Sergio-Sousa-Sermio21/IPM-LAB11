<template>
	<div>
		<Header />
		<div id="shoppier-background" class="bg-image position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
			<div class="p-lg-5 mx-auto msy-3 bg-image p-5" id="bubble">
				<h1 class="index-title">Shoppier</h1>
				<p class="lead fw-normal">Join the best Bloggin site</p>
				<router-link class="btn btn-outline-secondary mb-5" to="register">Sign Up</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	
	import Header from '@/components/Header.vue'
	export default {
	setup() {
		const basketStore = useBasketStore()
		const ordersStore = useOrdersStore()		
		return { basketStore, ordersStore }
  	},
    components: {
		Footer,
        Header
	},
	data() {
		return {
		}
	},
	mounted() {
	},
	methods: {
	
	},
	computed: {

	}
}
</script>

<style scoped>
	#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 100px;
	}
	#bluggier-background{
		background-image: url('~@/assets/images/notepad_background.webp');
		background-size: 850px;
	}
</style>