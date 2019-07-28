import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// tell redux-persist you want to use localStorage
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);