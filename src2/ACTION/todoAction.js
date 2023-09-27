export const ADD_TODO='ADD_TODO'
export const UPDATE_TODO='UPDATE_TODO'
export const addTodo=(text)=>({
    type:ADD_TODO,
    payload:{id: Date.now().toString(),text}
})
// export const updateTodo=(itemId)=>({
//     type:UPDATE_TODO,
//     payload:itemId
// })
export const updateTodo = (id, text) => ({
    type: UPDATE_TODO,
    payload: { id, text },
  });