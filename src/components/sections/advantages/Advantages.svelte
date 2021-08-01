<script>
  import Image from '@/components/ui/Image.svelte'

  import Advantage from './Advantage.svelte'

  const advantages = [
    {
      label: 'Материалы премиум качества',
      text: 'Столы изготавливаются из импортных ЛДСП материалов премиум качества, поэтому мы гарантируем высокую надежность игровых столов',
      image: '/img/advantages/crystal1.png',
    },
    {
      label: 'Низкие цены',
      text: 'В сравнении с аналогами на рынке. Низкая цена достигается за счет собственного производства',
      image: '/img/advantages/crystal2.png',
    },
    {
      label: 'Собственное производство',
      text: 'Столы производятся на фабрике "Ассолль" в г. Волгоград',
      image: '/img/advantages/crystal2.png',
    },
    {
      label: 'Даем 3 года гарантии',
      text: 'На все изготовленные столы действует расширенная гарантия 3 года',
      image: '/img/advantages/crystal2.png',
    },
  ]
</script>

<div class="advantages" id="advantages">
  <div class="container">
    <h2>Почему тебе необходим именно стол Deski?</h2>

    <div class="items">
      {#each advantages as advantage}
        <Advantage {...advantage} />
      {/each}
    </div>

    <div class="hero">
      <Image src="/img/advantages/hero.png" />
    </div>
  </div>
</div>

<style lang="scss">
  .advantages {
    padding-top: 104px;
    padding-bottom: 170px;
    position: relative;
    @media screen and (max-width: 520px) {
      padding-top: 30px;
    }
  }
  .items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 1100px) {
      flex-wrap: wrap;
    }

    @media screen and (max-width: 990px) {
      flex-direction: column;
    }
  }
  h2 {
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    max-width: 770px;
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
  .hero {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    @media screen and (max-width: 990px) {
      right: -20%;
      top: 20%;
    }
    @media screen and (max-width: 520px) {
      top: 50px;
      right: -30%;
    }
  }
</style>
