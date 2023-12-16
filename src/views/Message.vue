<template>
	<div>
			<h1>{{message}}</h1>
	</div>
</template>

<script>

export default {	

	data() {
		return {
			message: ''
		}
	},
	mounted() {
		this.setMessage()
	},


	methods: {
		setMessage() {
				if (this.$route.params.id == 1) {
                	this.message = "Welcome! You can now login"
                }
				if (this.$route.params.id == 2) {
                	this.message = "Welcome back " + this.userStore.getUser.name + "!"
                }
				if (this.$route.params.id == 3) {
                	this.message = `Bye ${this.userStore.user.name}, come back soon!`
                }														
				
				var timeleft = 2;
				var downloadTimer = setInterval(() => {
					if(timeleft <= 0){
						clearInterval(downloadTimer)
						this.$router.push('/')
					}
				timeleft -= 1
				}, 1000)
		},
	},


}
</script>

<style scoped>
h1{
	position: 50% 50%;
	background-image: url('@/assets/images/title-bg.png');
}
</style>



