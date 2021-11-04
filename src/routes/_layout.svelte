<script>
  import Footer from '@/components/basic/Footer.svelte'
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

<Header />
<main>
  <Modal>
    <slot />
  </Modal>
</main>
<Footer />

<style lang="scss" global>
  @import '../styles/main';
</style>
