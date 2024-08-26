import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllFunc.js';
import updateContacts from './updateContacts.js';

export const addOneContact = async () => {
    const contactsList = await getAllContacts();   
    const newContact = createFakeContact();
    const contacts = [...contactsList, newContact];
    await updateContacts(contacts);
};

addOneContact();
