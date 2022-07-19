import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAskrSJzVpe21NCSsDTjGhXKddbA8OQTLA',
  authDomain: 'my-ecommerce-app-69055.firebaseapp.com',
  projectId: 'my-ecommerce-app-69055',
  storageBucket: 'my-ecommerce-app-69055.appspot.com',
  messagingSenderId: '542147650377',
  appId: '1:542147650377:web:302e7bd882afc8bfe13098',
  measurementId: 'G-170ZSCZ2DN',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
