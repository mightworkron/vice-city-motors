

## Add Second GTM Container (GTM-P77D69RV)

You already have GTM-W2VG66T5 installed. This plan adds a second GTM container (GTM-P77D69RV) alongside it.

### Changes to `index.html`

1. **In `<head>` (line 11)** -- Add the second GTM script snippet right after the existing GTM-W2VG66T5 block:
```html
<!-- Google Tag Manager (P77D69RV) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P77D69RV');</script>
<!-- End Google Tag Manager (P77D69RV) -->
```

2. **After `<body>` (line 71)** -- Add the second noscript snippet after the existing one:
```html
<!-- Google Tag Manager (noscript) (P77D69RV) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P77D69RV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) (P77D69RV) -->
```

### Note
Both GTM containers will load independently on every page. This is a common setup when different teams or tools manage separate containers.
