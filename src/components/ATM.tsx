import React, { useState } from 'react';
import Modal from 'react-modal';

interface ATM {
  id: number;
  errorType: string;
  city: string;
  office: string;
  status: 'Online' | 'Offline';
}

const ATM: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalContent, setModalContent] = useState('');
  const [modalContent, setModalContent] = useState<'total' | 'online' | 'offline'>('total');
  const [selectedATM, setSelectedATM] = useState(null);
  const [selectedCity, setSelectedCity] = useState<string>('');

  const atms: ATM[] = [
    { id: 1, errorType: 'Error de conexión', city: 'Quito', office: 'Oficina Central', status: 'Offline' },
    { id: 2, errorType: 'Falla de hardware', city: 'Guayaquil', office: 'Sucursal Norte', status: 'Offline' },
    { id: 3, errorType: 'Error de software', city: 'Cuenca', office: 'Sucursal Sur',status: 'Offline'  },
    { id: 4, errorType: 'Error de Monitor', city: 'Loja', office: 'Sucursal Sur', status: 'Offline'  },
    { id: 5, errorType: 'Error de conexión', city: 'Quito', office: 'Sucursal Sur', status: 'Offline'  },
    { id: 6, errorType: 'Error de software', city: 'Manta', office: 'Sucursal Sur', status: 'Offline'  },
    { id: 7, errorType: 'Error de software', city: 'Manta', office: 'Sucursal Sur', status: 'Online'  },
    { id: 8, errorType: 'Error de software', city: 'Cuenca', office: 'Sucursal Sur', status: 'Online'  },
    { id: 9, errorType: 'Sin Errores', city: 'Quito', office: 'Sucursal Sur', status: 'Online'  },
  ]
  
  const countStatuses = (filteredATMs: ATM[]) => {
    return filteredATMs.reduce(
      (counts, atm) => {
        counts.total += 1;
        if (atm.status === 'Online') {
          counts.online += 1;
        } else if (atm.status === 'Offline') {
          counts.offline += 1;
        }
        return counts;
      },
      { online: 0, offline: 0, total: 0 }
    );
  };

  const filteredATMs = selectedCity ? atms.filter(atm => atm.city === selectedCity) : atms;
  const counts = countStatuses(filteredATMs); // 3. Contar los estados de los ATMs filtrados

  const offlineATMs = atms.filter(atm => atm.status === 'Offline');
  
  const openModal = (content: 'total' | 'online' | 'offline') => {
    setModalContent(content);
    setModalIsOpen(true);
  };
  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  
  };
  const getFilteredATMs = () => {
    switch (modalContent) {
      case 'online':
        return filteredATMs.filter(atm => atm.status === 'Online');
      case 'offline':
        return filteredATMs.filter(atm => atm.status === 'Offline');
      default:
        return filteredATMs;
    }
  };
  return (
    <div>
      <p className='text-center mb-3 text-customGreen font-bold text-2xl'>Estados ATM</p>
      <div className="bg-card  p-4 rounded-lg shadow-md bg-customGreen  border-l-4 border-l-customLima">
        <label className="block text-sm text-white font-bold text-card-foreground  mb-2 ">
          Filtrar:
        </label>
        <select
          id="filter"
          name="filter"
          className="block w-full py-2 px-3 pt-2 border border-input rounded-md bg-input text-black"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Seleccione una ciudad</option>
          <option value="Quito">Quito</option>
          <option value="Guayaquil">Guayaquil</option>
          <option value="Cuenca">Cuenca</option>
          <option value="Machala">Machala</option>
          <option value="Ambato">Ambato</option>
          <option value="Loja">Loja</option>
          <option value="Manta">Manta</option>
          <option value="Portoviejo">Portoviejo</option>
          <option value="Santo Domingo">Santo Domingo</option>
          <option value="Riobamba">Riobamba</option>
          <option value="Ibarra">Ibarra</option>
          <option value="Esmeraldas">Esmeraldas</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 pt-5">
        <div className='flex transition-transform transform hover:scale-105 border-2  rounded-lg border-lime-600'>
          <div>
          <button className="  flex gap-4 h-24 bg-customGreen text-black text-left p-4 rounded-l-lg shadow-md justify-center items-center"onClick={() => openModal('total')}>
          <h2 className="text-lg text-white  font-semibold mb-2 ">ATMs Totales</h2>
          </button>
          </div>
          <div className='h-24 bg-white rounded-r-lg w-32 text-center flex flex-col items-center justify-center'>
          <div className="relative w-20 h-20 text-center justify-center items-center ">
            <svg className="absolute inset-0 text-center justify-center items-center" viewBox="0 0 100 100">
              <circle  cx="50" cy="50" r="45" stroke="#64B5F6" stroke-width="10" fill="none" />
            </svg>
            <span className="absolute inset-0 flex  items-center justify-center text-3xl font-bold text-customGray">{counts.total}</span>
          </div>
          </div>
          
        </div >
        <div className='flex transition-transform transform hover:scale-105 border-2  rounded-lg border-lime-600'>
          <div>
          <button className="flex gap-4 h-24 bg-customGreen  text-black text-left p-4 rounded-l-lg shadow-md justify-center items-center" onClick={() => openModal('online')}>
          <h2 className="text-lg text-white font-semibold mb-2 ">ATMs   Online</h2>
          
          </button>
          </div>
          <div className='h-24 bg-white rounded-r-lg w-32 text-center flex flex-col items-center justify-center'>
          <div className="relative w-20 h-20 text-center justify-center items-center ">
            <svg className="absolute inset-0 text-center justify-center items-center " viewBox="0 0 100 100">
              <circle  cx="50" cy="50" r="45" stroke="#40D47E" stroke-width="10" fill="none" />
            </svg>
            <span className="absolute inset-0 flex  items-center justify-center text-3xl font-bold text-customGray">{counts.online}</span>
          </div>
          </div>
          
        </div>
        <div className='flex transition-transform transform hover:scale-105 border-2  rounded-lg border-lime-600'>
          <div >
          <button className="flex gap-4 h-24 bg-customGreen  text-black text-left p-4 rounded-l-lg shadow-md justify-center items-center" onClick={() => openModal('offline')}>
          <h2 className="text-lg text-white font-semibold mb-2 ">ATMs Offline</h2>
          
          </button>
          </div>
          <div className='h-24 bg-white rounded-r-lg w-32 text-center flex flex-col items-center justify-center '>
          <div className="relative w-20 h-20 text-center justify-center items-center ">
            <svg className="absolute inset-0 text-center justify-center items-center" viewBox="0 0 100 100">
              <circle  className={counts.offline > 0 ? "blink-border" : ""} cx="50" cy="50" r="45" stroke="#40D47E"  stroke-width="10" fill="none" />
            </svg>
            <span className="absolute inset-0 flex  items-center justify-center text-3xl font-bold text-black">{counts.offline}</span>
          </div>
          </div>
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
          <h2 className="text-xl font-semibold mb-4">{modalContent === 'total' ? 'ATMs Totales' : modalContent === 'online' ? 'ATMs Online' : 'ATMs Offline'}</h2>
          <table className="min-w-full p-3 border-collapse border border-border shadow-lg">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="border border-border p-4 text-left">Identificador</th>
                <th className="border border-border p-4 text-left">Tipo de error</th>
                <th className="border border-border p-4 text-left">Ciudad</th>
                <th className="border border-border p-4 text-left">Oficina</th>
                <th className="border border-border p-4 text-left">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {getFilteredATMs().map(atm => (
                <tr key={atm.id} className="hover:bg-secondary transition-colors duration-200">
                  <td className="border border-border p-4">{atm.id}</td>
                  <td className="border border-border p-4">{atm.errorType}</td>
                  <td className="border border-border p-4">{atm.city}</td>
                  <td className="border border-border p-4">{atm.office}</td>
                  <td className="border border-border p-4">{atm.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
export default ATM;


