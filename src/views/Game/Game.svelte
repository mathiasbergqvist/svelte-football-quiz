<script>
  import { correctTeamScore } from "../../components/Team/helpers";
  import Team from "../../components/Team/Team.svelte";
  import GameOver from "../../components/GameOver/GameOver.svelte";
  import { score, round, gameOngoing } from "../../store";
  import { onMount } from "svelte";

  let teams = [];

  onMount(async () => {
    // Load temas from DB
    const res = await fetch(`${API_ENDPOINT}/teams`);
    teams = await res.json();

    // Start game state
    gameOngoing.update((value) => true);
  });
</script>

{#if !$gameOngoing}
  <GameOver />
{:else if teams}
  <h1>Team {$round + 1} of {teams.length}</h1>
  <Team team={teams[$round]} noOfTeams={teams.length} />
{:else}
  <h2>Loading teams data</h2>
{/if}
<div>Score: {$score}</div>
