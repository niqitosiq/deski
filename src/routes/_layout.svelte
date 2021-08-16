<script>
  import Header from '@/components/basic/Header/Header.svelte'
  import Modal from 'svelte-simple-modal'
</script>

<main>
  <Header />
  <Modal>
    <slot />
  </Modal>
</main>

<style lang="scss" global>
  @import '../styles/main';
</style>
