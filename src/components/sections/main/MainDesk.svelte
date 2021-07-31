<script>
  import Button from '@/components/ui/Button.svelte'
  import Icon from '@/components/ui/Icon.svelte'

  import Image from '@/components/ui/Image.svelte'
</script>

<div class="main-desk">
  <Image src="img/hero/hero-table.png" />

  <div class="glow" />

  <div class="play">
    <Button styling="circle">
      <Icon name="play" />
    </Button>

    <div class="text">
      <Icon name="pointer-2" />
      <p>Посмотри видео о всех преимуществах стола Deski за 1 минуту</p>
    </div>
  </div>
</div>

<style lang="scss">
  .main-desk {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 680px;
    :global(.wrapper) {
      height: auto;
    }
    @media screen and (max-width: 1240px) {
      position: absolute;
      width: 100%;
      max-width: 600px;
      right: 0px;
      bottom: 0px;
      z-index: 1;
    }
    @media screen and (max-width: 1040px) {
      max-width: 60%;
    }
    @media screen and (max-width: 920px) {
      max-width: 100%;
      position: relative;
      margin-top: 40px;
    }
  }

  .glow {
    top: calc(50% - 40px);
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    position: absolute;
    width: 610px;
    height: 610px;
    border-radius: 610px;
    box-shadow: 0px 0px 100px rgb(78 113 240 / 70%);
    background-color: rgba(78, 113, 240, 0.31);
    @media screen and (max-width: 1600px) {
      width: 400px;
      height: 400px;
    }
  }

  .play {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;

    @media screen and (max-width: 920px) {
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, -50%);
    }

    :global(svg) {
      width: 24px;
      height: 24px;
      z-index: 20;
    }
  }

  .text {
    display: flex;
    position: absolute;
    top: calc(100% - 20px);
    left: calc(100% + 10px);
    :global(svg) {
      left: 100%;
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      transform: rotate(-5deg);
    }
    @media screen and (max-width: 560px) {
      display: none;
    }
    p {
      flex-shrink: 0;
      max-width: 160px;
      position: relative;
      top: 15px;
      margin-left: 10px;
      font-family: Gilroy;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0.02em;
      text-align: left;
      color: var(--text-transparent);
      transform-origin: left top;
      animation: text 2s linear 0s 0.2s infinite alternate;
    }
  }

  @keyframes text {
    0% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(-1deg);
    }
  }
</style>
