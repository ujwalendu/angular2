System.register([], function(exports_1) {
    var ContactDetail;
    return {
        setters:[],
        execute: function() {
            ContactDetail = (function () {
                function ContactDetail(name, email, phone, selected) {
                    this.name = name;
                    this.email = email;
                    this.phone = phone;
                    this.selected = selected;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDb250YWN0RGV0YWlsIiwiQ29udGFjdERldGFpbC5jb25zdHJ1Y3RvciIsIkNvbnRhY3REZXRhaWwuZ3JlZXRlZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBTUlBLHVCQUFZQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxLQUFLQSxFQUFFQSxRQUFRQTtvQkFDcENDLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO29CQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDbkJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRU1ELG1DQUFXQSxHQUFsQkE7b0JBQ0lFLE1BQU1BLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBQ0xGLG9CQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQWhCRCx5Q0FnQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udGFjdERldGFpbCB7XG5cbiAgICBwdWJsaWMgbmFtZTtcbiAgICBwdWJsaWMgZW1haWw7XG4gICAgcHJpdmF0ZSBwaG9uZTtcbiAgICBwcml2YXRlIHNlbGVjdGVkO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGVtYWlsLCBwaG9uZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLnBob25lID0gcGhvbmU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JlZXRlZE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBcIkhlbGxvIFwiICsgdGhpcy5uYW1lO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
