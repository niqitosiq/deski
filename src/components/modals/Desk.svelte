<script>
  import Gallery from '../gallery/Gallery.svelte'
  import Button from '../ui/Button.svelte'

  import DeskColors from '../desk/DeskColors.svelte'
  import DeskDescription from '../desk/DeskDescription.svelte'

  export let desk
  export let activeImage = 0

  let colors = []
  $: {
    colors = desk.colors
  }

  let currentColor = desk.colors[0]
  let currentImages
  $: {
    currentImages = desk.images[currentColor.name]

    console.log(activeImage)
  }
</script>

<div class="desk">
  <div class="head">
    <div class="gallery">
      <Gallery images={currentImages} active={activeImage} />
    </div>

    <div class="description">
      <DeskDescription label="Название">
        <h3>{desk.name}</h3>
      </DeskDescription>

      <DeskDescription label="Цвет">
        <DeskColors {colors} bind:value={currentColor} />
      </DeskDescription>

      <DeskDescription label="Цена">
        <span>{desk.price}</span>
      </DeskDescription>
      <div class="more">
        <Button styling="light">
          <span>Купить в один клик</span>
        </Button>
      </div>
    </div>
  </div>

  <div class="info">
    <p>
      <!-- Тут будет ричтекст -->
    </p>
  </div>
</div>

<style lang="scss">
  .desk {
    background-color: #1c1f2a;
  }

  .head {
    display: flex;
    padding: 30px;
  }

  .gallery {
    width: 50%;
  }

  .description {
    width: 50%;
    color: #fff;
    padding-left: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .info {
    color: #fff;
  }
</style>
