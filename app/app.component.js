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
                    if (!localStorage) {
                        throw new Error("Localstorage not found");
                    }
                    this.selectedContact = new contact_detail_component_1.ContactDetail("parth", "parth@example_abc.com", "9876543210", true);
                    this.contacts.push(this.selectedContact);
                    this.contacts.push(new contact_detail_component_1.ContactDetail("kumar", "kumar@example_abc.com", "9876543210", false));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("mahajan", "mahajan@example_abc.com", "9876543210", false));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("shanket", "shanket@example_abc.com", "9876543210", false));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("swagat", "swagat@example_abc.com", "9876543210", false));
                }
                AppComponent.prototype.clicked = function (contact) {
                    console.log(contact);
                    this.selectedContact = contact;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'dev/contact-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmNsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQVVJQTtvQkFIT0MsYUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBS2pCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDZkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxDQUFDQTtvQkFDOUNBLENBQUNBO29CQUVEQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxJQUFJQSx3Q0FBYUEsQ0FBQ0EsT0FBT0EsRUFBRUEsdUJBQXVCQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFFL0ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQ2RBLElBQUlBLENBQUNBLGVBQWVBLENBQ3ZCQSxDQUFDQTtvQkFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FDZEEsSUFBSUEsd0NBQWFBLENBQUNBLE9BQU9BLEVBQUVBLHVCQUF1QkEsRUFBRUEsWUFBWUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FDM0VBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUNkQSxJQUFJQSx3Q0FBYUEsQ0FBQ0EsU0FBU0EsRUFBRUEseUJBQXlCQSxFQUFFQSxZQUFZQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUMvRUEsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQ2RBLElBQUlBLHdDQUFhQSxDQUFDQSxTQUFTQSxFQUFFQSx5QkFBeUJBLEVBQUVBLFlBQVlBLEVBQUVBLEtBQUtBLENBQUNBLENBQy9FQSxDQUFDQTtvQkFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FDZEEsSUFBSUEsd0NBQWFBLENBQUNBLFFBQVFBLEVBQUVBLHdCQUF3QkEsRUFBRUEsWUFBWUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FDN0VBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkFFREQsOEJBQU9BLEdBQVBBLFVBQVFBLE9BQU9BO29CQUNYRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDckJBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLE9BQU9BLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBdENMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsV0FBV0EsRUFBQ0EsdUJBQXVCQTtxQkFDdENBLENBQUNBOztpQ0FvQ0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0F2Q0EsQUF1Q0NBLElBQUE7WUF2Q0QsdUNBdUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld1xufSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuXG5pbXBvcnQge1xuICBDT1JFX0RJUkVDVElWRVMsXG4gIEZPUk1fRElSRUNUSVZFU1xufSBmcm9tICdhbmd1bGFyMi9jb21tb24nXG5cbmltcG9ydCB7Q29udGFjdERldGFpbH0gZnJvbSAnLi9jb250YWN0LWRldGFpbC5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDonZGV2L2NvbnRhY3QtbGlzdC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29udGFjdHMgPSBbXTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRDb250YWN0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9jYWxzdG9yYWdlIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gbmV3IENvbnRhY3REZXRhaWwoXCJwYXJ0aFwiLCBcInBhcnRoQGV4YW1wbGVfYWJjLmNvbVwiLCBcIjk4NzY1NDMyMTBcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jb250YWN0cy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3RcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWN0cy5wdXNoKFxuICAgICAgICAgICAgbmV3IENvbnRhY3REZXRhaWwoXCJrdW1hclwiLCBcImt1bWFyQGV4YW1wbGVfYWJjLmNvbVwiLCBcIjk4NzY1NDMyMTBcIiwgZmFsc2UpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFjdHMucHVzaChcbiAgICAgICAgICAgIG5ldyBDb250YWN0RGV0YWlsKFwibWFoYWphblwiLCBcIm1haGFqYW5AZXhhbXBsZV9hYmMuY29tXCIsIFwiOTg3NjU0MzIxMFwiLCBmYWxzZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWN0cy5wdXNoKFxuICAgICAgICAgICAgbmV3IENvbnRhY3REZXRhaWwoXCJzaGFua2V0XCIsIFwic2hhbmtldEBleGFtcGxlX2FiYy5jb21cIiwgXCI5ODc2NTQzMjEwXCIsIGZhbHNlKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhY3RzLnB1c2goXG4gICAgICAgICAgICBuZXcgQ29udGFjdERldGFpbChcInN3YWdhdFwiLCBcInN3YWdhdEBleGFtcGxlX2FiYy5jb21cIiwgXCI5ODc2NTQzMjEwXCIsIGZhbHNlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsaWNrZWQoY29udGFjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
