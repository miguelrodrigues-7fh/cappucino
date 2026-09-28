  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js"; 
  //importa a função de autenticação do firebase

  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js"; 
  //importa a função de banco de dados do firebase

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD5yIoLBT1VRQeogjsT1PKt7nmgfA8Iw5A",
    authDomain: "prossaecafeina.firebaseapp.com",
    projectId: "prossaecafeina",
    storageBucket: "prossaecafeina.firebasestorage.app",
    messagingSenderId: "215053803411",
    appId: "1:215053803411:web:08dcb75704e2e7d81d1266"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //exportar a autenticação
  export const auth = getAuth(app);

 //exportar o nosso db
 export const db = getFirestore(app);
