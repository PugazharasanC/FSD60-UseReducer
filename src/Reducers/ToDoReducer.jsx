export default function ToDoReducer(state, action) {
  switch (action.type) {
    case "INIT_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, { ...action.payload }];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    
    default:
      alert("Invalid action type");
      return state;
  }
}
