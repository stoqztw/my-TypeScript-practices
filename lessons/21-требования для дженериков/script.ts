function len<T extends {length: number}>(arg: T): number {
	return arg.length;
}

len('aaa');
len([1, 2]);
len({length: 1});

// len(1) - error