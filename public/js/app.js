let waterUsage = 2000; // Default value for Traditional Farming
let energyUsage = 50; // Default value for Traditional Farming
let ghgEmissions = 15; // Default value for Traditional Farming

// Function to update graph and detailed info based on food production method
function updateProduction(method) {
  if (method === 'traditional') {
    waterUsage = 2000;
    energyUsage = 50;
    ghgEmissions = 15;
    document.getElementById('traditional-info').innerHTML = `
      <strong>Traditional Farming</strong> uses high levels of water and energy. It also contributes to soil degradation and greenhouse gas emissions due to fertilizers and livestock. 
      <ul>
        <li>High water consumption: 1500-2000L per kg of meat</li>
        <li>High energy consumption due to intensive farming and transport</li>
        <li>Major contributor to greenhouse gas emissions, especially from livestock (methane)</li>
        <li>Leads to deforestation for agricultural land</li>
        <li>Soil degradation due to monocropping and overuse of chemicals</li>
      </ul>
    `;
    document.getElementById('plant-based-info').innerHTML = '';
    document.getElementById('lab-grown-info').innerHTML = '';
    document.getElementById('traditional-btn').textContent = 'Selected';
    document.getElementById('plant-based-btn').textContent = 'Select Plant-Based';
    document.getElementById('lab-grown-btn').textContent = 'Select Lab-Grown';
  } else if (method === 'plant-based') {
    waterUsage = 500;
    energyUsage = 30;
    ghgEmissions = 2;
    document.getElementById('plant-based-info').innerHTML = `
      <strong>Plant-Based</strong> diets require significantly less water and energy. Plant-based foods also result in lower greenhouse gas emissions, making them a more sustainable and healthier choice.
      <ul>
        <li>Requires only 300-500L of water per kg of food</li>
        <li>Low energy consumption compared to animal farming</li>
        <li>Lower greenhouse gas emissions: up to 80% less than animal products</li>
        <li>Supports biodiversity and reduces deforestation</li>
        <li>Health benefits include lower risks of heart disease, diabetes, and obesity</li>
      </ul>
    `;
    document.getElementById('traditional-info').innerHTML = '';
    document.getElementById('lab-grown-info').innerHTML = '';
    document.getElementById('plant-based-btn').textContent = 'Selected';
    document.getElementById('traditional-btn').textContent = 'Select Traditional Farming';
    document.getElementById('lab-grown-btn').textContent = 'Select Lab-Grown';
  } else if (method === 'lab-grown') {
    waterUsage = 300;
    energyUsage = 100;
    ghgEmissions = 5;
    document.getElementById('lab-grown-info').innerHTML = `
      <strong>Lab-Grown Meat</strong> is an innovative technology that grows meat from animal cells in a controlled lab environment. This method uses less water and land, and reduces greenhouse gas emissions.
      <ul>
        <li>Uses 90% less water than traditional livestock farming</li>
        <li>Reduces energy consumption compared to traditional meat production</li>
        <li>Lower greenhouse gas emissions, but higher energy usage in the production process</li>
        <li>Requires specialized lab infrastructure and is still expensive to scale</li>
        <li>Reduces the need for animal slaughter, supporting animal welfare</li>
      </ul>
    `;
    document.getElementById('traditional-info').innerHTML = '';
    document.getElementById('plant-based-info').innerHTML = '';
    document.getElementById('lab-grown-btn').textContent = 'Selected';
    document.getElementById('traditional-btn').textContent = 'Select Traditional Farming';
    document.getElementById('plant-based-btn').textContent = 'Select Plant-Based';
  }
  updateChart();
  updateSummary(); // Call to update the summary after any change
}

// Function to update the chart based on dietary choice
function updateDiet(diet) {
  let dietInfo = '';
  if (diet === 'whole') {
    waterUsage -= 100;
    energyUsage -= 10;
    ghgEmissions -= 1;
    dietInfo = 'Whole foods are minimally processed and provide essential nutrients while being more sustainable in terms of water and energy use. They are linked to improved health outcomes and a lower carbon footprint.';
  } else if (diet === 'processed') {
    waterUsage += 200;
    energyUsage += 30;
    ghgEmissions += 5;
    dietInfo = 'Processed foods often require more water, energy, and contribute to higher greenhouse gas emissions. They are linked to health issues such as obesity and diabetes, and are less sustainable.';
  } else if (diet === 'plant-based') {
    waterUsage -= 50;
    energyUsage -= 20;
    ghgEmissions -= 2;
    dietInfo = 'Plant-based diets are highly sustainable, requiring less water and energy, and contributing fewer greenhouse gas emissions. They are also healthier and linked to lower chronic disease rates.';
  } else if (diet === 'vegan') {
    waterUsage -= 100;
    energyUsage -= 40;
    ghgEmissions -= 4;
    dietInfo = 'Vegan diets are the most sustainable option, significantly reducing water usage, energy consumption, and carbon emissions. They also promote better health outcomes and lower the risk of chronic diseases.';
  }
  document.getElementById('diet-info').innerHTML = `<strong>Dietary Impact:</strong> ${dietInfo}`;
  updateChart();
  updateSummary(); // Call to update the summary after any change
}

// Function to update the chart based on waste management choice
function updateWaste(path) {
  let wasteInfo = '';
  if (path === 'compost') {
    waterUsage -= 50;
    energyUsage -= 10;
    ghgEmissions -= 1;
    wasteInfo = 'Composting is the most sustainable waste management method, turning organic waste into valuable soil. It reduces landfill use, lowers greenhouse gas emissions, and conserves water and energy.';
  } else if (path === 'landfill') {
    waterUsage += 100;
    energyUsage += 20;
    ghgEmissions += 4;
    wasteInfo = 'Landfill disposal generates methane, a potent greenhouse gas, and occupies large amounts of land. It contributes to groundwater contamination and is the least sustainable waste management method.';
  } else if (path === 'recycle') {
    waterUsage -= 10;
    energyUsage -= 5;
    ghgEmissions -= 2;
    wasteInfo = 'Recycling conserves resources, reduces energy consumption, and lowers emissions. It helps prevent waste from entering landfills and supports a circular economy.';
  } else if (path === 'incineration') {
    waterUsage += 50;
    energyUsage += 30;
    ghgEmissions += 6;
    wasteInfo = 'Incineration converts waste into ash, energy, and gases. While it reduces landfill usage, it contributes significantly to air pollution and greenhouse gas emissions.';
  }
  document.getElementById('waste-info').innerHTML = `<strong>Waste Management Impact:</strong> ${wasteInfo}`;
  updateChart();
  updateSummary(); // Call to update the summary after any change
}

// Function to update the chart dynamically based on the user's selections
function updateChart() {
  impactChart.data.datasets[0].data = [waterUsage, energyUsage, ghgEmissions];
  impactChart.update();
}

// Function to generate the summary of user's choices and describe the graph
function updateSummary() {
    // Update the graph data
    document.getElementById('summary-water').textContent = waterUsage + ' L';
    document.getElementById('summary-energy').textContent = energyUsage + ' MJ';
    document.getElementById('summary-ghg').textContent = ghgEmissions + ' kg CO2e';
  
    // Description based on the data ranges
    let graphDescription = '';

        if (waterUsage > 1500 || energyUsage > 100 || ghgEmissions > 10) {
          graphDescription = '<span style="color: red; font-weight: bold;">The environmental impact is severe.</span>';
        } else if (waterUsage > 1000 || energyUsage > 50 || ghgEmissions > 5) {
          graphDescription = '<span style="color: darkgoldenrod; font-weight: bold;">The environmental impact is moderate.</span>';
        } else {
          graphDescription = '<span style="color: green; font-weight: bold;">The environmental impact is minimal.</span>';
        }
      
        // Updating the description in the designated div
        document.getElementById('graph-description').innerHTML = graphDescription;
  }

// Chart.js - Impact Graph
const ctx = document.getElementById('impact-chart').getContext('2d');
const impactChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Water Usage (L)', 'Energy Usage (MJ)', 'GHG Emissions (kg CO2e)'],
    datasets: [{
      label: 'Impact of Selected Choices',
      data: [waterUsage, energyUsage, ghgEmissions],
      backgroundColor: ['#ff5a5f', '#56cfe1', '#f0f3bd'],
      borderColor: ['#ff2a2d', '#00bcd4', '#c8d900'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});
