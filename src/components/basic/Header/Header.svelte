<script>
  import Icon from '@/components/ui/Icon.svelte'
  import Socials from '../Social/Socials.svelte'
  import ContactBadge from '@/components/basic/ContactBadge.svelte'
</script>

<header class="header container">
  <div class="about">
    <div class="logo">
      <Icon name="logo" />
    </div>
    <ul class="list">
      <li class="item">Каталог столов</li>
      <li class="item">Преимущества</li>
      <li class="item">Доставка и оплата</li>
      <li class="item">Отзывы</li>
      <li class="item">Контакты</li>
    </ul>
  </div>
  <div class="connection">
    <div class="socials">
      <Socials />
    </div>
    <div class="contact">
      <ContactBadge icon="phone" link="tel:79044046291">
        +7 (904) 404-62-91
      </ContactBadge>
    </div>
    <div class="call">
      <button type="button" class="button">
        <p class="order-a-call">ЗАКАЗАТЬ ЗВОНОК</p>
      </button>
      <p class="seconds">Перезвоним за 30 секунд</p>
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding-top: 72px;
    @media screen and (max-width: 848px) {
      flex-direction: column;
    }
    @media screen and (max-width: 620px) {
      padding-top: 40px;
    }
    @media screen and (max-width: 420px) {
      padding-top: 20px;
    }
  }
  .about {
    display: flex;
    align-items: center;
    @media screen and (max-width: 848px) {
      order: 2;
      margin-top: 25px;
    }
  }
  .item {
    display: inline;
    font-family: 'Gilroy';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: var(--text-transparent);
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
  .logo {
    margin-right: 108px;
    :global(svg) {
      width: 78px;
      height: 24px;
      @media screen and (max-width: 848px) {
        width: 90px;
        height: 28px;
      }
    }
    @media screen and (max-width: 1675px) {
      margin-right: 80px;
    }
    @media screen and (max-width: 1421px) {
      margin-right: 50px;
    }
  }
  .list {
    @media screen and (max-width: 1354px) {
      display: none;
    }
  }
  .connection {
    display: flex;
    width: 100%;
    max-width: 591px;
    @media screen and (max-width: 1647px) {
      justify-content: flex-end;
    }
    @media screen and (max-width: 1644px) {
      max-width: 550px;
    }
    @media screen and (max-width: 1617px) {
      max-width: 520px;
    }
    @media screen and (max-width: 1587px) {
      max-width: 400px;
    }
    @media screen and (max-width: 1467px) {
      max-width: 350px;
    }
    @media screen and (max-width: 848px) {
      max-width: 100%;
      order: 1;
      justify-content: space-between;
      position: relative;
    }
  }
  .socials {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 120px;
    flex-shrink: 0;
    @media screen and (max-width: 425px) {
      max-width: 90px;
    }
  }
  .contact {
    display: flex;
    align-items: center;
    margin-left: 54px;
    width: 100%;
    max-width: 198px;
    flex-shrink: 0;
    @media screen and (max-width: 1647px) {
      display: none;
    }
    @media screen and (max-width: 1354px) {
      display: flex;
    }
    @media screen and (max-width: 394px) {
      margin-left: 30px;
    }
    @media screen and (max-width: 370px) {
      max-width: 145px;
    }
  }
  .call {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    flex-shrink: 0;
    @media screen and (max-width: 848px) {
      position: absolute;
      right: 0;
      top: 100%;
      margin-top: 25px;
    }
  }
  .button {
    background-color: transparent;
    margin-bottom: 10px;
  }
  .order-a-call {
    font-family: 'Gilroy';
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    text-align: left;
  }
  .seconds {
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: var(--text-transparent);
    text-align: left;
  }
</style>
