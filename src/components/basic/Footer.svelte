<script>
  import BaseMenu from './BaseMenu.svelte'
</script>

<footer class="footer container">
  <BaseMenu />
</footer>

<style lang="scss">
  .footer {
    z-index: 20;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    @media screen and (max-width: 848px) {
      flex-direction: column;
    }
    @media screen and (max-width: 620px) {
      padding-top: 40px;
    }
    @media screen and (max-width: 420px) {
      padding-top: 20px;
    }
  }
</style>
