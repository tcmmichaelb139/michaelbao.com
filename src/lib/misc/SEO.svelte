<script>
	import { page } from '$app/stores';

	export let title = 'Home | Michael Bao';
	export let description = 'Michael Bao is a student interested in everything technology.';
	// export let image = 'https://michaelbao.io/og.png';
</script>

<svelte:head>
	<title>{title} | Michael Bao</title>
	<meta name="description" content={description} />
	<meta property="og_site_name" content="michaelbao.io" />
	<meta property="og:url" content="https://michaelbao.io{$page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content={image} /> -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="michaelbao.io" />
	<meta property="twitter:url" content="https://michaelbao.io{$page.url.pathname.toString()}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content={image} /> -->
	{@html `  <script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title} | Michael Bao",
     "url": "https//michaelbao.io${$page.url.pathname}"}</script>`}
	<!-- "logo": ${image}   -->
</svelte:head>
