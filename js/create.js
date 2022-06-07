const riderId = document.getElementById('riderId');
const riderFirstName = document.getElementById('riderFirstName');
const riderLastName = document.getElementById('riderLastName');
const riderAge = document.getElementById('riderAge');
const riderTime = document.getElementById('riderTime');
const riderPoint = document.getElementById('riderPoint');
const riderMountainPoints = document.getElementById('riderMountainPoints');
const riderCountry = document.getElementById('riderCountry');
const teamId = document.getElementById('select');
const create = document.getElementById('create');

async function createRider() {
  const url = "http://localhost:8080/create/riders";
  const data = {
    riderFirstName: riderFirstName.value,
    riderLastName: riderLastName.value,
    riderAge: riderAge.value,
    riderTime: riderTime.value,
    riderPoint: riderPoint.value,
    riderMountainPoints:riderMountainPoints.value,
    riderCountry: riderCountry.value,
    team: {
      teamId: teamId.value

    }

  }
console.log(JSON.stringify(data));
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  if (!response.ok) {
    alert("Could not create");
  } else {
    alert("is created rider name: " + data.riderFirstName);
  }
  await reloadTable();
}

create.addEventListener("click", async () => {
  console.log(riderId.value + "value");
  await createRider();
})

