<style>
h1 {
    font-size: 3rem;
    font-weight: 400;
}
.scorecard {
    font-size: 1.5rem;
    text-transform: uppercase;
    background: #c6f68d;
    width: 300px;
    margin: auto;
    border: 2px solid #75e900;
    padding: 10px;
}
</style>

<script>
import Team from '../../components/Team/Team.svelte';
import GameOver from '../../components/GameOver/GameOver.svelte';
import { score, round, gameOngoing } from '../../store';
import { onMount } from 'svelte';
import { getAuthHeaders } from '../../auth';

let teams = [];

onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    teams = await res.json();

    // Start game state
    gameOngoing.update((value) => true);
});
</script>

{#if !$gameOngoing}
    <GameOver />
{:else if teams}
    <h1>Team {$round + 1} of {teams.length}</h1>
    <Team team="{teams[$round]}" noOfTeams="{teams.length}" />
{:else}
    <h3>Loading teams data</h3>
{/if}
<p class="scorecard">Score: {$score}</p>
