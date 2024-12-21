hff
// Function to create the stars dynamically
function createStars() {
    const starContainer = document.querySelector('.stars');
    
    // Generate 50 stars
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Set random position and size for each star
      const size = Math.random() * 3 + 1; // Star size between 1px and 3px
      const left = Math.random() * 100; // Random horizontal position (percentage)
      const top = Math.random() * 100; // Random vertical position (percentage)
      
      // Set the style for each star
      star.style.width = ${size}px;
      star.style.height = ${size}px;
      star.style.left = ${left}%;
      star.style.top = ${top}%;
      star.style.animationDuration = ${Math.random() * 3 + 2}s; // Random twinkling duration between 2s to 5s
      star.style.animationDelay = ${Math.random() * 3}s; // Random animation start time
  
      // Add the star to the container
      starContainer.appendChild(star);
    }
  }
  
  // Call the createStars function on page load
  window.onload = createStars;
  
  function calculateWeight() {
    const weight = document.getElementById('weight').value;
    const planet = document.getElementById('planet').value;
  
    if (weight === '') {
      alert("Please enter your weight.");
      return;
    }
  
    const gravity = {
      mercury: 0.38,
      venus: 0.91,
      earth: 1,
      mars: 0.38,
      jupiter: 2.34,
      saturn: 1.06,
      uranus: 0.92,
      neptune: 1.19,
      moon: 0.165,  // Gravity on Earth's Moon
      pluto: 0.06   // Gravity on Pluto
    };
  
    const facts = {
      mercury: "Mercury is the closest planet to the Sun.",
      venus: "Venus has a surface temperature of around 465°C.",
      earth: "Earth is the only known planet to support life.",
      mars: "Mars is known as the Red Planet because of its reddish appearance.",
      jupiter: "Jupiter is the largest planet in our solar system.",
      saturn: "Saturn has the most spectacular ring system.",
      uranus: "Uranus is tilted at a 98° angle, making it unique among planets.",
      neptune: "Neptune has the strongest winds of any planet in the solar system.",
      moon: "The Moon is about 1/6th the gravity of Earth.",
      pluto: "Pluto was reclassified as a dwarf planet in 2006."
    };
  
    // Calculate the weight based on the selected planet
    let result = parseFloat(weight) * gravity[planet];
  
    // Display the result in kg
    result = result.toFixed(2);
    document.getElementById('result').textContent = Your weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)} is: ${result} kg;
  
    // Show the fun fact about the selected planet
    document.getElementById('planet-fact').textContent = facts[planet];
  }
  
  function resetCalculator() {
    document.getElementById('weight').value = '';
    document.getElementById('planet').value = 'earth';
    document.getElementById('result').textContent = '';
    document.getElementById('planet-fact').textContent = '';  // Clear the planet fact
  }