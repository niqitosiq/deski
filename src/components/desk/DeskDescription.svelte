<script>
  export let label
</script>

<div class="desk-description">
  <div class="label">
    {label}
  </div>

  <div class="info">
    <slot />
  </div>
</div>

<style lang="scss">
  .desk-description {
    margin-bottom: 20px;
    padding-right: 20px;

    @media screen and (max-width: 320px) {
      margin-bottom: 10px;
    }
  }

  .label {
    font-family: Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: var(--text-transparent);
    margin-bottom: 4px;
  }

  .info {
    text-transform: uppercase;
    font-family: Gilroy;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
</style>
