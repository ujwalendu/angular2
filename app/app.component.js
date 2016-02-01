System.register(['angular2/core', './contact-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contacts = [];
                }
                AppComponent.prototype.getContacts = function () {
                    this.contacts.push(new contact_detail_component_1.ContactDetail("parth", "parth@parth.com", "9876543210"));
                    // this.contacts.push(
                    //     new ContactDetail("parth1","parth1@parth.com","9876543210")
                    // );
                    return this.contacts;
                };
                AppComponent.prototype.clicked = function (contact) {
                    console.log(this.getContacts());
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <div (click)=\"clicked(contact)\" *ngFor=\"#contact of getContacts()\">\n            <p>{{contact.greetedName()}}</p>\n            <p>Email: {{contact.email}}</p>\n            <p>Phone: {{contact.phone}}</p>\n        </div>  \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmdldENvbnRhY3RzIiwiQXBwQ29tcG9uZW50LmNsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBQTtvQkFhV0MsYUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBbUJ6QkEsQ0FBQ0E7Z0JBakJVRCxrQ0FBV0EsR0FBbEJBO29CQUVJRSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUNkQSxJQUFJQSx3Q0FBYUEsQ0FBQ0EsT0FBT0EsRUFBQ0EsaUJBQWlCQSxFQUFDQSxZQUFZQSxDQUFDQSxDQUM1REEsQ0FBQ0E7b0JBRUZBLHNCQUFzQkE7b0JBQ3RCQSxrRUFBa0VBO29CQUNsRUEsS0FBS0E7b0JBR0xBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBRURGLDhCQUFPQSxHQUFQQSxVQUFRQSxPQUFPQTtvQkFDWEcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkEvQkxIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO3dCQUNmQSxRQUFRQSxFQUFFQSxtUEFNVEE7cUJBQ0pBLENBQUNBOztpQ0F1QkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7WUFoQ0QsdUNBZ0NDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld1xufSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuXG5pbXBvcnQgeyBcbiAgQ09SRV9ESVJFQ1RJVkVTLFxuICBGT1JNX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xuICBcbmltcG9ydCB7Q29udGFjdERldGFpbH0gZnJvbSAnLi9jb250YWN0LWRldGFpbC5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IChjbGljayk9XCJjbGlja2VkKGNvbnRhY3QpXCIgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgZ2V0Q29udGFjdHMoKVwiPlxuICAgICAgICAgICAgPHA+e3tjb250YWN0LmdyZWV0ZWROYW1lKCl9fTwvcD5cbiAgICAgICAgICAgIDxwPkVtYWlsOiB7e2NvbnRhY3QuZW1haWx9fTwvcD5cbiAgICAgICAgICAgIDxwPlBob25lOiB7e2NvbnRhY3QucGhvbmV9fTwvcD5cbiAgICAgICAgPC9kaXY+ICBcbiAgICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29udGFjdHMgPSBbXTtcbiAgICAgXG4gICAgcHVibGljIGdldENvbnRhY3RzKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWN0cy5wdXNoKFxuICAgICAgICAgICAgbmV3IENvbnRhY3REZXRhaWwoXCJwYXJ0aFwiLFwicGFydGhAcGFydGguY29tXCIsXCI5ODc2NTQzMjEwXCIpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmNvbnRhY3RzLnB1c2goXG4gICAgICAgIC8vICAgICBuZXcgQ29udGFjdERldGFpbChcInBhcnRoMVwiLFwicGFydGgxQHBhcnRoLmNvbVwiLFwiOTg3NjU0MzIxMFwiKVxuICAgICAgICAvLyApO1xuICAgICAgICBcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWN0cztcbiAgICB9XG4gICAgXG4gICAgY2xpY2tlZChjb250YWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29udGFjdHMoKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
