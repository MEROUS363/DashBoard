import Semaforo from "@/components/Semaforo";
import ATM from "@/components/ATM";
import ProcesoBatch from "@/components/ProcesoBatch";
export default function HomePage() {
  return (
    <div>
      <div className="flex">
      <img src="https://www.produbanco.com.ec/media/712553/web.png?format=webp" className="w-48 p-2" alt="Logo" />
      <p className="text-customGreen font-bold text-2xl p-2 pt-4">Monitoreo de Procesos y Estados Operativos</p>
      </div>
      <div className="flex gap-14 justify-center items-center p-4 bg-white">
      <ProcesoBatch/>

        <Semaforo />
        <ATM/>

        <div>
        </div>

      </div>
      
    </div>
  );
}
