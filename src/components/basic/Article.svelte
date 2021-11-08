<script>
  export let article
  export let isShort = false

  let articleWrapper = null

  $: {
    if (isShort && articleWrapper) {
      const notShortContent = articleWrapper.querySelectorAll('.zero > .long')

      notShortContent.forEach((content) => {
        content.style.display = 'none'
      })
    }
  }
</script>

<div class="article" class:isShort bind:this={articleWrapper}>
  <svelte:component this={article} />

  {#if isShort}
    <button class="more" on:click> Читать далее... </button>
  {/if}
</div>

<style lang="scss">
  .article {
    font-size: 16px;

    :global(h2) {
      font-size: 1.6em;
    }
    :global(p) {
      font-size: 1em;
      margin: 0.5em 0;
      font-weight: 300;
    }
    :global(img) {
      max-width: 100%;
      margin: 0.5em 0;
    }

    &.isShort {
      padding-bottom: 20px;
    }
  }

  .more {
    position: absolute;
    width: 100%;
    padding: 30px;
    left: 0;
    bottom: 0;
    background-color: transparent;
    color: white;
    border: none;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 1.51%,
      rgba(0, 0, 0, 0.4) 72.1%
    );
  }
</style>
