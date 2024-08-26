import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllFunc.js';
import updateContacts from './updateContacts.js';



const generateContacts = async (number) => {
    const contactsList = await getAllContacts();    
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const contacts = [...contactsList, ...newContacts];
    await updateContacts(contacts);    
};

generateContacts(5);
