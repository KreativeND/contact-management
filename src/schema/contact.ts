export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}


export interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSaveContact: (contact: Contact) => void;
  contact: Contact | null;
}