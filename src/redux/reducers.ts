import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from "./actions";
import { Contact } from "../components/Contact";

const initialState: Contact[] = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    case EDIT_CONTACT:
      return state.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
    default:
      return state;
  }
};

export default reducer;