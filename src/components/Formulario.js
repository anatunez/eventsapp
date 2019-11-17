import React, { Component } from 'react';
import {CategoriasConsumer} from '../context/CategoriasContext';
import {EventosConsumer} from '../context/EventosContext';

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }

    //al poner un evento o categoria
    obtenerEvento= (e)=>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    render() {
        return (
            <EventosConsumer>
            {(value)=>{
                
            return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                value.obtenerEventos(this.state)
            }}>
                <fieldset className= 'uk-fieldset uk-margin'>
                    <legend className = 'uk-legend uk-text-center'>
                        Buscar evento por Nombre o Categoria
                    </legend>
                </fieldset>
                <div className='uk-column-1-3@m uk-margin'>
                    <div className='uk-margin' uk-margin='true'>
                        <input
                        name = 'nombre'
                        className='uk-input'
                        type = 'text'
                        placeholder = 'Nombre de evento o Ciudad'
                        onChange = {this.obtenerEvento}
                        />
                       
                    </div>
                    <div className='uk-margin' uk-margin='true'>
                        <select
                        name = 'categoria'
                        className='uk-select'
                        onChange = {this.obtenerEvento}
                        >
                            <option value=''>--Seleccionar categoria--</option>
                            <CategoriasConsumer>
                                {(value)=>{
                                    return (
                                        value.categorias.map(categoria=>(
                                            <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                {categoria.name_localized}
                                            </option>
                                        ))
                                    )
                                }}
                            </CategoriasConsumer>
                        </select>
                       
                    </div>
                    <div>
                        <input type = 'submit' className='uk-button uk-button-danger' value ='Buscar'></input>
                    </div>
                </div>
            </form>
            )}}
            </EventosConsumer>
        );
    }
}

export default Formulario;