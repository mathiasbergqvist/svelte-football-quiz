<script>
  import { data } from "../../data";
  import { correctTeamScore } from "../../components/Team/helpers";
  import Team from "../../components/Team/Team.svelte";
  import { score, round } from "../../store";
</script>

<h1>Team {$round + 1} of {data.length}</h1>
<Team team={data[$round]} />
<div>Score: {$score}</div>
