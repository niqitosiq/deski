<script>
  import Button from '@/components/ui/Button.svelte'
  import Icon from '@/components/ui/Icon.svelte'
  import Image from '@/components/ui/Image.svelte'
  import MainBuyers from './MainBuyers.svelte'
  import MainDesk from './MainDesk.svelte'
</script>

<div class="main container">
  <div class="background">
    <Image src="/img/decor/glow.png" />
  </div>

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
          <span>xПолучите бесплатную консультацию </span>
        </Button>
        <div class="discount">
          <Icon name="pointer" />
          <p>
            и скидку <span>1 390 руб.</span> на первый заказ:
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

<style lang="scss">
  .main {
    padding-top: 230px;
    display: flex;
    position: relative;
    justify-content: space-between;
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
  }

  .lead {
    display: flex;
    align-items: center;
    position: relative;
  }

  .buyers {
    margin-left: 60px;
  }

  .discount {
    display: flex;
    align-items: flex-end;
    padding-left: 20px;
    margin-top: 15px;
    position: absolute;
    top: 100%;
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
    }
    span {
      font-weight: 700;
    }
    :global(svg) {
      width: 43px;
      height: 40px;
      transform: rotate(14deg);
    }
  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
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
