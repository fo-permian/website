<script>
  import { formatDate } from '$lib/data/news';
  /** @type {{ post: { slug: string, title: string, summary: string, date: string, cover?: string, location?: string }, featured?: boolean }} */
  let { post, featured = false } = $props();
</script>

<a
  href="/news/{post.slug}"
  class="group flex flex-col overflow-hidden rounded-lg border border-line-strong bg-surface transition-all hover:border-flame"
  class:featured
>
  {#if post.cover}
    <div class="relative aspect-[16/9] overflow-hidden bg-dusk">
      <img
        src={post.cover}
        alt=""
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/80 to-transparent"></div>
    </div>
  {/if}

  <div class="flex flex-1 flex-col p-7 md:p-8">
    <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-text-muted">
      <time datetime={post.date}>{formatDate(post.date)}</time>
      {#if post.location}
        <span class="text-text-dim">·</span>
        <span>{post.location}</span>
      {/if}
    </div>

    <h3 class="display-3 mt-4 text-xl transition-colors group-hover:text-flame md:text-2xl">
      {post.title}
    </h3>

    {#if post.summary}
      <p class="mt-4 text-sm leading-relaxed text-text-muted">{post.summary}</p>
    {/if}

    <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-flame">
      Read article <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
    </span>
  </div>
</a>

<style>
  .featured {
    grid-column: 1 / -1;
  }
  @media (min-width: 768px) {
    :global(.featured) {
      grid-template-columns: 1.4fr 1fr;
    }
  }
</style>
