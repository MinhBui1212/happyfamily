import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PreloadedState } from '@reduxjs/toolkit'
const rootReducer = combineReducers({
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
            getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']