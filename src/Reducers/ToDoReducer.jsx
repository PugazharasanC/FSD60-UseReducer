export default function ToDoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: state.length + 1, ...action.payload }];
    case "TOGGLE_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id == action.payload.id ? { ...todo, ...action.payload } : todo
      );
    default:
      alert("Invalid action type");
      return state;
  }
}
