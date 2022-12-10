export class SendData {
  id: number;
  period: string;
  averagePriceRigaCenter: number;
  transactionCountRiga: number;
  averagePriceRigaSub: number;
  transactionCountRigaSub: number;
  averagePriceJurmala: number;
  transactionCountJurmala: number;


  constructor(id: number, period: string, averagePriceRigaCenter: number, transactionCountRiga: number, averagePriceRigaSub: number, transactionCountRigaSub: number, averagePriceJurmala: number, transactionCountJurmala: number) {
    this.id = id;
    this.period = period;
    this.averagePriceRigaCenter = averagePriceRigaCenter;
    this.transactionCountRiga = transactionCountRiga;
    this.averagePriceRigaSub = averagePriceRigaSub;
    this.transactionCountRigaSub = transactionCountRigaSub;
    this.averagePriceJurmala = averagePriceJurmala;
    this.transactionCountJurmala = transactionCountJurmala;
  }
}
