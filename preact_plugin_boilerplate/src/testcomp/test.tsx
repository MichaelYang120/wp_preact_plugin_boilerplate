export function AsdfTest() {

	const callMeMaybe = () => {

		fetch(Adminajax_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: new URLSearchParams({
				action: 'number_action',
				num1: '7',
				num2: '42'
			})
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log('Success:', data);
		})
		.catch(error => {
			console.error('Fetch error:', error);
		});
	}

	const buttonClick = () => {
		console.log('button clicked');
		callMeMaybe();
	}

	return (
		<>
			<h1>It works!</h1>
			<button onClick={buttonClick}>Click me</button>
		</>
	);
}
