export{};

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // type = 'b' | 'c'

type Test = 'a' | 'b';
type TestTwo = 'c' | 'a';

type TestThree = Exclude<Test, TestTwo>;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type numericStatus = Exclude<Status, string> // 200 | 401 | 504

// Extract
type Status1 = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type numericStatus1 = Extract<Status1, string> // 'success' | 'clientError' | 'serverError'

// NonNullable
type T01 = NonNullable<string | number | undefined>; // string | number