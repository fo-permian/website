<script>
  const rows = [
    { dim: 'Time to power', grid: '3–8 years', fo: 'Months' },
    { dim: 'Permitting', grid: 'Multi-agency, multi-state', fo: 'TCEQ attainment-zone, streamlined' },
    { dim: 'Transmission risk', grid: 'Upgrades + interconnection studies', fo: 'None — behind-the-meter' },
    { dim: 'Demand response', grid: 'Subject to curtailment', fo: 'Independent of grid events' },
    { dim: 'Scale path', grid: 'Capacity-bound by substation', fo: '5GW+ gas, 3,200 contiguous acres' }
  ];
</script>

<section id="advantage" class="relative border-t border-line bg-bg py-24 md:py-32">
  <div class="container-wide">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
      <div>
        <p class="eyebrow">The Permian advantage</p>
        <h2 class="display-2 mt-5">
          Bypassing the grid is no longer optional — it's the only path that lands on schedule.
        </h2>
        <p class="mt-6 text-text-muted leading-relaxed">
          U.S. data center power demand is projected to more than triple by 2030. Utility interconnection
          queues now push timelines out three to eight years. The Permian gives operators an alternative —
          low-cost natural gas at the source, redundant pipeline infrastructure, industrial water, diverse
          fiber routes, and a regulatory environment that moves at construction speed.
        </p>
      </div>

      <div class="overflow-hidden rounded-lg border border-line-strong">
        <div class="grid grid-cols-[1fr_1fr_1fr] border-b border-line-strong bg-surface text-xs font-mono uppercase tracking-wider">
          <div class="p-4 text-text-dim">Dimension</div>
          <div class="border-l border-line-strong p-4 text-text-muted">Traditional grid</div>
          <div class="border-l border-line-strong p-4 text-flame">FO Permian</div>
        </div>
        {#each rows as row, i}
          <div
            class="grid grid-cols-[1fr_1fr_1fr] text-sm"
            class:border-t={i > 0}
            class:border-line={i > 0}
          >
            <div class="p-4 font-medium text-text">{row.dim}</div>
            <div class="border-l border-line-strong p-4 text-text-muted">{row.grid}</div>
            <div class="border-l border-line-strong p-4 text-text">{row.fo}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
