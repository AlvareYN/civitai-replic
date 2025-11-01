// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type RequestData = {
		data: {
			json: {
				items: Array<ImageItem>;
				nextCursor: string;
			};
			metadata: {
				referentialEqualities: Record<string, Array<unknown>>;
				values: Record<string, unknown>;
			};
		};
	};

	type ImageItem = {
		id: number;
		reactionCount: number;
		commentCount: number;
		collectedCount: number;
		index: number;
		postId: number;
		url: string;
		nsfwLevel: number;
		aiNsfwLevel: number;
		width: number;
		height: number;
		hash: string;
		hideMeta: boolean;
		sortAt: string;
		type: string;
		userId: number;
		needsReview: null | unknown;
		hasMeta: boolean;
		onSite: boolean;
		postedToId: number;
		combinedNsfwLevel: number;
		baseModel: string;
		modelVersionIds: number[];
		toolIds: unknown[];
		techniqueIds: unknown[];
		existedAtUnix: number;
		sortAtUnix: number;
		tagIds: number[];
		modelVersionIdsManual: number[];
		minor: boolean;
		blockedFor: null | unknown;
		remixOfId: null | number;
		hasPositivePrompt: boolean;
		availability: string;
		poi: boolean;
		acceptableMinor: boolean;
		stats: {
			likeCountAllTime: number;
			laughCountAllTime: number;
			heartCountAllTime: number;
			cryCountAllTime: number;
			commentCountAllTime: number;
			collectedCountAllTime: number;
			tippedAmountCountAllTime: number;
			dislikeCountAllTime: number;
			viewCountAllTime: number;
		};
		modelVersionId: number;
		createdAt: string;
		metadata: {
			width: number;
			height: number;
		};
		publishedAt: string;
		user: {
			id: number;
			username: string;
			image: null | string;
			deletedAt: null | string;
			cosmetics: {
				cosmeticId: number;
				data: null | unknown;
				cosmetic: {
					id: number;
					name: string;
					type: string;
					data: Record<string, unknown>;
					source: string;
				};
			}[];
			profilePicture: null | string;
		};
		reactions: unknown[];
		cosmetic: {
			equippedToId: number;
			claimKey: string;
			userData: null | unknown;
			id: number;
			data: Record<string, unknown>;
		};
		tags: unknown[];
		name: null | string;
		scannedAt: null | string;
		mimeType: null | string;
		ingestion: string;
		postTitle: null | string;
		meta: null | unknown;
		thumbnailUrl: null | string;
	};
}

export {};
