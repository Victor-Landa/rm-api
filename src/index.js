import router from './routes';

// Tenemos un evwnt listener para la carga completa de la página.
window.addEventListener('load', router);
// Este listener va a escuchar las rutas en las que nos vamos moviendo
window.addEventListener('hashchange', router);