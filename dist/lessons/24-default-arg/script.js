export async function request(url) {
    const responce = await fetch(url);
    return responce.json();
}
const data = request('');
