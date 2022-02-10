<script>
  import Image from '@/components/ui/Image.svelte'
  import { viewClass } from '@/directives/inViewport'
</script>

<section class="container payment-delivery" id="delivery" use:viewClass>
  <div class="wrapper payment">
    <h2 class="title">Оплата</h2>
    <p class="subtitle">Виды оплаты:</p>

    <div class="cloud">
      <p class="type">Онлайн-оплата:</p>
      <div class="image">
        <Image src="/img/payment/cards.png" alt="Мастеркард, Виза, Мир" />
      </div>
    </div>

    <div class="cloud">
      <p class="type">Наличными курьеру</p>
    </div>

    <div class="cloud">
      <p class="type">
        Заказы в другие страны отправляются после 100% предоплаты
      </p>
    </div>
  </div>

  <div class="wrapper delivery">
    <h2 class="title">Доставка</h2>
    <p class="subtitle">Виды доставок:</p>

    <div class="cloud">
      <p class="type">Доставка осуществляется с помощью служб доставки:</p>
      <div class="big image">
        <Image src="/img/payment/delivery.png" alt="СДЭК, Деловые линии, ПЭК" />
      </div>
    </div>

    <div class="cloud">
      <p class="type">Стоимость доставки зависит от города и модели стола</p>
    </div>

    <div class="cloud">
      <p class="type">Бесплатная доставка от 10 000 рублей</p>
    </div>
  </div>

  <div class="background">
    <Image src="/img/payment/background.png" alt="бэкграунд" />
  </div>

  <div class="dota">
    <Image src="/img/payment/dota.png" alt="персонаж Доты" />
  </div>
</section>

<style lang="scss">
  .payment-delivery {
    display: flex;
    position: relative;
    margin-top: 80px;
    padding-top: 200px;
    padding-bottom: 55px;

    @media screen and (max-width: 1180px) {
      flex-direction: column;
    }

    @media screen and (max-width: 1370px) {
      padding-top: 50px;
    }

    @media screen and (max-width: 1140px) {
      margin-top: 30px;
    }

    @media screen and (max-width: 990px) {
      padding-top: 0;
    }
  }

  .background {
    position: absolute;
    width: calc(100% - 200px);
    height: 140%;
    right: -15px;
    top: -20%;
    z-index: -1;

    :global(.wrapper) {
      overflow: visible;
    }

    @media screen and (max-width: 1726px) {
      width: 100%;
      right: -30px;
      top: -23%;
    }

    @media screen and (max-width: 1590px) {
      right: -10px;
    }

    @media screen and (max-width: 1538px) {
      right: 0;
      height: 120%;
      top: -10%;
    }

    @media screen and (max-width: 1400px) {
      height: 100%;
      top: 0;
    }

    @media screen and (max-width: 1190px) {
      width: 120%;
      right: -10%;
      :global(picture) {
        width: auto;
        height: 100%;
      }
    }
  }

  .dota {
    position: absolute;
    width: 434px;
    right: 75px;
    top: 50px;
    z-index: -1;

    @media screen and (max-width: 1465px) {
      right: 50px;
      top: 70px;
    }

    @media screen and (max-width: 1390px) {
      right: 60px;
      top: 100px;
      width: 380px;
    }

    @media screen and (max-width: 1316px) {
      width: 350px;
      top: 125px;
      right: 40px;
    }

    @media screen and (max-width: 1290px) {
      right: -40px;
    }

    @media screen and (max-width: 1231px) {
      width: 335px;
    }

    @media screen and (max-width: 1190px) {
      top: 150px;
      width: 350px;
    }

    @media screen and (max-width: 1180px) {
      width: 434px;
      top: auto;
      bottom: 0;
    }

    @media screen and (max-width: 1100px) {
      bottom: -100px;
    }

    @media screen and (max-width: 850px) {
      width: 400px;
    }

    @media screen and (max-width: 810px) {
      bottom: -30px;
    }

    @media screen and (max-width: 620px) {
      right: -10px;
    }

    @media screen and (max-width: 520px) {
      bottom: 0;
    }

    @media screen and (max-width: 470px) {
      width: 320px;
      right: -40%;
      bottom: 100px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:not(:last-child) {
      margin-right: 139px;

      @media screen and (max-width: 1290px) {
        margin-right: 90px;
      }

      @media screen and (max-width: 1180px) {
        margin-top: 40px;
      }

      @media screen and (max-width: 520px) {
        margin-right: 0;
        margin-top: 0;
        margin-bottom: 30px;
      }
    }
  }

  .title {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    margin-bottom: 12px;

    @media screen and (max-width: 1500px) {
      font-size: 38px;
      line-height: 42px;
      margin-right: 80px;
    }

    @media screen and (max-width: 1320px) {
      font-size: 32px;
      line-height: 38px;
      margin-right: 40px;
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

  .subtitle {
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: var(--text-transparent);
    margin-bottom: 32px;

    @media screen and (max-width: 520px) {
      font-size: 16px;
    }
  }

  .cloud {
    position: relative;
    display: flex;
    align-items: center;
    padding: 25px 54px;

    &:not(:last-child) {
      margin-bottom: 21px;
    }

    > * {
      position: relative;
      z-index: 3;
    }

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #1c1f2a;
      top: 0;
      left: -5px;
      z-index: 1;
      transform: skew(-5deg, 0deg);
      border-radius: 10px;
      opacity: 1;
      transition: opacity ease 0.3s;
    }

    &:hover {
      &::after {
        opacity: 0.8;
      }
    }

    @media screen and (max-width: 1290px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media screen and (max-width: 1180px) {
      flex-direction: row;
      align-items: center;
    }

    @media screen and (max-width: 840px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media screen and (max-width: 520px) {
      padding: 25px 25px;
    }

    @media screen and (max-width: 425px) {
      padding-right: 35px;
    }
  }

  .image {
    max-width: 192px;
    margin-left: 29px;

    @media screen and (max-width: 1290px) {
      margin-left: 0;
      margin-top: 17px;
    }

    @media screen and (max-width: 1180px) {
      margin-left: 29px;
      margin-top: 0;
    }

    @media screen and (max-width: 840px) {
      margin-left: 0;
      margin-top: 17px;
    }
  }

  .big {
    max-width: 348px;
  }

  .type {
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }

  .delivery {
    .cloud {
      &:nth-child(3) {
        @media screen and (max-width: 353px) {
          padding-right: 40px;
        }

        @media screen and (max-width: 320px) {
          padding-right: 45px;
        }
      }
    }
  }
</style>
