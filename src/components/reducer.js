export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total_amount, item) => total_amount + item.price, 0);

function reducer(state, action) {
  // console.log("actioooooon", action);
  // console.log("staaateeeeee", state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD":
      //logic to adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE":
      //logic removing items from basket

      //we cloned the basket
      let newbasket = [...state.basket];

      //we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exits ti basket, remove it
        newbasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product ${action.id} as its not in basket`);
      }

      return { ...state, basket: newbasket };
    default:
      return state;
  }
}

export default reducer;
