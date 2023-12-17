 
  import { defineStore } from 'pinia';
  export const useBasketStore = defineStore({
  id: 'basket',
  state: () => ( {
    products: [
    //  {
    //    id: 1,
    //    quantity: 5
    //    price: 10
    //  },
    //  {
    //   id: 2,        
    //    quantity: 2
    //    price: 10
    //  },
    //  {
    //    id: 3,        
    //    quantity: 3
    //    price: 10
    //  }
    ]
  }),
  getters: {
    getProducts (state) {
      return state.products;
    },
    totalAmount(state) {
      let total = 0
      for (let i = 0; i < state.products.length; i++) {
          total += parseInt(state.products[i].quantity) * parseInt(state.products[i].price);
      }
      return total
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
    incrementProduct (idToIncrement, price) {
        // check if item exists in basket
        let changed = false
        const find = this.products.find((product) => product.id === idToIncrement);
        if(find !== undefined){
          this.products = this.products.map((product) => (product.id === idToIncrement ? {id:idToIncrement, quantity: parseInt(product.quantity)+1, price: price} : product));
          changed = true
        }

        if(!changed){
          this.products = [...this.products, {id:idToIncrement, quantity:"1", price:price}];
        }
        // item does not exist; create item

        // increment item

      },    
      decrementProduct (idToDecrement) {
        this.products = this.products.map(product => (product.id === idToDecrement ? {id:idToDecrement, quantity: parseInt(product.quantity)-1, price:product.price} : product));
        this.products = this.products.filter(function(product) {
          return product.quantity !== 0
        })
          // remove item if quantity is 0
      },
      removeProduct(idToRemove){
        this.products = this.products.filter(function(product) {
          return product.id !== idToRemove
        })
      }
	},

})
