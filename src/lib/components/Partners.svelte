<script>
  import { partners } from '$lib/data/site';
</script>

<section id="partners" class="relative border-t border-line bg-dusk py-24 md:py-32">
  <div class="container-wide">
    <div class="max-w-3xl">
      <p class="eyebrow">Partners</p>
      <h2 class="display-2 mt-5">
        Power and land, delivered by operators who already run West Texas infrastructure.
      </h2>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-2">
      {#each partners as partner}
        <article class="rounded-lg border border-line-strong bg-bg/60 p-8 md:p-10">
          <p class="font-mono text-xs uppercase tracking-wider text-flame">{partner.role}</p>
          <h3 class="display-3 mt-3">{partner.name}</h3>
          <p class="mt-5 leading-relaxed text-text-muted">{partner.blurb}</p>
          {#if partner.contact}
            <a
              href="mailto:{partner.contact}"
              class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text transition-colors hover:text-flame"
            >
              {partner.contact}
              <span aria-hidden="true">→</span>
            </a>
          {/if}
        </article>
      {/each}

      <article class="flex flex-col justify-center rounded-lg border border-dashed border-line-strong p-8 md:p-10">
        <p class="font-mono text-xs uppercase tracking-wider text-text-dim">Partnership inquiries</p>
        <p class="mt-3 text-text-muted">
          Capital partners, hyperscalers, and EPC firms interested in West Texas off-grid power —
          <a href="#contact" class="text-flame underline-offset-4 hover:underline">start a conversation</a>.
        </p>
      </article>
    </div>
  </div>
</section>
