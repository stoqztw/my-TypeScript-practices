type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 4]];
nums.push(1);
nums.push(1, [12, 2]);

// JSON

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {

}

isJSON('12');
isJSON(12);
isJSON([12, {a: 12}]);
