<script>
  import Button from '../ui/Button.svelte'

  import Desk from '../modals/Desk.svelte'

  import DeskColors from './DeskColors.svelte'
  import DeskDescription from './DeskDescription.svelte'
  import DeskSlider from './DeskSlider.svelte'

  import { getContext } from 'svelte'
  import { DEFAULT_MODAL_CONFIG } from '@/consts/modals'

  export let name
  export let colors
  export let price
  export let images
  export let article
  export let slug

  let currentColor = colors[0]
  let currentImages
  $: {
    currentImages = images[currentColor.name]
  }

  const { open } = getContext('simple-modal')

  const showDeskInfo = (activeImage = 0) => {
    open(
      Desk,
      {
        activeImage,
        desk: {
          color: currentColor,
          images: images,
          name,
          colors,
          price,
          article,
          slug,
        },
      },
      DEFAULT_MODAL_CONFIG
    )
  }
</script>

<div class="desk">
  <DeskSlider
    images={currentImages}
    on:imageClick={({ detail }) => showDeskInfo(detail.activeImage)}
  />

  <div class="icons" />

  <div class="description">
    <DeskDescription label="Название">
      <h3>{name}</h3>
    </DeskDescription>

    <DeskDescription label="Цвет">
      <DeskColors {colors} bind:value={currentColor} />
    </DeskDescription>

    <DeskDescription label="Цена">
      <span class="price">{price}</span>
    </DeskDescription>

    <a
      class="more"
      href={`/desks/${slug}`}
      on:click={(e) => {
        e.preventDefault()
      }}
    >
      <Button styling="light" on:click={() => showDeskInfo(0)}>
        <span>Подробнее</span>
      </Button>
    </a>
  </div>
</div>

<style lang="scss">
  .desk {
    padding: 25px;
    margin-bottom: 20px;
    background: #1c1f2a;
    border-radius: 30px;
    width: calc(100% / 3 - 10px);
    @media screen and (max-width: 1200px) {
      width: calc(50% - 10px);
    }
    @media screen and (max-width: 728px) {
      width: 100%;
    }
  }

  .description {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;

    :global(.desk-description:nth-child(1)) {
      width: 50%;
    }
    :global(.desk-description:nth-child(2)) {
      width: 50%;
    }
  }

  h3 {
    font-family: Gilroy;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
  }

  .more {
    margin-left: 40px;

    :global(.light) {
      margin-top: 15px;
    }

    @media screen and (max-width: 795px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
