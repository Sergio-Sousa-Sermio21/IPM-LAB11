 
  import { defineStore } from 'pinia';
  export const useBasketStore = defineStore({
  id: 'basket',
  state: () => ( {
    products: [
    //  {
    //    id: 1,
    //    quantity: 5
    //  },
    //  {
    //   id: 2,        
    //    quantity: 2
    //  },
    //  {
    //    id: 3,        
    //    quantity: 3
    //  }
    ]
  }),
  getters: {
    getProducts (state) {
      return state.products;
    },
    getFullQuantity(state){
      var result =0;
      state.products.forEach(product => {result+=parseInt(product.quantity)})
      return result;
    }
  }, 
  actions: {
    clearBasket () {
        this.products = []
    },
    incrementProduct (idToIncrement) {
        // check if item exists in basket
        let changed = false
        const find = this.products.find((product) => product.id === idToIncrement);
        console.log(find)
        if(find !== undefined){
          this.products = this.products.map((product) => (product.id === idToIncrement ? {id:idToIncrement, quantity: parseInt(product.quantity)+1} : product));
          changed = true
        }

        if(!changed){
          this.products = [...this.products, {id:idToIncrement, quantity:"1"}];
        }
        console.log(this.products)
        // item does not exist; create item

        // increment item

      },    
      decrementProduct (idToDecrement) {
        this.products = this.products.map(product => (product.id === idToDecrement ? {id:idToDecrement, quantity: product.quantity--} : product));
        this.products.forEach( function () {
          this.products = this.products.filter(function(product) {
            return product.quantity !== 0
          })
        })
          // remove item if quantity is 0
      }

	},

})
