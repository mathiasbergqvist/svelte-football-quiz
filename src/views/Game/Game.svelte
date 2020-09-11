<script>
  import { data } from "../../data";
  import {correctTeamScore} from './helpers';
  import Team from "../../components/Team/Team.svelte";

  let score = 0;
  let round = 0;

  let answerManager = '';
  let answerArena = '';
  let answerPlayers = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamScore = correctTeamScore(answerManager, answerArena, answerPlayers, data[0]);
    score+= teamScore;
  };

</script>

<h1>Team {round + 1} of {data.length}</h1>
<Team team={data[round]} />
<div>Score: {score}</div>
