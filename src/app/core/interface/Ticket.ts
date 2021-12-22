export interface Ticket {
    id: string,
    customer: string,
    bookingTime: string,
    destination: string,
    tripId: string,
    carId: string,
    licensePlate: string,
}

export interface AddTicket {
    id: string,
    customer: string,
    bookingTime: string,
    tripId: string,
    carId: string,
}