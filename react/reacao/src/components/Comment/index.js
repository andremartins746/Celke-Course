import React, {useState, useEffect} from "react"



function Avatar (props) {
    const [dados, setDados] = useState([])
    
    useEffect(() => {

    }, [])
    return (
        <>
            <img src={props.user} alt="autor"/> <br/> <hr></hr>
        </>
    )
}


const Comment = (props) => {

    function FormaData (date) {
        return date.toLocaleDateString()
    }
    return (
        <>
            <Avatar user = {props.comentario.author.avatarURL}></Avatar>
            <span>{props.comentario.author.name}</span> <br/><br/>
            <span>{props.comentario.text}</span> <br/><br/>
            <span>{FormaData(props.comentario.date)}</span> <br/><br/>
        </>
    )
}

export default Comment;