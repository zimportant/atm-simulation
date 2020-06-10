import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:9000/api/v1';
export const BANKING_USER_ID = '5ee0cee79806167870caa2f0';
export const BANKING_BUDGET_ID = '5ee0cee79806167870caa2f1';

export function getToken() {
  return window.localStorage.getItem('TOKEN') ?? '';
}

export function getUserId() {
  return window.localStorage.getItem('USERID') ?? '';
}

export function getBudgetId() {
  return window.localStorage.getItem('BUDGETID') ?? '';
}

export function getUsername() {
  return window.localStorage.getItem('USERNAME') ?? '';
}

export function setToken(_userId: String, _token: String) {
  window.localStorage.setItem('ISLOGIN', 'true');
  window.localStorage.setItem('USERID', `${_userId}`);
  window.localStorage.setItem('TOKEN', `${_token}`);
}

export function setBudgetId(_budgetId: String) {
  window.localStorage.setItem('BUDGETID', `${_budgetId}`);
}

export function login(username: String, password: String) {
  window.localStorage.setItem('USERNAME', `${username}`);
  return axios.post(`${BASE_URL}/auth/login`, {
    username: username,
    password: password
  });
}

export function getUserInfo(userId: String) {
  return axios.get(`${BASE_URL}/user/${userId}`, { headers: { 'x-access-token': getToken() } });
}

export function getBudgetInfo(budgetId: String) {
  return axios.get(`${BASE_URL}/budget/${budgetId}`, { headers: { 'x-access-token': getToken() } });
}

export function transferMoney(budgetFromId: String, budgetToId: String, amount: Number) {
  return axios.post(
    `${BASE_URL}/transaction/transfer`,
    { sender: budgetFromId, receiver: budgetToId, receiverType: 'balance', amount: amount },
    { headers: { 'x-access-token': getToken() } }
  );
}

export function transactionHistory(userId: String) {
  return axios.get(`${BASE_URL}/transaction/history/${userId}`, {
    headers: { 'x-access-token': getToken() }
  });
}

export function updatePassword(username: String, password: String, newPassword: String) {
  return axios.post(`${BASE_URL}/auth/password`, {
    username: username,
    password: password,
    newpassword: newPassword
  });
}
