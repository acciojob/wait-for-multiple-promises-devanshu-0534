//your JS code here. If required.
const tbody = document.getElementById("output");

//Default row
tbody.innerHTML = `
	<tr>
		<td colspan = 2>Loading...</td>
	</tr>
`;
function createPromise(){
	const time = Math.random() * 2 + 1;
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(time);
		}, time*1000)
	})
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3]).then((times)=>{
	tbody.innerHTML = '';

	const totalTime = Math.max(...times)

	times.forEach((time, index)=>{
		const row = document.createElement('tr')
		row.innerHTML = `
		<td>Promise ${index+1}</td>
		<td>${time.toFixed(3)}</td>
		`;
		tbody.appendChild(row);
	});
	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `
	<td>Total </td>
	<td>${totalTime.toFixed(3)}</td>
	`
	tbody.appendChild(totalRow);
})
	





