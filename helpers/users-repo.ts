
import fs from 'fs';

 let users = require('data/users.json');

 type UserProps = { 
    id?: number;
    title: string; 
    firstName: string; 
    lastName: string; 
    email: string; 
    role: string;
   password: string;
   dateCreated?:  string;
   dateUpdated?: string;
    }

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


function getAll()  {
    return users ;
}

function getById(id: any) {
    return users.find((x: { id: { toString: () => string; }; }) => x.id.toString() === id.toString());
}

function create({id, 
    title , firstName, 
    lastName, email, 
    role, password, 
    dateCreated, dateUpdated 
}: UserProps ) {
    const user = { title, firstName, lastName, email, role, password, id, dateUpdated, dateCreated };
 
    // validate
    if (users.find((x: { email: any; }) => x.email === user.email))
        throw `User with the email ${user.email} already exists`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map((x: { id: any; }) => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id: { toString: () => any; }, { title, firstName, lastName, email, role, password }: any) {
    const params = { title, firstName, lastName, email, role, password };
    const user = users.find((x: { id: { toString: () => any; }; }) => x.id.toString() === id.toString());

    // validate
    if (params.email !== user.email && users.find((x: { email: any; }) => x.email === params.email))
        throw `User with the email ${params.email} already exists`;

    // only update password if entered
    if (!params.password) {
        delete params.password;
    }

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id: { toString: () => any; }) {
    // filter out deleted user and save
    users = users.filter((x: { id: { toString: () => any; }; }) => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}