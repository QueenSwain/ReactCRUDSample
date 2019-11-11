import * as React from 'react';
import { Route } from 'react-router';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';

interface UserRecordState {
    userListData: UserListData[];
    loading: boolean;
}


export class UserList extends React.Component<RouteComponentProps<{}>, UserRecordState> {


    constructor(props) {

         super(props);
         this.state = { userListData: [], loading: true };

        //Get User List from DB using UserController API
        fetch('api/User/Index')
            .then(response => response.json() as Promise<UserListData[]>)
            .then(data => {
                this.setState({ userListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }
      

    //Render html onto the DOM.
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderUserTable(this.state.userListData);
        return <div>
            <h1>User Record</h1>
            <p>
                <Link to="/addUser">Create New</Link>
            </p>
            {contents}
        </div>;
    }
    // Delete UserById
    private FuncDelete(id: number) {
        if (!window.confirm("Do you want to delete user with this Id: " + id))
            return;
        else {
             fetch('api/User/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        userListData: this.state.userListData.filter((rec) => {
                            return (rec.userId != id);
                        })
                    });
            });
        }
    }
      
    //Edit UserById
    private FuncEdit(id: number) {
        this.props.history.push("/user/edit/" + id);
    }

    private renderUserTable(userListData: UserListData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Phone No</th>
                </tr>
            </thead>
            <tbody>
                {userListData.map(item =>
                    <tr key={item.userId}>
                        <td >{item.name}</td>
                        <td >{item.address}</td>
                        <td >{item.country}</td>
                        <td >{item.phoneNo}</td>
                        <td >
                            <a className="action" onClick={(id) => this.FuncEdit(item.userId)}>Edit</a>|
                            <a className="action" onClick={(id) => this.FuncDelete(item.userId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

//Class declaration for Model class Properties
export class UserListData {
    userId: number = 0;
    name: string = "";
    address: string = "";
    country: string = "";
    phoneNo: string = "";
}