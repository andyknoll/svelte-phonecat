// PhoneAppServices.js

const PHONE_PATH = 'phone-data/';
const PHONES_DATA_PATH = PHONE_PATH + 'all-phones-data.json';

import { PHONE_LIST, PHONE_DETAIL } from './PhoneAppViews';

class PhoneAppServices {
    constructor(app) {
        this.app = app;
    }

    // API calls
    async fetchPhones() {
        const resp = await fetch(PHONES_DATA_PATH);
        this.app.models.phones = await resp.json();
        this.app.models.sortPhonesByProp('tattleRating');
        this.app.views.setCurrentView(PHONE_LIST);
    }

    // e.g. 'motorola-xoom-with-wi-fi.json'
    async fetchPhoneDetail(id) {
        const resp = await fetch(PHONE_PATH + id + '.json');
        this.app.models.phoneDetail = await resp.json();
        this.app.views.setCurrentView(PHONE_DETAIL);
    }

}

export default PhoneAppServices;
