
async function getData() {
    const response = await fetch('test.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    const dataArray = [];
    
    rows.forEach(plant => {
        const row = plant.split(',');
        dataArray.push({scientificName: row[0], commonName: row[1], duration: row[2], habit: row[3], sun: row[4], water: row[5], image: row[6]});
    })
    const div = document.getElementById('darien');
    div.innerHTML = "";
    for(i = 0; i < 6; i++){
      randInt = Math.floor(Math.random() * 14);
      
      var img = document.createElement('img');
      img.src = dataArray[randInt].image;
      div.appendChild(img);
      scientificName = document.createTextNode("Scientific Name: " + dataArray[randInt].scientificName);
      commonName = document.createTextNode("Common Name: " + dataArray[randInt].commonName);
      duration = document.createTextNode("Life Duration: " + dataArray[randInt].duration);
      habit = document.createTextNode("Type: " + dataArray[randInt].habit);
      sun = document.createTextNode("How Much Sunlight: " + dataArray[randInt].sun);
      water = document.createTextNode("How Much Water: " + dataArray[randInt].water);
      div.innerHTML += "<br>";
      div.appendChild(scientificName);
      div.innerHTML += "<br>";
      div.appendChild(commonName);
      div.innerHTML += "<br>";
      div.appendChild(duration);
      div.innerHTML += "<br>";
      div.appendChild(habit);
      div.innerHTML += "<br>";
      div.appendChild(sun);
      div.innerHTML += "<br>";
      div.appendChild(water);
      div.innerHTML += "<br>";
    };
};