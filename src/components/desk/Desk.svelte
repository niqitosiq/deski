<script>
  import DeskSlider from './DeskSlider.svelte'

  export let name
  export let colors
  export let price
  export let images

  let currentColor = colors[0]
  let currentImages
  $: {
    currentImages = images[currentColor.name]
  }
</script>

<div class="desk">
  <DeskSlider images={currentImages} />
</div>

<style lang="scss">
  .desk {
    padding: 25px;
    background: #1c1f2a;
    border-radius: 30px;
    width: calc(100% / 3 - 10px);
  }
</style>
