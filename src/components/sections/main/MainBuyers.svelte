<script>
  import Image from '@/components/ui/Image.svelte'

  export let count = 354

  const buyers = [
    '/img/buyers/1.png',
    '/img/buyers/2.png',
    '/img/buyers/3.png',
    '/img/buyers/4.png',
  ]
</script>

<div class="main-buyers">
  <span> У нас уже заказали: </span>

  <div class="buyers">
    {#each buyers as buyer, index}
      <div class="buyer">
        <Image src={buyer} alt={`buyer-${index}`} />
      </div>
    {/each}
  </div>

  <span class="count">
    {count}
    человека
  </span>
</div>

<style lang="scss">
  .main-buyers {
    display: flex;
    align-items: center;

    span {
      display: block;
      width: 140px;
      flex-shrink: 0;
    }
  }

  .buyers {
    display: flex;
    margin-left: 14px;
  }

  .buyer {
    margin-right: -14px;
    flex-shrink: 0;
    position: relative;
    :global(picture) {
      width: 35px;
      height: 35px;
    }
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        z-index: 5 - $i;
      }
    }
  }

  .count {
    margin-left: 27px;
    color: var(--green);
  }
</style>
