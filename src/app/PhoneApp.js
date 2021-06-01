// PhoneApp.js

import PhoneAppModels from './PhoneAppModels';
import PhoneAppViews from './PhoneAppViews';
import PhoneAppServices from './PhoneAppServices';

class PhoneApp {
    constructor(ui) {
        this.name = 'Svelte Ancient Phones Demo';
        this.author = 'Andy Knoll - June 2021';

        this.models = new PhoneAppModels(this);
        this.views = new PhoneAppViews(this, ui);
        this.services = new PhoneAppServices(this);
    }

    // called manually after creating in main.js
    init() {
        this.services.fetchPhones();
    }

    refreshViews() {
        this.views.refreshViews();
    }

}

export default PhoneApp;
