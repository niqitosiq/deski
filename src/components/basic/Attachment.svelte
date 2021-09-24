<script>
  import Image from '../ui/Image.svelte'

  export let type
  export let src
  export let preview
  export let alt = 'attachment'

  $: {
    if (!preview) preview = src
  }
</script>

<div class="attachment" on:click>
  <div class="content">
    {#if type === 'image'}
      <Image src={preview} {alt} />
    {/if}
  </div>
</div>

<style lang="scss">
  .attachment {
    cursor: pointer;
    transition: transform ease 0.3s;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-radius: 4px;
      height: 100%;
      box-shadow: 0px 0px 40px rgba(78, 113, 240, 0.4);
      opacity: 0;
      transition: opacity ease 0.3s;
    }
    &:hover {
      transform: translateY(-5px);
      &:after {
        opacity: 1;
      }
    }
  }

  .content {
    border-radius: 4px;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
