function addScore() {
    const input = document.getElementById("name");
    const name = input.value.trim();
    const result = document.getElementById("result");

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    api.post("/add_scores.php", { player_name: name })
        .then(res => {
            result.textContent =
                `Score: ${res.data.score}
Duration: ${res.data.duration_seconds}s`;

            input.value = "";
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.error) {
                alert(err.response.data.error);
            } else {
                alert("Something went wrong. Please try again.");
            }
        });
}
