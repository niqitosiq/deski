<script>
  import Icon from '@/components/ui/Icon.svelte'
  import Button from '@/components/ui/Button.svelte'

  let methods = ['Телефон', 'Viber', 'Telegram', 'WhatsApp']
</script>

<section class="form container">
  <div class="communication">
    <h2>Нужна консультация?</h2>
    <p class="label">Выберите удобный способ связи</p>
    <div class="buttons">
      {#each methods as method}
        <button type="button" class="button">
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
</section>

<style lang="scss">
  .form {
    background: linear-gradient(
      90deg,
      #011d34 1.31%,
      rgba(78, 113, 240, 0.9) 72.51%
    );
    h2 {
      font-family: 'Gilroy';
      font-weight: 700;
      font-size: 48px;
      margin-bottom: 40px;
    }
    .buttons {
      margin-bottom: 30px;
      font-family: 'Gilroy';
      font-weight: 700;
      font-size: 14px;
    }
    .button {
      background-color: transparent;
      border: rgba(255, 255, 255, 0.3) 1px solid;
      padding: 8px 30px 8px 30px;
      border-radius: 10px;
      margin-right: 16px;
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
        cursor: pointer;
        padding-top: 18px;
        padding-bottom: 18px;
        padding-right: 110px;
        margin-left: 17px;
      }
    }
    .label {
      display: block;
      font-family: 'Gilroy';
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
</style>
