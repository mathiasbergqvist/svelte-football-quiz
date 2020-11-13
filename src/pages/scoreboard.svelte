<style>
.scoreboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
}
.score {
    display: flex;
    flex-direction: row;
}
</style>

<script>
import { onMount } from 'svelte';
import { getAuthHeaders } from '../auth';

let scoreboardData = [];

onMount(async () => {
    const res = await fetch(`${API_ENDPOINT}/scores`, {
        method: 'GET',
        headers: getAuthHeaders(),
    });
    const resJson = await res.json();
    scoreboardData = resJson.sort((a, b) => a.score - b.score).reverse();
});
</script>

<h1>Scoreboard</h1>
<div class="scoreboard">
    {#each scoreboardData as score, index}
        <div class="score">{`${index + 1}. ${score.name} ${score.score}p`}</div>
    {:else}
        <h2>Scoreboard loading...</h2>
    {/each}
</div>
