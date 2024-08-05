import React, { useState, useEffect } from 'react';

const Semaforo: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const today = new Date();
  
  const cortesSCI1 = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0), // Corte 1: 10:00 AM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0), // Corte 2: 11:00 PM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0), // Corte 3: 12:00 PM
  ];

  const cortesSCI3 = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0), // Corte 1: 11:00 AM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0), // Corte 2: 15:00 PM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19, 0), // Corte 3: 19:00 PM
  ];

  const cortesSPI1 = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0), // Corte 1: 9:00 AM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0), // Corte 2: 13:00 PM
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 45), // Corte 3: 16:00 PM
  ];

  const cortesSPI3 = [
    new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 59), // Corte 1: 13:00 AM
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

    const calculateColor = (start: Date, end: Date, corte: string) => {
    const difference = end.getTime() - start.getTime();
    const totalMinutes = Math.floor(difference / (1000 * 60));
    const totalSeconds = Math.floor(difference / 1000);

    if (totalMinutes === 15 && totalSeconds ===0)  {
      alert(`Faltan 15 minutos para cumplir con el SLA de ${corte}`);
    }

    if (totalMinutes <= 15 && totalMinutes >= 0) {
      return '#fd9b38';
    } else if (totalMinutes < 40 && totalMinutes > 15) {
      return '#fdcd4b';
    } else if (totalMinutes <= 60 && totalMinutes >= 40) {
      return '#5564eb';
    } else if (totalMinutes < 0) {
      return 'red';
    } else {
      return '#057857';
    }
  };
  return (
    <>
      <div>
      <p className='text-center mb-3 text-customGreen font-bold text-2xl'>Estado de envios SPI y SCI</p>
      <div className="flex p-4 rounded-lg  text-black font-bold">
        
        {[['Carga SCI1', cortesSCI1], ['Carga SCI3', cortesSCI3], ['Carga SPI1', cortesSPI1], ['Carga   SPI3', cortesSPI3]].map(([label, cortes], index) => (
          <div key={label as string} className="bg-card border-4  bg-white border-black rounded-2xl p-4 w-28 h-96 mr-4">
            <h2 className="text-black text-center">{label as string}</h2>
            <div className="flex flex-col items-center  gap-4 pt-5">
              {(cortes as Date[]).map((corte, index) => {
                const color = calculateColor(currentTime, corte, `Corte ${index + 1}`);
                return (
                  <p
                    key={index}
                    style={{ backgroundColor: color }}
                    className="bg-white text-white rounded-full w-20 h-20 flex items-center  justify-center "
                  >
                    {color === 'red' ? "X" : `Corte ${index + 1}`}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );

};

export default Semaforo;
