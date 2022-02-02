<script>
  import Icon from '@/components/ui/Icon.svelte'
  import Button from '@/components/ui/Button.svelte'
  import Image from '../ui/Image.svelte'
  import { viewClass } from '@/directives/inViewport'

  let methods = [
    { label: 'Телефон', icon: 'phone3', placeholder: 'Телефон' },
    { label: 'Viber', icon: 'viber', placeholder: 'Имя или телефон' },
    { label: 'Telegram', icon: 'telegram', placeholder: 'Имя или телефон' },
    { label: 'WhatsApp', icon: 'whatsapp', placeholder: 'Телефон' },
  ]

  let currentMethod = methods[0]

  let success = false

  function toggle() {
    success = !success
  }
</script>

<section class="form container" use:viewClass>
  <div class="communication" class:invisible={success}>
    <h2 class="title">Нужна консультация?</h2>
    <p class="label">Выберите удобный способ связи</p>

    <div class="buttons">
      {#each methods as method}
        <button
          type="button"
          class="button"
          class:selected={currentMethod.label === method.label}
          on:click={() => (currentMethod = method)}
        >
          <span class="name">
            {method.label}
          </span>
          <Icon name={method.icon} />
        </button>
      {/each}
    </div>

    <form name="phone" class="phoneNumber">
      <label for="phone" class="label">Введите номер телефона</label>
      <div class="phone">
        <Icon name="phone2" />
        <input type="text" id="phone" placeholder={currentMethod.placeholder} />
      </div>
      <Button styling="order" on:click={toggle}>
        <span>ЗАКАЗАТЬ ЗВОНОК</span>
      </Button>
    </form>
  </div>

  <div class="feedback" class:visible={success}>
    <h2 class="title">Спасибо!<br /> Мы свяжемся с Вами в ближайшее время</h2>
  </div>

  <div class="wrapper">
    <div class="hero">
      <Image src="/img/lead/lead-hero-2.png" alt="Каустик из Apex Legends" />
    </div>
  </div>
</section>

<style lang="scss">
  .form {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 235px;
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

  .communication {
    padding-top: 70px;
    padding-left: 73px;
    padding-bottom: 85px;
    flex-shrink: 0;

    h2 {
      margin-bottom: 40px;
    }

    @media screen and (max-width: 618px) {
      padding-left: 20px;
    }

    @media screen and (max-width: 370px) {
      padding-right: 20px;
    }

    @media screen and (max-width: 350px) {
      width: 100%;
    }

    &.invisible {
      opacity: 0;
      pointer-events: none;
    }
  }

  .title {
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 48px;

    @media screen and (max-width: 1650px) {
      font-size: 44px;
    }

    @media screen and (max-width: 1500px) {
      font-size: 38px;
    }

    @media screen and (max-width: 1320px) {
      font-size: 32px;
    }

    @media screen and (max-width: 520px) {
      font-size: 28px;
    }

    @media screen and (max-width: 340px) {
      font-size: 26px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 305px) {
      font-size: 24px;
    }
  }

  .buttons {
    margin-bottom: 30px;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 14px;

    @media screen and (max-width: 1180px) {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
  }

  .button {
    background-color: transparent;
    border: rgba(255, 255, 255, 0.3) 1px solid;
    padding: 8px 30px 8px 30px;
    border-radius: 10px;
    margin-right: 16px;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: #6592ff;
      left: -1px;
      top: -1px;
      z-index: -1;
      border-radius: 10px;
      opacity: 0;
      transition: opacity ease 0.3s;

      @media screen and (max-width: 1180px) {
        border-radius: 100%;
      }
    }

    &:hover {
      &::before {
        opacity: 0.2;
      }
    }

    &.selected {
      &::before {
        opacity: 1;
      }
    }

    :global(svg) {
      fill: white;
      @media screen and (min-width: 1181px) {
        display: none;
      }
    }

    @media screen and (max-width: 1180px) {
      border-radius: 100%;
      padding: 0;
      margin-bottom: 15px;
      width: 50px;
      height: 50px;
    }

    @media screen and (max-width: 350px) {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
  }

  .name {
    @media screen and (max-width: 1180px) {
      display: none;
    }
  }

  .phoneNumber {
    display: inline-block;

    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }

  .phone {
    margin-bottom: 30px;
    background-color: white;
    display: flex;
    border-radius: 5px;
    align-items: center;
    padding-left: 24px;

    input {
      font-family: 'Gilroy';
      font-weight: 400;
      font-size: 16px;
      border-radius: 5px;
      border: none;
      padding-top: 18px;
      padding-bottom: 18px;
      padding-right: 110px;
      margin-left: 17px;
      outline: none;
      color: black;
    }

    @media screen and (max-width: 420px) {
      width: 100%;
      :global(svg) {
        flex-shrink: 0;
      }
      input {
        width: 100%;
        padding-right: 0;
      }
    }
  }

  .label {
    display: block;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 15px;
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

  .feedback {
    position: absolute;
    opacity: 0;
    left: 100px;
    top: 50%;
    transform: translate(0, -50%);
    max-width: 620px;
    pointer-events: none;

    &.visible {
      opacity: 1;
    }

    @media screen and (max-width: 1050px) {
      max-width: 330px;
    }

    @media screen and (max-width: 780px) {
      top: 20%;
    }

    @media screen and (max-width: 620px) {
      left: 50px;
      top: 25%;
    }

    @media screen and (max-width: 580px) {
      left: 40px;
    }

    @media screen and (max-width: 520px) {
      max-width: 280px;
    }

    @media screen and (max-width: 420px) {
      left: 35px;
    }
  }
</style>
