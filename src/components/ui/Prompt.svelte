<script>
  import { fade } from 'svelte/transition'

  let hover = false
</script>

<div
  class="prompt"
  on:mouseenter={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
>
  <slot name="content" />

  {#if hover}
    <div transition:fade class="cloud">
      <slot name="prompt" />
    </div>
  {/if}
</div>

<style lang="scss">
  .prompt {
    position: relative;
  }
  .cloud {
    position: absolute;
    border-radius: 5px;
    top: 100%;
    left: 0;
    max-width: 200px;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    text-transform: none;
    padding: 10px 15px;
  }
</style>
