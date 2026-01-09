const API_URL="http://localhost/solitaire_leaderboard/backend/";
const api= axios.create({
    baseurl:API_URL,
    headers:{'Content-Type':'application/json'}
});