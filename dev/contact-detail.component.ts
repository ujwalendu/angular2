export class ContactDetail {

    public name;
    public email;
    private phone;
    private selected;
    constructor(name, email, phone, selected) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.selected = selected;
    }

    public greetedName() {
        return "Hello " + this.name;
    }
}
