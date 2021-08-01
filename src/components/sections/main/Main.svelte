<script>
  import Button from '@/components/ui/Button.svelte'
  import Icon from '@/components/ui/Icon.svelte'
  import Image from '@/components/ui/Image.svelte'
  import MainAdvantages from './MainAdvantages.svelte'
  import MainBuyers from './MainBuyers.svelte'
  import MainDesk from './MainDesk.svelte'
  import MainPayment from './MainPayment.svelte'
</script>

<div class="main" id="main">
  <div class="background">
    <Image src="/img/decor/glow.png" />
  </div>
  <div class="container">
    <div class="info">
      <h1 class="title">
        Игровые компьютерные столы
        <br />
        Deski от производителя
        <br />
        с гарантией до 3 лет
        <br />
        <span class="accent"> от 4 990 руб </span>
      </h1>

      <p class="description">и доставкой по РФ до 3 дней</p>

      <div class="lead">
        <div class="button">
          <Button>
            <span>Получите бесплатную консультацию </span>
          </Button>
          <div class="discount">
            <Icon name="pointer" />
            <p>
              и скидку <span>1 390 руб.</span> на первый заказ
            </p>
          </div>
        </div>

        <div class="buyers">
          <MainBuyers />
        </div>
      </div>
    </div>

    <MainDesk />
  </div>
</div>

<MainAdvantages />

<MainPayment />

<style lang="scss">
  .container {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: -160px;
    @media screen and (max-width: 920px) {
      flex-direction: column;
    }
    padding-top: 230px;
    @media screen and (max-width: 1240px) {
      padding-bottom: 180px;
    }
    @media screen and (max-width: 1040px) {
      padding-bottom: 100px;
    }
    @media screen and (max-width: 980px) {
      padding-bottom: 40px;
    }
    @media screen and (max-width: 420px) {
      padding-top: 60px;
      margin-top: 0;
    }
  }

  .title {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    .accent {
      color: var(--accent);
    }
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
      br {
        display: none;
      }
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

  .info {
    margin-right: 20px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 920px) {
      margin-right: 0;
    }
  }

  .description {
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-transparent);
    margin-top: 30px;
    margin-bottom: 60px;
    @media screen and (max-width: 420px) {
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }

  .lead {
    display: flex;
    align-items: center;
    margin-bottom: 70px;
    @media screen and (max-width: 1400px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .buyers {
    margin-left: 60px;
    @media screen and (max-width: 1400px) {
      margin-left: 0;
      margin-top: 90px;
    }
    @media screen and (max-width: 420px) {
      display: none;
    }
  }

  .discount {
    display: flex;
    align-items: flex-end;
    padding-left: 20px;
    margin-top: 15px;
    position: absolute;
    top: 100%;
    @media screen and (max-width: 410px) {
      padding-left: 0;
      justify-content: center;
      width: 100%;
    }
    p {
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 20px;
      margin-bottom: -4px;
      animation: discount 2s linear 0s infinite alternate;
      transform-origin: center left;
      @media screen and (max-width: 410px) {
        margin-left: 0;
      }
    }
    span {
      font-weight: 700;
    }
    :global(svg) {
      width: 43px;
      height: 40px;
      transform: rotate(14deg);
      @media screen and (max-width: 410px) {
        display: none;
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -0px;
    right: -0px;
    z-index: -1;
  }

  .button {
    min-width: 270px;
    position: relative;
    font-size: 13px;
    :global(button) {
      @media screen and (max-width: 420px) {
        width: 100%;
      }
    }
  }

  @keyframes discount {
    0% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(-1deg);
    }
  }
</style>
