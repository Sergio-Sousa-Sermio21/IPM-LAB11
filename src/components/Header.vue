<template>
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		<h5 class="my-0 mr-md-auto font-weight-normal">Shuppier</h5>
		<h4 class="mx-3 mr-md-auto fw-light text-decoration-underline" >Welcome guest</h4>
		<nav class="my-2 my-md-0 mr-md-3 ms-md-auto">
			<router-link class="p-2 text-dark" to="/">Home</router-link>
			<router-link class="p-2 text-dark" to="login">Login</router-link>
			<router-link to="basket"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
				width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
				preserveAspectRatio="xMidYMid meet">
			   
			   <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
			   fill="#000000" stroke="none">
			   <path d="M90 1970 l0 -89 96 -3 96 -3 169 -355 168 -355 -46 -85 c-97 -179
			   -103 -192 -103 -231 0 -44 22 -103 48 -132 9 -11 34 -28 54 -38 35 -18 68 -19
			   623 -19 l585 0 0 90 0 90 -544 0 c-463 0 -545 2 -556 15 -9 11 -3 29 32 92
			   l44 78 381 5 381 5 43 30 c37 26 65 70 222 355 196 354 204 375 158 424 l-24
			   26 -714 0 -714 0 -44 95 -44 95 -155 0 -156 0 0 -90z"/>
			   <path d="M572 539 c-65 -32 -97 -87 -97 -164 0 -50 5 -69 27 -102 60 -92 200
			   -109 281 -35 32 29 57 89 57 137 0 140 -142 226 -268 164z"/>
			   <path d="M1515 543 c-95 -50 -130 -152 -86 -249 62 -137 264 -137 331 1 44 91
			   7 201 -82 244 -52 25 -121 27 -163 4z"/>
			   </g>
			   </svg></router-link>
		</nav>
		<router-link class="btn btn-outline-dark" to="register">Sign up</router-link>
	</div>
</template>

<script>

import { useBasketStore } from '@/store/basket'
import { useUserStore } from '@/store/user'

export default {
	setup() {
		const basketStore = useBasketStore()
		const userStore = 	useUserStore()	
		return { basketStore, userStore }
  	},    
    methods: {	

    },
    computed: {
        
    },
}

</script>  
