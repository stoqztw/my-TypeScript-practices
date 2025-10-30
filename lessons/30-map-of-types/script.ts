type PcBrand = {
	name: string;
	country: string;
	createdAd: Date;
}

type WellKnownBrand = 'apple' | 'lenovo' | 'hp' | 'dell' | 'huawei';

type MyPcRecord = {
	[BrandKey in WellKnownBrand]?: PcBrand;
}

const brandRecord: MyPcRecord = {
	apple: {
		country: 'USA',
		createdAd: new Date(),
		name: 'aa'
	}
}

type PartOfWindow = {
	[Key in 'document' | 'screen' | 'navigator']?: Window[Key];
}

const p: PartOfWindow = {
	document: window.document
}

export{}