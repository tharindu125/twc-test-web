import { Link } from "react-router-dom"

export default function ContactList({contacts,deleteContact}){


    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>fullname</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phone number</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts && contacts.map(({_id,name,gender,email,phone_number})=>(
                        <tr key={_id} id={_id}>
                            <td>&#128100</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                            <td>{email}</td>
                            <td>{phone_number}</td>
                            <td><Link to={`/Edit/${_id}`}>&#128394;</Link></td>
                            <td><button onClick={()=>{deleteContact(_id)}}>🗑</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}