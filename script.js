const flights = [
    { vuelo: 'AA101', destino: 'Madrid', hora: '07:51', estado: 'A Tiempo', puerta: 'A1' },
    { vuelo: 'BA202', destino: 'Nueva York', hora: '07:57', estado: 'Cancelado', puerta: 'B2' },
    { vuelo: 'AF303', destino: 'París', hora: '02:48', estado: 'Cancelado', puerta: 'C3' },
    { vuelo: 'IB404', destino: 'Sídney', hora: '17:26', estado: 'Abordando', puerta: 'D4' },
    { vuelo: 'LH505', destino: 'Nueva York', hora: '21:50', estado: 'Abordando', puerta: 'E5' },
    { vuelo: 'DL606', destino: 'Nueva York', hora: '04:15', estado: 'Cancelado', puerta: 'F6' },
    { vuelo: 'UA707', destino: 'Sídney', hora: '09:36', estado: 'En Espera', puerta: 'G7' },
    { vuelo: 'KL808', destino: 'París', hora: '19:26', estado: 'Abordando', puerta: 'H8' },
    { vuelo: 'QF909', destino: 'Atlanta', hora: '21:19', estado: 'Retrasado', puerta: 'I9' },
    { vuelo: 'AA102', destino: 'Londres', hora: '10:25', estado: 'A Tiempo', puerta: 'A2' },
    { vuelo: 'BA203', destino: 'Chicago', hora: '11:30', estado: 'Cancelado', puerta: 'B3' },
    { vuelo: 'AF304', destino: 'Tokio', hora: '12:45', estado: 'Cancelado', puerta: 'C4' },
    { vuelo: 'IB405', destino: 'Sídney', hora: '13:50', estado: 'Abordando', puerta: 'D5' },
    { vuelo: 'LH506', destino: 'Berlín', hora: '14:55', estado: 'Abordando', puerta: 'E6' },
    { vuelo: 'DL607', destino: 'Roma', hora: '15:00', estado: 'Cancelado', puerta: 'F7' },
    { vuelo: 'UA708', destino: 'Moscú', hora: '16:10', estado: 'En Espera', puerta: 'G8' },
    { vuelo: 'KL809', destino: 'Lisboa', hora: '17:20', estado: 'Abordando', puerta: 'H9' },
    { vuelo: 'QF910', destino: 'Miami', hora: '18:30', estado: 'Retrasado', puerta: 'I10' },
    { vuelo: 'AA103', destino: 'Toronto', hora: '19:40', estado: 'A Tiempo', puerta: 'A3' },
    { vuelo: 'BA204', destino: 'Lima', hora: '20:50', estado: 'Cancelado', puerta: 'B4' },
    { vuelo: 'AF305', destino: 'Bangkok', hora: '21:00', estado: 'Cancelado', puerta: 'C5' },
    { vuelo: 'IB406', destino: 'Melbourne', hora: '22:10', estado: 'Abordando', puerta: 'D6' },
    { vuelo: 'LH507', destino: 'Los Ángeles', hora: '23:20', estado: 'Abordando', puerta: 'E7' },
    { vuelo: 'DL608', destino: 'Hong Kong', hora: '00:30', estado: 'Cancelado', puerta: 'F8' },
    { vuelo: 'UA709', destino: 'Dubai', hora: '01:40', estado: 'En Espera', puerta: 'G9' },
    { vuelo: 'KL810', destino: 'Ciudad de México', hora: '02:50', estado: 'Abordando', puerta: 'H10' },
    { vuelo: 'QF911', destino: 'Sao Paulo', hora: '03:00', estado: 'Retrasado', puerta: 'I11' },
    { vuelo: 'AA104', destino: 'Buenos Aires', hora: '04:10', estado: 'A Tiempo', puerta: 'A4' },
    { vuelo: 'BA205', destino: 'Caracas', hora: '05:20', estado: 'Cancelado', puerta: 'B5' },
    { vuelo: 'AF306', destino: 'La Habana', hora: '06:30', estado: 'Cancelado', puerta: 'C6' }
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


const formFields = document.querySelectorAll('#travelType, #from, #destination, #departure, #return, #passengers');
const childrenCheck = document.getElementById('childrenCheck');
const childrenAmount = document.getElementById('childrenAmount');
const searchButton = document.querySelector('.btn[onclick="searchFlights()"]');

function validateForm() {
    let isValid = true;

    // verifica campo obligatorio
    formFields.forEach(field => {
        if (!field.value) {
            isValid = false;
        }
    });

    // verifica la cantidad de niños
    if (childrenCheck.checked) {
        if (!childrenAmount.value) {
            isValid = false;
        }
    }

    // no superar 10 pasajeros
    const passengers = parseInt(document.getElementById('passengers').value, 10);
    if (passengers > 10) {
        isValid = false;
    }

    // verificar fechas
    const departureDate = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    if (departureDate && returnDate) {
        const departure = new Date(departureDate);
        const returnD = new Date(returnDate);
        const timeDifference = returnD - departure;
        const dayDifference = timeDifference / (1000 * 3600 * 24);
        if (returnD <= departure) {
            isValid = false;
        }
    }
    // habilita boton para buscar vuelos
    searchButton.disabled = !isValid;
}

document.getElementById('passengers').addEventListener('input', function() {
    const maxPassengers = 10;
    if (this.value > maxPassengers) {
        alert(`No puedes seleccionar más de ${maxPassengers} pasajeros.`);
        this.value = maxPassengers;
    }
});


//  eventos para validar el formulario
formFields.forEach(field => {
    field.addEventListener('input', validateForm);
});

childrenCheck.addEventListener('change', function() {
    toggleChildrenInput();
    validateForm();
});

childrenAmount.addEventListener('input', validateForm);
window.addEventListener('DOMContentLoaded', validateForm);


function updateTable() {
    const tbody = document.getElementById('flight-table-body');
    tbody.innerHTML = '';
    // muestra los primeros 10 vuelos 
    const visibleFlights = flights.slice(currentIndex, currentIndex + 10);

    visibleFlights.forEach(flight => {
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
    })
    // Incrementa el índice
    currentIndex = (currentIndex + 5) % flights.length
}

function getStateClass(estado){
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

function toggleChildrenInput() {
    const childrenContainer = document.getElementById('childrenAmountContainer');
    if (document.getElementById('childrenCheck').checked) {
        childrenContainer.style.display = 'flex';
    } else {
        childrenContainer.style.display = 'none';
    }
}

function validateReturnDate() {
    const departureDate = new Date(document.getElementById('departure').value);
    const returnDate = new Date(document.getElementById('return').value);

    if (returnDate < departureDate) {
        alert('La fecha de retorno no puede ser anterior a la fecha de ida');
        document.getElementById('return').value = '';
    }
}

document.getElementById('travelType').addEventListener('change', function() {
    const destinationSelect = document.getElementById('destination');
    destinationSelect.innerHTML = ''; // Limpiar opciones anteriores

    if (this.value === 'local') {
        // Añadir ciudades locales
        destinationSelect.innerHTML = `
            <option value="SCL">Santiago</option>
            <option value="ANF">Antofagasta</option>
            <option value="CJC">Calama</option>
            <!-- Agrega otras ciudades de Chile con aeropuertos -->
        `;
    } else if (this.value === 'international') {
        // Añadir destinos internacionales
        destinationSelect.innerHTML = `
            <option value="USA">Estados Unidos</option>
            <option value="ESP">España</option>
            <option value="JPN">Japón</option>
            <!-- Agrega otros países internacionales -->
        `;
    }
});

// fechas mínimas en los input de fecha
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('departure').setAttribute('min', today);
    document.getElementById('return').setAttribute('min', today);
}

window.addEventListener('DOMContentLoaded', setMinDates);


function validateReturnDate() {
    const departureInput = document.getElementById('departure');
    const returnInput = document.getElementById('return');
    
    const departureDate = new Date(departureInput.value);
    const returnDate = new Date(returnInput.value);

    // Verificar que ambas fechas estén seleccionadas
    if (departureInput.value && returnInput.value) {
        // Calcular la diferencia en días
        const timeDifference = returnDate - departureDate;
        const dayDifference = timeDifference / (1000 * 3600 * 24);

        if (returnDate < departureDate) {
            alert('La fecha de retorno no puede ser anterior a la fecha de ida.');
            returnInput.value = '';
        } else if (dayDifference < 1) {
            alert('La fecha de retorno debe ser al menos un día después de la fecha de ida.');
            returnInput.value = '';
        }
    }
}


function searchFlights() {
    console.log('Buscando vuelos...');
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    document.body.appendChild(spinner);

    setTimeout(() => {
        spinner.remove();
        openModalWithResults(); 
    }, 1000);
}

function openModalWithResults() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'flightModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Vuelos acorde a tu búsqueda</h2>
            <div class="flight-cards">
                ${generateFlightCards()} 
            </div>
            <button class="btn" onclick="selectFlight()">Continuar con el vuelo</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('.close-btn').addEventListener('click', function() {
        modal.style.display = 'none';
    });
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

// Tarjetas de los vuelos buscados
function generateFlightCards() {
    const departureDate = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const destinationSelected = document.getElementById('destination').options[document.getElementById('destination').selectedIndex].text;

    const flightsData = [
        // Vuelos de ejemplo
        { price: '$500', imageUrl: './assets/destinations/tokyo.jpeg', brand: 'Latam Airlines',class: 'Economy' },
        { price: '$450', imageUrl: './assets/destinations/singapore.jpeg', brand: 'JetSmart',class: 'Business' },
        { price: '$700', imageUrl: './assets/destinations/indonesia.jpeg', brand: 'Sky Airlines',class: 'First Class' },
    ];

    return flightsData.map(flight => `
        <div class="destination-card flight-card" onclick="highlightCard(this)">
            <img src="${flight.imageUrl}" alt="">
            <div class="destination-details">
                <div class="detail">
                    <span class="destination-name">${destinationSelected}</span>
                    <div class="destination-data">
                        <div class="data">
                            <span>Salida: ${departureDate}</span>
                        </div>
                        <div class="data">
                            <span>Regreso: ${returnDate}</span>
                        </div>
                        <div class="data">
                            <span>${flight.brand}, ${flight.class}</span>
                        </div>
                    </div>
                </div>
                <div class="detail">
                    <span class="destination-name">${flight.price}</span>
                    <small>Incluye tasas de embarque</small>
                </div>
            </div>
        </div>
    `).join('');
}


function highlightCard(cardElement) {
    document.querySelectorAll('.flight-card').forEach(card => {
        card.classList.remove('selected');
    });
    cardElement.classList.add('selected');
}

function selectFlight() {
    const selectedCard = document.querySelector('.flight-card.selected');
    if (selectedCard) {
        alert(`Pronto podrás continuar con tu vuelo seleccionado. ¡Buen viaje!`);
        const modal = document.getElementById('flightModal');
        if (modal) {
            modal.style.display = 'none';
        }

    } else {
        alert('Por favor, selecciona un vuelo.');
    }
}




document.getElementById('contactanos').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

// Validación de formulario
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        let allValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allValid = false;
            }
        });
        submitBtn.disabled = !allValid;
    });
});

// Cerrar el modal
window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
}