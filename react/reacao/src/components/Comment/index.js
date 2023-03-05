import React from "react"

const Comment = (props) => {

    function FormaData (date) {
        return date.toLocaleDateString()
    }
    return (
        <>
            <img src={props.comentario.author.avatarURL} alt="autor"/> <br/> <hr></hr>
            <span>{props.comentario.author.name}</span> <br/><br/>
            <span>{props.comentario.text}</span> <br/><br/>
            <span>{FormaData(props.comentario.date)}</span> <br/><br/>
        </>
    )
}

export default Comment;