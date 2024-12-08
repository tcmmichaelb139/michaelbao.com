<script lang="ts">
	import Date from '$lib/UI/Bar/Modules/Date.svelte';
	import Time from '$lib/UI/Bar/Modules/Time.svelte';
</script>

<div class="flex gap-2">
	<div class="hidden sm:flex">
		<Date />
	</div>
	<Time />
</div>
