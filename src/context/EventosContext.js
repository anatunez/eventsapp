import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    token = process.env.REACT_APP_PRIVATE_TOKEN;
    state={
        eventos:[]
    }
    
    obtenerEventos = async(busqueda) =>{
        let url = `https://www.eventbriteapi.com/v3/events/search?q=${busqueda.nombre}&categories=${busqueda.categoria}$sort_by=date&token=${this.token}&locale=es_ES`;

        let eventos = await axios.get(url);
        console.log(eventos);
        this.setState({
            eventos : eventos.data.events
        })
    }

    render() {
        return (
            <EventosContext.Provider
                value = {{
                    eventos : this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }
}

export default EventosProvider;