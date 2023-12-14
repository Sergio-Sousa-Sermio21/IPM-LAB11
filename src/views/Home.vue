<template>
	<Header />
	<div id="shoppier-background" class="bg-image position-relative overflow-hidden p-5 text-center bg-light">
		<div class="p-lg-5 mx-auto msy-3 bg-image p-5" id="note">
			<h1 class="index-title" style="margin-top: 17px;">Notter</h1>
			<p class="lead fw-normal">Your best stationary shop</p>
			<router-link class="btn btn-outline-dark mb-5" to="register">Start buying</router-link>
		</div>
	</div>
	<div class="container" style="margin-top: 30px;margin-bottom:50px">
		<div class="row">
			<div class="card" style="background-color: #FAF1EA;width: 18rem;">
				<img class="card-img-top" src="..." alt="example">
				<div class="card-body">
				  <h4 class="card-title">Card title</h4>
				  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <button @click="" class="btn btn-warning" style="border: 1px; border-style:solid">Add to cart</button>
				</div>
			  </div>
		</div>
	</div>
</template>

<script>
	
	import Header from '@/components/Header.vue';
	export default {
	setup() {
			
		return { }
  	},
    components: {
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
	#note{
		background-image: url('@/assets/images/note.png');
		background-position: 52% -28px; 
		background-size: contain;
		background-repeat: no-repeat;
		background-size: 416px;
	}
	#shoppier-background{
		background-image: url('@/assets/images/notebook-upscaled-bg.jpeg');
		background-size: cover;
		background-repeat: no-repeat;
		box-shadow: 1px 1px 10px 1px #FFE5CC;
	}
</style>