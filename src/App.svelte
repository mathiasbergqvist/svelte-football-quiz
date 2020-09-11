<script>
  import { Route, Router } from "svelte-routing";
  import Game from "./views/Game/Game.svelte";
  import Home from "./views/Home.svelte";
  import Scoreboard from "./views/Scoreboard.svelte";

  export let url = "";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Router {url}>
  <main>
    <div>
      <Route path="game" component={Game} />
      <Route path="scoreboard" component={Scoreboard} />
      <Route path="/">
        <Home />
      </Route>
    </div>
  </main>
</Router>
