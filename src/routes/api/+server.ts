export const GET = async () => {
	const response = await fetch(
		'https://civitai.com/api/trpc/image.getInfinite?input=%7B%22json%22%3A%7B%22period%22%3A%22Week%22%2C%22periodMode%22%3A%22published%22%2C%22sort%22%3A%22Most%20Reactions%22%2C%22types%22%3A%5B%22image%22%5D%2C%22withMeta%22%3Afalse%2C%22useIndex%22%3Atrue%2C%22browsingLevel%22%3A1%2C%22include%22%3A%5B%22cosmetics%22%5D%2C%22excludedTagIds%22%3A%5B%5D%2C%22disablePoi%22%3Atrue%2C%22disableMinor%22%3Atrue%2C%22cursor%22%3Anull%7D%2C%22meta%22%3A%7B%22values%22%3A%7B%22cursor%22%3A%5B%22undefined%22%5D%7D%7D%7D'
	);

	const data = await response.json();

	return new Response(JSON.stringify(data.result.data), {
		headers: { 'Content-Type': 'application/json' }
	});
};
