class StorageTool {
    constructor() {
        this.storage = localStorage;
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        const data = this.storage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    remove(key) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }
}

export default new StorageTool();
