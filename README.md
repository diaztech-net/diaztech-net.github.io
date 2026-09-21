# diaztech-astro

An Astro rebuild of [diaztech.net](https://www.diaztech.net), migrated off Wix. Built from the
raw content pulled in `../diaztech-scrape` (see that folder's README for scrape notes/caveats).

## Why Astro instead of the Wix export

The live site ships ~1.6MB of HTML per page, ~19 auto-generated CSS bundles, and a full React
runtime (Wix's "Thunderbolt" renderer) just to display mostly-static marketing content. This
rebuild is static HTML/CSS with zero client-side JS by default — same content and visual language,
a fraction of the weight.

## Structure

```
src/
  layouts/BaseLayout.astro   shared <head>, header, footer
  components/Header.astro    nav bar
  components/Footer.astro    footer w/ contact + site links
  styles/global.css          design tokens + all site styling (no CSS framework)
  data/products.js           store catalog (see note below)
  pages/
    index.astro              home
    about.astro               /about  — "About Us" (team, offerings)
    aboutus.astro              /aboutus — Accessibility Statement (NOT a duplicate about page —
                               that's genuinely what's at this URL on the live site)
    book-online.astro          /book-online
    privacy-policy.astro       /privacy-policy
    blog/index.astro           /blog
    post/[slug].astro          /post/... (one post, hardcoded — see below)
    category/all-products.astro /category/all-products
    product-page/[slug].astro  /product-page/... (dynamic, driven by data/products.js)
public/images/                images copied over from the scrape, renamed descriptively
```

URL paths match the live site 1:1 so redirects aren't needed if this replaces it directly.

## Content notes carried over from the scrape

- **The store is Wix's unedited demo catalog.** Every product description, return policy, and
  shipping info block is literally Wix's placeholder copy ("I'm a product description..."),
  never customized. Confirm with the client whether this is a real store before launch — see the
  `.notice` callouts on `/category/all-products` and each product page.
- **The blog has one post**, and its entire body is one sentence. `post/[slug].astro` is a static
  page rather than a collection since there's only one — if more posts get added, worth
  converting to an Astro content collection.
- **`/book-online` loses Wix Bookings** (a hosted app, not static content) — currently just a
  placeholder notice. Needs a real booking solution (Calendly, Cal.com, custom) if that
  functionality is still wanted.
- **The privacy policy is still Wix's boilerplate** — flagged inline, needs real counsel-drafted
  copy.
- **The contact form on the homepage is not wired up** — no submit handler yet.

## Design tokens

Colors, type scale, and button/card shapes live as CSS custom properties at the top of
`src/styles/global.css`, sourced from computed styles on the live site (dark purple `#281A39`
text, pill-shaped buttons, soft gradient hero). Not a pixel-perfect Wix clone — a clean
reimplementation of the same visual language.

## Running it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to dist/
```
