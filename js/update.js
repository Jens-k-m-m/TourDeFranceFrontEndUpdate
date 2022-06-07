const inputEdit = document.getElementById('search-id');
const findByIdBut = document.getElementById('findID');


async function getRiderBySearchById(searchById) {
  const url = "http://localhost:8080/findRiderById/rider/" + searchById;
  const resp = await fetch(url);
  const respData = await resp.json();
  resetTable();
   addDataToRows(respData);
  riderEditFrom(respData);
}

findByIdBut.addEventListener("click", async () => {
  const ridersById = inputEdit.value;
  if (ridersById) {
    await getRiderBySearchById(ridersById);
  }
})

function riderEditFrom(data) {
  Object.values(data).forEach(element => {

    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = `<input disabled id="updateRider-riderId" value="${element.riderId}">`;
    row.insertCell(1).innerHTML = `<input  id="updateRider-riderFirstName" value="${element.riderFirstName}">`;
    row.insertCell(2).innerHTML = `<input  id="updateRider-riderLastName" value="${element.riderLastName}">`;
    row.insertCell(3).innerHTML = `<input  id="updateRider-riderAge" value="${element.riderAge}">`;
    row.insertCell(4).innerHTML = `<input  id="updateRider-riderTime" value="${element.riderTime}">`;
    row.insertCell(5).innerHTML = `<input  id="updateRider-riderPoint" value="${element.riderPoint}">`;
    row.insertCell(6).innerHTML = `<input  id="updateRider-riderMountainPoints" value="${element.riderMountainPoints}">`;
    row.insertCell(7).innerHTML = `<input  id="updateRider-riderCountry" value="${element.riderCountry}">`;
    row.insertCell(8).innerHTML = `<input  id="updateTeam-teamId" value="${element.team.teamId}">`;
    row.insertCell(9).innerHTML = `<input disabled id="updateTeam-teamName" value="${element.team.teamName}">`;
    row.insertCell(10).innerHTML = `<input disabled id="updateTeam-teamCountry" value="${element.team.teamCountry}">`;
    row.insertCell(11).innerHTML = `<button  onclick="updateRider()" > Update Rider</button>`;
  })
}

async function updateRider() {
  const riderId = document.getElementById('updateRider-riderId');//1
  const riderFirstName = document.getElementById('updateRider-riderFirstName');//2
  const riderLastName = document.getElementById('updateRider-riderLastName');//3
  const riderAge = document.getElementById('updateRider-riderAge');//4
  const riderTime = document.getElementById('updateRider-riderTime');//5
  const riderPoint = document.getElementById('updateRider-riderPoint');//6
  const riderMountainPoints = document.getElementById('updateRider-riderMountainPoints');//7
  const riderCountry = document.getElementById('updateRider-riderCountry');//8
  const teamId = document.getElementById("updateTeam-teamId");//9
  const teamName = document.getElementById("updateTeam-teamName");//10
  const teamCountry = document.getElementById("updateTeam-teamCountry");//11


  const url = "http://localhost:8080/update/rider/" + riderId.value;
  const data = {
    riderId: riderId.value,
    riderFirstName: riderFirstName.value,
    riderLastName: riderLastName.value,
    riderAge: riderAge.value,
    riderTime: riderTime.value,
    riderPoint: riderPoint.value,
    riderMountainPoints: riderMountainPoints.value,
    riderCountry: riderCountry.value,
    // Nest Objet in en objet finder specifik ind i objet, havd jeg skal bruge.
    team: {
      teamId: teamId.value,
      teamName: teamName.value,
      teamCountry: teamCountry.value
    }

  }


  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}

  })
  console.log(data + "update4")
  if (!response.ok) {
    alert("Could not update ");
  } else {
    alert("is updated");
  }
  resetTable();
  await resetWeb();
   addDataToRows();

}




