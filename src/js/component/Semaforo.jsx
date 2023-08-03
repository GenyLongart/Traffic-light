import React from 'react'

const Semaforo = () => {
  return (
    <div className='contenedor'>
        <div className="barra"></div>
        <div className="marco">
            <div className="rojo resplandor"></div>
            <div className="amarillo"></div>
            <div className="verde"></div>
        </div>
    </div>
  )
}

export default Semaforo