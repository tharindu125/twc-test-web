import { Link } from "react-router-dom"

export default function ContactList({contacts,deleteContact}){


    return (
        // contact data table
        <table>
            <thead>
                <tr className=" text-[22px]">
                    <th></th>
                    <th >fullname</th>
                    <th >gender</th>
                    <th >email</th>
                    <th >phone number</th>
                    <th ></th>
                    <th ></th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts && contacts.map(({_id,name,gender,email,phone_number})=>(
                        <tr key={_id} id={_id} >
                            <td >&#128100;</td>
                            <td className="px-5 py-[6px] text-lg">{name}</td>
                            <td className="px-8 text-lg">{gender}</td>
                            <td className="px-8 text-lg">{email}</td>
                            <td className="px-8 text-lg">{phone_number}</td>
                            <td className="px-5 text-lg"><Link to={`/Edit/${_id}`}>&#128394;</Link></td>
                            <td className="px-5 text-lg"><button onClick={()=>{deleteContact(_id)}}>🗑</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}