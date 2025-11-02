export {};

interface DataModel {
	id: string;
	title: string;
	elements: {
		header: {
			title: string;
			description: string;
			links: string[];
		};
		footer: {
			description: string;
			links: string[];
		};
		body: {
			title: string;
			content: {};
		};
	};
}

type T0 = DataModel['elements']['footer'];

const sizes = ['small', 'medium', 'large'] as const;

type T1 = typeof sizes[number];