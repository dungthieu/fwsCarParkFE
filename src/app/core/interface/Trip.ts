export interface Trip {
    id: string,
    destination: string,
    driver: string,
    carType: string,
    ticketNumber: string,
    departureDateTime: string
}

export interface AddTrip {
    id: string,
    destination: string,
    driver: string,
    carType: string,
    ticketNumber: string,
    departureDateTime: string
    departureDate: string
    departureTime: string

}