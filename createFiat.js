//create fiat account
(async function createFiat() {
	
	const createFiatURL = "https://sandbox-api.kotanipay.io/api/v3/wallet/fiat";

	const options = {
		headers: {
			"content-type": "applcation/json",
			"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjViNjc4MDMxMDI0ZWM3ZTFjMzJmYmM1Iiwic2Vzc2lvbl9pZCI6ImM5MGVjZGU0ZGQ1NTViOTliMWNmZWI2NjY0MmU2YzU0IiwidG9rZW5faWQiOiJQeWpKN0lHaCIsImlhdCI6MTcwNjQ1NzI2MywiZXhwIjoxNzA2NDYzMjYzfQ.TqNfwEVaqauJWkqvkUUYRb-7xk-gZbaqL6OHBbbum0c"
		},
		method: "POST",
		body: JSON.stringify({
			"currency": "NGN",
			"name": "test wallet"
		})
	};
	
	const response = await fetch(new Request(createFiatURL, options));
	
	kini = await response.json();

	switch(response.status) {
		case 200:
			console.log(kini);
			console.log("id is", kini.data.id);
			break
		default:
			console.log("didnt wor");
			console.log(kini);
	}
	
})();
