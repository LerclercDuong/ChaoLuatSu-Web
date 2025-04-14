import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import auth from "../features/auth";
import app from "../features/app";

const combineReducer = combineReducers({    
    app: app,
    auth: auth,
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === "logOut") {
    state = {} as RootState;
  }
  return combineReducer(state, action);
};

export default rootReducer;
