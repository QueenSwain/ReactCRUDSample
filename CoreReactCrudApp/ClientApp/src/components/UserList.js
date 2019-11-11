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
var react_router_dom_1 = require("react-router-dom");
var UserList = /** @class */ (function (_super) {
    __extends(UserList, _super);
    function UserList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userListData: [], loading: true };
        //Get User List from DB using UserController API
        fetch('api/User/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ userListData: data, loading: false });
        });
        _this.FuncDelete = _this.FuncDelete.bind(_this);
        _this.FuncEdit = _this.FuncEdit.bind(_this);
        return _this;
    }
    //Render html onto the DOM.
    UserList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderUserTable(this.state.userListData);
        return React.createElement("div", null,
            React.createElement("h1", null, "User Record"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addUser" }, "Create New")),
            contents);
    };
    // Delete UserById
    UserList.prototype.FuncDelete = function (id) {
        var _this = this;
        if (!window.confirm("Do you want to delete user with this Id: " + id))
            return;
        else {
            fetch('api/User/Delete/' + id, {
                method: 'delete'
            }).then(function (data) {
                _this.setState({
                    userListData: _this.state.userListData.filter(function (rec) {
                        return (rec.userId != id);
                    })
                });
            });
        }
    };
    //Edit UserById
    UserList.prototype.FuncEdit = function (id) {
        this.props.history.push("/user/edit/" + id);
    };
    UserList.prototype.renderUserTable = function (userListData) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Address"),
                    React.createElement("th", null, "Country"),
                    React.createElement("th", null, "Phone No"))),
            React.createElement("tbody", null, userListData.map(function (item) {
                return React.createElement("tr", { key: item.userId },
                    React.createElement("td", null, item.name),
                    React.createElement("td", null, item.address),
                    React.createElement("td", null, item.country),
                    React.createElement("td", null, item.phoneNo),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.FuncEdit(item.userId); } }, "Edit"),
                        "|",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.FuncDelete(item.userId); } }, "Delete")));
            })));
    };
    return UserList;
}(React.Component));
exports.UserList = UserList;
//Class declaration for Model class Properties
var UserListData = /** @class */ (function () {
    function UserListData() {
        this.userId = 0;
        this.name = "";
        this.address = "";
        this.country = "";
        this.phoneNo = "";
    }
    return UserListData;
}());
exports.UserListData = UserListData;
//# sourceMappingURL=UserList.js.map