<script>
  import { leadership } from '$lib/data/site';
</script>

<section class="relative border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
      <div>
        <p class="eyebrow">Leadership</p>
        <h2 class="display-2 mt-5">
          Built by operators with decades in Permian energy and digital infrastructure.
        </h2>
      </div>
      <div>
        <p class="text-text-muted leading-relaxed">
          The FO Permian team and its advisors have delivered multiple energy and compute projects across the
          Permian Basin, including the region's earliest high-density compute and data center deployments.
          Long-standing relationships with local business and civic leaders mean projects move through
          permitting and community engagement without surprises.
        </p>

        <div class="mt-10 grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong sm:grid-cols-2">
          {#each leadership as person}
            <div class="bg-bg p-6">
              <p class="font-mono text-xs uppercase tracking-wider text-flame">{person.role}</p>
              <p class="display-3 mt-3 text-2xl">{person.name}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
