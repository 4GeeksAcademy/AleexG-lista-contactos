export const initialStore = () => {
  return {
    usuario: "Alexander",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      };
    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };
    case `edit_contact`:
      return {
        ...store,
        contacts: store.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    default:
      throw Error('Unknown action.');
  }
}