<script>
  import { base } from '$app/paths';
  import { formatDate } from '$lib/data/news';
  import { site } from '$lib/data/site';

  /** @type {{ data: { post: any } }} */
  let { data } = $props();
  const post = data.post;
  const Article = post.component;
</script>

<svelte:head>
  <title>{post.title} — {site.name}</title>
  <meta name="description" content={post.summary} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.summary} />
  <meta property="og:type" content="article" />
  {#if post.cover}
    <meta property="og:image" content="{site.url}{post.cover}" />
  {/if}
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="relative pt-36 pb-24 md:pt-44">
  <!-- Atmospheric backdrop -->
  <div class="absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden">
    <div class="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
         style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 70%);"></div>
  </div>

  <div class="container-wide">
    <a
      href="{base}/news"
      class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-flame"
    >
      <span aria-hidden="true">←</span> All news
    </a>

    <header class="mx-auto mt-10 max-w-3xl">
      <div class="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-muted">
        <time datetime={post.date}>{formatDate(post.date)}</time>
        {#if post.location}
          <span class="text-text-dim">·</span>
          <span>{post.location}</span>
        {/if}
        <span class="text-text-dim">·</span>
        <span class="text-flame">Press release</span>
      </div>

      <h1 class="display-1 mt-6 text-balance">{post.title}</h1>

      {#if post.summary}
        <p class="mt-7 text-xl leading-relaxed text-text-muted">{post.summary}</p>
      {/if}
    </header>

    {#if post.cover}
      <figure class="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg border border-line-strong">
        <img src="{base}{post.cover}" alt="" class="w-full" />
      </figure>
    {/if}

    <div class="prose-fop mx-auto mt-12 max-w-3xl">
      <Article />
    </div>

    <footer class="mx-auto mt-16 max-w-3xl border-t border-line pt-10">
      <p class="font-mono text-xs uppercase tracking-wider text-text-dim">Contact</p>
      <div class="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a href="mailto:{site.contact.email}" class="text-text hover:text-flame">{site.contact.email}</a>
        <a href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}" class="text-text hover:text-flame">{site.contact.phoneDisplay}</a>
      </div>
    </footer>
  </div>
</article>

<style>
  /* Article body styles — applied only to mdsvex-rendered content */
  .prose-fop :global(p) {
    color: var(--color-text-muted);
    line-height: 1.75;
    margin-bottom: 1.25rem;
    font-size: 1.0625rem;
  }
  .prose-fop :global(p strong),
  .prose-fop :global(strong) {
    color: var(--color-text);
    font-weight: 600;
  }
  .prose-fop :global(h2) {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .prose-fop :global(h3) {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.375rem;
    line-height: 1.2;
    color: var(--color-text);
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
  }
  .prose-fop :global(ul) {
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
  }
  .prose-fop :global(ul li) {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 0.75rem;
    color: var(--color-text-muted);
    line-height: 1.7;
  }
  .prose-fop :global(ul li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 0.75rem;
    height: 1px;
    background-color: var(--color-flame);
  }
  .prose-fop :global(a) {
    color: var(--color-flame);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
  }
  .prose-fop :global(a:hover) {
    color: var(--color-flame-hi);
  }
  .prose-fop :global(blockquote) {
    border-left: 2px solid var(--color-flame);
    padding: 0.5rem 0 0.5rem 1.5rem;
    margin: 2rem 0;
    font-size: 1.125rem;
    color: var(--color-text);
    font-style: normal;
  }
  .prose-fop :global(img) {
    border-radius: var(--radius-md);
    margin: 2rem 0;
  }
  .prose-fop :global(hr) {
    border: 0;
    height: 1px;
    background: var(--color-line);
    margin: 3rem 0;
  }
</style>
