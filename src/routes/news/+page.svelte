<script>
  import NewsCard from '$lib/components/NewsCard.svelte';
  import { site } from '$lib/data/site';

  /** @type {{ data: { posts: any[] } }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>News — {site.name}</title>
  <meta name="description" content="Press releases, announcements, and updates from FO Permian." />
  <meta property="og:title" content="News — {site.name}" />
  <meta property="og:description" content="Press releases, announcements, and updates from FO Permian." />
</svelte:head>

<section class="relative pt-36 pb-16 md:pt-44">
  <!-- Atmospheric backdrop -->
  <div class="absolute inset-x-0 top-0 -z-10 h-[480px] overflow-hidden">
    <div class="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
         style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 70%);"></div>
    <div class="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
         style="background: radial-gradient(circle, var(--color-dusk) 0%, transparent 70%);"></div>
  </div>

  <div class="container-wide">
    <p class="eyebrow flex items-center gap-3">
      <span class="inline-block h-px w-8 bg-flame"></span>
      Newsroom
    </p>
    <h1 class="display-1 mt-6 max-w-4xl">News & announcements</h1>
    <p class="mt-7 max-w-2xl text-lg text-text-muted leading-relaxed">
      Press releases, leadership perspectives, and project updates from FO Permian and partners.
    </p>
  </div>
</section>

<section class="border-t border-line bg-bg py-16 md:py-20">
  <div class="container-wide">
    {#if data.posts.length === 0}
      <div class="rounded-lg border border-dashed border-line-strong p-16 text-center">
        <p class="text-text-muted">No posts yet. Check back soon.</p>
      </div>
    {:else}
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each data.posts as post}
          <NewsCard {post} />
        {/each}
      </div>
    {/if}
  </div>
</section>
