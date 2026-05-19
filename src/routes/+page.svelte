<script>
  import Hero from '$lib/components/Hero.svelte';
  import Pillars from '$lib/components/Pillars.svelte';
  import StatBand from '$lib/components/StatBand.svelte';
  import Comparison from '$lib/components/Comparison.svelte';
  import PermianAdvantage from '$lib/components/PermianAdvantage.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Leadership from '$lib/components/Leadership.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { site } from '$lib/data/site';
</script>

<svelte:head>
  <title>FO Permian — Off-grid power for AI & data centers</title>
  <meta name="description" content={site.description} />
  <meta property="og:title" content="FO Permian — Off-grid power for AI & data centers" />
  <meta property="og:description" content={site.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={site.url} />
  <meta property="og:image" content="{site.url}/img/hero-ai.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<Pillars />
<StatBand />
<Comparison />
<PermianAdvantage />
<Partners />
<Leadership />
<Contact />
