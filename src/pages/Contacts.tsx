import React, { useState } from "react";
import { Contact } from "../schema/contact";
import ContactModal from "../components/ContactModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../redux/contactsSlice";
import ContactCard from "../components/ContactCard";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = () => {
    setEditContact(null);
    setIsModalOpen(true);
  };

  const handleEditContact = (contact: Contact) => {
    setEditContact(contact);
    setIsModalOpen(true);
  };

  const handleSaveContact = (contact: Contact) => {
    if (editContact) {
      dispatch(updateContact(contact));
    } else {
      dispatch(addContact(contact));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>

      <div className="mb-4 flex flex-col justify-between items-center lg:flex-row md:flex-row">
        <input
          type="text"
          placeholder="Search contacts..."
          className="p-2 border border-gray-300 rounded-lg w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleAddContact}
          className="lg:ml-4 mt-2 w-full lg:w-48 py-2 lg:px-4 bg-blue-500 text-white rounded-lg"
        >
          Add Contact
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={handleEditContact}
              onDelete={handleDeleteContact}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No contacts found
          </p>
        )}
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSaveContact={handleSaveContact}
        contact={editContact}
      />
    </div>
  );
};

export default Contacts;
