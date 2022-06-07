const riderIdDelete = document.getElementById('riderId');
const deletebut = document.getElementById('delete');

async function deleteRider(findId) {
  const url = "http://localhost:8080/delete/rider/" + findId;

  await fetch(url, {
    method: "DELETE",
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })

  riderIdDelete.reset;
 await reloadTable();
}

deletebut.addEventListener("click", async () => {
  if (confirm('Do you want to delete this record,\nrider Id: ' + riderId.value)) {
    await deleteRider(riderIdDelete.value);
  }
})




