type Status = 'pending' | 'cancelled' | 'delivered';

export interface Iproduct {
  name: string;
  desc: string;
  status: Status;
}



export interface IgenericObservableType<T>{
     status:string,
    message:string,
    data:T
}