<script>
  const resources = [
    { label: 'Natural gas', value: 'Source-priced, redundant pipelines' },
    { label: 'Water', value: 'Abundant industrial supply for cooling' },
    { label: 'Fiber', value: 'Diverse, low-latency routes to Texas hubs' },
    { label: 'Land', value: '320 ac immediate · 3,200 ac contiguous' },
    { label: 'Air quality', value: 'Attainment zone — fast permitting' },
    { label: 'Workforce', value: 'Local industrial expertise at scale' }
  ];
</script>

<section class="relative overflow-hidden border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div class="order-2 lg:order-1">
        <p class="eyebrow">Six resources, one site</p>
        <h2 class="display-2 mt-5 max-w-xl">
          Land. Fuel. Water. Fiber. Air. Workforce.
        </h2>
        <p class="mt-6 max-w-xl text-text-muted leading-relaxed">
          The Permian Basin uniquely concentrates every input a hyperscale buildout needs.
          FO Permian integrates them into a single, turnkey platform — so operators move on
          the project, not the procurement.
        </p>

        <ul class="mt-10 grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong sm:grid-cols-2">
          {#each resources as r}
            <li class="bg-bg p-5">
              <p class="font-mono text-xs uppercase tracking-wider text-flame">{r.label}</p>
              <p class="mt-2 text-sm text-text">{r.value}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div class="order-1 lg:order-2">
        <figure class="relative overflow-hidden rounded-lg border border-line-strong">
          <img src="/img/hivolt.jpg" alt="HiVolt Energy microgrid facility in West Texas" class="h-full w-full object-cover" />
          <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-5">
            <p class="font-mono text-xs uppercase tracking-wider text-flame">In operation</p>
            <p class="mt-1 text-sm text-text">HiVolt Energy microgrid · West Texas</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>
