// JSApp.js

import PhoneAppModels from './PhoneAppModels';
import PhoneAppViews from './PhoneAppViews';
import PhoneAppServices from './PhoneAppServices';

class JSApp {
    constructor(ui) {
        this.name = 'Svelte Phones Demo';
        this.author = 'Andy Knoll - June 2021';

        this.models = new PhoneAppModels(this);
        this.views = new PhoneAppViews(this, ui);
        this.services = new PhoneAppServices(this);
    }

    // called after creating in main.js
    init() {
        this.services.fetchPhones();
        //this.services.fetchPhoneDetail('motorola-xoom-with-wi-fi');
    }

    refreshViews() {
        this.views.refreshViews();
    }


}

export default JSApp;
