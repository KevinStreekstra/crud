    var createView={defined: true,dom:null};

createView.createRecord=function()
{
	// get a reference to this dom
	var dom=createView.dom;
	let boek={};

	boek.title=	dom.getElementsByClassName("title")[0].value;
	boek.auteurs=dom.getElementsByClassName("auteur")[0].value;
	boek.isbn=dom.getElementsByClassName("isbn")[0].value;

	listModel.createElement(boek);
	showSection("list");
};

createView.cancel=function()
{
	console.log("cancel create");
	showSection("list");
};

createView.init=function(dom)
{
	createView.dom=dom;
	console.log("createView init");
	let ok=dom.getElementsByClassName("ok")[0];
	ok.addEventListener("click",createView.createRecord);
	let cancel=dom.getElementsByClassName("cancel")[0];
	cancel.addEventListener("click",createView.cancel);

}
