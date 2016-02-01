export class ContactDetail {
    
    public name;
    public email;
    private phone;
    
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    
    public greetedName() {
        return "Hello " + this.name;
    }
}