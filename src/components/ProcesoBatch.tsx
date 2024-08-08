import React, { useState } from 'react';
import ModalTable from './TableModal';

import data from '../data/fakeData.json';
import { HourlyResult, AbortedProcess } from '@/types/processData';
import ModalErrorTable from './ErrorModal';

export default function ProcesoBatch() {
  const totalEjecucion = data.ResultadosConsultaEjecucion.reduce((acc, curr) => acc + curr.Cantidad, 0);
  const totalEjecutados = data.ResultadosConsultaTerminados.reduce((acc, curr) => acc + curr.Cantidad, 0);
  const totalError = data.ResultadosConsultaAbortados.reduce((acc, curr) => acc + curr.Cantidad, 0);
  const totalProcesos = totalEjecucion + totalEjecutados + totalError;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalData, setModalData] = useState<HourlyResult[] | AbortedProcess[]>([]); // Especificar el tipo aquí
  const [isErrorModal, setIsErrorModal] = useState(false); // Estado para determinar el tipo de modal

  // Función para abrir el modal y establecer el contenido y los datos
  const openModal = (content: string, data: HourlyResult[] | AbortedProcess[], isError: boolean = false) => {
    setModalContent(content);
    setModalData(data);
    setIsErrorModal(isError);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <p className="text-center mb-3 text-customGreen font-bold text-2xl">Procesos Batch</p>
      <div className="grid grid-cols-1 gap-4">
        <div className="border text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105">
          Total de Procesos
          <button className="bg-blue-400 text-white text-3xl h-20 w-full text-primary-foreground p-3 rounded-lg"
            onClick={() => openModal('Total de Procesos', data.ResultadosConsultaTodos)}>
            {`${totalProcesos}`}
          </button>
        </div>
        <div className="border text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105">
          Procesos en Ejecución
          <button className="bg-yellow-400 text-white h-20 text-3xl w-full text-secondary-foreground p-3 rounded-lg"
            onClick={() => openModal('Procesos en Ejecución', data.ResultadosConsultaEjecucion)}>
            {`${totalEjecucion}`}
          </button>
        </div>
        <div className="border text-center bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105">
          Procesos Ejecutados
          <button className="bg-customGreen h-20 w-full text-3xl text-white text-accent-foreground p-3 rounded-lg"
            onClick={() => openModal('Procesos Ejecutados', data.ResultadosConsultaTerminados)}>
            {`${totalEjecutados}`}
          </button>
        </div>
        <div className="text-center border-2 bg-white font-bold text-black rounded-lg transition-transform transform hover:scale-105">
          Procesos en Error
          <button
            className={`bg-customGreen w-full text-3xl text-white h-20 p-3 rounded-lg ${totalError > 0 ? "blink" : ""}`}
            onClick={() => openModal('Procesos con Error', data.ResultadosConsultaAbortadosLista, true)}
          >
            {`${totalError}`}
          </button>
        </div>
      </div>
      {isErrorModal ? (
        <ModalErrorTable
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalContent={modalContent}
          processData={modalData as AbortedProcess[]}
        />
      ) : (
        <ModalTable
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalContent={modalContent}
          processData={modalData as HourlyResult[]}
        />
      )}
    </div>
  );
}
