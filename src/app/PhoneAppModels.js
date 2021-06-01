// PhoneAppModels.js

class PhoneAppModels {
    constructor(app) {
        this.app = app;
        this.phones = [];           // fill via async request for JSON file
        this.phoneDetail = null;
    }

    // .name .age etc
    sortPhonesByProp(prop) {
        console.log('sortPhonesByProp: ' + prop);
        this.phones.sort((a, b) => {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;            
        });
    }

}

export default PhoneAppModels;
