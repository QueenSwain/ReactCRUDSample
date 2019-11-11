"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UserList_1 = require("./UserList");
var AddUser = /** @class */ (function (_super) {
    __extends(AddUser, _super);
    function AddUser(props) {
        var _this = _super.call(this, props) || this;
        //providing default value to the interface
        _this.state = { title: "", loading: true, userList: new UserList_1.UserListData };
        //the userid variable will get the user id from URL.
        var userid = _this.props.match.params["userid"];
        //Checking if user id is exists then enable edit mode.
        if (userid > 0) {
            fetch('api/User/Details/' + userid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, userList: data });
            });
        }
        else {
            _this.state = { title: "Register", loading: false, userList: new UserList_1.UserListData };
        }
        _this.FuncSave = _this.FuncSave.bind(_this);
        _this.FuncCancel = _this.FuncCancel.bind(_this);
        return _this;
    }
    //Render HTML into DOM
    AddUser.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, "User"),
            React.createElement("hr", null),
            contents);
    };
    //Check UserId,Save to DB then Update and save the row data.
    AddUser.prototype.FuncSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        // PUT request for Edit employee.  
        if (this.state.userList.userId) {
            fetch('api/User/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/userList");
            });
        }
        else {
            fetch('api/User/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/userList");
            });
        }
    };
    AddUser.prototype.FuncCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/userList");
    };
    //Show UserList in UI 
    AddUser.prototype.renderCreateForm = function () {
        return (React.createElement("form", { onSubmit: this.FuncSave },
            React.createElement("div", { className: "form-group row" },
                React.createElement("input", { type: "hidden", name: "UserId", value: this.state.userList.userId })),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: " control-label col-md-12", htmlFor: "name" }, "Name"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Name", placeholder: "Enter your full name", defaultValue: this.state.userList.name, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "address" }, "Address"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "Address", placeholder: "Enter your address", defaultValue: this.state.userList.address, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Country" }, "Country"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", placeholder: "Enter country name", name: "Country", defaultValue: this.state.userList.country, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "PhoneNo" }, "Phone No"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "PhoneNo", placeholder: "Enter Phone number", defaultValue: this.state.userList.phoneNo, required: true }))),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { type: "submit", className: "btn btn-info" }, "Save"),
                "\u00A0",
                React.createElement("button", { className: "btn btn-info", onClick: this.FuncCancel }, "Cancel"))));
    };
    return AddUser;
}(React.Component));
exports.AddUser = AddUser;
//# sourceMappingURL=AddNewUser.js.map