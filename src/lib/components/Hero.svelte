<script>
  import { base } from '$app/paths';
  import { site } from '$lib/data/site';
</script>

<section class="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
  <!-- Background: image + atmospheric gradients -->
  <div class="absolute inset-0 -z-10">
    <img
      src="{base}/img/hero-ai.png"
      alt=""
      aria-hidden="true"
      class="h-full w-full object-cover object-center opacity-40"
    />
    <!-- Top fade to black for nav legibility -->
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent"></div>
    <!-- Bottom fade to bg -->
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
    <!-- Right-side amber vignette — flame/dusk warmth -->
    <div class="absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
         style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 70%);"></div>
    <!-- Left-side dusk indigo glow -->
    <div class="absolute -left-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
         style="background: radial-gradient(circle, var(--color-dusk) 0%, transparent 70%);"></div>
  </div>

  <div class="container-wide grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
    <div>
      <p class="eyebrow flex items-center gap-3">
        <span class="inline-block h-px w-8 bg-flame"></span>
        Permian Basin · Off-Grid Power
      </p>

      <h1 class="display-1 mt-6 max-w-4xl">
        Reliable off-grid energy for
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-flame to-flame-hi bg-clip-text text-transparent">
            AI & data centers.
          </span>
        </span>
      </h1>

      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
        FO Permian delivers resilient natural gas power with battery storage for hyperscale workloads —
        <span class="text-text">99.999% uptime</span>,
        <span class="text-text">full energy control</span>, and scalable growth, without adding load to
        the ERCOT grid or impacting West Texas communities.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a href="#contact" class="btn btn-primary">Start a conversation</a>
        <a href="#platform" class="btn btn-ghost">How it works ↓</a>
      </div>
    </div>

    <!-- Right column: at-a-glance stats card -->
    <aside class="relative">
      <div class="rounded-lg border border-line-strong bg-surface/60 p-7 backdrop-blur-sm">
        <p class="eyebrow">At a glance</p>
        <dl class="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-text-muted">Initial capacity</dt>
            <dd class="stat-numeral mt-1 text-3xl">150<span class="text-flame">MW</span></dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-text-muted">Gas supply</dt>
            <dd class="stat-numeral mt-1 text-3xl">5<span class="text-flame">GW+</span></dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-text-muted">Acres available</dt>
            <dd class="stat-numeral mt-1 text-3xl">3,200</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-text-muted">Uptime target</dt>
            <dd class="stat-numeral mt-1 text-3xl">99.999<span class="text-flame">%</span></dd>
          </div>
        </dl>
      </div>
    </aside>
  </div>
</section>
