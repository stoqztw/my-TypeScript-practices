const x = 16;
const isXNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
	[key: string]: string;
}

interface DateRecord {
	[key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type ObjOne = MyRecord<string>

export{}