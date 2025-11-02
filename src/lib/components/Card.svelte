<script lang="ts">
	let { image }: { image: ImageItem } = $props();

	let showOptions = $state<boolean>(false);
</script>

<div class="relative">
	{#if showOptions}
		<div
			class="card-option-dropdown absolute top-0 -right-3 z-20 flex flex-col gap-2 bg-[#25262B] p-4 shadow-lg"
		>
			<button class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#373a40]">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="tabler-icon tabler-icon-bookmark"
						><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"></path></svg
					>
				</div>
				<div>Save image to collection</div>
			</button>
			<button class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#373a40]">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="tabler-icon tabler-icon-eye"
						><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path
							d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
						></path></svg
					>
				</div>
				<div>View Post</div>
			</button>
			<button class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#373a40]">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="tabler-icon tabler-icon-flag"
						><path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"
						></path><path d="M5 21v-7"></path></svg
					>
				</div>
				<div>Report Image</div>
			</button>
			<button class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#373a40]">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="tabler-icon tabler-icon-eye-off"
						><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path><path
							d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
						></path><path d="M3 3l18 18"></path></svg
					>
				</div>
				<div>Hide this image</div>
			</button>
			<button class="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-[#373a40]">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="tabler-icon tabler-icon-user-off"
						><path d="M8.18 8.189a4.01 4.01 0 0 0 2.616 2.627m3.507 -.545a4 4 0 1 0 -5.59 -5.552"
						></path><path
							d="M6 21v-2a4 4 0 0 1 4 -4h4c.412 0 .81 .062 1.183 .178m2.633 2.618c.12 .38 .184 .785 .184 1.204v2"
						></path><path d="M3 3l18 18"></path></svg
					>
				</div>
				<div>Hide contet from this user</div>
			</button>
		</div>
	{/if}
	<button
		class="absolute top-2 right-2 z-10 cursor-pointer"
		aria-label="card-options"
		onclick={() => (showOptions = !showOptions)}
	>
		<span class="flex h-8 w-8 items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#fff"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="tabler-icon tabler-icon-dots-vertical"
				filter="drop-shadow(1px 1px 2px rgb(0 0 0 / 50%)) drop-shadow(0px 5px 15px rgb(0 0 0 / 60%))"
				><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path
					d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
				></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg
			>
		</span>
	</button>
	<div
		class="CosmeticWrapper_glow__KJ57U CosmeticWrapper_wrapper__kH8WX CosmeticWrapper_cssFrame__Lrn6N"
		class:CosmeticWrapper_cssFrame__Lrn6N={!!image.cosmetic?.data?.glow}
		style={`--comsmetic-border: ${image.cosmetic?.data?.cssFrame || 'none'}`}
	>
		<div
			class=" border-gray-3 bg-gray-0 shadow-gray-4 dark:border-dark-4 dark:bg-dark-6 dark:shadow-dark-8 relative flex min-h-[450px] min-w-[300px] flex-col overflow-hidden border"
		>
			<img
				class="image"
				style="max-width: 450px;"
				src={`https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/${image.url}/anim=false,width=450,optimized=true/${image.id}.jpeg`}
				alt={'image'}
			/>
			<div class="flex justify-between bg-[#25262b] px-4 py-1 text-sm" style="color:#868e96;">
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

	.card-option-dropdown {
		border: 1px solid #373a40;
		border-radius: 0.25rem;
	}
</style>
