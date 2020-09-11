<script>
  import { data } from "../data";
  let score = 0;
</script>

<h1>{data[0].name}</h1>
<form action="">
  <label for="manager">Manager</label>
  <input type="text" name="manager" />
  <label for="arena">Arena</label>
  <input type="text" name="arena" />
  {#each data[0].players as player, i}
    <label for={`player-${i}`}>{player.number}
      <span>{player.county}</span>
      {player.position}</label>
    <input type="text" name={`player-${i}`} />
  {/each}
</form>
