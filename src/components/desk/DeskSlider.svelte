<script>
  import Splide from '@splidejs/splide/src/js/splide'
  import { LIGHT } from '@splidejs/splide/src/js/components/index'
  import { Fade } from '@splidejs/splide/src/js/transitions/index'
  import { onMount, tick } from 'svelte'
  import Image from '../ui/Image.svelte'
  import { throttle } from 'lodash'

  export let images

  let splideWrapper
  let splideInstance = null
  let activeIndex = 0
  let mounted = false

  const slideChanged = () => {
    activeIndex = splideInstance.index || 0
  }

  $: {
    if (images) {
      ;(async () => {
        await tick()
        initSplide()
      })()
    }
  }

  function initSplide() {
    if (!mounted) return

    if (splideInstance) splideInstance.destroy()

    activeIndex = 0

    splideInstance = new Splide(splideWrapper, {
      gap: 0,
      perPage: 1,
      type: 'fade',
      arrows: false,
      fixedHeight: '336px',
    }).mount(LIGHT, Fade)

    splideInstance.on('moved', slideChanged)
  }

  onMount(() => {
    mounted = true
    initSplide()
  })

  const processPosition = throttle((event) => {
    const x = event.layerX
    const imageIndex = parseInt(x / (splideWrapper.offsetWidth / images.length))
    splideInstance.go(imageIndex)
  }, 20)
</script>

<div
  bind:this={splideWrapper}
  class="desk-slider"
  on:mousemove={processPosition}
>
  <div class="splide__track">
    <div class="splide__list">
      {#each images as image, index}
        <div class="splide__slide">
          {#if index === activeIndex}
            <Image src="/img/desks/{image}" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .desk-slider {
    width: 500px;
    padding: 50px;
    background: #262832;
    border-radius: 30px;
  }
</style>
