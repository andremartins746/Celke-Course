import React from "react"

const Comment = (props) => {
    return (
        <>
            <img src={props.comentario.author.avatarURL} alt="autor"/>
        </>
    )
}

export default Comment;