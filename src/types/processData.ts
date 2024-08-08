// Interface for individual hourly results
export interface HourlyResult {
    Hora: number;
    Cantidad: number;
  }
  
  // Interface for individual aborted process details
export interface AbortedProcess {
    Lote: number;
    Proceso: number;
    Secuencia: number;
    Cantidad: number;
  }
  
  // Interface for the overall data structure
export interface DataStructure {
    ResultadosConsultaTerminados: HourlyResult[];
    ResultadosConsultaEjecucion: HourlyResult[];
    ResultadosConsultaEjecucionManual: HourlyResult[];
    ResultadosConsultaAbortados: HourlyResult[];
    ResultadosConsultaTodos: HourlyResult[];
    ResultadosConsultaAbortadosLista: AbortedProcess[];
  }
  