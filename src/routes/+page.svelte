<script lang="ts">
	import CardColumn from '$lib/components/CardColumn.svelte';

	import { onMount } from 'svelte';

	let width: number = $state(0);

	let items = $state<ImageItem[]>([]);
	$inspect(items);
	let cursor = $state<string>('undefined');
	let observer: IntersectionObserver;

	async function fetchFromApi(cursor: string = 'undefined') {
		const response = await fetch(`/api?cursor=${cursor}`);
		const data = await response.json();
		return data;
	}

	function getChunksConsideringDeviceViewWidth() {
		if (width >= 1280) {
			return 5; // Desktop
		} else if (width >= 1024) {
			return 3; // Laptop
		} else if (width >= 768) {
			return 2; // Tablet
		} else {
			return 1; // Mobile
		}
	}

	function divideDataIntoChunks(data: RequestData['data']['json']['items'], columns: number) {
		const chunks = Array<Array<ImageItem>>();

		for (let i = 0; i < columns; i++) {
			chunks.push([]);
		}
		let counter = 0;
		for (let i = 0; i < data.length; i++) {
			chunks[counter].push(data[i]);
			counter++;
			if (counter === columns) {
				counter = 0;
			}
		}

		return chunks;
	}

	onMount(async () => {
		observer = new IntersectionObserver(
			async (entries) => {
				const [entry] = entries;

				if (entry.isIntersecting) {
					const req = (await fetchFromApi(cursor)) as RequestData['data'];
					items = [...items, ...req.json.items];
					cursor = req.json.nextCursor;
				}
			},
			{ threshold: 0.2 }
		);

		const loadingElement = document.getElementById('loading');
		if (!loadingElement) {
			throw new Error('Loading element not found');
		}
		observer.observe(loadingElement);
	});
</script>

<main class="flex flex-col" bind:clientWidth={width}>
	{#if items.length !== 0}
		<div class="wrap mx-auto flex h-full justify-center gap-4">
			{#each divideDataIntoChunks(items, getChunksConsideringDeviceViewWidth()) as chunk}
				<CardColumn {chunk} />
			{/each}
		</div>
	{/if}
	<div id="loading" class="my-8 h-10 w-full text-center text-gray-500">Loading...</div>
</main>
