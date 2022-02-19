<script context="module">
  import { DESK_CATALOG } from '@/consts/catalog'

  export async function preload(page) {
    const { desk } = page.params

    const fetchedDesk = DESK_CATALOG.find((d) => d.slug === desk)

    return { fetchedDesk }
  }
</script>

<script>
  import DeskFullInfo from '@/components/desk/DeskFullInfo.svelte'
  import Consultation from '@/components/leads/Consultation.svelte'
  import Catalog from '@/components/sections/catalog/Catalog.svelte'
  import { fadeIn, fadeOut } from '@/utils/pageFade'

  export let fetchedDesk = {}
</script>

<svelte:head>
  <title>Deski | {fetchedDesk.name}</title>
</svelte:head>

<div class="desk-page" in:fadeIn out:fadeOut>
  <div class="container">
    <DeskFullInfo desk={fetchedDesk} isShort={false} />
  </div>
  <Consultation />
  <Catalog />
</div>

<style lang="scss">
  .desk-page {
    padding: 30px 0;

    :global(.head) {
      margin-top: 40px;
    }

    :global(.article-info) {
      margin-top: 40px;
    }
  }
</style>
