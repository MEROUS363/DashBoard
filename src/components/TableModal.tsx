import { HourlyResult } from '@/types/processData';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

// Registrar los elementos necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ModalTableProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalContent: string;
  processData: HourlyResult[];
}

const ModalTable: React.FC<ModalTableProps> = ({ modalIsOpen, closeModal, modalContent, processData }) => {
  const [activeTab, setActiveTab] = useState<'table' | 'chart'>('table');

  const data: ChartData<'line'> = {
    labels: processData.map((process) => `${process.Hora}:00`),
    datasets: [
      {
        label: 'Cantidad',
        data: processData.map((process) => process.Cantidad),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hora del día',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad',
        },
      },
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Información del Proceso"
      className="fixed text-black m-3 inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl h-full max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">{modalContent}</h2>
        <div className="mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded focus:outline-none ${activeTab === 'table' ? 'border-b-2 border-green-500' : 'border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('table')}
          >
            Tabla
          </button>
          <button
            className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'chart' ? 'border-b-2 border-green-500' : 'border-b-2 border-transparent'}`}
            onClick={() => setActiveTab('chart')}
          >
            Gráfico
          </button>
        </div>
        {activeTab === 'table' ? (
          <table className="min-w-full p-3 border-collapse border border-border shadow-lg">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="border border-border p-4 text-left">Hora</th>
                <th className="border border-border p-4 text-left">Cantidad</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {processData.map((process, index) => (
                <tr key={index} className="hover:bg-secondary transition-colors duration-200">
                  <td className="border border-border p-4">{process.Hora}</td>
                  <td className="border border-border p-4">{process.Cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='w-full h-96'>
            <Line data={data} options={options} />
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
  );
};

export default ModalTable;
