// to get
// fetch("url").then(resp => resp.json()).then(data => console.log(data));get all
//fetch("url"/"id").then(resp => resp.json()).then(data => console.log(data));get one
//  to post new data ....
//
//  const newMovie ={
// 	id:"next_id",
// 	title:"name_of_movie"
// };
// fetch("url",{
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(newMovie),
// }).then (() => fetch("url")).then(resp => resp.JSON()).then(movies => console.log(movies));

// to update
const complexMovie ={
	title:"Be Kind Rewind",
	director:"MIchael Gondry",
	release_date: 2008,
	cast:["Vaslin Bey", "Jack Black", "Danny Glover"]
};
// "PUT" requests is to remove a object and replace it with something new but does not add new properties
//"Patch" edits the existing object