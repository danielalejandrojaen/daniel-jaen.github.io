// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list. splice
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return an obj using curly braces
    return {
        //match the obj keys with the functions params
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }   
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    // let contactArr = contacts.split();
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addcontact function with param of contact
        addContact: function(contact) {
            //we want to return the push method to push the specified contact into the contacts array
            return contacts.push(contact);
        },
        //find contact func with param of fullName
        findContact: function(fullName) {
            //for contact of contacts arr
            for (let contact of contacts) {
                //if name first concated with name last === fullName
                    if (contact.nameFirst + ' ' + contact.nameLast === fullName) {
                        //return that contact, the else is implied undefined
                        return contact;
                    }
                }
            }
        ,
        //remove contact function that takes contact parameter
        removeContact: function(contact) {
            //return the shift method to remove this
            return contacts.shift(contact);
        },
        printAllContactNames: function() {
            //create a new empty string to assign the new one
            let newString = ''
            //loop for let contact of Object.values(contacts) selects the values to loop through
            for (let contact of Object.values(contacts)) {
                //assign newstring itself + the nameFirst contactenated with name last in dot notation and add the line break
                newString += contact.nameFirst + ' ' + contact.nameLast + '\n';
            }
            //return newstring with trim to remove the \n
            return newString.trim();
        }

    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
