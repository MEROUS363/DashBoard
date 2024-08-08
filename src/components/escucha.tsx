import React, { useEffect } from 'react';
import signalRService from '../services/signalRService'; // Asegúrate de que la ruta sea correcta

const MyComponent: React.FC = () => {
  useEffect(() => {
    // Escuchar eventos del Hub
    signalRService.on('ReceiveMessage', (message: string) => {
      console.log('Received message: ', message);
    });

    // Enviar un mensaje al Hub (opcional)
    signalRService.send('SendMessage', 'Hello Hub!');

    // Limpiar la conexión cuando el componente se desmonte
    return () => {
      signalRService.stop();
    };
  }, []);

  return (
    <div>
      <h1>SignalR Component</h1>
    </div>
  );
};

export default MyComponent;