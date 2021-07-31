<script>
  import Icon from '@ui/Icon.svelte'

  export let icon = ''
  export let label = ''
  export let link = ''
</script>

<a href={link} class="contact-badge">
  <Icon name={icon} />

  <div class="wrapper">
    <span class="label">
      {label}
    </span>

    <span>
      <slot />
    </span>
  </div>
</a>

<style lang="scss">
  .contact-badge {
  }
  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
