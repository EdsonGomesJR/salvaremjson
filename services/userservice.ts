import { apiUrl } from 'config';
import { fetchWrapper } from 'helpers';

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/users`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id: any) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params: any) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id: any, params: any) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: any) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
