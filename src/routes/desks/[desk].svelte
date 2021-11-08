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

  export let fetchedDesk = {}
</script>

<div class="desk-page container">
  <DeskFullInfo desk={fetchedDesk} isShort={false} />
</div>
<Consultation />
<Catalog />

<style lang="scss">
  .desk-page {
    padding: 30px 0;
  }
</style>
