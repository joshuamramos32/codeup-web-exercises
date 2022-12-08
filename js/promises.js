"use strict";

(()=>{
	function lastCommit() {
		return fetch('https://api.github.com/repos/joshuamramos32/codeup-web-exercises/commits?per_page=1')
			.then(res => res.json())
			.then(res => {
				document.getElementById('message').innerHTML = res[0].commit.author.date
			},)
		console.log(lastCommit());
	}

	console.log(lastCommit());
})();
