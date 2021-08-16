<script>
  import Socials from '../basic/Social/Socials.svelte'
  import Image from '../ui/Image.svelte'
</script>

<div class="consultation container">
  <div class="background">
    <Image src="/img/lead/lead-background-1.png" alt="Фон блока" />
  </div>

  <div class="lead">
    <h2>Нужна консультация?</h2>
    <p>Обращайся:</p>
    <div class="socials">
      <Socials styling="big" />
    </div>
  </div>

  <div class="hero">
    <div class="glow" />
    <Image
      src="/img/lead/lead-hero-1.png"
      alt="Картинка привлекающая внимание"
    />
  </div>
</div>

<style lang="scss">
  .consultation {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 73px;
    margin-top: 202px;
    &:after {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      right: 30px;
      bottom: 0;
      box-shadow: 0px 0px 162px rgba(78, 113, 240, 0.54);
      border-radius: 90px;
      z-index: -1;
    }
    @media screen and (max-width: 1180px) {
      padding-bottom: 100px;
    }
    @media screen and (max-width: 990px) {
      margin-top: 50px;
    }
    @media screen and (max-width: 770px) {
      position: relative;
      padding-bottom: 0;
      flex-direction: column;
    }
    @media screen and (max-width: 620px) {
      padding: 20px;
      padding-top: 50px;
      padding-bottom: 0;
    }
    @media screen and (max-width: 430px) {
      margin-top: 0px;
      margin-bottom: 40px;
    }
  }

  .lead {
    flex-shrink: 0;
  }

  .background {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translate(0px, 0px) skew(-5deg, 0deg);
    overflow: hidden;
    border-radius: 45px;
    :global(img) {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 620px) {
      left: -8%;
      right: -8%;
    }
  }

  .socials {
    max-width: 312px;
  }

  h2 {
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 64px;
    margin-bottom: 10px;
    @media screen and (max-width: 1650px) {
      font-size: 44px;
      line-height: 42px;
    }
    @media screen and (max-width: 1500px) {
      font-size: 38px;
      line-height: 42px;
    }
    @media screen and (max-width: 1320px) {
      font-size: 32px;
      line-height: 38px;
      flex-shrink: 0;
    }
    @media screen and (max-width: 520px) {
      font-size: 28px;
      line-height: 34px;
    }
  }

  p {
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 14px;
  }

  .hero {
    margin-bottom: -73px;
    margin-top: -200px;
    bottom: 0px;
    right: 0;
    display: flex;
    align-items: flex-end;
    position: relative;
    :global(.wrapper) {
      width: 100%;
      height: auto;
    }
    @media screen and (max-width: 1180px) {
      position: absolute;
      margin: 0;
      width: 70%;
      z-index: -1;
      right: -100px;
    }
    @media screen and (max-width: 770px) {
      position: relative;
      right: 0;
      width: 140%;
      left: -20%;
    }
  }

  .glow {
    top: calc(50% - 40px);
    transform: translateY(-50%);
    left: 17%;
    z-index: -1;
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 610px;
    box-shadow: 0px 0px 100px rgb(78 113 240 / 70%);
    background-color: rgba(78, 113, 240, 0.31);
    @media screen and (max-width: 1600px) {
      width: 400px;
      height: 400px;
    }
    @media screen and (max-width: 1500px) {
      width: 300px;
      height: 300px;
    }
  }
</style>
