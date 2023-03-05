import "./App.css";
import React from "react"
import Header from "./components/Header/index"
import Article from "./components/articles/index"
import Menu from "./components/Menu/index"
import Aside from "./components/Aside/index"
import Footer from "./components/Footer";
import Comment from "./components/Comment"

function App(props) {

  const comentario = {
    date: new Date(),
    text: "asjdfhaskjlfbsbfisdf sdifhsd ifsidhuf sidfhsduhf sidfuhsudfhsdifhus dfihsudf sdfusdh",
    author:{
      name: "André Martins Pereira",
      avatarURL: "https://placekitten.com/g/64/64"
    }
  }

  return (
    <div>
      <h1>site </h1>
      <Header/>
      <Article></Article>
      <Menu></Menu>
      <Aside></Aside>
      <Comment comentario = {comentario}></Comment>
      <Footer></Footer>
    </div>  
  );
}

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
