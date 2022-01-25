<script>
  import Icon from '@/components/ui/Icon.svelte'
  import Button from '@/components/ui/Button.svelte'
  import Image from '../ui/Image.svelte'

  let methods = ['Телефон', 'Viber', 'Telegram', 'WhatsApp']

  let current = 'Телефон'
</script>

<section class="form container">
  <div class="communication">
    <h2>Нужна консультация?</h2>
    <p class="label">Выберите удобный способ связи</p>

    <div class="buttons">
      {#each methods as method}
        <button
          type="button"
          class="button"
          class:selected={current === method}
          on:click={() => (current = method)}
        >
          {method}
        </button>
      {/each}
    </div>

    <form name="phone" class="phoneNumber">
      <label for="phone" class="label">Введите номер телефона</label>
      <div class="phone">
        <Icon name="phone2" />
        <input type="text" id="phone" placeholder="Телефон" />
      </div>
      <Button>
        <span>ЗАКАЗАТЬ ЗВОНОК</span>
      </Button>
    </form>
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
    }
  }

  .communication {
    padding-top: 70px;
    padding-left: 100px;
    padding-bottom: 85px;
    flex-shrink: 0;
  }

  h2 {
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 40px;

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

    @media screen and (max-width: 1180px) {
      margin-bottom: 15px;
      width: 35%;
    }
  }

  .selected {
    background-color: #6592ff;
    color: white;
    border: rgba(255, 255, 255, 0) 1px solid;
    transition: background-color 0.3s ease, border 0.3s ease;
  }

  .phoneNumber {
    display: inline-block;
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
      width: 160%;
    }
  }
</style>
