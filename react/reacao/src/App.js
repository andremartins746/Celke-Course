import "./App.css";
import React, {useState, useEffect} from "react"

const App = () => {
  const [produtoID, SetProdutoID] =  useState("3")
  const [produtoNome, SetprodutoNome] = useState('')

  const buscarProduto = () => {
    console.log("procurar produdo")
    SetProdutoID(4)
    SetprodutoNome("curso react")
  }
  useEffect(() => {
    buscarProduto()
  },[produtoID])

  return(
    <>
        <p>Listar Produtos</p>

        <p>{produtoNome}</p>
      
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
