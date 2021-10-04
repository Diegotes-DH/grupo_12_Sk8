// function Productos(){
//     return(
//         <div>
//             <h1>Productos</h1>
//         </div>
//     )
// }

import React, { Component } from "react";

class Productos extends Component{
    constructor(props){
        super(props);
        this.state = {
            prod: [],
            cant:'',
            
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch( e => console.log(e))
        }
    componentDidMount(){
        this.apiCall('http://localhost:3030/api/products',this.mostrarProducto)
    }
    mostrarProducto = (data) => {
            console.log('data:',data.data)
        this.setState({
            prod: data.data.map((product) => <li>{product}</li>),
            cant: data.count,
            allData: data,
        },console.log("allData:", this.state.allData))
    }
    render(){
        let contenido;
        let ids;
        let categ;
        if(this.state.prod ===''){
            contenido = <h3>cargando...</h3>
        } else{
            contenido = this.state.prod
            ids = this.state.cant
            categ = this.state.cats
    }return(
        <div>
            <h2>Cantidad de Productos: {ids}</h2>
            <h2>Productos por categoria: {categ}</h2>
            <ul>
            {console.log('hola:',this.state.allData)}
                {categ}
            </ul>
            <h2>Productos:</h2>
            {contenido.map(producto => {
                return(
                <div>
                    <h4>Nombre: {producto.props.children.name}</h4>

                    <ul>
                    <li>ID: {producto.props.children.id}</li>
                    <li>Descripcion: {producto.props.children.descript}</li>
                    <li>Precio: {producto.props.children.price}</li>
                    <li>Detalle: {producto.props.children.detail}</li>

                    </ul>
                </div>
            )})}
            
            <button>Hace click!</button>
        </div>
        )
        }
}

export default Productos;

// class Productos extends Component {
//     state = {
//         products: undefined,
//     }

//     fetchProducts = async () => {
//         let url = "http://localhost:3030/api/products";
//         let response = await fetch(url);
//         let data = await response.json();

//         this.setState({
//             products: data,
//         }, console.log("data: ",this.state.products))
        
//     }

//     componentDidMount() {
//         this.fetchProducts();
//     }

//     render () {
//         if (this.state.products == undefined) {
//             return (
//                 <p>Esperando...</p>
//                 )
//         } else {
//             console.log("Hola!");
//             return (
//                 <ul>
//                     {this.state.products.map(product => {
//                         return (
//                             <li>
//                                 {product.name}
//                             </li>
//                         )
//                     })}
//                 </ul>
//             )
//         }
//     }

// }

// 