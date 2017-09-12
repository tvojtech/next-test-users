import request from 'superagent';
import {normalize, schema} from 'normalizr';
import {executeRequest} from './utils';

export const companySchema = new schema.Entity('companies', {}, {idAttribute: 'name'});
export const userSchema = new schema.Entity('users', {
  company: companySchema
});

export const listUsers = () => executeRequest(request.get('https://jsonplaceholder.typicode.com/users'))
  // .then(users => normalize(users, [userSchema]))

export const getUser = id => executeRequest(request.get(`https://jsonplaceholder.typicode.com/users/${id}`));
