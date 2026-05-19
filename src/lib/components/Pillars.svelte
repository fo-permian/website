<script>
  const pillars = [
    {
      num: '01',
      label: 'Speed',
      title: 'Operational in months, not years.',
      body:
        'Skip the 3-to-8 year ERCOT interconnection queue. With TCEQ-supported off-grid operations and ready-to-build sites, we go from contract to commissioning while traditional projects are still waiting on transmission upgrades.'
    },
    {
      num: '02',
      label: 'Scale',
      title: 'Gigawatt-ready from day one.',
      body:
        'Phase 1 delivers 150MW of behind-the-meter natural gas power. The same site has 3,200 contiguous acres and 5GW+ of dedicated gas supply behind it — so a hyperscale buildout doesn\'t need a second platform.'
    },
    {
      num: '03',
      label: 'Reliability',
      title: 'Built for 99.999% uptime.',
      body:
        'Proven reciprocating engines backed by a redundant battery system, designed for fast-start capability and load response. Independent of grid weather, blackouts, and demand-response events.'
    }
  ];
</script>

<section id="platform" class="relative border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="max-w-3xl">
      <p class="eyebrow">The platform</p>
      <h2 class="display-2 mt-5">
        A fully integrated off-grid power package — engineered for the workloads driving the next decade.
      </h2>
    </div>

    <div class="mt-16 grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line-strong md:grid-cols-3">
      {#each pillars as p}
        <article class="group relative flex flex-col gap-5 bg-bg p-8 transition-colors hover:bg-surface md:p-10">
          <header class="flex items-baseline justify-between">
            <span class="font-mono text-xs text-text-dim">{p.num}</span>
            <span class="eyebrow">{p.label}</span>
          </header>
          <h3 class="display-3 max-w-xs">{p.title}</h3>
          <p class="text-text-muted leading-relaxed">{p.body}</p>
          <div class="mt-auto h-px w-12 bg-flame transition-all duration-300 group-hover:w-24"></div>
        </article>
      {/each}
    </div>
  </div>
</section>
