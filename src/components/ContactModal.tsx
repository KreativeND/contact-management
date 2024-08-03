import React, { useState, useEffect } from "react";
import { Contact, ContactModalProps } from "../schema/contact";
import ReactModal from "react-modal";

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onRequestClose,
  onSaveContact,
  contact,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setIsActive(contact.isActive);
    } else {
      setFirstName("");
      setLastName("");
      setIsActive(true);
    }
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: contact ? contact.id : Date.now(),
      firstName,
      lastName,
      isActive,
    };
    onSaveContact(newContact);
    onRequestClose();

    setFirstName("");
    setLastName("");
    setIsActive(true);
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contact ? "Edit Contact" : "Add New Contact"}
      className="w-full max-w-md mx-auto my-10 p-4 bg-white shadow-lg rounded-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-semibold mb-4">
        {contact ? "Edit Contact" : "Add New Contact"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="mr-2"
            />
            Active
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onRequestClose}
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg"
          >
            {contact ? "Save Changes" : "Add Contact"}
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default ContactModal;
