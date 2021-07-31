<script>
  import Desk from '@/components/desk/Desk.svelte'

  import { DESK_CATALOG } from '@/consts/catalog'
</script>

<div id="catalog">
  <div class="container catalog">
    {#each DESK_CATALOG as desk}
      <Desk {...desk} />
    {/each}
  </div>
</div>

<style lang="scss">
  #catalog {
    margin-top: 170px;
  }

  .catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
