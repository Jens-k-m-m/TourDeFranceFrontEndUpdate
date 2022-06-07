const reset = document.getElementById('reset');
reset.addEventListener("click", resetWeb);
const table = document.getElementById('table');

// find by FirstName
const input = document.getElementById('search-input');
const search = document.getElementById('search');

//find by FirstName
async function getRidersBySearch(searchFirstName) {
  const url = "http://localhost:8080/byFirstName/riders/" + searchFirstName;
  const resp = await fetch(url);
  const respData = await resp.json();
  resetTable();
 addDataToRows(respData);
}

//find by FirstName
search.addEventListener("click", async () => {
  const firstName = input.value;

  if (firstName) {


    await getRidersBySearch(firstName);
  }

})
//find by FirstName
//find by time

const sortTimeBut = document.getElementById('sortTime');

async function getRidersSortByBestTime() {
  const url = "http://localhost:8080/sortByTimes/riders";
  const resp = await fetch(url);
  const respData = await resp.json();
  resetTable();
 addDataToRows(respData);
}
//find by time
sortTimeBut.addEventListener("click", async () => {

    await getRidersSortByBestTime();


})
//find by time


// find by getRiderFromGivenTeams
const inputTeamId = document.getElementById('search-inputTeamId');
const searchTeam = document.getElementById('searchTeam');

// find by getRiderFromGivenTeams
async function getRiderFromGivenTeams(teamId) {
  const url = "http://localhost:8080/team/riders/" + teamId;
  const resp = await fetch(url);
  const respData = await resp.json();
  resetTable();
addDataToRows(respData);
}


// find by getRiderFromGivenTeams
searchTeam.addEventListener("click", async () => {
  const teamId = inputTeamId.value;
    await getRiderFromGivenTeams(teamId);
})

// find by getRiderFromGivenTeams

function resetTable() {
  table.innerHTML = "";
  inputTeamId.innerHTML = "";
  tableHeadlines();
}

async function resetWeb() {
  table.innerHTML = "";
  tableHeadlines()
  await getRiders()

}


async function getRiders() {
  const url = "http://localhost:8080/show/riders";
  const resp = await fetch(url);
  const respData = await resp.json();
   addDataToRows(respData);
}

function tableHeadlines() {
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);
  row.insertCell(0).innerText = "Id";
  row.insertCell(1).innerText = "First Name";
  row.insertCell(2).innerText = "Last Name";
  row.insertCell(3).innerText = "Age";
  row.insertCell(4).innerText = "Time";
  row.insertCell(5).innerText = "Point";
  row.insertCell(6).innerText = "Mountain Points";
  row.insertCell(7).innerText = "Country";
  row.insertCell(8).innerHTML = "Team Id";
  row.insertCell(9).innerHTML = "Team Name";
  row.insertCell(10).innerHTML = "Team Country";
}
function addDataToRows(data) {
  // const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
  if(data) {
    data.forEach(element => {
      let rowCount = table.rows.length;
      let row = table.insertRow(rowCount);
      row.insertCell(0).innerHTML = element.riderId;
      row.insertCell(1).innerHTML = element.riderFirstName;
      row.insertCell(2).innerHTML = element.riderLastName;
      row.insertCell(3).innerHTML = element.riderAge;
      row.insertCell(4).innerHTML = element.riderTime;
      row.insertCell(5).innerHTML = element.riderPoint;
      row.insertCell(6).innerHTML = element.riderMountainPoints;
      row.insertCell(7).innerHTML = element.riderCountry;
      row.insertCell(8).innerHTML = element.team.teamId;
      row.insertCell(9).innerHTML = element.team.teamName;
      row.insertCell(10).innerHTML = element.team.teamCountry;
    })
  }
}

 function reloadTable() {

  resetTable();
  getRiders();
}

reloadTable();

