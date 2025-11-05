const firebaseConfig = {
  apiKey: 'AIzaSyCaI-CIFPv3ovBkePn1hBWR8eCXNGRgRuY',
  authDomain: 'undangan-digital-e7dcb.firebaseapp.com',
  databaseURL: 'https://undangan-digital-e7dcb-default-rtdb.firebaseio.com',
  projectId: 'undangan-digital-e7dcb',
  storageBucket: 'undangan-digital-e7dcb.firebasestorage.app',
  messagingSenderId: '81523782504',
  appId: '1:81523782504:web:b6af00afff24e9efd79cdd',
  measurementId: 'G-48PWYCGL9V',
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);
