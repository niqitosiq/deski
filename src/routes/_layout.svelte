<script>
  import Header from '@/components/basic/Header/Header.svelte'
  import Modal from 'svelte-simple-modal'
</script>

<svelte:head>
  <link
    rel="preload"
    href="/fonts/gilroy-regular.woff2"
    as="font"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/gilroy-medium.woff2"
    as="font"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/gilroy-semibold.woff2"
    as="font"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/gilroy-bold.woff2"
    as="font"
    crossorigin="anonymous"
  />
</svelte:head>

<main>
  <Header />

  <Modal>
    <slot />
  </Modal>
</main>

<style lang="scss" global>
  @import '../styles/main';
</style>
