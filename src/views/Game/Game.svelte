<script>
  import { data } from "../../data";
  let score = 0;

  let answerManager = '';
  let answerArena = '';
  let answerPlayers = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('answerManager', answerManager);
    console.log('answerArena', answerArena);
    console.log('answerPlayers', answerPlayers);
  };

</script>

<h1>{data[0].name}</h1>
<form action="" on:submit={handleSubmit}>
  <label for="manager">Manager</label>
  <input type="text" name="manager" bind:value={answerManager} />
  <label for="arena">Arena</label>
  <input type="text" name="arena" bind:value={answerArena} />
  {#each data[0].players as player, i}
    <label for={`player-${i}`}>{player.number}
      <span>{player.county}</span>
      {player.position}</label>
    <input type="text" name={`player-${i}`} bind:value={answerPlayers[i]} />
  {/each}
  <button type="Submit">Send</button>
</form>
