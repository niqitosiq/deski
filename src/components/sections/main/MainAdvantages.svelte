<script>
  import Icon from '@/components/ui/Icon.svelte'
  let advantages = [
    {
      icon: 'truck',
      advantage: '14 дней',
      description: 'От заявки до готового стола в квартире',
    },
    {
      icon: 'sun',
      advantage: 'Светомузыка в столе',
      description: 'Подсветка и игровой дизайн',
    },
    {
      icon: 'table',
      advantage: '15 столов',
      description: 'Большой модельный ряд',
    },
  ]
</script>

<div class="container advantages">
  {#each advantages as advantage}
    <div class="advantage">
      <div class="icon">
        <Icon name={advantage.icon} />
      </div>
      <div class="details">
        <h3 class="title">
          {advantage.advantage}
        </h3>
        <p class="description">
          {advantage.description}
        </p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .advantages {
    display: flex;
    justify-content: center;
    margin-top: 160px;
    @media screen and (max-width: 1380px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 920px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 420px) {
      margin-top: -20px;
      z-index: 20;
      position: relative;
    }
  }
  .advantage {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 9px 0px;
    cursor: pointer;
    padding-right: 20px;
    @media screen and (max-width: 1380px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 990px) {
      max-width: 450px;
    }
    &:not(:last-child) {
      margin-right: 40px;
      @media screen and (max-width: 1200px) {
        margin-right: 0;
      }
    }

    &:first-child {
      @media screen and (max-width: 1200px) {
        margin-right: 40px;
      }
      @media screen and (max-width: 990px) {
        margin-right: 0;
      }
    }
    :global(svg) {
      width: 45px;
      height: 45px;
    }
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #1a1f31;
      top: 0;
      left: -5px;
      z-index: -2;
      transform: skew(-5deg, 0deg);
      border-radius: 10px;
      opacity: 0.6;
      transition: opacity ease 0.3s;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
  .icon {
    display: flex;
    position: relative;
    width: 91px;
    height: 89px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #262832;
      z-index: -1;
      transform: skew(-5deg, 0deg);
      border-radius: 10px;
    }
  }
  .details {
    margin-left: 30px;
    @media screen and (max-width: 550px) {
      margin-left: 15px;
    }
    @media screen and (max-width: 340px) {
      margin-left: 10px;
    }
  }
  .title {
    font-family: 'Gilroy';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    margin-bottom: 10px;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
  .description {
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: var(--text-transparent);
    padding-right: 40px;
    max-width: 230px;
    @media screen and (max-width: 550px) {
      padding-right: 10px;
    }
  }
</style>
