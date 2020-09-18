<script>
  import { data } from "../../data";
  import { correctTeamScore } from "../../components/Team/helpers";
  import Team from "../../components/Team/Team.svelte";
  import GameOver from "../../components/GameOver/GameOver.svelte";
  import { score, round, gameOngoing } from "../../store";
  import { onMount } from "svelte";

  onMount(() => {
    gameOngoing.update((value) => true);
  });
</script>

{#if !$gameOngoing}
  <GameOver />
{:else}
  <h1>Team {$round + 1} of {data.length}</h1>
  <Team team={data[$round]} noOfTeams={data.length} />
{/if}
<div>Score: {$score}</div>
