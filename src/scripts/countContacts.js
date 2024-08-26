import getAllContacts from "./getAllFunc.js";

export const countContacts = async () => {
    const contacts = await getAllContacts();
    return contacts.length;
};

console.log(await countContacts());
