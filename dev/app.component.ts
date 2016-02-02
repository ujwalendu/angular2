import {
  Component,
  View
} from 'angular2/core'

import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
} from 'angular2/common'

import {ContactDetail} from './contact-detail.component'

@Component({
    selector: 'app',
    templateUrl:'dev/contact-list.html'
})

export class AppComponent {

    public contacts = [];
    public selectedContact;

    constructor() {

        if(!localStorage) {
            throw new Error("Localstorage not found");
        }


        this.contacts.push(
            new ContactDetail("parth", "parth@example_abc.com", "9876543210")
        );
        this.contacts.push(
            new ContactDetail("kumar", "kumar@example_abc.com", "9876543210")
        );
        this.contacts.push(
            new ContactDetail("mahajan", "mahajan@example_abc.com", "9876543210")
        );
        this.contacts.push(
            new ContactDetail("shanket", "shanket@example_abc.com", "9876543210")
        );
        this.contacts.push(
            new ContactDetail("swagat", "swagat@example_abc.com", "9876543210")
        );
    }

    clicked(contact) {
        console.log(contact);
        this.selectedContact = contact;
    }
}
