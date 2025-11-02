<script lang="ts">
	import Card from './Card.svelte';

	let { chunk }: { chunk: Array<ImageItem> } = $props();
</script>

<div class="flex w-[320px] max-w-[450px] flex-col gap-4">
	{#each chunk as image, i}
		<Card {image} />
	{/each}
</div>
