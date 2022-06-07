const select = document.getElementById('select');

async function getTeams() {
  const url = "http://localhost:8080/show/teams";
  const resp = await fetch(url);
  const respData = await resp.json();
  addTeamDataToOptions(respData);
}
function addTeamDataToOptions(teamsData){
  teamsData.forEach(element => {
    let option = document.createElement("option");
    option.innerText=element.teamName;
    option.value=element.teamId;
    select.appendChild(option);
  })
}
getTeams();
