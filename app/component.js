export default (text = 'Hello Worlda') => {
	const element = document.createElement('h1');
	element.innerHTML = text;
	return element;
}