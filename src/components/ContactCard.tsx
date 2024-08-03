import React from "react";
import { ContactCardProps } from "../schema/contact";
import Avatar from "react-avatar";
import { TbUserEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-md ${
        contact.isActive ? "bg-green-50" : "bg-red-50"
      }`}
    >
      <div className="flex items-center mb-4">
        <Avatar name={`${contact.firstName} ${contact.lastName}`} size="40" round={true} className="mr-4"/>
        <div>
          <h2 className="text-xl font-semibold">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="text-sm text-gray-600">
            Status:{" "}
            <span
              className={contact.isActive ? "text-green-500" : "text-red-500"}
            >
              {contact.isActive ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          className="py-1 px-3 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => onEdit(contact)}
        >
          <TbUserEdit />
        </button>
        <button
          className="py-1 px-3 rounded bg-red-500 text-white hover:bg-red-600"
          onClick={() => onDelete(contact.id)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
