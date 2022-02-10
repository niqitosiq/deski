<script>
  import LeadForm from '@/components/leads/LeadForm.svelte'
  import Image from '../../ui/Image.svelte'
  import { viewClass } from '@/directives/inViewport'
</script>

<section class="form container" use:viewClass>
  <div class="lead">
    <LeadForm title="Нужна консультация?" smallMargin={false} />
  </div>

  <div class="wrapper">
    <div class="hero">
      <Image src="/img/lead/lead-hero-2.png" alt="Каустик из Apex Legends" />
    </div>
  </div>
</section>

<style lang="scss">
  .lead {
    flex-shrink: 0;
  }

  .form {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
    margin-bottom: 115px;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        #011d34 1.31%,
        rgba(78, 113, 240, 0.9) 72.51%
      );
      z-index: -1;
      transform: translate(0px, 0px) skew(-5deg, 0deg);
      overflow: hidden;
      border-radius: 45px;

      @media screen and (max-width: 618px) {
        width: 120%;
        left: -10%;
      }
    }
  }

  .wrapper {
    width: 100%;
    max-width: 733px;
    position: relative;
    margin-right: 200px;

    @media screen and (max-width: 1590px) {
      margin-right: 100px;
    }

    @media screen and (max-width: 1340px) {
      margin-right: 50px;
    }

    @media screen and (max-width: 1180px) {
      margin-right: 20px;
    }

    @media screen and (max-width: 890px) {
      margin-right: 0px;
    }

    @media screen and (max-width: 780px) {
      position: absolute;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }
  }

  .hero {
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 1460px) {
      width: 120%;
    }

    @media screen and (max-width: 1340px) {
      width: 135%;
      right: 10px;
      z-index: -1;
    }

    @media screen and (max-width: 1210px) {
      width: 145%;
    }

    @media screen and (max-width: 1180px) {
      width: 110%;
    }

    @media screen and (max-width: 1080px) {
      width: 540px;
    }

    @media screen and (max-width: 940px) {
      width: 400px;
    }

    @media screen and (max-width: 780px) {
      left: 20%;
      z-index: -1;
      bottom: -90px;
    }

    @media screen and (max-width: 650px) {
      left: 10%;
    }

    @media screen and (max-width: 500px) {
      left: 0;
    }

    @media screen and (max-width: 435px) {
      width: 360px;
    }

    @media screen and (max-width: 399px) {
      width: 340px;
    }

    @media screen and (max-width: 378px) {
      width: 320px;
    }

    @media screen and (max-width: 360px) {
      width: 300px;
    }

    @media screen and (max-width: 340px) {
      width: 280px;
    }

    @media screen and (max-width: 321px) {
      width: 260px;
    }
  }
</style>
