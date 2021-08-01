<script>
  import Icon from '@ui/Icon.svelte'

  export let label
  export let icon = ''
  export let link = ''
</script>

<a href={link} class="contact-badge">
  <Icon name={icon} />

  <div class="wrapper">
    {#if label}
      <span class="label">
        {label}
      </span>
    {/if}

    <span>
      <slot />
    </span>
  </div>
</a>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    @media screen and (max-width: 370px) {
      font-size: 14px;
    }
  }
  .contact-badge {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
</style>
