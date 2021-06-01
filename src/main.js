// main.js

import App from './components/App.svelte';
import JSApp from './app/JSApp';

// this is the Svelte <App> component
const root = new App({
	target: document.body
});

// this is the JS app object - pass UI root comp
const jsApp = new JSApp(root);
jsApp.init();
