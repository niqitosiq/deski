<script>
  import Gallery from '@/components/gallery/Gallery.svelte'
  import Image from '@/components/ui/Image.svelte'
  import { PHOTOS } from '@/consts/photos'
  import { getContext } from 'svelte'
  import { viewClass } from '@/directives/inViewport'
  import { DEFAULT_MODAL_CONFIG } from '@/consts/modals'

  let photoFormatted = []
  let mainImage = {}

  $: {
    PHOTOS.forEach((photo, index) => {
      if (index === 0) {
        mainImage = photo
        return
      }

      photoFormatted.push(photo)
    })
  }
  const { open } = getContext('simple-modal')

  const showGallery = (active) => {
    open(
      Gallery,
      {
        images: PHOTOS,
        active,
      },
      DEFAULT_MODAL_CONFIG
    )
  }
</script>

<section class="photos container" use:viewClass>
  <h2>Фото наших столов</h2>

  <div class="images">
    <div class="main" on:click={() => showGallery(0)}>
      <Image src={mainImage.img} alt="Лучший стол" />
    </div>
    <div class="secondary">
      {#each photoFormatted as photo, index}
        <div class="photo" on:click={() => showGallery(index + 1)}>
          <Image src={photo.img} alt="image" />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  :root {
    --modalWindowWidth: 70%;
    @media screen and (max-width: 1000px) {
      --modalWindowWidth: 80%;
    }
    @media screen and (max-width: 700px) {
      --modalWindowWidth: 95%;
    }
    @media screen and (max-width: 480px) {
      --modalWindowWidth: 100%;
    }
  }
  .photos {
    margin-top: 140px;
    @media screen and (max-width: 520px) {
      margin-top: 30px;
    }
  }
  .images {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
  }
  .main {
    width: calc(50% - 10px);
    margin-right: 20px;
    flex-shrink: 0;
    cursor: pointer;
    @media screen and (max-width: 680px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .secondary {
    width: calc(50% - 10px);
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
  .photo {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    cursor: pointer;
  }
  h2 {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 40px;
    @media screen and (max-width: 1500px) {
      font-size: 38px;
      line-height: 42px;
    }
    @media screen and (max-width: 1320px) {
      font-size: 32px;
      line-height: 38px;
      flex-shrink: 0;
    }
    @media screen and (max-width: 960px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 520px) {
      font-size: 28px;
      line-height: 34px;
    }
  }
</style>
