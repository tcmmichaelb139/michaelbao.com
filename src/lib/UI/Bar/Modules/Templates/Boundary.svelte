<script lang="ts">
	const { children } = $props();
</script>

<div
	class="text-current my-2 inline-flex items-center space-x-1 text-nowrap rounded-full border-2 border-solid px-2 py-0.5"
>
	{@render children()}
</div>
