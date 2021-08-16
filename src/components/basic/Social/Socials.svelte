<script>
  import Icon from '@/components/ui/Icon.svelte'

  export let styling

  const socials = [
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
    <a href={social.link} class="social {social.icon}">
      <Icon name={social.icon} />
    </a>
  {/each}
</div>

<style lang="scss">
  .socials {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .social {
      width: 30px;
      height: 30px;
      :global(svg) {
        width: 16px;
        height: 16px;
      }
      @media screen and (max-width: 340px) {
        width: 24px;
        height: 24px;
        :global(svg) {
          width: 15px;
          height: 15px;
        }
      }
    }
    &.big {
      .social {
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
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    &.instagram {
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          43.94deg,
          #eea054 16.16%,
          #d64763 50.11%,
          #b62a99 83.68%
        );
        z-index: 2;
        border-radius: 100%;
      }
      &:after {
        background: linear-gradient(
          43.94deg,
          #ffb56b 16.16%,
          #f8607e 50.11%,
          #dd3dbd 83.68%
        );
        opacity: 0;
        transition: opacity ease 0.3s;
      }
      :global(svg) {
        z-index: 3;
        position: relative;
      }
    }
    &.whatsapp {
      background-color: #48c95f;
      transition: background-color ease 0.3s;
    }
    &.viber {
      background-color: #7c509a;
      transition: background-color ease 0.3s;
    }
    &.telegram {
      background-color: #039be5;
    }
    &:hover {
      &.instagram {
        &:after {
          opacity: 1;
        }
      }
      &.whatsapp {
        background-color: #69ec81;
      }
      &.viber {
        background-color: #b07dd3;
      }
      &.telegram {
        background-color: #1cb2fd;
      }
    }
  }
</style>
