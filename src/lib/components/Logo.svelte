<script>
  /**
   * FO PERMIAN wordmark — inline SVG with thin amber pipe divider.
   *
   * The wordmark inherits `currentColor`, so it'll pick up text color from
   * the parent context. The pipe divider color is configurable via `accent`,
   * defaulting to the site's flame accent.
   *
   * @type {{ class?: string, height?: number, accent?: string }}
   */
  let {
    class: klass = '',
    height = 32,
    accent = 'var(--color-flame)'
  } = $props();
</script>

<a
  href="/"
  class="inline-flex items-center {klass}"
  aria-label="FO Permian — home"
>
  <svg
    viewBox="0 0 200 50"
    style="height: {height}px; width: auto; display: block;"
    aria-hidden="true"
    focusable="false"
  >
    <text
      x="0"
      y="36"
      font-family="'Space Grotesk', system-ui, sans-serif"
      font-size="34"
      font-weight="700"
      letter-spacing="-0.02em"
      fill="currentColor"
    >FO</text>
    <line
      x1="49"
      y1="14"
      x2="49"
      y2="34"
      stroke={accent}
      stroke-width="2"
      stroke-linecap="square"
    />
    <text
      x="58"
      y="36"
      font-family="'Space Grotesk', system-ui, sans-serif"
      font-size="34"
      font-weight="700"
      letter-spacing="-0.02em"
      fill="currentColor"
    >PERMIAN</text>
  </svg>
</a>
