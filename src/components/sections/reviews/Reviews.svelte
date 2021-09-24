<script>
  import { REVIEWS } from '@/consts/reviews'

  import Review from './Review.svelte'
</script>

{#each REVIEWS as review}
  <Review {...review} />
{/each}
