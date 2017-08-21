//Actions (ou ações) são objetos que servem para transmitir
//o que será enviado de sua view para sua store.

//Actions possuem obrigatoriamente uma propriedade type que
//indica o tipo de ação que será executada,  e que por sua
//vez devem ser escritas sempre como constantes.

let nextTodoId =0

export const addTodo=text=>{
    return{
        //aqui criei uma action do tipo ADD_TODO que enviará
        //id e text para a store.
        type:'ADD_TODO',
        id:nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter =>{
    return{
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo =id=>{
    return{
        type:'TOGGLE_TODO',
        id
    }
}