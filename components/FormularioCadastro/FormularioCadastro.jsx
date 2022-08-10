import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component{
    constructor(props){
        super(props);
        this.titulo=""
        this.texto=""

    }
    // uso do "_", convenção de métodos como privado
    _handlerMudancaDeTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value
    }

    _handlerMudancaDoTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto)
        console.log(`Uma nova nota foi criada `+ this.titulo + this.texto)
    }


    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handlerMudancaDeTitulo.bind(this)}
                />
                <textarea
                    rows={8}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handlerMudancaDoTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );  
    }

}

export default FormularioCadastro;