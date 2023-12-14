<template>
<div>

<Header />
	<div v-if="!this.userStore.getUser.session_id" id="register-form" style="position:relative; margin-right:5%;margin-left:3%" class="container" >
		<div class="main-title">
			<h1 class="mainh">Register</h1>
		</div>
		<div v-if="error" class="alert alert-danger" style="margin-top: 30px;" role="alert">
			{{msg}}
		</div>
		<div class="row g-3">
			<form @submit.prevent="handleSubmit">
			<div  class="col-12">
				<label for="username" class="form-label">Name</label>
				<div class="input-group has-validation">
					<span style="background-color:#FAF1EA;" class="input-group-text">@</span>
					<input type="text" class="form-control" name="name" id="username" v-model="user.name" placeholder="Username" required="">
				</div>
			</div>

			<div class="col-12">
				<label for="email" class="form-label">Email</label>
				<input type="email" class="form-control" name="email" id="email" v-model="user.email" placeholder="you@example.com">
			</div>

			<div class="col-12">
				<label for="email" class="form-label">Password</label>
				<input type="password" class="form-control" name="password" autocomplete="off" v-model="user.password" id="password" placeholder="●●●●●●●●●●">
			</div>

			<div class="col-12">
				<label for="password" class="form-label">Confirm Password</label>
				<input type="password" class="form-control" name="password-confirm" autocomplete="off" v-model="passwordConfirmation" id="password-confirm" placeholder="●●●●●●●●●●">
			</div>

			<button style="margin-top: 50px;border:1px; border-style:solid; " class="btn btn-warning ms-md-auto" type="submit">Submit</button>
			<button @click="cancel()" style="margin-top: 50px; margin-left:10px;" class="btn btn-outline-dark">Cancel</button>
			</form>
		</div>
	</div>
	<div v-else>
		<h1 style="text-align: center;">Logout first</h1>
	</div>
</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import { useUserStore } from '@/store/user'

export default {
	
	setup() {
		const userStore = useUserStore()
		return { userStore }
  	},

	components: {
		Footer,
        Header
	},
	data() {
      return {	
        user: {
			name: '',
			email: '',
			password: '',
        },
		passwordConfirmation: '',
		submitting: true,
		error: false,	
      }
    },
	
	methods: {
		cancel(){
			this.$router.push('/');
		},
		async handleSubmit(){
			if (this.user.name == '' ||this.user.email == ''||this.user.password == ''||this.passwordConfirmation == '') {
				this.msg = "Preencha todos os campos";
				this.error= true;
			}else if (!this.isValidEmail) {
				this.msg = "Email não é válido";
				this.error= true;
			}else if (this.user.password != this.passwordConfirmation) {
				this.msg = "Passwords não coincidem";
				this.error= true;
			} else{
				if (!await this.userStore.userExistsDB(this.user)) {
					this.error= false;
					await this.userStore.addUserDB()
					this.$router.push('/message/4')
				}
			}
		},
		isValidEmail() {
      		return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
    	}
	},
	
	computed: {

	},
	directives: {

	},
	created: function () {


	}
}
</script>

<style scoped>
.main-title{
	padding-left: 27px;
	background-image: url('@/assets/images/title-bg.png');
	background-position: -30px -20px;
	background-size: 240px;
	background-repeat: no-repeat;
}
</style>