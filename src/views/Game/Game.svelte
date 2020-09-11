<script>
  import { data } from "../../data";
  import { correctTeamScore } from "../../components/Team/helpers";
  import Team from "../../components/Team/Team.svelte";
  import GameOver from "../../components/GameOver/GameOver.svelte";
  import { score, round } from "../../store";
</script>

{#if round === data.length}
  <GameOver />
{:else}
  <h1>Team {$round + 1} of {data.length}</h1>
  <Team team={data[$round]} />
{/if}
<div>Score: {$score}</div>
