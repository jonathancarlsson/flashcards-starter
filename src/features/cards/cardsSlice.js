import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

export const { addCard } = cardsSlice.actions;
export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;

/* 16.

Great work! Next, in the src/features/cards directory,
 create a new file containing slice for cards that:

    Is named 'cards'
    Has initial state consisting of an object that includes one property,
    cards, which corresponds to an empty object.
     This inner cards object will eventually hold all cards keyed by id.
    Has an addCard action. This action will receive a payload of the form 
    { id: '123', front: 'front of card', back: 'back of card'}.

*/
