export interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
  }
  
  export interface ContactAction {
    type: string;
    payload: Contact | number;
  }