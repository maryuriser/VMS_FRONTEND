import React from 'react'


function App (){
  return(
    <div className='home_page'>
      <div className='home_log'>
        <img
          src={require('../images/home_log.png')}
          alt='VMS'
        />
      </div>
      <div className='title'><h1>TIPOS DE VEHICULOS</h1></div>
      <div className='vehicles_content'>
        <div className='vehicle'>
          <div className='title2'><h3>Agricola</h3></div>
          <div className='img'>
            <img
              src={require('../images/agricola.png')}
              alt='Vehiculo Agricola'
            />
          </div>
        </div>
        <div className='vehicle'>
          <div className='title2'><h3>Carga</h3></div>
          <div className='img'>
            <img
              src={require('../images/carga.jpg')}
              alt='Vehiculo De Carga'
            />
          </div>
        </div>
        <div className='vehicle'>
          <div className='title2'><h3>Construcción</h3></div>
          <div className='img'>
            <img
              src={require('../images/construccion.jpg')}
              alt='Vehiculo De Construccion'
            />
          </div>
        </div>
        <div className='vehicle'>
          <div className='title2'><h3>Transporte</h3></div>
          <div className='img'>
            <img
              src={require('../images/transporte.png')}
              alt='Vehiculo Transporte'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;