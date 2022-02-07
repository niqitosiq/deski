<script>
  import LeadForm from '@/components/leads/LeadForm.svelte'
  import Image from '@/components/ui/Image.svelte'
</script>

<div class="wrapper">
  <div class="lead">
    <LeadForm title="Заказать обратный звонок" smallMargin={true} />
  </div>

  <div class="hero">
    <Image src="/img/payment/dota.png" alt="персонаж Доты" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    background-color: #1c1f2a;
    border-radius: 45px;
    display: flex;

    @media screen and (max-width: 780px) {
      padding-right: 60px;
    }

    @media screen and (max-width: 613px) {
      padding-left: 40px;
    }

    @media screen and (max-width: 541px) {
      padding-left: 30px;
    }
  }

  .lead {
    color: white;
    z-index: 2;
  }

  .hero {
    position: absolute;
    right: 30px;
    top: 120px;
    max-width: 390px;
    z-index: 1;

    @media screen and (max-width: 1280px) {
      max-width: 350px;
    }

    @media screen and (max-width: 1180px) {
      top: 140px;
    }

    @media screen and (max-width: 1030px) {
      max-width: 320px;
    }

    @media screen and (max-width: 860px) {
      top: auto;
      bottom: -90px;
      max-width: 280px;
    }

    @media screen and (max-width: 780px) {
      bottom: -120px;
    }

    @media screen and (max-width: 700px) {
      bottom: -70px;
      max-width: 260px;
    }

    @media screen and (max-width: 660px) {
      bottom: -90px;
    }

    @media screen and (max-width: 418px) {
      bottom: -95px;
    }

    @media screen and (max-width: 386px) {
      bottom: -110px;
    }

    @media screen and (max-width: 375px) {
      max-width: 240px;
    }

    @media screen and (max-width: 321px) {
      max-width: 220px;
      bottom: -140px;
    }
  }
</style>
