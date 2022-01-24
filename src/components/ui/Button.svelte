<script>
  export let type = 'button'
  export let styling = ''
</script>

<button {type} class={styling} on:click>
  <slot name="custom">
    <slot />
  </slot>
</button>

<style lang="scss">
  button {
    position: relative;
    border: none;
    border-radius: 30px;
    background-color: transparent;
    padding: 25px 35px;
    margin-top: 8px;
    > :global(span),
    > :global(*) {
      font-family: Gilroy;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      display: block;
      position: relative;
      z-index: 5;
      transition: transform ease 0.3s;
      transform: translateY(-8px);
    }
    @media screen and (max-width: 420px) {
      padding: 15px 25px;
    }
    &:focus {
      outline: 0;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: transform ease 0.3s;
      transform: translate(-5px, -8px) skew(-5deg, 0deg);
      border-radius: 4px;
      z-index: 1;
      background: var(--accent-gradient);
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: transform ease 0.3s;
      transform: skew(-5deg, 0deg);
      z-index: 1;
      border-radius: 4px;
      background-color: var(--accent-dark);
      box-shadow: var(--light-shadow);
    }

    &:hover {
      &:after {
        transform: translate(-5px, -2px) skew(-5deg, 0deg);
      }
      > :global(span),
      > :global(*) {
        transform: translateY(0);
      }
    }
    &.circle {
      padding: 22px 25px 25px 20px;
      &:after,
      &:before {
        border-radius: 100%;
        width: 100%;
        padding-top: 100%;
        height: auto;
      }
      &:after {
        transform: translate(-5px, -8px) skew(0deg, 0deg);
      }
      &:before {
        transform: skew(0deg, 0deg);
      }

      &:hover {
        &:after {
          transform: translate(-5px, -2px) skew(0deg, 0deg);
        }
      }
    }
    &.light {
      margin-top: 0;
      padding: 15px 25px;
      > :global(span),
      > :global(*) {
        z-index: 5;
        transform: translateY(3px);
      }
      &:after {
        transform: translate(0px, 0px) skew(-5deg, 0deg);
        background: transparent;
        border: solid 2px rgba(102, 146, 255, 0.4);
      }
      &:before {
        background: rgba(102, 146, 255, 1);
        opacity: 0;
        box-shadow: none;
        transition: opacity ease 0.3s;
        transform: translate(2px, 2px) skew(-5deg, 0deg);
        border-radius: 3px;
      }

      &:hover {
        &:after {
          transform: translate(0, 0) skew(-5deg, 0deg);
        }
        &:before {
          opacity: 0.1;
        }
        > :global(span),
        > :global(*) {
          transform: translateY(3px);
        }
      }
    }
  }
</style>
