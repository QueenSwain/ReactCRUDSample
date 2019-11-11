import * as React from 'react';
import { Route } from 'react-router';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import { UserListData } from './UserList';

interface AddUserRecordState {
    title: string;
    loading: boolean;
    userList: UserListData;
}


export class AddUser extends React.Component<RouteComponentProps<{}>, AddUserRecordState> {
    constructor(props) {
        super(props);
        //providing default value to the interface
        this.state = { title: "", loading: true, userList: new UserListData};

        //the userid variable will get the user id from URL.
        var userid = this.props.match.params["userid"];

        //Checking if user id is exists then enable edit mode.
        if (userid > 0) {
            fetch('api/User/Details/' + userid)
                .then(response => response.json() as Promise<UserListData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, userList: data });
                });
        }
        else {
            this.state = { title: "Register", loading: false, userList: new UserListData };
        }

        this.FuncSave = this.FuncSave.bind(this);
        this.FuncCancel = this.FuncCancel.bind(this);
    }
    //Render HTML into DOM
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            <h3>User</h3>
            <hr />
            {contents}
        </div>;
    }



    //Check UserId,Save to DB then Update and save the row data.
    private FuncSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT request for Edit employee.  
        if (this.state.userList.userId) {
            fetch('api/User/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/userList");
                })
        }
        else {
            fetch('api/User/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/userList");
                })
        }
    }


    private FuncCancel(e: any) {
        e.preventDefault();
        this.props.history.push("/userList");
    }

    //Show UserList in UI 
    private renderCreateForm() {
        return (
            <form onSubmit={this.FuncSave} >
                <div className="form-group row" >
                    <input type="hidden" name="UserId" value={this.state.userList.userId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Name" placeholder="Enter your full name" defaultValue={this.state.userList.name} required />
                    </div>
                </div >

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="address" >Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Address" placeholder="Enter your address" defaultValue={this.state.userList.address} required />
                    </div>
                </div>


                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Country" >Country</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" placeholder="Enter country name" name="Country" defaultValue={this.state.userList.country} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="PhoneNo" >Phone No</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="PhoneNo" placeholder="Enter Phone number" defaultValue={this.state.userList.phoneNo} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-info">Save</button>&nbsp;
                    <button className="btn btn-info" onClick={this.FuncCancel}>Cancel</button>
                    
                </div >
            </form >
        )
    }
}