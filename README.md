# Teoria

<h1>Que es React</h1>

Virtual DOM: React utiliza un árbol de objetos de modelo de documento virtual (Virtual DOM) para representar la interfaz de usuario. Este Virtual DOM es una representación ligera de la estructura del DOM real y se actualiza de manera eficiente en función de los cambios en los datos o el estado de la aplicación.

Unidireccionalidad de los datos: React sigue el principio de unidireccionalidad de los datos, lo que significa que los datos fluyen en una sola dirección, desde el componente principal hacia sus componentes secundarios. Esto facilita el mantenimiento y la depuración de la aplicación.

JSX: JSX es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript. React utiliza JSX para definir la estructura de la interfaz de usuario de manera declarativa y más legible.

Reconciliación: React realiza un proceso de reconciliación eficiente para determinar los cambios que deben realizarse en el DOM real en función de los cambios en el Virtual DOM. Esto optimiza el rendimiento y mejora la velocidad de la aplicación.

React Router: React Router es una biblioteca popular que se utiliza junto con React para la gestión de la navegación en aplicaciones de una sola página (SPA).

```
import React from 'react';

class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
    this.incrementarContador = this.incrementarContador.bind(this);
  }

  incrementarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <h1>Mi Componente React</h1>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default MiComponente;


```
