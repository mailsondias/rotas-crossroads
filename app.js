// 
crossroads.addRoute('/', function(){
	render('home');
});

crossroads.addRoute('section-1', function(){
	render('section-1');
});

crossroads.addRoute('section-2', function(){
	render('section-2');
});

crossroads.addRoute('section-3', function(){
	render('section-3');
});

function render(id){
	resetPages();
	document.getElementById(id).style.display = "block";
}

function resetPages(){
	var pages = document.querySelectorAll('.page');

	[].forEach.call(pages, function(page){
		page.style.display = "none";
	});
}
 
//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}

hasher.initialized.add(parseHash); 
hasher.changed.add(parseHash); 
hasher.init();