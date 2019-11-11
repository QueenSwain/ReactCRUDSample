import * as React from 'react';
import { Route } from 'react-router';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';

interface UserRecordState {
    userListData: UserListData[];
    loading: boolean;
}


//here declaring the StudentList class. And this StudentList class inherits the abstract class React.Component
// Tip: Add @types/react to package.json to fix this.state missing error
// Source : https://stackoverflow.com/questions/51090887/property-state-does-not-exist-on-type-fetchperiod

export class UserList extends React.Component<RouteComponentProps<{}>, UserRecordState> {
    //Declaring the constructor 
    constructor(props) {

        //here we are calling base class constructor using super()
        super(props);

        //here we are intializing the interface's fields using default values.
        this.state = { userListData: [], loading: true };

        //this fetch method is responsible to get all the student record using web api.
        fetch('api/User/Index')
            .then(response => response.json() as Promise<UserListData[]>)
            .then(data => {
                debugger
                this.setState({ userListData: data, loading: false });
            });

        this.FuncDelete = this.FuncDelete.bind(this);
        this.FuncEdit = this.FuncEdit.bind(this);
    }
      

    //this method will render html onto the DOM.
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderUserTable(this.state.userListData);//this renderStudentTable method will return the HTML table. This table will display all the record.
        return <div>
            <h1>User Record</h1>
            <p>
                <Link to="/addUser">Create New</Link>
            </p>
            {contents}
        </div>;
    }
    // this method will be responsible for deleting the student record.
    private FuncDelete(id: number) {
        if (!window.confirm("Do you want to delete user with this Id: " + id))
            return;
        else {
            //this fetch method will get the specific student record using student id.
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
      
    //this method will responsible for editing the specific student record.
    private FuncEdit(id: number) {
        this.props.history.push("/user/edit/" + id);
    }

    //this method will return the html table to display all the student record with edit and delete methods.
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

//here we are declaring a class which have the same properties as we have in model class.
export class UserListData {
    userId: number = 0;
    name: string = "";
    address: string = "";
    country: string = "";
    phoneNo: string = "";
}