<template>
<div>


  
<Header />
<div v-if="!this.userStore.getUser.session_id" id="login-form" class="container">
	<form @submit.prevent="handleSubmit" style="position:relative;margin:10% 20% 10%; padding-left: 30px;">
		<div class="main-title">
			<h1 style="text-align: center;" class="mainh">Login</h1>
		</div>
		<div v-if="error" class="alert alert-danger" style="margin-top: 30px;" role="alert">
			{{msg}}
		</div>
		<label for="email" class="form-label">Email</label>
		<div class="input-group has-validation">
			<input type="text" class="form-control" name="email" id="email" v-model="user.email" placeholder="example@domain.com">
			<div class="invalid-feedback">
				Your username is required.
			</div>
		</div>
		<div class="col-12">
			<label for="password" class="form-label">Password</label>
			<input type="password" class="form-control" name="password" autocomplete="off" v-model="user.password" id="password" placeholder="●●●●●●●●●●">
			<div class="invalid-feedback">
				Please enter a valid Password.
			</div>
		</div>
		<div style="margin-top: 5px;" class="form-check">
			<input class="form-check-input" name="autologin" id="autologin" type="checkbox">
			<label class="form-check-label" for="autologin">
				Remember me
			</label>
		</div>
		<button style="margin-top:10px;" class="btn btn-dark" type="submit">Log in</button>
		<button @click="cancel()" style="margin-top:10px;margin-left:10px;" class="btn btn-outline-dark">Cancel</button>
		
		<a href="" style="position:absolute; bottom:5%; left:70%" >Forgot password?</a>
	</form>
</div>
<div v-else>
	<h3 style="text-align: center;">Logout first </h3>
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
			email: '',
			password: '',
        },
		submitting: false,
		error: false,
      }
    },
	
	methods: {

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
	background-position: 50% -18px;
	background-size: 240px;
	background-repeat: no-repeat;
}
</style>