import {createStore} from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['history'],
	timeout: 50,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor }

