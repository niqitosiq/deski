<script>
  export let type
  export let src
  export let preview
  export let alt = 'attachment'

  $: {
    if (!preview) preview = src
  }
</script>

{#if type === 'image'}
  <img src={preview} {alt} />
{/if}
