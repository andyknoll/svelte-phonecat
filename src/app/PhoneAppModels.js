// PhoneAppModels.js

class PhoneAppModels {
    constructor(app) {
        this.app = app;
        this.phones = [];           // fill via async request for JSON file
        this.phoneDetail = null;
    }

    // .name .age etc
    sortPhonesByProp(prop) {
        this.phones.sort((a, b) => {
            // name sorts were not working without doing this!
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;            
        });
    }

}

export default PhoneAppModels;
