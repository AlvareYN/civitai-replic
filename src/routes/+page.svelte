<script lang="ts">
	import { onMount } from 'svelte';

	async function fetchFromApi() {
		const response = await fetch('/api');
		const data = await response.json();
		return data;
	}

	function getChunksConsideringDeviceViewWidth() {
		const width = window.innerWidth;

		if (width >= 1280) {
			return 5; // Desktop
		} else if (width >= 768) {
			return 3; // Tablet
		} else {
			return 2; // Mobile
		}
	}

	function divideDataIntoChunks(data: RequestData['data']['json']['items'], chunkSize: number) {
		const chunks = [];
		for (let i = 0; i < data.length; i += chunkSize) {
			chunks.push(data.slice(i, i + chunkSize));
		}

		console.log(chunks);

		return chunks;
	}
</script>

<main class="wrap mx-auto flex h-full justify-center gap-4">
	{#await fetchFromApi() then data}
		{#each divideDataIntoChunks(data.json.items, getChunksConsideringDeviceViewWidth()) as chunk}
			<div class="flex w-[320px] max-w-[450px] flex-col gap-4">
				{#each chunk as image}
					<div
						class="border-gray-3 bg-gray-0 shadow-gray-4 dark:border-dark-4 dark:bg-dark-6 dark:shadow-dark-8 relative flex flex-col overflow-hidden rounded-md border"
					>
						<img
							class="image"
							src={`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${image.url}/anim=false,width=450,optimized=true/${image.id}.jpeg`}
							alt={'image'}
						/>
					</div>
				{/each}
			</div>
		{/each}
	{:catch error}
		<p>Error loading data: {error.message}</p>
	{/await}
</main>

<style>
	.image {
		height: 100% !important;

		min-width: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		-o-object-position: top center;
		object-position: top center;
		transition: transform 0.4s ease;
	}
</style>
