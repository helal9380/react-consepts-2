export default function Friend({friend}) {
    console.log(friend)
    const {name, email, phone, username} = friend;
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <span>user name: {username}</span>
            <h4>Phone: {phone}</h4>
        </div>
    )
}