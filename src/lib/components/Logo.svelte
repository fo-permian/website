<script>
  import { base } from '$app/paths';

  /**
   * FO Permian logo.
   *
   * Two variants:
   * - `wordmark` (default): inline SVG "FO | PERMIAN" with thin amber pipe.
   *   Used in the top nav. Inherits text color via `currentColor`; the pipe
   *   accent is configurable, defaulting to the site's flame accent.
   * - `hex`: the original navy hex+icon mark, recolored to bone for dark
   *   backgrounds. Used in the footer at large display size.
   *
   * @type {{ class?: string, height?: number, accent?: string, variant?: 'wordmark' | 'hex' }}
   */
  let {
    class: klass = '',
    height = 32,
    accent = 'var(--color-flame)',
    variant = 'wordmark'
  } = $props();
</script>

<a
  href="{base}/"
  class="inline-flex items-center {klass}"
  aria-label="FO Permian — home"
>
  {#if variant === 'hex'}
    <img
      src="{base}/img/logo-inverted.png"
      alt="FO Permian"
      style="height: {height}px; width: auto; display: block;"
    />
  {:else}
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
  {/if}
</a>
