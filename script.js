const flights = [
  {
    vuelo: 'AA101',
    destino: 'Madrid',
    hora: '07:51',
    estado: 'A Tiempo',
    puerta: 'A1',
  },
  {
    vuelo: 'BA202',
    destino: 'Nueva York',
    hora: '07:57',
    estado: 'Cancelado',
    puerta: 'B2',
  },
  {
    vuelo: 'AF303',
    destino: 'París',
    hora: '02:48',
    estado: 'Cancelado',
    puerta: 'C3',
  },
  {
    vuelo: 'IB404',
    destino: 'Sídney',
    hora: '17:26',
    estado: 'Abordando',
    puerta: 'D4',
  },
  {
    vuelo: 'LH505',
    destino: 'Nueva York',
    hora: '21:50',
    estado: 'Abordando',
    puerta: 'E5',
  },
  {
    vuelo: 'DL606',
    destino: 'Nueva York',
    hora: '04:15',
    estado: 'Cancelado',
    puerta: 'F6',
  },
  {
    vuelo: 'UA707',
    destino: 'Sídney',
    hora: '09:36',
    estado: 'En Espera',
    puerta: 'G7',
  },
  {
    vuelo: 'KL808',
    destino: 'París',
    hora: '19:26',
    estado: 'Abordando',
    puerta: 'H8',
  },
  {
    vuelo: 'QF909',
    destino: 'Atlanta',
    hora: '21:19',
    estado: 'Retrasado',
    puerta: 'I9',
  },
  {
    vuelo: 'AA102',
    destino: 'Londres',
    hora: '10:25',
    estado: 'A Tiempo',
    puerta: 'A2',
  },
  {
    vuelo: 'BA203',
    destino: 'Chicago',
    hora: '11:30',
    estado: 'Cancelado',
    puerta: 'B3',
  },
  {
    vuelo: 'AF304',
    destino: 'Tokio',
    hora: '12:45',
    estado: 'Cancelado',
    puerta: 'C4',
  },
  {
    vuelo: 'IB405',
    destino: 'Sídney',
    hora: '13:50',
    estado: 'Abordando',
    puerta: 'D5',
  },
  {
    vuelo: 'LH506',
    destino: 'Berlín',
    hora: '14:55',
    estado: 'Abordando',
    puerta: 'E6',
  },
  {
    vuelo: 'DL607',
    destino: 'Roma',
    hora: '15:00',
    estado: 'Cancelado',
    puerta: 'F7',
  },
  {
    vuelo: 'UA708',
    destino: 'Moscú',
    hora: '16:10',
    estado: 'En Espera',
    puerta: 'G8',
  },
  {
    vuelo: 'KL809',
    destino: 'Lisboa',
    hora: '17:20',
    estado: 'Abordando',
    puerta: 'H9',
  },
  {
    vuelo: 'QF910',
    destino: 'Miami',
    hora: '18:30',
    estado: 'Retrasado',
    puerta: 'I10',
  },
  {
    vuelo: 'AA103',
    destino: 'Toronto',
    hora: '19:40',
    estado: 'A Tiempo',
    puerta: 'A3',
  },
  {
    vuelo: 'BA204',
    destino: 'Lima',
    hora: '20:50',
    estado: 'Cancelado',
    puerta: 'B4',
  },
  {
    vuelo: 'AF305',
    destino: 'Bangkok',
    hora: '21:00',
    estado: 'Cancelado',
    puerta: 'C5',
  },
  {
    vuelo: 'IB406',
    destino: 'Melbourne',
    hora: '22:10',
    estado: 'Abordando',
    puerta: 'D6',
  },
  {
    vuelo: 'LH507',
    destino: 'Los Ángeles',
    hora: '23:20',
    estado: 'Abordando',
    puerta: 'E7',
  },
  {
    vuelo: 'DL608',
    destino: 'Hong Kong',
    hora: '00:30',
    estado: 'Cancelado',
    puerta: 'F8',
  },
  {
    vuelo: 'UA709',
    destino: 'Dubai',
    hora: '01:40',
    estado: 'En Espera',
    puerta: 'G9',
  },
  {
    vuelo: 'KL810',
    destino: 'Ciudad de México',
    hora: '02:50',
    estado: 'Abordando',
    puerta: 'H10',
  },
  {
    vuelo: 'QF911',
    destino: 'Sao Paulo',
    hora: '03:00',
    estado: 'Retrasado',
    puerta: 'I11',
  },
  {
    vuelo: 'AA104',
    destino: 'Buenos Aires',
    hora: '04:10',
    estado: 'A Tiempo',
    puerta: 'A4',
  },
  {
    vuelo: 'BA205',
    destino: 'Caracas',
    hora: '05:20',
    estado: 'Cancelado',
    puerta: 'B5',
  },
  {
    vuelo: 'AF306',
    destino: 'La Habana',
    hora: '06:30',
    estado: 'Cancelado',
    puerta: 'C6',
  },
];

/* Angelica */
const boardingGate = [
  {
    puerta: 'A1',
    vuelo: 'AA101',
    destino: 'Madrid',
    hora: '07:51',
    estado: 'A Tiempo',
  },
  {
    puerta: 'B2',
    vuelo: 'BA202',
    destino: 'Nueva York',
    hora: '07:57',
    estado: 'Cancelado',
  },
  {
    puerta: 'C3',
    vuelo: 'AF303',
    destino: 'París',
    hora: '02:48',
    estado: 'Cancelado',
  },
  {
    puerta: 'D4',
    vuelo: 'IB404',
    destino: 'Sídney',
    hora: '17:26',
    estado: 'Abordando',
  },
  {
    puerta: 'E5',
    vuelo: 'LH505',
    destino: 'Nueva York',
    hora: '21:50',
    estado: 'Abordando',
  },
  {
    puerta: 'F6',
    vuelo: 'DL606',
    destino: 'Nueva York',
    hora: '04:15',
    estado: 'Cancelado',
  },
  {
    puerta: 'G7',
    vuelo: 'UA707',
    destino: 'Sídney',
    hora: '09:36',
    estado: 'En Espera',
  },
  {
    puerta: 'H8',
    vuelo: 'KL808',
    destino: 'París',
    hora: '19:26',
    estado: 'Abordando',
  },
  {
    puerta: 'I9',
    vuelo: 'QF909',
    destino: 'Atlanta',
    hora: '21:19',
    estado: 'Retrasado',
  },
  {
    puerta: 'A2',
    vuelo: 'AA102',
    destino: 'Londres',
    hora: '10:25',
    estado: 'A Tiempo',
  },
  {
    puerta: 'B3',
    vuelo: 'BA203',
    destino: 'Chicago',
    hora: '11:30',
    estado: 'Cancelado',
  },
  {
    puerta: 'C4',
    vuelo: 'AF304',
    destino: 'Tokio',
    hora: '12:45',
    estado: 'Cancelado',
  },
  {
    puerta: 'D5',
    vuelo: 'IB405',
    destino: 'Sídney',
    hora: '13:50',
    estado: 'Abordando',
  },
  {
    puerta: 'E6',
    vuelo: 'LH506',
    destino: 'Berlín',
    hora: '14:55',
    estado: 'Abordando',
  },
  {
    puerta: 'F7',
    vuelo: 'DL607',
    destino: 'Roma',
    hora: '15:00',
    estado: 'Cancelado',
  },
  {
    puerta: 'G8',
    vuelo: 'UA708',
    destino: 'Moscú',
    hora: '16:10',
    estado: 'En Espera',
  },
  {
    puerta: 'H9',
    vuelo: 'KL809',
    destino: 'Lisboa',
    hora: '17:20',
    estado: 'Abordando',
  },
  {
    puerta: 'I10',
    vuelo: 'QF910',
    destino: 'Miami',
    hora: '18:30',
    estado: 'Retrasado',
  },
  {
    puerta: 'A3',
    vuelo: 'AA103',
    destino: 'Toronto',
    hora: '19:40',
    estado: 'A Tiempo',
  },
  {
    puerta: 'B4',
    vuelo: 'BA204',
    destino: 'Lima',
    hora: '20:50',
    estado: 'Cancelado',
  },
  {
    puerta: 'C5',
    vuelo: 'AF305',
    destino: 'Bangkok',
    hora: '21:00',
    estado: 'Cancelado',
  },
  {
    puerta: 'D6',
    vuelo: 'IB406',
    destino: 'Melbourne',
    hora: '22:10',
    estado: 'Abordando',
  },
  {
    puerta: 'E7',
    vuelo: 'LH507',
    destino: 'Los Ángeles',
    hora: '23:20',
    estado: 'Abordando',
  },
  {
    puerta: 'F8',
    vuelo: 'DL608',
    destino: 'Hong Kong',
    hora: '00:30',
    estado: 'Cancelado',
  },
  {
    puerta: 'G9',
    vuelo: 'UA709',
    destino: 'Dubai',
    hora: '01:40',
    estado: 'En Espera',
  },
  {
    puerta: 'H10',
    vuelo: 'KL810',
    destino: 'Ciudad de México',
    hora: '02:50',
    estado: 'Abordando',
  },
  {
    puerta: 'I11',
    vuelo: 'QF911',
    destino: 'Sao Paulo',
    hora: '03:00',
    estado: 'Retrasado',
  },
  {
    puerta: 'A4',
    vuelo: 'AA104',
    destino: 'Buenos Aires',
    hora: '04:10',
    estado: 'A Tiempo',
  },
  {
    puerta: 'B5',
    vuelo: 'BA205',
    destino: 'Caracas',
    hora: '05:20',
    estado: 'Cancelado',
  },
  {
    puerta: 'C6',
    vuelo: 'AF306',
    destino: 'La Habana',
    hora: '06:30',
    estado: 'Cancelado',
  },
]; /* Angelica */

let currentIndex = 0;

function updateTable() {
  const tbody = document.getElementById('flight-table-body');
  tbody.innerHTML = '';
  // muestra los primeros 10 vuelos
  const visibleFlights = flights.slice(currentIndex, currentIndex + 10);

  visibleFlights.forEach((flight) => {
    const row = document.createElement('tr');
    Object.values(flight).forEach((value, index) => {
      const cell = document.createElement('td');
      if (index === 3) {
        cell.className = getStateClass(value);
      }
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  // Incrementa el índice
  currentIndex = (currentIndex + 5) % flights.length;
}

function updateBoardingGateTable() {
  const tbody = document.getElementById('boarding-table-body');
  tbody.innerHTML = '';
  // muestra los primeros 10 vuelos
  const visibleBoarding = boardingGate.slice(currentIndex, currentIndex + 10);

  visibleBoarding.forEach((boardingGate) => {
    const row = document.createElement('tr');
    Object.values(boardingGate).forEach((value, index) => {
      const cell = document.createElement('td');
      if (index === 4) {
        cell.className = getStateClass(value);
      }
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  // Incrementa el índice
  currentIndex = (currentIndex + 5) % boardingGate.length;
}

function getStateClass(estado) {
  switch (estado) {
    case 'A tiempo':
      return 'on-time';
    case 'Cancelado':
      return 'cancelled';
    case 'Abordado':
      return 'boarding';
    case 'En Espera':
      return 'waiting';
    case 'Retrasado':
      return 'delayed';
    default:
      return '';
  }
}

setInterval(updateTable, 2000);
updateTable();

/* angelica */
setInterval(updateBoardingGateTable, 2000);
updateBoardingGateTable();
/* angelica */

document.getElementById('contactanos').addEventListener('click', function () {
  document.getElementById('contactModal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('contactModal').style.display = 'none';
});

// Validación de formulario
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach((input) => {
  input.addEventListener('input', function () {
    let allValid = true;
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        allValid = false;
      }
    });
    submitBtn.disabled = !allValid;
  });
});

// Cerrar el modal
window.onclick = function (event) {
  if (event.target == document.getElementById('contactModal')) {
    document.getElementById('contactModal').style.display = 'none';
  }
};
