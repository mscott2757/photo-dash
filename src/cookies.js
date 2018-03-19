import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function setTestUser() {
  cookies.set('userId', '5aaa4da1978b9429fffe0579');
}

export function setUser({ _id }) {
  cookies.set('userId', _id);
}

export function getUser() {
  return cookies.get('userId');
}

export function clearUser() {
  cookies.remove('userId');
}
