// --- Al TOCAR una notificación: abrir la app (o traerla al frente) ---
// Va ANTES de cargar Firebase para ejecutarse primero y que no se abran
// dos ventanas. Sirve para todas las notificaciones (avisos y recordatorios).
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.stopImmediatePropagation();
  const destino = self.registration.scope; // https://fiestas.realsitio.info/
  event.waitUntil((async () => {
    const ventanas = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of ventanas) {
      if (c.url.startsWith(destino) && 'focus' in c) return c.focus();
    }
    if (clients.openWindow) return clients.openWindow(destino);
  })());
});
// Service worker de Firebase Messaging para la web (avisos push).
// Debe estar en la raíz de la web: build/web/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

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
  // Si el mensaje ya trae 'notification', Firebase la muestra solo:
  // no la pintamos otra vez (evita el aviso duplicado).
  if (payload.notification) return;
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'San Luis', {
    body: n.body || '',
    icon: 'icons/Icon-192.png',
  });
});
