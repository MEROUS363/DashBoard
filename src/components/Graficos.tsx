import React, { useRef, useEffect } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

const MyChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
    const ofline = 10;
    const online = 6;
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destruir la instancia previa de Chart.js si existe
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Crear una nueva instancia de Chart.js y almacenarla en el ref
        const chartConfig: ChartConfiguration = {
          type: 'bar', // Puedes cambiar el tipo de gráfico
          data: {
            labels: ['Online', 'Offline'],
            datasets: [
              {
                label: 'My First Dataset',
                data: [ofline, online],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        };
        chartInstanceRef.current = new Chart(ctx, chartConfig);
      }
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <div style={{ width: '600px', height: '400px' }}>
  <canvas ref={chartRef} />
</div>;
};

export default MyChartComponent;
