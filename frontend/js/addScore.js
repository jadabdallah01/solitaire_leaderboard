function addScore() {
    const name = document.getElementById("name").value;

    api.post("/add_score.php", { player_name: name })
       .then(res => {
           document.getElementById("result").textContent =
             `Score: ${res.data.score}
Duration: ${res.data.duration_seconds}s`;
       })
       .catch(err => alert("Error adding score"));
}
