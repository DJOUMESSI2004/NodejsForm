class Messages {
    #id;
    #name;
    #surname;
    #phone;
    #email;
    #message;

    constructor(createMessage) {
        // Provide a default value or handle the case when createMessage.id is undefined
        this.#id = createMessage.id || /* default value */ 0;
        this.#name = createMessage.name;
        this.#surname = createMessage.surname;
        this.#phone = createMessage.phone;
        this.#email = createMessage.email;
        this.#message = createMessage.message;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get surname() {
        return this.#surname;
    }
    get phone() {
        return this.#phone;
    }
    get email() {
        return this.#email;
    }
    get message() {
        return this.#message;
    }
}

module.exports = Messages;
