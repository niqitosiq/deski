<script>
  import Icon from '@/components/ui/Icon.svelte'

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
  ]
</script>

<div class="socials">
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
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    @media screen and (max-width: 425px) {
      width: 22px;
      height: 22px;
    }
    &.instagram {
      background: linear-gradient(
        43.94deg,
        #eea054 16.16%,
        #d64763 50.11%,
        #b62a99 83.68%
      );
    }
    &.whatsapp {
      background-color: #48c95f;
    }
    &.viber {
      background-color: #7c509a;
    }
  }
</style>
