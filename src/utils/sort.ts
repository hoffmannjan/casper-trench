export const tableSort = (direction: 'asc' | 'desc', items: {}[], sortElement: string): any => {
	items.sort((a, b) => {
		if (typeof a[sortElement] === 'number') {
			return direction === 'asc'
				? a[sortElement] - b[sortElement]
				: b[sortElement] - a[sortElement];
		} else if (typeof a[sortElement] === 'string') {
			return direction === 'asc'
				? a[sortElement].localeCompare(b[sortElement])
				: b[sortElement].localeCompare(a[sortElement]);
		}
		// TODO add other types e.g date as needed.
	});
	return items;
};
