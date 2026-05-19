<script>
  import { site } from '$lib/data/site';
</script>

<section id="contact" class="relative overflow-hidden border-t border-line bg-bg py-24 md:py-36">
  <!-- Atmospheric glow -->
  <div class="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
       style="background: radial-gradient(circle, var(--color-flame) 0%, transparent 65%);"></div>

  <div class="container-wide">
    <div class="mx-auto max-w-4xl text-center">
      <p class="eyebrow">Start a conversation</p>
      <h2 class="display-1 mt-6">
        Move from agreements to operation in months — not years.
      </h2>
      <p class="mx-auto mt-7 max-w-2xl text-lg text-text-muted leading-relaxed">
        Reach out to discuss partnership, project opportunities, or platform details. We respond to qualified
        inquiries within one business day.
      </p>
    </div>

    <div class="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
      <a
        href="mailto:{site.contact.email}"
        class="group relative overflow-hidden rounded-lg border border-line-strong bg-surface p-8 transition-all hover:border-flame md:p-10"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-flame">Email our team</p>
        <p class="display-3 mt-4 text-2xl transition-colors group-hover:text-flame">
          {site.contact.email}
        </p>
        <p class="mt-3 text-sm text-text-muted">
          For project inquiries, partnership discussions, or platform details.
        </p>
        <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-text">
          Send a message <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>

      <a
        href="tel:{site.contact.phone.replace(/[^+\d]/g, '')}"
        class="group relative overflow-hidden rounded-lg border border-line-strong bg-surface p-8 transition-all hover:border-flame md:p-10"
      >
        <p class="font-mono text-xs uppercase tracking-wider text-flame">Call us</p>
        <p class="display-3 mt-4 text-2xl transition-colors group-hover:text-flame">
          {site.contact.phoneDisplay}
        </p>
        <p class="mt-3 text-sm text-text-muted">{site.contact.hours}.</p>
        <span class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:text-text">
          Place a call <span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </a>
    </div>
  </div>
</section>
