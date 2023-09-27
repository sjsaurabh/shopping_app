import { ADD_TODO, UPDATE_TODO } from "../ACTION/todoAction"

const initialState={
    task:[
        {
            name:'sanju'
        }
    ]
}
 export const todoReducer2=(state = initialState, action)=>{
      switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                task:[...state.task,action.payload]
            }
            case UPDATE_TODO:
               return {
                        ...state,
                        task: state.task.map((todo) =>
                            todo.id === action.payload.id ? { ...todo, text: action.payload.text }: todo
                        ),
                 };
            default :
            return state
      }
 }