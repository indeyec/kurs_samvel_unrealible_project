<template>
    <div class="pizza-generator">
      <h2 class="title">Создайте свою пиццу</h2>
  
      <div class="pizza-options">
        <!-- Выбор размера пиццы -->
        <div class="option">
          <label>Размер:</label>
          <select v-model="selectedSize" class="select">
            <option value="small">Маленькая (10 дюймов)</option>
            <option value="medium">Средняя (12 дюймов)</option>
            <option value="large">Большая (14 дюймов)</option>
          </select>
        </div>
  
        <!-- Выбор теста -->
        <div class="option">
          <label>Тесто:</label>
          <select v-model="selectedCrust" class="select">
            <option value="thin">Тонкое</option>
            <option value="thick">Толстое</option>
          </select>
        </div>
  
        <!-- Выбор соуса -->
        <div class="option">
          <label>Соус:</label>
          <select v-model="selectedSauce" class="select">
            <option value="tomato">Томатный</option>
            <option value="white">Белый</option>
            <option value="bbq">Барбекю</option>
            <!-- Добавьте другие варианты соусов по желанию -->
          </select>
        </div>
  
        <!-- Выбор начинки -->
        <div class="option">
          <label>Начинка:</label>
          <div class="topping-list">
            <label v-for="(topping, index) in toppings" :key="index" class="topping">
              <input type="checkbox" v-model="selectedToppings" :value="topping" class="topping-checkbox">
              {{ topping }}
            </label>
          </div>
        </div>
  
        <!-- Дополнительные опции (например, острая приправа) -->
        <div class="option">
          <label>Дополнительно:</label>
          <input type="checkbox" v-model="spicy" class="checkbox">Острая приправа
        </div>
  
        <!-- Количество порций -->
        <div class="option">
          <label>Количество порций:</label>
          <input type="number" v-model="quantity" min="1" class="input">
        </div>
      </div>
  
      <!-- Кнопка для заказа -->
      <button @click="placeOrder" class="order-button">Заказать пиццу</button>
  
      <!-- Итоговая цена -->
      <div class="total-price">
        <h3>Итоговая цена: {{ calculateTotalPrice() }} руб.</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedSize: 'small',
        selectedCrust: 'thin',
        selectedSauce: 'tomato',
        toppings: ['Пепперони', 'Грибы', 'Оливки', 'Лук', 'Помидоры', 'Паприка', 'Шпинат'],
        selectedToppings: [],
        spicy: false,
        quantity: 1,
        prices: {
          small: 10,
          medium: 12,
          large: 14,
          thin: 0,
          thick: 2,
          tomato: 0,
          white: 0,
          bbq: 1,
          topping: 1,
          spicy: 1
        }
      };
    },
    methods: {
      calculateTotalPrice() {
        let basePrice = this.prices[this.selectedSize] + this.prices[this.selectedCrust] + this.prices[this.selectedSauce];
        let toppingPrice = this.selectedToppings.length * this.prices.topping;
        let spicyPrice = this.spicy ? this.prices.spicy : 0;
        return (basePrice + toppingPrice + spicyPrice) * this.quantity;
      },
      placeOrder() {
        console.log('Заказ размещен!');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили для компонента */
  .pizza-generator {
    font-family: Arial, sans-serif;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .option {
    margin-bottom: 10px;
  }
  
  .select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .topping-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .topping {
    flex-basis: calc(50% - 10px);
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .topping-checkbox {
    margin-right: 5px;
  }
  
  .checkbox {
    margin-right: 5px;
  }
  
  .input {
    width: 50px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .order-button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .order-button:hover {
    background-color: #0056b3;
  }
  
  .total-price {
    margin-top: 20px;
    text-align: center;
  }
  </style>