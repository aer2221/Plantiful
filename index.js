async function getData() {
  const response = await fetch('test.csv');
  const data = await response.text();
  const rows = data.split('\n').slice(1);
  const dataArray = [];
  
  rows.forEach(plant => {
      const row = plant.split(',');
      dataArray.push({scientificName: row[0], commonName: row[1], duration: row[2], habit: row[3], sun: row[4], water: row[5], image: row[6]});
  });

  const div = document.getElementById('container');
  div.innerHTML = "";
  for(i = 0; i < 6; i++){
    randInt = Math.floor(Math.random() * 64);
    const newDiv = document.createElement('div');
      div.appendChild(newDiv);
    newDiv.style.width = "350px";
    newDiv.style.margin = "10px";
    const img = document.createElement('img');
      img.src = dataArray[randInt].image;
      newDiv.appendChild(img);
    scientificName = document.createTextNode("Scientific Name: " + dataArray[randInt].scientificName);
    commonName = document.createTextNode("Common Name: " + dataArray[randInt].commonName);
    duration = document.createTextNode("Life Duration: " + dataArray[randInt].duration);
    habit = document.createTextNode("Type: " + dataArray[randInt].habit);
    sun = document.createTextNode("How Much Sunlight: " + dataArray[randInt].sun);
    water = document.createTextNode("How Much Water: " + dataArray[randInt].water);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(scientificName);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(commonName);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(duration);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(habit);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(sun);
    newDiv.innerHTML += "<br>";
    newDiv.appendChild(water);
    newDiv.innerHTML += "<br>";
  };
};
