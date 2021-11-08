<script>
  import DeskFullInfo from '../desk/DeskFullInfo.svelte'

  export let desk
  export let activeImage = 0
</script>

<div class="desk">
  <DeskFullInfo {desk} {activeImage} />
</div>

<style lang="scss">
  .desk {
    background-color: #1c1f2a;
    border-radius: 10px;
    :global(.head) {
      padding: 30px;
    }
    :global(.info) {
      padding: 0 30px;
    }
  }
</style>
