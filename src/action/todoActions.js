// export const ADDTODO='ADD_TODO'

//  const addTod=(text)=>{
//     return{
//         type:ADDTODO,
//         payload:{
//             text
//         }
//     }
// }
// export default addTod
// todoActions.js
export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL='DELETE_ALL'
export const REMOVE_TODO='REMOVE_TODO'
export const UPDATE_TODO='UPDATE_TODO'
export const addTodo = (text) => {
        return{
            type:ADD_TODO,
            payload:
                text
            
        }
    };
export const deleteAll=()=>{
    return{
        type:DELETE_ALL
    }
}
export const removeTodo=(todoId)=>{
    return{
        type:REMOVE_TODO,
        payload:todoId,

    }
}
export const updateTodo = (updatedTodo) => ({
    type: UPDATE_TODO,
    payload: updatedTodo,
  });