import React from 'react';
import { Contact } from '../schema/contact';

interface ContactCardProps {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-md ${
        contact.isActive ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Avatar"
          className="w-16 h-16 rounded-full border border-gray-300 mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="text-sm text-gray-600">
            Status: <span className={contact.isActive ? 'text-green-500' : 'text-red-500'}>
              {contact.isActive ? 'Active' : 'Inactive'}
            </span>
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          className={`py-1 px-3 rounded ${
            contact.isActive ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
          onClick={() => onToggleStatus(contact.id)}
        >
          {contact.isActive ? 'Deactivate' : 'Activate'}
        </button>
        <button
          className="py-1 px-3 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => onEdit(contact)}
        >
          Edit
        </button>
        <button
          className="py-1 px-3 rounded bg-red-500 text-white hover:bg-red-600"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
