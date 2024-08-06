import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next'); 
export default function ProcesoBatch() {
  const TotalProcesos = 0;
  const TotalEjecucion = 3;
  const TotalEjecutados = 4;
  const TotalError = 0;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedTab, setSelectedTab] = useState<'table' | 'welcome'>('table');

  // Función para abrir el modal y establecer el contenido
  const openModal = (content: string) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
    return ( 
      <div className='rounded-lg bg-white shadow-xl  p-5 ' >
        <p className='text-center mb-3 text-customGreen font-bold text-2xl'>Procesos Batch</p>
        <div className="grid grid-cols-1 gap-4">
            <div className='border text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105'>Total de Procesos
            <button className="bg-blue-400 text-white text-3xl h-20 w-full text-primary-foreground p-3 rounded-lg"  onClick={() => openModal('Total de Procesos')}>{`${TotalProcesos}`}</button>
            </div>
            <div className='border  text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105'> Procesos en Ejecución
            <button className="bg-yellow-400 text-white h-20 text-3xl w-full text-secondary-foreground p-3 rounded-lg" onClick={() => openModal('Procesos en Ejecución')}>{`${TotalEjecucion}`}</button>
            </div>
            <div className='border text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105'>Procesos Ejecutados
            <button className="bg-customGreen h-20 w-full text-3xl text-white text-accent-foreground p-3 rounded-lg"  onClick={() => openModal('Procesos Ejecutados')}>{`${TotalEjecutados}`}</button>
            </div>
            <div className='text-center border-2 bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105'> Procesos en Error
            <button 
              className={`bg-customGreen  w-full text-3xl text-white h-20  p-3 rounded-lg ${TotalError > 0 ? "blink" : ""}`} 
              onClick={() => openModal('Procesos con Error')}
            >
              {`${TotalError}`}
</button>
            
            </div>
        </div>
        
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información del Proceso"
        className="fixed text-black m-3 inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-70 max-w-4xl h-70 max-h-screen overflow-y-auto">
        <div className="flex mb-4">
            <button
              className={`py-2 px-4 rounded-tl-lg ${selectedTab === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setSelectedTab('table')}
            >
              Tabla
            </button>
            <button
              className={`py-2 px-4 rounded-tr-lg ${selectedTab === 'welcome' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setSelectedTab('welcome')}
            >
              Grafico
            </button>
          </div>
          {selectedTab === 'table' ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{modalContent === 'total' ? 'ATMs Totales' : modalContent === 'online' ? 'ATMs Online' : 'ATMs Offline'}</h2>
              <table className="min-w-full p-3 border-collapse border border-border shadow-lg">
              <thead>
                <tr>
                  <th className="border border-border p-2">Columna 1</th>
                  <th className="border border-border p-2">Columna 2</th>
                  <th className="border border-border p-2">Columna 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">Fila 1, Columna 1</td>
                  <td className="border border-border p-2">Fila 1, Columna 2</td>
                  <td className="border border-border p-2">Fila 1, Columna 3</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Fila 2, Columna 1</td>
                  <td className="border border-border p-2">Fila 2, Columna 2</td>
                  <td className="border border-border p-2">Fila 2, Columna 3</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Fila 3, Columna 1</td>
                  <td className="border border-border p-2">Fila 3, Columna 2</td>
                  <td className="border border-border p-2">Fila 3, Columna 3</td>
                </tr>
              </tbody>
              </table>
            </>
          ):(
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Grafico</h2>
              Logica para los graficos

            </div>
          )}
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
          >
            Cerrar
          </button>
        </div>
      </Modal>  
      </div>
    );
  }
  