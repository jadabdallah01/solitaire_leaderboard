const API_BASE = "http://localhost/solitaire_leaderboard/backend";

const api = axios.create({
    baseURL: API_BASE,
    headers: { "Content-Type": "application/json" }
});
