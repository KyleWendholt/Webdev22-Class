<template>
  <div>
    <div class="products">
      <RouterLink class="product" v-for="product in products" :key ='product.id' :to="`/product/${product.id}`">
        <div class="product-image">
          <img :src="product.thumbnail" :alt="product.title">
        </div>
        <div class="product-info">

        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getProducts } from "../stores/products";
import { RouterLink } from "vue-router";

const products = reactive(getProducts());
</script>

<style scoped>
  .products{
    display: flex;
    flex-wrap: wrap;
    background-color: aliceblue;
  }
  .product{
    margin: 1em;
    padding: 1em;
    background-color: #fff;
    flex-basis: 10em;
    border: 1px solid #000;
    border-radius: 5px;

  }
  .product-info{
    font-size: small;
  }
  .price{
    display: flex;

  }
</style>
