// PhoneAppViews.js

export const PHONE_LIST = 0;
export const PHONE_DETAIL = 1;

class PhoneAppViews {
    constructor(app, ui) {
        this.app = app;
        this.ui = ui;
        this.currentView = PHONE_LIST;      // fake routing
        this.filterStr = "";
    }

    refreshViews() {
        this.ui.refresh(this.app);
    }

    setCurrentView(viewId) {
        this.currentView = viewId;
        this.refreshViews();
    }

    setFilterStr(str) {
        this.filterStr = str;
        this.refreshViews();
    }

}

export default PhoneAppViews;
