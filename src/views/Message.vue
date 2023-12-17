<template>
	<div>
		<h1>{{message}}</h1>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import { useUserStore } from '@/store/user'

export default {	
	setup() {
		const userStore = useUserStore()
		return { userStore }
  	},
	data() {
		return {
			message: ''
		}
	},
	mounted() {
		this.setMessage()
	},
	components: {
        Header
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
				if (this.$route.params.id == 4){
					this.message = `Thank you for your purchase!`
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
	text-align: center;
	background-image: url('@/assets/images/title-bg.png');
	background-position: 50% 50%;
	padding-top: 30px;
	padding-bottom: 30px;
	background-repeat: no-repeat;
}
</style>



