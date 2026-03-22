export const doctors =[
  { id_doctor: 1, 
    name: 'Dr. João', 
    specialty: 'Cardiologista', 
    icon: 'M'
  },
  { id_doctor: 2, 
    name: 'Dra. Maria', 
    specialty: 'Ginecologista', 
    icon: 'F'
  },
  { id_doctor: 3, 
    name: 'Dr. Pedro', 
    specialty: 'Pediatria', 
    icon: 'M'
  },
  { id_doctor: 4, 
    name: 'Dra. Ana', 
    specialty: 'Neurologista', 
    icon: 'F'
  },
  { id_doctor: 5, 
    name: 'Dr. Rafael', 
    specialty: 'Psiquiatra', 
    icon: 'M'
  },
  { id_doctor: 6, 
    name: 'Dra. Lúcia', 
    specialty: 'Ortopedista', 
    icon: 'F'
  },
]

export const appointments = [
  { id_appointment: 1, 
    service: 'consulta',
    doctor: 'Dr. Maria', 
    specialty: 'Ginecologista', 
    Booking_date: '2022-04-10', 
    booking_hour: '10:00'
  },
  { id_appointment: 2,
    service: 'exame',
    doctor: 'Dr. Rafael', 
    specialty: 'Psiquiatra', 
    Booking_date: '2022-04-12', 
    booking_hour: '12:00'
  },
  { id_appointment: 3,
    service: 'cirurgia',
    doctor: 'Dr. João', 
    specialty: 'Cardiologista', 
    Booking_date: '2022-04-15', 
    booking_hour: '14:00'
  },
  { id_appointment: 4,
    service: 'exame',
    doctor: 'Dr. Ana', 
    specialty: 'Neurologista', 
    Booking_date: '2022-04-17', 
    booking_hour: '16:00'
  },
  { id_appointment: 5,
    service: 'consulta',
    doctor: 'Dr. Lúcia', 
    specialty: 'Ortopedista', 
    Booking_date: '2022-04-20', 
    booking_hour: '18:00'
  },
  { id_appointment: 6,
    service: 'cirurgia',
    doctor: 'Dr. Pedro', 
    specialty: 'Pediatria', 
    Booking_date: '2022-04-22', 
    booking_hour: '20:00'
  },
  { id_appointment: 7,
    service: 'exame',
    doctor: 'Dr. João', 
    specialty: 'Cardiologista', 
    Booking_date: '2022-04-25', 
    booking_hour: '08:00'
  },
  { id_appointment: 8,
    service: 'consulta',
    doctor: 'Dr. Maria', 
    specialty: 'Ginecologista', 
    Booking_date: '2022-04-27', 
    booking_hour: '10:00'
  },
  { id_appointment: 9,
    service: 'exame',
    doctor: 'Dr. Rafael', 
    specialty: 'Psiquiatra', 
    Booking_date: '2022-04-29', 
    booking_hour: '12:00'
  },
  {
    service: 'cirurgia',
    doctor: 'Dr. João', 
    specialty: 'Cardiologista', 
    Booking_date: '2022-05-02', 
    booking_hour: '14:00'
  },
  {
    service: 'exame',
    doctor: 'Dr. Ana', 
    specialty: 'Neurologista', 
    Booking_date: '2022-05-04', 
    booking_hour: '16:00'
  },
  {
    service: 'consulta',
    doctor: 'Dr. Lúcia', 
    specialty: 'Ortopedista', 
    Booking_date: '2022-05-07', 
    booking_hour: '18:00'
  }
]

export const doctors_services = [
  { id_service: 1, 
    description: 'Consulta Médica', 
    price: 499.99 
  },
  { id_service: 2,
    description: 'Drenagem Linfática', 
    price: 650
  },
  { id_service: 3,
    description: 'Lipoaspiração', 
    price: 5000 
  },
  { id_service: 4,
    description: 'Mamoplastia', 
    price: 1700 
  },
  { id_service: 5,
    description: 'Consulta Psicológica', 
    price: 400 
  },
  { id_service: 6,
    description: 'Ortopédia', 
    price: 800 
  },
  { id_service: 7,
    description: 'Pediatria', 
    price: 350 
  },
  { id_service: 8,
    description: 'Cardiologia', 
    price: 700 
  },
  { id_service: 9,
    description: 'Neurologia', 
    price: 900 
  }
]