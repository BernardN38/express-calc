const express = require('express');

const app = express();

app.get('/mean', (req, res) => {
	const nums = req.query.nums.split(',');
	let mean =
		nums.reduce((acc, n) => {
			return parseInt(acc) + parseInt(n);
		}) / nums.length;
	res.send(`the mean is ${mean}`);
});
app.get('/median', (req, res) => {
	const nums = req.query.nums.split(',').map((e)=>{
        return parseInt(e)
    });
	let median = 0;
	if (nums.length % 2 == 0) {
		median = (nums[Math.floor(nums.length / 2)] + nums[Math.floor(nums.length / 2) - 1]) / 2;
	} else {
		median = nums[Math.floor(nums.length / 2)];
	}
	res.send(`the median is ${median}`);
});
app.get('/mode', (req, res) => {
	const nums = req.query.nums.split(',').map((e)=>{
        return parseInt(e)
    });
    let freq = {}
    nums.map((el)=>{
        if (freq[el]){
            freq[el] = freq[el]+1
        } else {
            freq[el] = 1
        }
    })
    let arr = Object.values(freq)
    let max = Math.max(...arr);
    let mode = []
    for (const prop in freq){
        if (freq[prop] == max)
        mode.push(prop)
    }
	res.send(`the mode(s) is ${mode}`);
});
app.listen(3000, () => {
	console.log('listening on port 3000');
});
