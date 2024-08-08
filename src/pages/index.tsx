import Semaforo from "@/components/Semaforo";
import ATM from "@/components/ATM";
import ProcesoBatch from "@/components/ProcesoBatch";
import MyComponent from "@/components/escucha"


export default function HomePage() {
  return (
    <div>
      
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 ">
      <img src="https://www.produbanco.com.ec/media/712553/web.png?format=webp" className="w-48 p-2 col-span-1" alt="Logo" />
      <div className="col-span-3">
      <p className="text-customGreen font-bold text-2xl p-2 pt-4">Monitoreo de Procesos y Estados Operativos</p>
      </div>
      </div>
      <div className="flex gap-14 justify-center items-center p-4 bg-gray-100 ">
      <ProcesoBatch/>

        <Semaforo />
        <ATM/>
        
        <div>
        </div>
        <MyComponent/>
      </div>
      
    </div>
  );
}
