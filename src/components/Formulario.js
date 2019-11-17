import React, { Component } from 'react';

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }
    render() {
        return (
            <form>
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
                        />
                       
                    </div>
                    <div className='uk-margin' uk-margin='true'>
                        <select
                        name = 'categoria'
                        className='uk-select'
                        />
                       
                    </div>
                    <div>
                        <input type = 'submit' className='uk-button uk-button-danger' value ='Buscar'></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default Formulario;