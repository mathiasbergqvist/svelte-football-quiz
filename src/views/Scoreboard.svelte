<script>
import { onMount } from 'svelte';

let scoreboardData = [];

onMount(async () => {
    const res = await fetch(`${API_ENDPOINT}/scores`);
    const resJson = await res.json();
    scoreboardData = resJson.sort((a, b) => a.score - b.score).reverse();
});
</script>

<h1>Scoreboard</h1>
<ul>
    {#each scoreboardData as score}
        <li><span>{score.name}</span> <span>{score.score}</span></li>
    {:else}
        <h2>Scoreboard loading...</h2>
    {/each}
</ul>
