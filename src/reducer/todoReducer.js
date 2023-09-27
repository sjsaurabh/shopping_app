// import {ADDTODO} from '../action/todoActions'
// const initialState={
//     todos:[]
// }
//  const todoReducer=(action,state=initialState)=>{
//      switch(action.type){
//         case ADDTODO:
//          return  {
//          ...state,
//          todos:[
//             ...state.todos,
//             {
//                 text:action.payload.text,
//                 completed:false
//             }
//         ]
//         };
//         default :
//         return state;
//      }
// }

//     export default todoReducer

// todoReducer.js
import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from '../action/todoActions';

const initialState = {
    todo2: [
        {
            id:1,
            name:"sanju"
        },
        {
            id:2,
            name:"Divya"
        },
    ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo2: [...state.todo2, { id: Date.now(), text: action.payload }],
      };
      case DELETE_ALL:
        return [];
        case REMOVE_TODO:
          return {
            ...state,
            todo2: state.todo2.filter((todo) => todo.id !== action.payload),
          };
          case 'UPDATE_TODO':
      const updatedTodos = state.todo2.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };
       
    default:
      return state;
  }
};

export default todoReducer;
