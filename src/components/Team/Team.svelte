<script>
  import { beforeUpdate, onMount } from "svelte";
  import { score, round, gameOngoing } from "../../store";
  import { correctTeamScore, isCorrectSpelling } from "./helpers";

  export let team;
  export let noOfTeams;

  let answerManager = "";
  let answerArena = "";
  let answerPlayers = [];
  let correctionMode = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correctionMode) {
      startNextRound();
    } else {
      correctScore();
    }
  };

  const correctScore = (e) => {
    const teamScore = correctTeamScore(
      answerManager,
      answerArena,
      answerPlayers,
      team
    );

    // Update score and round
    score.update((value) => value + teamScore);

    //Toggle correction mode
    correctionMode = true;
  };

  const startNextRound = () => {
    round.update((value) => value + 1);

    //Re-set all states
    answerManager = "";
    answerArena = "";
    answerPlayers = [];
    correctionMode = false;

    // Game over?
    if ($round === noOfTeams) {
      gameOngoing.update((value) => false);
    }
  };

  const getInputStyling = (shouldStyle, value, player) => {
    if (!shouldStyle) {
      return "";
    }

    if (
      value !== undefined &&
      player !== undefined &&
      isCorrectSpelling(value, player)
    ) {
      return "border: 4px solid #28cc1d";
    }

    return "border: 4px solid #ff3c36";
  };
</script>

{#if team !== undefined}
  <h2>{team.name}</h2>
  <form on:submit={handleSubmit}>
    <label for="manager">Manager</label>
    <input
      type="text"
      name="manager"
      bind:value={answerManager}
      disabled={correctionMode}
      style={getInputStyling(correctionMode, answerManager, team.manager)} />
    {#if correctionMode}
      <div>{team.manager}</div>
    {/if}
    <label for="arena">Arena</label>
    <input
      type="text"
      name="arena"
      bind:value={answerArena}
      style={getInputStyling(correctionMode, answerArena, team.arena)}
      disabled={correctionMode} />
    {#if correctionMode}
      <div>{team.arena}</div>
    {/if}
    {#each team.players as player, i}
      <label for={`player-${i}`}>{player.number}
        <span>{player.county}</span>
        {player.position}</label>
      <input
        type="text"
        name={`player-${i}`}
        bind:value={answerPlayers[i]}
        disabled={correctionMode}
        style={getInputStyling(correctionMode, answerPlayers[i], player.name)} />
      {#if correctionMode}
        <div>{player.name}</div>
      {/if}
    {/each}
    {#if correctionMode}
      <button type="Submit">Next round</button>
    {:else}<button type="Submit">Submit answers</button>{/if}
  </form>
{/if}
