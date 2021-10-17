<script>
  import Icon from '@/components/ui/Icon.svelte'

  export let link
  export let icon
  export let styling = 'oval'
</script>

{#if link}
  <a href={link} class="social icon--{icon} styling--{styling}">
    <Icon name={icon} />
  </a>
{:else}
  <div class="social icon--{icon} styling--{styling}">
    <Icon name={icon} />
  </div>
{/if}

<style lang="scss">
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    &.icon--instagram {
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          43.94deg,
          #eea054 16.16%,
          #d64763 50.11%,
          #b62a99 83.68%
        );
        z-index: 2;
        border-radius: 100%;
      }
      &:after {
        background: linear-gradient(
          43.94deg,
          #ffb56b 16.16%,
          #f8607e 50.11%,
          #dd3dbd 83.68%
        );
        opacity: 0;
        transition: opacity ease 0.3s;
      }
      :global(svg) {
        z-index: 3;
        position: relative;
      }
    }
    &.icon--whatsapp {
      background-color: #48c95f;
      transition: background-color ease 0.3s;
    }
    &.icon--viber {
      background-color: #7c509a;
      transition: background-color ease 0.3s;
    }
    &.icon--telegram {
      background-color: #039be5;
    }
    &.icon--vk {
      background-color: #4d76a1;
    }
    &:hover {
      &.icon--instagram {
        &:after {
          opacity: 1;
        }
      }
      &.icon--vk {
        background-color: #4d76a1;
      }
      &.icon--whatsapp {
        background-color: #69ec81;
      }
      &.icon--viber {
        background-color: #b07dd3;
      }
      &.icon--telegram {
        background-color: #1cb2fd;
      }
    }

    &.styling--oval {
      border-radius: 100%;
      &.icon--instagram {
        &:before,
        &:after {
          border-radius: 100%;
        }
      }
    }
    &.styling--square {
      border-radius: 4px;
      &.icon--instagram {
        &:before,
        &:after {
          border-radius: 4px;
        }
      }
    }
  }
</style>
