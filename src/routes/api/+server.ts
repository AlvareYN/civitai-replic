type CiviAIInput = {
	json: {
		period: string;
		periodMode: string;
		sort: string;
		types: string[];
		withMeta: boolean;
		useIndex: boolean;
		browsingLevel: number;
		include: string[];
		excludedTagIds: number[];
		disablePoi: boolean;
		disableMinor: boolean;
		cursor: null | string;
	};
	meta?: { values: { cursor: Array<null | string> } };
};

export const GET = async ({ params, url }) => {
	console.log('new request');
	if (!params) {
		return new Response('Bad Request', { status: 400 });
	}
	console.log(params);

	const input: CiviAIInput = {
		json: {
			period: 'Week',
			periodMode: 'published',
			sort: 'Most Reactions',
			types: ['image'],
			withMeta: false,
			useIndex: true,
			browsingLevel: 1,
			include: ['cosmetics'],
			excludedTagIds: [],
			disablePoi: true,
			disableMinor: true,
			cursor: url.searchParams.get('cursor') || 'undefined'
		}
	};

	console.log(input);

	const apiURL = new URL('https://civitai.com/api/trpc/image.getInfinite');
	apiURL.searchParams.append('input', JSON.stringify(input));

	const response = await fetch(apiURL.toString());

	const data = await response.json();

	return new Response(JSON.stringify(data.result.data), {
		headers: { 'Content-Type': 'application/json' }
	});
};
