

export default function ContactList({contacts}){

    return (
        <table>
            <thead>
                <tr>
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
                            <td>{name}</td>
                            <td>{gender}</td>
                            <td>{email}</td>
                            <td>{phone_number}</td>
                            <td><button>&#128394;</button></td>
                            <td><button>🗑</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}