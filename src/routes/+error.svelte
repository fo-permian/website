<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{page.status} — FO Permian</title>
</svelte:head>

<section class="relative flex min-h-[70vh] items-center pt-28 pb-16">
  <div class="absolute inset-0 -z-10">
    <div class="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
         style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 70%);"></div>
  </div>

  <div class="container-wide">
    <p class="eyebrow">Error {page.status}</p>
    <h1 class="display-1 mt-6">
      {page.status === 404 ? "Off-grid — but not this far off." : 'Something went wrong.'}
    </h1>
    <p class="mt-7 max-w-xl text-lg text-text-muted leading-relaxed">
      {#if page.status === 404}
        The page you were looking for isn't here. Try the home page or our newsroom.
      {:else}
        {page.error?.message ?? 'An unexpected error occurred.'}
      {/if}
    </p>
    <div class="mt-10 flex flex-wrap gap-3">
      <a href="{base}/" class="btn btn-primary">Home</a>
      <a href="{base}/news" class="btn btn-ghost">News</a>
    </div>
  </div>
</section>
