api.get("/get_scores.php")
   .then(res => {
       const tbody = document.getElementById("scores");
       tbody.innerHTML = "";

       res.data.forEach(s => {
           tbody.innerHTML += `
             <tr>
                <td>${s.player_name}</td>
                <td><span class="badge">${s.score}</span></td>
                <td>${s.duration_seconds}</td>
             </tr>
           `;
       });
   });
