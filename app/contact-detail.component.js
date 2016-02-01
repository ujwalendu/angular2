System.register([], function(exports_1) {
    var ContactDetail;
    return {
        setters:[],
        execute: function() {
            ContactDetail = (function () {
                function ContactDetail(name, email, phone) {
                    this.name = name;
                    this.email = email;
                    this.phone = phone;
                }
                ContactDetail.prototype.greetedName = function () {
                    return "Hello " + this.name;
                };
                return ContactDetail;
            })();
            exports_1("ContactDetail", ContactDetail);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDb250YWN0RGV0YWlsIiwiQ29udGFjdERldGFpbC5jb25zdHJ1Y3RvciIsIkNvbnRhY3REZXRhaWwuZ3JlZXRlZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBTUlBLHVCQUFZQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxLQUFLQTtvQkFDMUJDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQUVNRCxtQ0FBV0EsR0FBbEJBO29CQUNJRSxNQUFNQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQUNMRixvQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQseUNBZUMsQ0FBQSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udGFjdERldGFpbCB7XG4gICAgXG4gICAgcHVibGljIG5hbWU7XG4gICAgcHVibGljIGVtYWlsO1xuICAgIHByaXZhdGUgcGhvbmU7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSwgZW1haWwsIHBob25lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICAgICAgdGhpcy5waG9uZSA9IHBob25lO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ3JlZXRlZE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIkhlbGxvIFwiICsgdGhpcy5uYW1lO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
