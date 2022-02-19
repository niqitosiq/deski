<script>
  import BaseMenu from '../BaseMenu.svelte'
</script>

<header class="header container">
  <BaseMenu />
</header>

<style lang="scss">
  .header {
    z-index: 20;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 36px;

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
