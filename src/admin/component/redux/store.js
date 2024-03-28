import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducer'

export const configstore = () => {

    const store = createStore(rootReducer, applyMiddleware(thunk))

    return store
}

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dhavalvadher/fruitabless.git
git push -u origin main