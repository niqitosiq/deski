<script>
  import Prompt from '@ui/Prompt.svelte'

  export let colors
  export let value

  function selectColor(color) {
    value = color
  }
</script>

<div class="desk-colors">
  {#each colors as color}
    <div class="color" on:click={selectColor(color)}>
      <Prompt>
        <div
          slot="content"
          class="color-block"
          style="background-color: {color.color}"
        />
        <span slot="prompt">{color.name}</span>
      </Prompt>
    </div>
  {/each}
</div>

<style lang="scss">
  .desk-colors {
    display: flex;
  }
  .color {
    margin-right: 9px;
    cursor: pointer;
  }
  .color-block {
    height: 20px;
    width: 20px;
    border-radius: 20px;
    position: relative;
  }
</style>
