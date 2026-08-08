// Service worker de Firebase Messaging para la web (avisos push).
// Debe estar en la raíz de la web: build/web/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Blindaje anti-caché: cuando hay un service worker nuevo, se activa al
// instante y toma el control de las pestañas abiertas, sin esperar. Así la
// gente ve la última versión sin tener que reinstalar.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

firebase.initializeApp({
  apiKey: "AIzaSyBf0Kb00KVWfMLnDt0vqC-1pDs9MpTEzdk",
  authDomain: "san-luis-38158.firebaseapp.com",
  projectId: "san-luis-38158",
  storageBucket: "san-luis-38158.firebasestorage.app",
  messagingSenderId: "689925278566",
  appId: "1:689925278566:web:a1a175c569ecca7342d6a7"
});

const messaging = firebase.messaging();

// Aviso recibido con la web cerrada / en segundo plano
messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'San Luis', {
    body: n.body || '',
    icon: 'icons/Icon-192.png',
  });
});
