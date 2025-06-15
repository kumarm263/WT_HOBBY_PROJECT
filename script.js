const plants = [
    { name: 'Peace Lily', category: 'indoor', description: 'A beautiful indoor plant with white flowers.', price: 15 },
    { name: 'Aloe Vera', category: 'succulents', description: 'Medicinal succulent plant easy to care for.', price: 10 },
    { name: 'Rose', category: 'outdoor', description: 'A fragrant flowering outdoor plant.', price: 20 }
  ];
  
  function displayPlants(filtered = 'all') {
    const container = document.getElementById('plantContainer');
    container.innerHTML = '';
    plants.filter(p => filtered === 'all' || p.category === filtered)
          .forEach(plant => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${plant.name}</h3><p><strong>Category:</strong> ${plant.category}</p><p>${plant.description}</p><p><strong>Price:</strong> $${plant.price}</p>`;
      container.appendChild(card);
    });
    updatePlantDropdown();
  }
  
  function filterPlants(category) {
    displayPlants(category);
  }
  
  function addPlant() {
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value.toLowerCase();
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);
  
    if (name && category && description && !isNaN(price)) {
      plants.push({ name, category, description, price });
      displayPlants();
      document.getElementById('name').value = '';
      document.getElementById('category').value = '';
      document.getElementById('description').value = '';
      document.getElementById('price').value = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  function updatePlantDropdown() {
    const plantSelect = document.getElementById('plantSelect');
    plantSelect.innerHTML = '<option value="">-- Select a Plant --</option>';
    plants.forEach((plant, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${plant.name} ($${plant.price})`;
      plantSelect.appendChild(option);
    });
  }
  
  function updatePrice() {
    const index = document.getElementById('plantSelect').value;
    const priceDisplay = document.getElementById('selectedPrice');
    if (index !== '') {
      priceDisplay.textContent = `Price: $${plants[index].price}`;
    } else {
      priceDisplay.textContent = '';
    }
  }
  
  function generateOrderSlip() {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const plantIndex = document.getElementById('plantSelect').value;
  
    if (name && email && plantIndex !== '') {
      const plant = plants[plantIndex];
      const slip = document.getElementById('orderSlip');
      slip.innerHTML = `
        <h3>Order Slip</h3>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plant:</strong> ${plant.name}</p>
        <p><strong>Price:</strong> $${plant.price}</p>
        <h4>Total: $${plant.price}</h4>
      `;
    } else {
      alert('Please complete all order fields.');
    }
  }
  
  // Initial load
  displayPlants();
  