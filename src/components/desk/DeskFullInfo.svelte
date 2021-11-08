<script>
  import Gallery from '../gallery/Gallery.svelte'
  import Button from '../ui/Button.svelte'

  import DeskColors from '../desk/DeskColors.svelte'
  import DeskDescription from '../desk/DeskDescription.svelte'
  import Article from '../basic/Article.svelte'
  import { goto } from '@sapper/app'
  import { getContext } from 'svelte'

  export let desk
  export let activeImage = 0
  export let isShort = true

  const { close } = getContext('simple-modal')

  function readFullArticle() {
    goto(`/desks/${desk.slug}`)
    close()
  }

  let colors = []
  $: {
    console.log(desk)
    colors = desk.colors
  }

  let currentColor = desk.colors[0]
  let currentImages
  $: {
    currentImages = desk.images[currentColor.name]
  }
</script>

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

<div class="article-info">
  <Article article={desk.article} {isShort} on:click={readFullArticle} />
</div>

<style lang="scss">
  .head {
    display: flex;
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

  .article-info {
    color: #fff;
    position: relative;
  }
</style>
