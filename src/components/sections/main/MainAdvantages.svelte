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
  }
  .advantage {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 9px 0px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 40px;
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
      left: -3%;
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
  }
  .title {
    font-family: 'Gilroy';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    margin-bottom: 10px;
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
  }
</style>
