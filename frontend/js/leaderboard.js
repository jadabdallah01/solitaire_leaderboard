api.get("/gets_scores.php").then(res=>{
    const tbody= document.getElementById("scores");
    res.data.forEach(s=>{
        tbody.innerHTML+=`<tr>
            <td>${s.player_name}</td>
            <td>${s.score}</td>
            <td>${s.duration_seconds}</td>
        </tr>`;
    });
});