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
                    this.contacts.push(new contact_detail_component_1.ContactDetail("parth", "parth@example_abc.com", "9876543210"));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("kumar", "kumar@example_abc.com", "9876543210"));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("mahajan", "mahajan@example_abc.com", "9876543210"));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("shanket", "shanket@example_abc.com", "9876543210"));
                    this.contacts.push(new contact_detail_component_1.ContactDetail("swagat", "swagat@example_abc.com", "9876543210"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmNsaWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQVVJQTtvQkFIT0MsYUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBS2pCQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDZkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxDQUFDQTtvQkFDOUNBLENBQUNBO29CQUdEQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUNkQSxJQUFJQSx3Q0FBYUEsQ0FBQ0EsT0FBT0EsRUFBRUEsdUJBQXVCQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUNwRUEsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQ2RBLElBQUlBLHdDQUFhQSxDQUFDQSxPQUFPQSxFQUFFQSx1QkFBdUJBLEVBQUVBLFlBQVlBLENBQUNBLENBQ3BFQSxDQUFDQTtvQkFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FDZEEsSUFBSUEsd0NBQWFBLENBQUNBLFNBQVNBLEVBQUVBLHlCQUF5QkEsRUFBRUEsWUFBWUEsQ0FBQ0EsQ0FDeEVBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUNkQSxJQUFJQSx3Q0FBYUEsQ0FBQ0EsU0FBU0EsRUFBRUEseUJBQXlCQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUN4RUEsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQ2RBLElBQUlBLHdDQUFhQSxDQUFDQSxRQUFRQSxFQUFFQSx3QkFBd0JBLEVBQUVBLFlBQVlBLENBQUNBLENBQ3RFQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURELDhCQUFPQSxHQUFQQSxVQUFRQSxPQUFPQTtvQkFDWEUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxPQUFPQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQXJDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7d0JBQ2ZBLFdBQVdBLEVBQUNBLHVCQUF1QkE7cUJBQ3RDQSxDQUFDQTs7aUNBbUNEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBdENBLEFBc0NDQSxJQUFBO1lBdENELHVDQXNDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSdcblxuaW1wb3J0IHtcbiAgQ09SRV9ESVJFQ1RJVkVTLFxuICBGT1JNX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xuXG5pbXBvcnQge0NvbnRhY3REZXRhaWx9IGZyb20gJy4vY29udGFjdC1kZXRhaWwuY29tcG9uZW50J1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdGVtcGxhdGVVcmw6J2Rldi9jb250YWN0LWxpc3QuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgcHVibGljIGNvbnRhY3RzID0gW107XG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIGlmKCFsb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvY2Fsc3RvcmFnZSBub3QgZm91bmRcIik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY29udGFjdHMucHVzaChcbiAgICAgICAgICAgIG5ldyBDb250YWN0RGV0YWlsKFwicGFydGhcIiwgXCJwYXJ0aEBleGFtcGxlX2FiYy5jb21cIiwgXCI5ODc2NTQzMjEwXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFjdHMucHVzaChcbiAgICAgICAgICAgIG5ldyBDb250YWN0RGV0YWlsKFwia3VtYXJcIiwgXCJrdW1hckBleGFtcGxlX2FiYy5jb21cIiwgXCI5ODc2NTQzMjEwXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGFjdHMucHVzaChcbiAgICAgICAgICAgIG5ldyBDb250YWN0RGV0YWlsKFwibWFoYWphblwiLCBcIm1haGFqYW5AZXhhbXBsZV9hYmMuY29tXCIsIFwiOTg3NjU0MzIxMFwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRhY3RzLnB1c2goXG4gICAgICAgICAgICBuZXcgQ29udGFjdERldGFpbChcInNoYW5rZXRcIiwgXCJzaGFua2V0QGV4YW1wbGVfYWJjLmNvbVwiLCBcIjk4NzY1NDMyMTBcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250YWN0cy5wdXNoKFxuICAgICAgICAgICAgbmV3IENvbnRhY3REZXRhaWwoXCJzd2FnYXRcIiwgXCJzd2FnYXRAZXhhbXBsZV9hYmMuY29tXCIsIFwiOTg3NjU0MzIxMFwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsaWNrZWQoY29udGFjdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWN0KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
