type State = {
}

type ActionType = "login" | "logout";

type Action = {
  data: any;
  type: ActionType;
}

// Based on React Cookbook chapter 3.
function reducer(_state: State, action: Action) {
  switch (action.type) {
    case "login":
      console.log("User login");
      break;
    case "logout":
      console.log("User logout");
      break;
    default:
      throw new Error(`unsupported case: ${action.type}`);
  }
}

export default reducer;
