"use strict";

(()=> {
	function lastCommit() {
		return fetch('https://api.github.com/repos/joshuamramos32/codeup-web-exercises/commits?per_page=1')
			.then(res => res.json())
			.then(res => {
				document.getElementById('message').innerHTML = res[0].commit.author.date;
				document.getElementById('message2').innerHTML = res[0].commit.message;

			},)
			.catch(error => console.error(error));

	}

	console.log(lastCommit());
// below is the correct way to request from an api from walkthrough.
	const getMostRecent = (username) => {
		fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token${GIT_KEY}`}})
			.then(resp => {
				// console.log(resp);
				return resp.json()
			}).then(events => {
			let eventTypes = events.map(event => event.type);
			let mostRecent = eventTypes.indexOf("PushEvent");
			//~~~~~~~~ another option
			let pushEvents = events.filter(event => event.type === "PushEvent");
			console.log(pushEvents[0].created_at);
			console.log((events[mostRecent].created_at));;
			//~~~~~~~~~~and another option
			for(let event of events){
				if (event.type ==="PushEvent"){
					console.log(event.created_at);
					break;
				}
			}
		})
	}
	getMostRecent("joshuamramos32")

})();

