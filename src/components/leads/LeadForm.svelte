<script>
  import Icon from '@/components/ui/Icon.svelte'
  import Button from '@/components/ui/Button.svelte'

  export let title

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

<div class="communication" class:invisible={success}>
  <h2 class="title">{title}</h2>
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

<style lang="scss">
  .communication {
    padding-top: 70px;
    padding-left: 73px;
    padding-bottom: 85px;
    transition: opacity ease 0.7s 0s;

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
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background-color: #6592ff;
      left: -1px;
      top: -1px;
      z-index: 1;
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
      position: relative;
      z-index: 2;
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
    position: relative;
    z-index: 2;
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

  .feedback {
    position: absolute;
    opacity: 0;
    left: 100px;
    top: 50%;
    transform: translateY(calc(-50% + 30px));
    max-width: 620px;
    pointer-events: none;
    transition: transform ease 1.2s 0.3s, opacity ease 1.2s 0.3s;

    &.visible {
      opacity: 1;
      transform: translateY(-50%);
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
