<script>
  import Image from '@/components/ui/Image.svelte'

  export let label
  export let text
  export let image
</script>

<div class="advantage">
  <div class="image">
    <Image src={image} />
  </div>

  <div class="text">
    <h3>{label}</h3>

    <p>{text}</p>
  </div>
</div>

<style lang="scss">
  .advantage {
    position: relative;
    display: flex;
    align-items: center;
    width: 390px;
    padding: 10px 30px;
    margin-bottom: 20px;
    > * {
      position: relative;
      z-index: 2;
    }
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #1c1f2a;
      top: 0;
      left: -5px;
      z-index: 1;
      transform: skew(-5deg, 0deg);
      border-radius: 10px;
      opacity: 1;
      transition: opacity ease 0.3s;
    }
    &:hover {
      &::after {
        opacity: 0.9;
      }
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    @media screen and (max-width: 520px) {
      width: 100%;
    }
  }
  .image {
    max-width: 130px;
    margin-right: 10px;
    margin-left: -30px;
    flex-shrink: 0;
    @media screen and (max-width: 1700px) {
      position: absolute;
      right: -30px;
      opacity: 0.8;
      top: -70px;
    }
  }
  .text {
    padding: 20px 0;
    margin-bottom: auto;
  }
  p {
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-transparent);
  }
  h3 {
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    @media screen and (max-width: 520px) {
      padding-right: 30px;
    }
  }
</style>
