<script>
  import Image from '@/components/ui/Image.svelte'

  import { PHOTOS } from '@/consts/photos'

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
</script>

<section class="photos container">
  <h2>Фото наших столов</h2>

  <div class="images">
    <div class="main">
      <Image src={mainImage.img} alt="Лучший стол" />
    </div>
    <div class="secondary">
      {#each photoFormatted as photo}
        <div class="photo">
          <Image src={photo.img} alt="image" />
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  .photos {
    margin-top: 140px;
  }
  .images {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .main {
    width: calc(50% - 10px);
    margin-right: 20px;
    flex-shrink: 0;
  }
  .secondary {
    width: calc(50% - 10px);
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
  }
</style>
