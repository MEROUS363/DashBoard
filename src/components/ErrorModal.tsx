import { AbortedProcess } from '@/types/processData';
import React from 'react';
import Modal from 'react-modal';


interface ModalErrorTableProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalContent: string;
  processData: AbortedProcess[];
}

const ModalErrorTable: React.FC<ModalErrorTableProps> = ({ modalIsOpen, closeModal, modalContent, processData }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Información del Proceso"
      className="fixed text-black m-3 inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-70 max-w-4xl h-70 max-h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">{modalContent}</h2>
        <table className="min-w-full p-3 border-collapse border border-border shadow-lg">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="border border-border p-4 text-left">Lote</th>
              <th className="border border-border p-4 text-left">Proceso</th>
              <th className="border border-border p-4 text-left">Secuencia</th>
              <th className="border border-border p-4 text-left">Cantidad</th>
            </tr>
          </thead>
          <tbody className="bg-card">
            {processData.map((process, index) => (
              <tr key={index} className="hover:bg-secondary transition-colors duration-200">
                <td className="border border-border p-4">{process.Lote}</td>
                <td className="border border-border p-4">{process.Proceso}</td>
                <td className="border border-border p-4">{process.Secuencia}</td>
                <td className="border border-border p-4">{process.Cantidad}</td>
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
  );
};

export default ModalErrorTable;
