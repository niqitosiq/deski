<script>
  import Main from '@/components/sections/main/Main.svelte'
  import Catalog from '@/components/sections/catalog/Catalog.svelte'
  import Advantages from '@/components/sections/advantages/Advantages.svelte'
  import Payment from '@/components/sections/payment/Payment.svelte'
  import Consultation from '@/components/leads/Consultation.svelte'
  import Photos from '@/components/sections/photos/Photos.svelte'
  import Reviews from '@/components/sections/reviews/Reviews.svelte'
  import Contacts from '@/components/sections/contacts/Contacts.svelte'
  import { fadeIn, fadeOut } from '@/utils/pageFade'
</script>

<svelte:head>
  <title>Deski | Главная</title>
</svelte:head>

<div class="index" in:fadeIn out:fadeOut>
  <Main />
  <Catalog />
  <Advantages />
  <Consultation />
  <Payment />
  <Photos />
  <Reviews />
  <Contacts />
</div>

<style lang="scss">
</style>
