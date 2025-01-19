<script lang="ts">
	type ImportData = {
		title: string | 'Title';
		description: string | 'Description';
		date: string | 'Date';
		id: string | 'Id';
	};

	export let importData: ImportData[] = [];
</script>

<div class="timeline">
	{#each importData as item (item.id)}
		<div class="timeline-item">
			<h3>{item.title}</h3>
			<p class="text-left">{item.description}</p>
			<time>{item.date}</time>
		</div>
	{/each}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
		align-items: left;
		margin: 20px;
	}

	.timeline-item {
		position: relative;
		justify-items: left;
		padding-left: 30px;
		border-left: 2px solid rgb(64, 64, 64);
	}

	.timeline-item::before {
		content: '';
		position: absolute;
		left: -7px;
		top: 0;
		width: 14px;
		height: 14px;
		background-color: #a7a7a7;
		border-radius: 50%;
		border: 2px solid rgb(42, 42, 42);
	}

	.timeline-item h3 {
		margin: 0;
		font-size: 18px;
		color: #333;
	}

	.timeline-item p {
		margin: 5px 0 0;
		font-size: 14px;
		color: #555;
	}

	.timeline-item time {
		font-size: 12px;
		color: #999;
	}
</style>
