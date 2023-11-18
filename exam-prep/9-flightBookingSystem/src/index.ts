type Flight = {
  flightNumber: string
  destination: string
  departureTime: string
  price: number
}

type Booking = {
  passengerName: string
  flightNumber: string
  price: number
}

type Criteria = "all" | "cheap" | "expensive"

class FlightBookingSystem {
  agencyName: string
  flights: Flight[] = []
  bookings: Booking[] = []
  bookingsCount: number = 0
  constructor(agencyName: string) {
    this.agencyName = agencyName
  }

  addFlight(
    flightNumber: string,
    destination: string,
    departureTime: string,
    price: number
  ): string {
    const fligthExists = this.flights.some(
      (f) => f.flightNumber === flightNumber
    )
    if (fligthExists) {
      return `Flight ${flightNumber} to ${destination} is already available.`
    }
    const currentFlight = { flightNumber, destination, departureTime, price }
    this.flights.push(currentFlight)
    return `Flight ${flightNumber} to ${destination} has been added to the system.`
  }

  bookFlight(passengerName: string, flightNumber: string) {
    const currentFlight = this.flights.find(
      (f) => f.flightNumber === flightNumber
    )
    if (currentFlight === undefined) {
      return `Flight ${flightNumber} is not available for booking.`
    }
    const currentBooking = {
      passengerName,
      flightNumber,
      price: currentFlight.price,
    }
    this.bookings.push(currentBooking)
    this.bookingsCount++
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
  }

  cancelBooking(passengerName: string, flightNumber: string): string {
    const bookingIndex: number = this.bookings.findIndex(
      (booking) =>
        booking.flightNumber === flightNumber &&
        booking.passengerName === passengerName
    )
    if (bookingIndex === -1) {
      return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
    }
    this.bookings.splice(bookingIndex, 1)
    this.bookingsCount--
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
  }

  showBookings(criteria: Criteria): string {
    if (this.bookings.length === 0) {
      return "No bookings have been made yet."
    }
    if (criteria === "all") {
      return `All bookings(${this.bookingsCount}): \n${this.bookings
        .map(
          (booking) =>
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
        .join("\n")}`
    }

    if (criteria === "cheap") {
      const cheapBookings = this.bookings.filter((b) => b.price <= 100)
      if (cheapBookings.length === 0) {
        return "No cheap bookings found."
      }
      return `Cheap bookings: \n${cheapBookings
        .map(
          (book) =>
            `${book.passengerName} booked for flight ${book.flightNumber}.`
        )
        .join("\n")}`
    }

    if (criteria === "expensive") {
      const expensiveBookings = this.bookings.filter((b) => b.price > 100)
      if (expensiveBookings.length === 0) {
        return "No cheap bookings found."
      }
      return `Expensive bookings: \n${expensiveBookings
        .map(
          (book) =>
            `${book.passengerName} booked for flight ${book.flightNumber}.`
        )
        .join("\n")}`
    }
  }
}
// const system = new FlightBookingSystem("TravelWorld")
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250))
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180))
// console.log(system.bookFlight("Alice", "AA101"))
// console.log(system.bookFlight("Bob", "BB202"))
// console.log(system.bookFlight("Charlie", "CC303"))

// const system = new FlightBookingSystem("TravelWorld")
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250))
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180))
// console.log(system.bookFlight("Alice", "AA101"))
// console.log(system.bookFlight("Bob", "BB202"))
// console.log(system.cancelBooking("Alice", "AA101"))

// const system = new FlightBookingSystem("TravelWorld")
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250))
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180))
// console.log(system.bookFlight("Alice", "AA101"))
// console.log(system.bookFlight("Bob", "BB202"))
// console.log(system.showBookings("all"))

const system = new FlightBookingSystem("TravelWorld")
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250))
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180))
console.log(system.bookFlight("Alice", "AA101"))
console.log(system.bookFlight("Bob", "BB202"))
console.log(system.showBookings("expensive"))
console.log(system.showBookings("cheap"))
