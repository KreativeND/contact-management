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

export interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}