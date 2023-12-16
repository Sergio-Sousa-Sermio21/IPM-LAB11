<template>
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
		<h5 class="my-0 mr-md-auto font-weight-normal">Notter</h5>
		<h4 class="mx-3 mr-md-auto fw-light text-decoration-underline" style="margin-top: 10px;" >Welcome guest</h4>
		<nav class="my-2 my-md-0 mr-md-3 ms-md-auto">
			<router-link class="p-2 text-dark" to="/">Home</router-link>
			<router-link v-if="!this.userStore.getUser.session_id" class="p-2 text-dark" to="login">Login</router-link>
			<router-link to="basket" id="cart">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="e" width="27" height="27">
				<g transform="matrix(0.12 0 0 0.12 0 0)">
					<g transform="matrix(0.1 0 -0 -0.1 0 225)">
						<path d="M90 1970L90 1881L186 1878L282 1875L451 1520L619 1165L573 1080C 476 901 470 888 470 849C 470 805 492 746 518 717C 527 706 552 689 572 679C 607 661 640 660 1195 660L1195 660L1780 660L1780 750L1780 840L1236 840C 773 840 691 842 680 855C 671 866 677 884 712 947L712 947L756 1025L1137 1030L1518 1035L1561 1065C 1598 1091 1626 1135 1783 1420C 1979 1774 1987 1795 1941 1844L1941 1844L1917 1870L1203 1870L489 1870L445 1965L401 2060L246 2060L90 2060L90 1970z" stroke="none" fill="#000000" fill-rule="nonzero" />
						<path d="M572 539C 507 507 475 452 475 375C 475 325 480 306 502 273C 562 181 702 164 783 238C 815 267 840 327 840 375C 840 515 698 601 572 539z" stroke="none" fill="#000000" fill-rule="nonzero" />
						<path d="M1515 543C 1420 493 1385 391 1429 294C 1491 157 1693 157 1760 295C 1804 386 1767 496 1678 539C 1626 564 1557 566 1515 543z" stroke="none" fill="#000000" fill-rule="nonzero" />
					</g>
				</g>
				</svg>
				{{this.basketStore.getFullQuantity}}
			</router-link>
			<button @click="emptyBasket()" id="noCart">Empty Basket</button>
		</nav>
		<router-link v-if="!this.userStore.getUser.session_id" class="btn btn-outline-dark" to="register">Sign up</router-link>
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
		emptyBasket(){
			this.basketStore.clearBasket();
		}
    },
    computed: {
        
    },
}

</script>  
<style scoped>
#cart{
	margin-right: 5px;
	padding: 6px;
	padding-bottom: 11px;
	border-radius: 10px;
	border: 1px;
	border-style: solid;
	border-color: black;
	font-family: sans-serif;
	color:black;
	text-decoration: none;
}
h5 {
    font-family: var(--Fugles);
    font-size: 50px;
    font-weight: 700;
}
#noCart{
	background: none!important;
  	border: none;
	margin-right:5px;
	text-decoration: underline;
}
</style>