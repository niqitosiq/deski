<script>
  import Attachment from '@/components/basic/Attachment.svelte'
  import Gallery from '@/components/gallery/Gallery.svelte'

  import { getContext } from 'svelte'

  export let align
  export let name
  export let avatar
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

  const { open } = getContext('simple-modal')

  const showGallery = (active) => {
    open(
      Gallery,
      {
        images: attachments,
        active,
      },
      {
        styleBg: {
          background: 'rgba(0, 0, 0, 0.66)',
        },
        styleWindow: {
          background: 'rgba(0,0,0,0)',
          width: 'var(--modalWindowWidth)',
          maxWidth: '1600px',
        },
      }
    )
  }
</script>

<div class="review {align}">
  <div class="avatar">
    <img src={avatar} alt={name} />
  </div>

  <div class="body">
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
          <span class:visible={isTextFullVisible} class="hidden">
            {invisibleText}
          </span>
        {/if}
      </p>

      {#if isReviewHasFullText && !isTextFullVisible}
        <button class="more" on:click={() => toggleFullText()}>
          Читать полностью
        </button>
      {/if}
    </div>

    <div class="attachments">
      {#each attachments as attachment, index}
        <Attachment {...attachment} on:click={() => showGallery(index)} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .review {
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: flex-end;
    position: relative;
    @media screen and (max-width: 1200px) {
      max-width: calc(50% - 25px);
    }
    @media screen and (max-width: 720px) {
      max-width: 100%;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 450px) {
      flex-direction: column;
      align-items: flex-start;
    }

    &.right {
      margin-left: auto;
      margin-top: -90px;
      margin-bottom: -90px;
      @media screen and (max-width: 1240px) {
        margin-top: -60px;
        margin-bottom: -60px;
      }
      @media screen and (max-width: 720px) {
        margin: 0;
        margin-bottom: 30px;
      }
    }
  }

  .avatar {
    margin-right: 36px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    border-radius: 66px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    &:before {
      content: '';
      position: absolute;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      left: -7px;
      top: -7px;
      border-radius: 100%;
      border: 1px solid #76d800;
    }

    @media screen and (max-width: 1240px) {
      position: absolute;
      top: calc(100% + 20px);
      left: 0;
    }

    @media screen and (max-width: 720px) {
      position: relative;
      top: 0;
      margin-right: 20px;
      width: 40px;
      height: 40px;
    }

    @media screen and (max-width: 450px) {
      order: 1;
      margin-top: -10px;
    }
  }

  .name {
    font-family: Gilroy;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;

    @media screen and (max-width: 1240px) {
      font-size: 20px;
    }

    @media screen and (max-width: 720px) {
      font-size: 18px;
    }
  }

  .text {
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;

    .hidden {
      opacity: 0;
      position: absolute;
      &.visible {
        opacity: 1;
        transition: opacity ease 0.3s;
        position: static;
      }
    }

    @media screen and (max-width: 560px) {
      font-size: 16px;
    }
  }

  .more {
    font-family: Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

    text-decoration: underline;
    background-color: transparent;
    border: none;
    color: #fff;
    padding: 0;

    margin-top: 12px;
  }

  .body {
    width: 100%;
    background: #1c1f2a;
    border-radius: 20px 20px 20px 0px;
    padding: 30px 40px;
    min-width: 0px;
  }

  .attachments {
    display: flex;
    :global(.attachment) {
      width: 100px;
      height: 60px;
      margin-right: 20px;
    }
  }
</style>
