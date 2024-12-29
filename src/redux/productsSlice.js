import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("/products.json");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedCategory: "FACE", // Начальная категория
    status: "idle", // Статус запроса
    error: null, // Ошибка при запросе
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload; // Устанавливаем выбранную категорию
    },
    resetCategory: (state) => {
      state.selectedCategory = "ALL"; // Сброс выбранной категории
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Загрузка данных
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Успешный запрос
        state.products = action.payload; // Сохранение данных
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Ошибка запроса
        state.error = action.error.message; // Сообщение об ошибке
      });
  },
});

// Селекторы
const selectProducts = (state) => state.products.products; // Получаем все продукты
const selectSelectedCategory = (state) => state.products.selectedCategory; // Получаем выбранную категорию

// Мемоизированный селектор для фильтрации продуктов по категории
export const selectFilteredProducts = createSelector(
  [selectProducts, selectSelectedCategory],
  (products, selectedCategory) => {
    return selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  }
);

// Мемоизированный селектор для ограниченного списка продуктов (например, 2 продукта)
export const selectLimitedProducts = createSelector(
  [selectProducts, selectSelectedCategory],
  (products, selectedCategory) => {
    if (selectedCategory === "ALL") {
      return products;
    }

    return products
      .filter((product) => product.category === selectedCategory)
      .slice(0, 2); // Ограничиваем список до 2 продуктов
  }
);

export const { filterCategory, resetCategory } = productsSlice.actions;
export default productsSlice.reducer;
