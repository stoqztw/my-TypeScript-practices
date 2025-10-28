function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
	return obj[key];
}

