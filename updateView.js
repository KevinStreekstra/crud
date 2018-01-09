var updateView={defined: true,dom:null};

updateView.updateRecord=function()
{
	let dom=updateView.dom;
	let nr=updateView.nr;
	let boek={};

	boek.title=	dom.getElementsByClassName("title")[0].value;
	boek.auteurs=dom.getElementsByClassName("auteur")[0].value;
	boek.isbn=dom.getElementsByClassName("isbn")[0].value;

	listModel.updateElement(nr,boek);
	showSection("list");
};

updateView.cancel=function()
{
	console.log("cancel create");
	showSection("list");
};

updateView.init=function(dom,rest)
{

	var nr=parseInt(rest[0]);

	updateView.dom=dom;
	updateView.nr=nr;

	console.log("updateView init for book "+nr+"("+typeof(nr)+")");

	let ok=dom.getElementsByClassName("ok")[0];
	ok.addEventListener("click",updateView.updateRecord);
	let cancel=dom.getElementsByClassName("cancel")[0];
	cancel.addEventListener("click",updateView.cancel);

	let boeken=listModel.getElements();
	let boek=boeken[nr];

	dom.getElementsByClassName("title")[0].value=boek.title;
	dom.getElementsByClassName("auteur")[0].value=boek.auteurs;
	dom.getElementsByClassName("isbn")[0].value=boek.isbn;


}
