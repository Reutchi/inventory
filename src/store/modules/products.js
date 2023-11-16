import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: 1, name: 'Suc Mellow Mango 0.33l', sold: 0, ingredients: { mellow: 1 } },
        { id: 2, name: 'Suc Mellow Orange 0.33l', sold: 0, ingredients: { orange: 1 } },
        { id: 3, name: 'Apa plata 0.33l', sold: 0, ingredients: { stillWater: 1 } },
        { id: 4, name: 'Apa minerala 0.33l', sold: 0, ingredients: { sparklingWater: 1 } },
        { id: 5, name: 'Le Piantagioni del Caffe: Cappucino', sold: 0, ingredients: { milk: 200, coffee: 50 } },
        { id: 6, name: 'Le Piantagioni del Caffe: Americano', sold: 0, ingredients: { coffee: 50 } },
        { id: 7, name: 'Le Piantagioni del Caffe: Espresso', sold: 0, ingredients: { coffee: 50 } },
        { id: 8, name: 'ODK COFFEE Frappe', sold: 0 },
        { id: 9, name: 'ODK COFFEE Ciocolata Neagra', sold: 0 },
        { id: 10, name: 'ODK COFFEE Ciocolata Alba', sold: 0 },
    ],
    ingredients: {
        milk: 35200,
        coffee: 500,
        mellow: 10,
        stillWater: 5,
        sparklingWater: 10,
        blackChocolate: 350,
        whiteChocolate: 250,
    },
    modal: false,
};

export const products = createSlice({
    name: 'productsList',
    initialState,
    reducers: {
        TOGGLE_MODAL(state) {
            state.modal = true;
        },
        SET_QUANTITY_SOLD(state, action) {
            const { id, quantity } = action.payload;
            state.products = state.products.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        sold: product.sold + quantity
                    };
                }
                return product;
            });
        },
        SELL_PRODUCT(state, action) {
            const { id, quantity } = action.payload;
            const product = state.products.find((p) => p.id === id);

            if (product && product.ingredients) {
                Object.keys(product.ingredients).forEach((ingredient) => {
                    const ingredientQuantity = product.ingredients[ingredient] * quantity;
                    state.ingredients[ingredient] -= ingredientQuantity;
                });
            }
        },
    },
});

export const { TOGGLE_MODAL, SELL_PRODUCT, SET_QUANTITY_SOLD } = products.actions;

export default products.reducer;


