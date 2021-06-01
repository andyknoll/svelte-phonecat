// main.js

import App from './components/App.svelte';
import PhoneApp from './app/PhoneApp';

// this is the Svelte <App> root component
const root = new App({
	target: document.body
});
console.log("created Svelte root component");
console.log(root);

// this is the JS app object - pass UI root comp
const app = new PhoneApp(root);
app.init();
console.log("created JS PhoneApp");
console.log(app);
