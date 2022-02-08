<script>
  import Icon from '@ui/Icon.svelte'

  export let label
  export let icon = ''
  export let link = ''
  export let size = 'sm'

  let labeled = false

  $: {
    labeled = !!label
  }
</script>

<a href={link} class="contact-badge" class:labeled>
  <Icon name={icon} />

  <div class="wrapper size--{size}">
    {#if label}
      <span class="label">
        {label}
      </span>
    {/if}

    <span class="content">
      <slot />
    </span>
  </div>
</a>

<style lang="scss">
  .contact-badge {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &.labeled {
      align-items: flex-end;
      :global(svg) {
        margin-bottom: 3px;

        @media screen and (max-width: 1520px) {
          margin-bottom: 7px;
        }
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 375px) {
      font-size: 16px;
    }

    @media screen and (max-width: 369px) {
      font-size: 14px;
    }

    @media screen and (max-width: 295px) {
      font-size: 12px;
    }

    &.size--md {
      font-family: Gilroy;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;

      @media screen and (max-width: 1520px) {
        font-size: 18px;
      }
    }
  }

  .label {
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    opacity: 0.5;
    margin-bottom: 7px;
  }
</style>
