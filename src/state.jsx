import { useEffect, useState } from "react"

export default function State(){
    const [user, setUser] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const state = {
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: 'green',
        color: '#fff'
    }
    return(
        <div style={state}>
            <h4>State:{user.length}</h4>
        </div>
    )
}