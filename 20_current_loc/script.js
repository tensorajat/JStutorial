const buttton = document.getElementById("get-location");


async function getData(lat, long)
{
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=668b8652789c493bafb81611240601&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}
async function gotlocation(position)
{
  const result = await getData(position.coords.latitude, position.coords.longitude);
  console.log(result);
}

function failedToGet(){
  console.log("failed to get location");
}
buttton.addEventListener('click', async () => {
  navigator.geolocation.getCurrentPosition(gotlocation,failedToGet);
});