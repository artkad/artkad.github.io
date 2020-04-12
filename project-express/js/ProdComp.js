Vue.component('products', {
  data(){
    return {
      catalogUrl: '/catalogData.json',
      products: [],
      imgCatalog: 'https://placehold.it/200x150',
    }
  }, 
  methods: {
    
  },
  mounted(){
    this.$parent.getJson(`/api/products`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });
  },
  template: `
  <div class="products">
      <product v-for ="item of products" :key="item.id_product" :img="imgCatalog" :product="item"></product>
  </div>
  `
});
Vue.component('product', {
  props: ['product', 'img'],
  template: `
  <div class = 'product-item'>
          <img :src="img" alt="image">
          <div class="desc">
            <h3>{{ product.product_name }}</h3>
              <p>{{ product.price }} $</p>
            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
            
          </div>
        </div>
  `
});