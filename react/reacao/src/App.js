import "./App.css";
import React, {useState} from "react"

const App = () => {


  const [nome, SetNome] = useState('')
  return(
    <>
        <p>{nome}</p>
        <button onClick={() => SetNome("andre")}>Alterar</button>
    </>
  )
}

// function App(props) {
// // 
//   const comentario = {
//     date: new Date(),
//     text: "asjdfhaskjlfbsbfisdf sdifhsd ifsidhuf sidfhsduhf sidfuhsudfhsdifhus dfihsudf sdfusdh",
//     author:{
//       name: "André Martins Pereira",
//       avatarURL: "https://placekitten.com/g/64/64"
//     }
//   }

//   return (
//     <div>
//       <h1>site </h1>
//       <Header/>
//       <Article></Article>
//       <Menu></Menu>
//       <Aside></Aside>
//       <Comment comentario = {comentario}></Comment>
//       <Footer></Footer>
//     </div>  
  // );
// }

// function Welcome(props){
//   return (
//     <>
//         <span>{props.name}</span>
//     </>
//   )
// }


// class Welcome extends React.Component{
//   render() {
//     return <span>{this.props.name}</span>
//   }
// }
export default App;
