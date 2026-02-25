

## Install Google Tag Manager (GTM-W2VG66T5)

### What changes in code (2 edits to `index.html`)

1. **Add GTM `<script>` to `<head>`** -- Insert the GTM snippet as the very first item inside `<head>`, before the existing Google Ads tag (line 5).

2. **Add GTM `<noscript>` after `<body>`** -- Insert the noscript iframe immediately after the `<body>` tag (line 59), before the `<div id="root">`.

The existing Google Ads (`AW-17422213105`) gtag.js snippet will be kept as-is for now, since it handles Google Ads conversion tracking independently. Once GA4 and Google Ads are both configured inside GTM, you can optionally remove it later.

### What is configured inside GTM's web interface (not in code)

The following tags, triggers, and variables are set up in the GTM dashboard at tagmanager.google.com -- not in the website code:

- **GA4 Configuration Tag** -- Your GA4 Measurement ID firing on "All Pages" trigger
- **`call_click` event** -- GA4 Event tag with a Click trigger where `Click URL` contains `tel:`
- **`whatsapp_click` event** -- GA4 Event tag with a Click trigger where `Click URL` contains `wa.me` or `api.whatsapp.com`
- **`lead_form_submit` event** -- GA4 Event tag firing when the JotForm on `/collision-repair` is submitted (typically via a custom HTML tag listening for `postMessage` from the JotForm iframe, or a custom trigger on page path + form interaction)
- **`lead_form_start` (optional)** -- GA4 Event tag on first form field focus/interaction

These cannot be done in code -- they must be configured and published in the GTM container.

### Summary of code changes

| File | Change |
|------|--------|
| `index.html` | Add GTM script at top of `<head>` |
| `index.html` | Add GTM noscript after `<body>` |

