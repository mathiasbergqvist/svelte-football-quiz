<script>
  import { beforeUpdate } from "svelte";

  export let team;
  import { score, round } from "../../store";
  import { correctTeamScore } from "./helpers";

  let answerManager = "";
  let answerArena = "";
  let answerPlayers = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamScore = correctTeamScore(
      answerManager,
      answerArena,
      answerPlayers,
      team
    );
    score.update((value) => value + teamScore);
    round.update((value) => value + 1);
    answerManager = "";
    answerArena = "";
    answerPlayers = [];
  };
</script>

{#if team !== undefined}
  <h2>{team.name}</h2>
  <form on:submit={handleSubmit}>
    <label for="manager">Manager</label>
    <input type="text" name="manager" bind:value={answerManager} />
    <label for="arena">Arena</label>
    <input type="text" name="arena" bind:value={answerArena} />
    {#each team.players as player, i}
      <label for={`player-${i}`}>{player.number}
        <span>{player.county}</span>
        {player.position}</label>
      <input type="text" name={`player-${i}`} bind:value={answerPlayers[i]} />
    {/each}
    <button type="Submit">Submit answers</button>
  </form>
{/if}
