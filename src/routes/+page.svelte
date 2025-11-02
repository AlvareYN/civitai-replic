<script lang="ts">
	import { onMount } from 'svelte';

	let width: number = $state(0);

	$inspect(width);

	async function fetchFromApi() {
		const response = await fetch('/api');
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

		console.log(chunks);

		return chunks;
	}
</script>

<main class="wrap mx-auto flex h-full justify-center gap-4" bind:clientWidth={width}>
	{#await fetchFromApi() then data}
		{#each divideDataIntoChunks(data.json.items, getChunksConsideringDeviceViewWidth()) as chunk}
			<div class="flex w-[320px] max-w-[450px] flex-col gap-4">
				{#each chunk as image}
					<div class="relative">
						<div
							class="CosmeticWrapper_glow__KJ57U CosmeticWrapper_wrapper__kH8WX CosmeticWrapper_cssFrame__Lrn6N"
							class:CosmeticWrapper_cssFrame__Lrn6N={!!image.cosmetic?.data?.glow}
							style={`--comsmetic-border: ${image.cosmetic?.data?.cssFrame || 'none'}`}
						>
							<div
								class=" border-gray-3 bg-gray-0 shadow-gray-4 dark:border-dark-4 dark:bg-dark-6 dark:shadow-dark-8 relative flex flex-col overflow-hidden border"
							>
								<img
									class="image"
									style="max-width: 450px;"
									src={`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${image.url}/anim=false,width=450,optimized=true/${image.id}.jpeg`}
									alt={'image'}
								/>
								<div
									class="flex justify-between bg-[#25262b] px-4 py-1 text-sm"
									style="color:#868e96;"
								>
									<div>
										<span>👍</span>
										<span>{image.stats?.likeCountAllTime}</span>
									</div>
									<div>
										<span>❤️</span>
										<span>{image.stats?.heartCountAllTime}</span>
									</div>
									<div>
										<span>😂</span>
										<span>{image.stats?.laughCountAllTime}</span>
									</div>
									<div>
										<span>😢</span>
										<span>{image.stats?.cryCountAllTime}</span>
									</div>
									<button
										class="flex cursor-pointer gap-0.5 rounded-xs bg-[#F59F001A] px-0.5 pr-2 text-[#fab005]"
									>
										<span class="flex items-center gap-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="yellow.7"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="tabler-icon tabler-icon-bolt"
												style="fill: rgb(245, 159, 0);"
												><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path></svg
											>
											<p>
												{new Intl.NumberFormat('en', { notation: 'compact' }).format(
													image.stats?.tippedAmountCountAllTime || 0
												)}
											</p>
										</span>
									</button>
								</div>
							</div>
						</div>
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

	.CosmeticWrapper_glow__KJ57U:before {
		background-image: var(--comsmetic-border);
		border-radius: 8px;
		content: '';
		filter: blur(5px);
		inset: 0;
		position: absolute;
	}

	.CosmeticWrapper_wrapper__kH8WX {
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.CosmeticWrapper_cssFrame__Lrn6N {
		background-image: var(--comsmetic-border);
		box-shadow:
			inset 0 0 1px 1px hsla(0, 0%, 100%, 0.3),
			0 1px 2px rgba(0, 0, 0, 0.8);
		padding: 6px;
	}
</style>
