import {Workbox} from 'workbox-window';

export default function registerSW() {
    if('production' != process.env.NODE_ENV) {
        return;
    }

    if('serviceWorker' in navigator) {
        const wb = new Workbox('sw.js');

        wb.addEventListener('installed', event => {
            var refreshing;
            if(event.isUpdate) {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
                // if (confirm(`New content is available! Click OK to refresh`)) {
                //     window.location.reload();
                // }
                // window.location.reload();
                window.alert('SW Updated!!'); 
            }
        })
        wb.register();
    }


    // function listenForWaitingServiceWorker (reg, callback) {
    //     function awaitStateChange () {
    //         reg.installing.addEventListener('statechange', function (e) {
    //             if (e.target.state === 'installed') callback(reg)
    //         })
    //     }
    //     if (!reg) return
    //     if (reg.waiting) return callback(reg)
    //     if (reg.installing) awaitStateChange()
    //     reg.addEventListener('updatefound', awaitStateChange)
    // }
    // if (navigator.serviceWorker) {
    //     navigator.serviceWorker.register('/sw.js').then(reg => {
    //         console.log('Service Worker Registered')
    //         listenForWaitingServiceWorker(wb, (serviceWorkerRegistration.waiting))
    //     })
    //     .catch(err => {
    //         console.error('Unable to register service worker.', err)
    //     })
    //     let refreshing
    //     navigator.serviceWorker.addEventListener('controllerchange', () => {
    //         if (refreshing) {
    //             return
    //         }
    //         window.location.reload()
    //         refreshing = true
    //     })
    // }


}