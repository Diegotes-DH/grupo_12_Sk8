// function Usuarios(){
//     return(
//         <div>
//             <h1>Usuarios</h1>
//         </div>
//     )
// }
import React, { Component } from "react";

class Usuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            us: [],
            cant:''
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( e => console.log(e))
        }
    componentDidMount(){
        this.apiCall('http://localhost:3030/api/users',this.mostrarUsuario)
    }
    mostrarUsuario = (data) => {
            console.log('data:',data.data)
        this.setState({
            us: data.data.map(user => <li>{user}</li>),
            cant: data.count
        })
    }
    render(){
        let contenido;
        let ids;
        if(this.state.us ===''){
            contenido = <h3>cargando...</h3>
        } else{
            contenido = this.state.us
            ids = this.state.cant
        }return(
            <div>
                <h2>Cantidad de Usuarios: {ids}</h2>
                <h2>Usuarios:</h2>
                
                {contenido.map(usuario => {
                    return(
                    <div>
                        
                        {console.log('hola:',usuario)}
                        <h4>Nombre: {usuario.props.children.name + " " + usuario.props.children.lastname}</h4>
    
                        <ul>
                        <li>ID: {usuario.props.children.id}</li>
                        <li>Email: {usuario.props.children.email}</li>
                        <li>Detalle: {usuario.props.children.detail}</li>
    
                        </ul>
                    </div>
                )})}
                
                <button>Hace click!</button>
            </div>
            )
    // }return(<div>
    //             <h2>Cantidad de Usuarios: {ids}</h2>
    //             <h4>Usuarios:</h4>
    //             <ul>
    //             {contenido}
    //             </ul>
                
    //             <button>Hace click!</button>
    //         </div>
    //         )
        }
}


export default Usuarios