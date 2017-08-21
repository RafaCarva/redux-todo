// No Redux, o “reducer” é o construtor que mantêm e atualiza o estado.

//Actions descrevem de fato que algo aconteceu e o papel
//dos REDUCERS é transmitir o que aconteceu para alterar
//devidamente sua store

//esse arquivo index vai fazerr o 'agrupamento de reducers'
//lá no index da raiz, uma store vai ser iniciada e todoApp
//vai ser passado como parâmetro.


import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
