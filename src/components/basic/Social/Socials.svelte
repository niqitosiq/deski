<script>
  import Social from './Social.svelte'

  export let styling

  export let socials = [
    {
      icon: 'instagram',
      link: 'https://instagram.com',
    },
    {
      icon: 'whatsapp',
      link: 'https://whatsapp.com',
    },
    {
      icon: 'viber',
      link: 'https://viber.com',
    },
    {
      icon: 'telegram',
      link: 'https://viber.com',
    },
  ]
</script>

<div class="socials" class:big={styling === 'big'}>
  {#each socials as social}
    <div class="content">
      <Social {...social} />
    </div>
  {/each}
</div>

<style lang="scss">
  .socials {
    display: flex;
    width: 100%;
    justify-content: space-between;
    :global(.social) {
      width: 30px;
      height: 30px;

      :global(svg) {
        width: 16px;
        height: 16px;
      }

      @media screen and (max-width: 410px) {
        width: 27px;
        height: 27px;
        :global(svg) {
          width: 15px;
          height: 15px;
        }
      }

      @media screen and (max-width: 340px) {
        width: 24px;
        height: 24px;
        :global(svg) {
          width: 14px;
          height: 14px;
        }
      }
    }

    &.big {
      :global(.social) {
        width: 60px;
        height: 60px;
        :global(svg) {
          width: 30px;
          height: 30px;
        }

        @media screen and (max-width: 420px) {
          width: 50px;
          height: 50px;
          :global(svg) {
            width: 20px;
            height: 20px;
          }
        }

        @media screen and (max-width: 340px) {
          width: 40px;
          height: 40px;
          :global(svg) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
</style>
