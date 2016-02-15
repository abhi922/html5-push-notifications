'use strict';
// TODO

if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('/html5-push-notifications/app/sw.js').then(function () {
        return navigator.serviceWorker.ready;
    }).then(function (reg) {
        console.log('Service Worker is ready :^)', reg);
        reg.pushManager.subscribe({
           userVisibleOnly: true 
        })
        .then(function(sub) {
           console.log('endpoint:', sub.endpoint);
           console.log('key:', sub.getKey('p256dh'));
           document.getElementById('endpoint').textContent = sub.endpoint; 
        });
    }).catch(function (error) {
        document.getElementById('endpoint').textContent = error;
        console.log('Service Worker error :^(', error);
    });
} else {
    alert('error');   
}