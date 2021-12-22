export interface BookingOffice {
    id: string,
    name: string,
    tripId: string,
    destination: string,
}

export interface EditBookingOffice {
    id: string,
    name: string,
    tripId: string,
    phoneNumber: string,
    place: string,
    price: string,
    fromDate: Date,
    toDate: Date
}