import {combineReducers} from 'redux';
import userReducer from './user';
import loginReducer from './login';
import bookingCalendarReducer from './bookingCalendarReducer';
import bookingProductReducer from './bookingProduct'

// const rootReducer = combineReducers({
export default combineReducers({
    login: loginReducer,
    // accessToken: systemSessionLocalStorageReducer,
    bookingCalendar:  bookingCalendarReducer,
    product: bookingProductReducer
});

// export default rootReducer; ==> NOT USED AGAIN !