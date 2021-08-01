<script>
  import Button from '../ui/Button.svelte'

  import DeskColors from './DeskColors.svelte'
  import DeskDescription from './DeskDescription.svelte'
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

  <div class="icons" />

  <div class="description">
    <DeskDescription label="Название">
      <h3>{name}</h3>
    </DeskDescription>

    <DeskDescription label="Цвет">
      <DeskColors {colors} bind:value={currentColor} />
    </DeskDescription>

    <DeskDescription label="Цена">
      <span>{price}</span>
    </DeskDescription>

    <div class="more">
      <Button styling="light">
        <span>Подробнее</span>
      </Button>
    </div>
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
    align-items: center;
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
  }
</style>
