<script>
  import Header from '@/components/basic/Header/Header.svelte'
</script>

<main>
  <Header />
  <slot />
</main>

<style lang="scss" global>
  @import '../styles/main';
</style>
