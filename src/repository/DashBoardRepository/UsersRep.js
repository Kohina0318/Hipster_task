import { SERVER_URL } from "../SERVER_URL";

const getUsers = async (offset,limit) => {
  try {
    const response = await fetch(`${await SERVER_URL()}/v1/sample-data/users?offset=${offset}&limit=${limit}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8',
       },
    });
    const result = await response.json();

      return result;
   } catch (err) {
    console.log('error in getUsers...in UsersRep ', err);
  }
};


export {  getUsers };
