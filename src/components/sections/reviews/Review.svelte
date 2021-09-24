<script>
  import Attachment from '@/components/basic/Attachment.svelte'

  export let name
  export let avatar
  export let type
  export let text
  export let attachments = []

  let visibleText = ''
  let invisibleText = ''
  let isTextFullVisible = false
  let isReviewHasFullText = false

  $: {
    if (text.length >= 100) isReviewHasFullText = true

    visibleText = text.slice(0, 100)

    if (isReviewHasFullText) invisibleText = text.slice(100)
  }

  function toggleFullText() {
    isTextFullVisible = !isTextFullVisible
  }
</script>

<div class="review">
  <img src={avatar} alt={name} />

  <div class="name">
    <h4>{name}</h4>

    <div class="type" />
  </div>

  <div class="text">
    <p>
      <span>
        {visibleText}
      </span>

      {#if isReviewHasFullText}
        <span class:visible={isTextFullVisible}>
          {invisibleText}
        </span>
      {/if}
    </p>

    {#if isReviewHasFullText}
      <button on:click={() => toggleFullText()}> Читать полностью </button>
    {/if}
  </div>

  <div class="attachments">
    {#each attachments as attachment}
      <Attachment {...attachment} />
    {/each}
  </div>
</div>
