<script>
  import Desk from '@/components/desk/Desk.svelte'

  import { DESK_CATALOG } from '@/consts/catalog'
</script>

<div id="catalog" class="catalog">
  <div class="container">
    <div class="header">
      <h2>
        Игровые столы для геймеров,
        <br />
        разработанные геймерами
      </h2>

      <p>Повышенное внимание к удобству стола, дизайну и функционалу</p>
    </div>

    <div class="desks">
      {#each DESK_CATALOG as desk}
        <Desk {...desk} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  #catalog {
    margin-top: 120px;
    @media screen and (max-width: 1500px) {
      margin-top: 80px;
    }
    @media screen and (max-width: 1380px) {
      margin-top: 50px;
    }
    @media screen and (max-width: 520px) {
      margin-top: 20px;
    }
  }

  .desks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 70px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
    }
    h2 {
      font-family: Gilroy;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 64px;
      letter-spacing: 0em;
      text-align: left;
      margin-right: 160px;
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
    p {
      font-family: Gilroy;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      color: var(--text-transparent);
    }
  }
</style>
