<script>
  import { onMount, tick } from 'svelte'
  import Splide from '@splidejs/splide/src/js/splide'
  import { Fade, Slide } from '@splidejs/splide/src/js/transitions/index'
  import { SPLIDE_GALLERY } from '@/consts/splideGallery'
  import Image from '../ui/Image.svelte'

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let images = []
  export let active = 0

  let secondarySlider
  let splideSecondaryInstance

  let primarySlider
  let splidePrimaryInstance

  let mounted = false

  $: {
    if (images) {
      ;(async () => {
        await tick()
        initGallery()
      })()
    }
  }

  const initGallery = async () => {
    if (!mounted) return

    if (splideSecondaryInstance) splideSecondaryInstance.destroy()
    if (splidePrimaryInstance) splidePrimaryInstance.destroy()

    splideSecondaryInstance = new Splide(secondarySlider, {
      fixedWidth: 100,
      gap: 10,
      isNavigation: true,
      pagination: false,
      focus: 'center',
      breakpoints: {
        '600': {
          fixedWidth: 66,
          height: 40,
        },
      },
    }).mount(SPLIDE_GALLERY, Slide)

    splidePrimaryInstance = new Splide(primarySlider, {
      type: 'fade',
      heightRatio: 0.5,
      pagination: false,
      arrows: false,
      cover: true,
    })

    splidePrimaryInstance
      .sync(splideSecondaryInstance)
      .mount(SPLIDE_GALLERY, Fade)

    setTimeout(() => splidePrimaryInstance.go(active), 300)
  }

  onMount(() => {
    mounted = true
    initGallery()
  })

  function imageClick(activeImage) {
    dispatch('imageClick', {
      activeImage,
    })
  }
</script>

<div class="gallery">
  <div bind:this={primarySlider} class="splide image">
    <div class="splide__track">
      <ul class="splide__list">
        {#each images as image, index}
          <li class="splide__slide" on:click={() => imageClick(index)}>
            <Image
              src={image.img || image.src || image.preview || image}
              alt=""
            />
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div bind:this={secondarySlider} class="splide previews">
    <div class="splide__track">
      <ul class="splide__list">
        {#each images as image}
          <li class="splide__slide">
            <Image
              src={image.preview || image.src || image.img || image}
              alt=""
            />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  .gallery {
    :global(.splide--nav > .splide__track > .splide__list > .splide__slide) {
      border-radius: 4px;
    }
    :global(.splide--nav
        > .splide__track
        > .splide__list
        > .splide__slide.is-active) {
      border-color: #33395a;
    }
  }
  .image {
    background-color: #0e101c;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    :global(img) {
      object-fit: contain;
    }
  }
  .previews {
    padding: 10px;
    background-color: #0e101c;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .splide__slide {
      cursor: pointer;
    }
  }
</style>
