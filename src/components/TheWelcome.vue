<!-- <template>
  <div class="app">
    <h1>Оставьте отзыв о нас</h1>
    <div class="todo-form">
      <input type="text" v-model="newTodo" placeholder="Рады каждому отзыву">
      <button @click="addTodo">Add</button>
    </div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="completeTodo(index)">Подтвердить</button>
        <button @click="deleteTodo(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    },
    completeTodo(index) {
      this.todos[index].completed = true;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

}

.todo-form {
  display: flex;
  margin-bottom: 10px;
}

.todo-form input {
  flex: 1;
  padding: 5px;
  font-size: 16px;
}

.todo-form button {
  padding: 5px 10px;
  font-size: 16px;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.todo-list li .completed {
  text-decoration: line-through;
  color: gray;
}

.todo-list li button {
  margin-left: 10px;
  padding: 3px 6px;
  font-size: 14px;
}
</style>

 -->


 <!-- <template>
  <div>
    <button @click="toggleSearch" class="search-button">Поиск</button>
    <transition name="slide">
      <div v-if="isSearchOpen" class="search-container">
        <input type="text" placeholder="Введите запрос" class="search-input" />
        <button @click="closeSearch" class="close-button">Закрыть</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearchOpen: false
    };
  },
  methods: {
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    closeSearch() {
      this.isSearchOpen = false;
    }
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

.search-button {
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-container {
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-input {
  width: 200px;
  padding: 5px;
  margin-right: 10px;
}

.close-button {
  background-color: #f44336;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style> -->



<!-- <template>
  <div>
    <button @click="addToCart" class="add-to-cart-button">Добавить в корзину</button>
    <transition name="fade">
      <div v-if="isAddedToCart" class="cart-animation">
        <img src="cart-icon.png" alt="Корзина" class="cart-icon" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAddedToCart: false
    };
  },
  methods: {
    addToCart() {
      this.isAddedToCart = true;
      setTimeout(() => {
        this.isAddedToCart = false;
      }, 1000); // Здесь можно задать продолжительность анимации
    }
  }
};
</script>

<style>
.add-to-cart-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cart-animation {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

.cart-icon {
  width: 30px;
  height: 30px;
}
</style> -->


<!-- <template>
  <div class="pizza-order">
    <h1>Выберите пиццу</h1>
    <div class="pizza-list">
      <div v-for="pizza in pizzas" :key="pizza.id" class="pizza-item">
        <img :src="pizza.image" :alt="pizza.name" class="pizza-image" />
        <h2>{{ pizza.name }}</h2>
        <p>{{ pizza.description }}</p>
        <div class="pizza-options">
          <label for="size">Размер:</label>
          <select id="size" v-model="selectedSize">
            <option v-for="size in pizza.sizes" :key="size">{{ size }}</option>
          </select>
          <label for="quantity">Количество:</label>
          <input type="number" id="quantity" v-model="selectedQuantity" min="1" />
        </div>
        <button @click="addToCart(pizza)">Добавить в корзину</button>
      </div>
    </div>
    <h2>Корзина</h2>
    <div v-if="cart.length === 0">Корзина пуста</div>
    <ul v-else>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.size }} - {{ item.quantity }}
        <button @click="removeFromCart(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pizzas: [
        {
          id: 1,
          name: "Маргарита",
          description: "Классическая пицца с томатным соусом и моцареллой",
          image: "margarita.jpg",
          sizes: ["30 см", "40 см", "50 см"]
        },
        {
          id: 2,
          name: "Пепперони",
          description: "Пицца с пепперони, томатным соусом и моцареллой",
          image: "pepperoni.jpg",
          sizes: ["30 см", "40 см", "50 см"]
        },
        // Другие пиццы...
      ],
      selectedSize: "",
      selectedQuantity: 1,
      cart: []
    };
  },
  methods: {
    addToCart(pizza) {
      if (this.selectedSize && this.selectedQuantity > 0) {
        const item = {
          name: pizza.name,
          size: this.selectedSize,
          quantity: this.selectedQuantity
        };
        this.cart.push(item);
        this.selectedSize = "";
        this.selectedQuantity = 1;
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    }
  }
};
</script>

<style>
.pizza-order {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pizza-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.pizza-item {
  border: 1px solid #ccc;
  padding: 20px;
}

.pizza-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.pizza-options {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}
</style> -->


<template>
  <div class="cart">
    <h2>Корзина</h2>
    <ul>
      <li v-for="pizza in cartItems" :key="pizza.id">
        {{ pizza.name }} - {{ pizza.price }} руб.
        <button @click="removeFromCart(pizza)">Убрать</button>
      </li>
    </ul>
    <p>Итого: {{ getTotalPrice() }} руб.</p>
    <button @click="checkout">Оформить заказ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [], // Массив выбранных пицц
    };
  },
  methods: {
    removeFromCart(pizza) {
      const index = this.cartItems.findIndex(item => item.id === pizza.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, pizza) => total + pizza.price, 0);
    },
    checkout() {
      // Здесь вы можете добавить логику для оформления заказа, например, отправку данных на сервер
      // После успешного заказа, можно очистить корзину
      this.cartItems = [];
      alert('Заказ оформлен! Спасибо за покупку.');
    },
  },
};
</script>

<style scoped>
/* Здесь вы можете добавить стили для компонента "Корзина" */
</style>



