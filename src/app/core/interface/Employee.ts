export interface Employee {
  id: number,
  fullName: string,
  phoneNumber: string,
  dateOfBirth: string,
  address: string,
  department: string
}
export interface UserLogin {
  account: string,
  password: string
}
export interface AddEmployee{
  id: number,
  fullName: string,
  phoneNumber: string,
  dateOfBirth: string,
  sex:number,
  address: string,
  department: string,
  account: string,
  password: string,
  email:string
}
