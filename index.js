
getData();

async function getData() {
    const response = await fetch('NYPlants.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);
    console.log(rows);
}
