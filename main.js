let sheetURL =
	'https://docs.google.com/spreadsheets/d/1vs1gaU5u9JxXqrrdKgoZ3CbkohxEjU-ybocQ23_PoOk/edit?usp=sharing';
let sheetID = '1vs1gaU5u9JxXqrrdKgoZ3CbkohxEjU-ybocQ23_PoOk';
let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;
const render = (projectsArr) => {
	console.log('this is projectsArr', projectsArr);
};
$(document).ready(function () {
	$.ajax({ url: sheetAsJSON }).then((data) => {
		const projects = data.feed.entry.map((project) => {
			return {
				title: project.gsx$title.$t,
				image: project.gsx$image.$t,
				link: project.gsx$link.$t,
				description: project.gsx$description.$t,
			};
		});
		console.log('this is project:', projects);
		render(projects);
		projects.forEach((createPortfolio) => {
			$('.projects').append(`
<div class="card" style="width: 18rem;">
  <img src=${createPortfolio.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${createPortfolio.title}</h5>
    <p class="card-text">${createPortfolio.description}</p>
    <a href="${createPortfolio.link}" class="btn btn-primary">Check it out!</a>
  </div>
</div>
`);
			// console.log(createPortfolio.title);
			// $('.carousel-item').append(createPortfolio.image);
		});
		console.log('this is data:', data.feed.entry[0].gsx$title.$t);
	});
});

// const createPortfolio = (projectsArr) => {
// 	let $card = $('<div>');
// 	$card.addClass('card');
// 	let $title = $('<p>');
// 	$title.addClass('card-title');
// 	$title.text(projectsArr.title);
// 	let $img = $('<img>');
// 	$image.addClass('card-image');
// 	$image.attr('src', projectsArr.image);
// 	$card.append($img);
// 	$card.append($title);
// 	$('.portfolio').append($card);
//     console.log('This is create', $card);

// 	$image.on('click', () => {
// 		window.open(projectsArr.link);
// 	});
// };

// const projectsArr = [
// 	{
// 		title: 'Project 1',
// 		img:
// 			'https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
// 	},
// 	{
// 		title: 'Project 2',
// 		img:
// 			'https://images.unsplash.com/photo-1600174617949-26c8cc49b738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80',
// 	},
// ];
// projectsArr.forEach((project) => {
// 	$('.projects').append(`
// <div class="card" style="width: 18rem;">
//   <img src=${project.img} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${project.title}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Github</a>
//     <a href="${projects.link}" class="btn btn-primary">CodePen</a>
//   </div>
// </div>
// `);
// });
