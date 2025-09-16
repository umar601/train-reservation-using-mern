
const mongoose = require("mongoose");

const trainModel = require("./models/trainModel");



trainModel.insertMany(
  [
  {
    name: "Green Line Express",
    trainNumber: "GL101",
    departureTime: "08:00",
    arrivalTime: "14:00",
    departureStation: "Karachi",
    arrivalStation: "Islamabad",
    fare: 2500,
    capacity: 800,
    status: "On Time",
    duration: "6h",
    bookedSeats: 120,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Shalimar Express",
    trainNumber: "SE202",
    departureTime: "09:30",
    arrivalTime: "17:00",
    departureStation: "Lahore",
    arrivalStation: "Karachi",
    fare: 2200,
    capacity: 750,
    status: "Delayed",
    duration: "7.5h",
    bookedSeats: 340,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Awam Express",
    trainNumber: "AE303",
    departureTime: "07:00",
    arrivalTime: "19:00",
    departureStation: "Peshawar",
    arrivalStation: "Karachi",
    fare: 1800,
    capacity: 1000,
    status: "On Time",
    duration: "12h",
    bookedSeats: 600,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Freight Cargo 1",
    trainNumber: "FC404",
    departureTime: "05:30",
    arrivalTime: "15:00",
    departureStation: "Karachi",
    arrivalStation: "Lahore",
    fare: 50000,
    capacity: 200,
    status: "On Time",
    duration: "9.5h",
    bookedSeats: 50,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Tezgam Express",
    trainNumber: "TG505",
    departureTime: "10:15",
    arrivalTime: "20:00",
    departureStation: "Rawalpindi",
    arrivalStation: "Karachi",
    fare: 2400,
    capacity: 650,
    status: "Cancelled",
    duration: "9h 45m",
    bookedSeats: 410,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Khyber Mail",
    trainNumber: "KM606",
    departureTime: "06:45",
    arrivalTime: "18:00",
    departureStation: "Karachi",
    arrivalStation: "Peshawar",
    fare: 2600,
    capacity: 900,
    status: "On Time",
    duration: "11h 15m",
    bookedSeats: 520,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Karachi Circular Local",
    trainNumber: "KCL707",
    departureTime: "07:30",
    arrivalTime: "09:00",
    departureStation: "Karachi City",
    arrivalStation: "Karachi Cantt",
    fare: 100,
    capacity: 300,
    status: "On Time",
    duration: "1.5h",
    bookedSeats: 180,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Hazara Express",
    trainNumber: "HE808",
    departureTime: "13:00",
    arrivalTime: "22:00",
    departureStation: "Karachi",
    arrivalStation: "Havelian",
    fare: 2100,
    capacity: 700,
    status: "On Time",
    duration: "9h",
    bookedSeats: 420,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Business Cargo",
    trainNumber: "BC909",
    departureTime: "03:30",
    arrivalTime: "13:30",
    departureStation: "Lahore",
    arrivalStation: "Quetta",
    fare: 70000,
    capacity: 250,
    status: "Completed",
    duration: "10h",
    bookedSeats: 200,
    day:"monday",
    date:"12-05-2025"
  },
  {
    name: "Pakistan Express",
    trainNumber: "PE010",
    departureTime: "15:00",
    arrivalTime: "23:30",
    departureStation: "Rawalpindi",
    arrivalStation: "Karachi",
    fare: 2300,
    capacity: 800,
    status: "On Time",
    duration: "8h 30m",
    bookedSeats: 450,
    day:"monday",
    date:"12-05-2025"
  }

]

)


