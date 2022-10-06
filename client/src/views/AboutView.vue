<style setup lang="ts">
const items = [
  {name: 'Shoes', cost: 30},
  {name: 'Belt', cost: 20},
  {name: 'Socks', cost: 10},

]
const cart = [{name: 'Shoes', cost: 30},
  {name: 'Belt', cost: 20},]
</style>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="item in items" :key="item.name">
        <h3>{{ item.name }}</h3>
        <em>{{ item.cost }}</em>
      </li>
      
    </ul>
    <h2>Cart</h2>
    <table>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Cost</th>
      </tr>
    </table>
  </div>
</template>
<style lang="scss">
ul {
  display: flex;
  li {
    width: 200px;
    padding: 5px;
    margin: 5px;
  }
}
</style>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
