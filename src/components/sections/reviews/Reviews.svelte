<script>
  import { REVIEWS } from '@/consts/reviews'
  import Review from './Review.svelte'
  import Image from '@/components/ui/Image.svelte'
  import { viewClass } from '@/directives/inViewport'
</script>

<section class="container" id="reviews" use:viewClass>
  <div class="background">
    <Image
      src="/img/reviews/background.png"
      alt="Заднее изображение для блока отзывов"
    />
  </div>

  <h2>Главный показатель качества нашей работы – это благодарные отзывы!</h2>

  <div class="reviews">
    {#each REVIEWS as review}
      <Review {...review} />
    {/each}
  </div>
</section>

<style lang="scss">
  .container {
    position: relative;
    padding-top: 90px;
  }

  .background {
    position: absolute;
    width: 80%;
    right: 0;
    z-index: -1;
    @media screen and (max-width: 1300px) {
      width: 100%;
    }

    @media screen and (max-width: 820px) {
      top: 10%;
    }

    @media screen and (max-width: 450px) {
      top: 15%;
    }
  }

  h2 {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;

    color: #fff;

    max-width: 830px;

    @media screen and (max-width: 1540px) {
      font-size: 42px;
      line-height: 55px;
    }
    @media screen and (max-width: 1400px) {
      font-size: 36px;
      line-height: 48px;
      min-width: 525px;
    }
    @media screen and (max-width: 1240px) {
      width: 100%;
      min-width: 0px;
    }
    @media screen and (max-width: 560px) {
      font-size: 30px;
      line-height: 36px;
    }
    @media screen and (max-width: 420px) {
      font-size: 28px;
      line-height: 34px;
    }
  }

  .reviews {
    margin-top: 37px;
    padding: 0px 122px;
    @media screen and (max-width: 1500px) {
      padding: 0;
    }
  }
</style>
