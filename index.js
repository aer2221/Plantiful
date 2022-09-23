
async function getData() {
    const response = await fetch('NYPlants.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    rows.forEach(plant => {
        const row = plant.split(',');
        const scientificName = row[0];
        const commonName = row[1];
        const duration = row[2];
        const habit = row[3];
        const sun = row[4];
        const water = row[5];
        console.log(scientificName, commonName, duration, habit, sun, water);
    })
}
