<script>
  import Icon from '@/components/ui/Icon.svelte'
</script>

<div class="container advantages">
  <div class="advantage">
    <div class="icon">
      <Icon name="truck" />
    </div>
    <div class="period">
      <h3 class="days">14 дней</h3>
      <p class="description">От заявки до готового стола в квартире</p>
    </div>
  </div>
  <div class="advantage">
    <div class="icon">
      <Icon name="truck" />
    </div>
    <div class="period">
      <h3 class="days">14 дней</h3>
      <p class="description">От заявки до готового стола в квартире</p>
    </div>
  </div>
  <div class="advantage">
    <div class="icon">
      <Icon name="truck" />
    </div>
    <div class="period">
      <h3 class="days">14 дней</h3>
      <p class="description">От заявки до готового стола в квартире</p>
    </div>
  </div>
</div>

<style lang="scss">
  .advantages {
    display: flex;
    justify-content: space-between;
    padding: 0px 80px;
  }
  .advantage {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 98px;
    max-width: 383px;
    padding: 9px 0px;
    :global(svg) {
      width: 45px;
      height: 45px;
    }
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #1c1f2a;
      top: 0;
      left: -3%;
      z-index: -2;
      transform: skew(-5deg, 0deg);
      border-radius: 10px;
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
  .period {
    margin-left: 30px;
  }
  .days {
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
