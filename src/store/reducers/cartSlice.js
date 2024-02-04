// 장바구니 상태를 관리 : 장바구니에 상품을 추가하고, 제거하는 기능
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  formattedPrices: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 홈페이지, 상세페이지에서 장바구니에 상품 담기
    addToCart(state, action) {
      const { product, quantity, option } = action.payload;
      const existingItem = state.items.find((item) => {
        return (
          item.id === product.id &&
          (option ? item.option === option : !item.option)
        );
      });

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity, ...(option && { option }) });
      }
    },
    // 장바구니에서 상품 삭제
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    // 장바구니 에서 상품 수량 업데이트
    updateQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    // 가격 정보 업데이트
    updateFormattedPrices(state, action) {
      state.formattedPrices = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  updateFormattedPrices,
} = cartSlice.actions;
export default cartSlice.reducer;
