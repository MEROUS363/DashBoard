import * as signalR from '@microsoft/signalr';

const hubUrl = 'https://172.24.11.42/ServiciosBackPR/RecibirValoresATM';

class SignalRService {
  private connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.connection.onclose((error) => {
      console.error('Connection closed with error: ', error);
      // Aquí puedes agregar lógica para reconectar si es necesario
    });

    this.startConnection();
  }

  private async startConnection() {
    try {
      await this.connection.start();
      console.log('SignalR Connected.');
    } catch (err) {
      console.error('SignalR Connection Error: ', err);
      // Aquí puedes agregar lógica para reintentar la conexión si es necesario
    }
  }

  public on(eventName: string, callback: (...args: any[]) => void) {
    this.connection.on(eventName, callback);
  }

  public send(eventName: string, ...args: any[]) {
    this.connection.send(eventName, ...args);
  }

  public async stop() {
    await this.connection.stop();
  }
}

export default new SignalRService();
