<script>
  const stats = [
    { value: '150', unit: 'MW', label: 'Phase 1 capacity, contract-ready' },
    { value: '5', unit: 'GW+', label: 'Dedicated natural gas supply' },
    { value: '320', unit: 'ac', label: 'Immediate site · 3,200 contiguous' },
    { value: '2026', unit: '', label: 'Phase 1 delivery target' }
  ];
</script>

<section class="relative border-t border-line bg-dusk py-16 md:py-20">
  <div class="container-wide">
    <div class="grid gap-y-10 md:grid-cols-4 md:gap-0">
      {#each stats as stat, i}
        <div
          class="px-2 md:px-8"
          class:md:border-l={i > 0}
          class:md:border-line-strong={i > 0}
        >
          <p class="stat-numeral">
            {stat.value}<span class="text-flame text-[0.55em] align-baseline ml-1">{stat.unit}</span>
          </p>
          <p class="mt-3 text-sm leading-snug text-text-muted">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
