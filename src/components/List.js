// this is List
// it also includes delete operator



import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom'

function List(){

    let history = useNavigate();

    const handleEdit = (name, id , age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id',id);
    }

    //DELETE FUNCTION

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                                Employees.map((item) =>{
                                    return(
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                <Button onClick={(e) => handleEdit(e.target.value) }>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={(e) => handleDelete(e.target.value) }>DELETE</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : "No Data"
                        }   
                    </tbody>

                </Table>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default List;