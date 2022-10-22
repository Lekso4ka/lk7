class Api {
    constructor(name) {
        this.name = name;
        this.path = "https://sb-cats.herokuapp.com/api/2/";
    }
    getCats() {
        return fetch(`${this.path}${this.name}/show`);
    }
    getCat(id) {
        return fetch(`${this.path}${this.name}/show/${id}`);
    }
    getIds() {
        return fetch(`${this.path}${this.name}/ids`);
    }
    addCat(body) {
        return fetch(`${this.path}${this.name}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    updCat(id, body) {
        return fetch(`${this.path}${this.name}/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    delCat(id) {
        return fetch(`${this.path}${this.name}/delete/${id}`, {
            method: "DELETE"
        });
    }
}