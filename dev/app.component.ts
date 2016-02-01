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
    template: `
        <div (click)="clicked(contact)" *ngFor="#contact of getContacts()">
            <p>{{contact.greetedName()}}</p>
            <p>Email: {{contact.email}}</p>
            <p>Phone: {{contact.phone}}</p>
        </div>  
    `,
})

export class AppComponent {

    public contacts = [];
     
    public getContacts() {
        
        this.contacts.push(
            new ContactDetail("parth","parth@parth.com","9876543210")
        );
        
        // this.contacts.push(
        //     new ContactDetail("parth1","parth1@parth.com","9876543210")
        // );
        

        return this.contacts;
    }
    
    clicked(contact) {
        console.log(this.getContacts());
    }
}
