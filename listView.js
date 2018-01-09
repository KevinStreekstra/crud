var listView={defined: true,dom:null};

listView.update=function()
{
	console.log("updating the listView");
	let dom=listView.dom;
	let boeken=listModel.getElements();
	let ul_list=listView.dom.getElementsByTagName("ul");
	let ul=ul_list[0];
	ul.innerHTML="";
	for(i=0;i<boeken.length;i++)
	{
		let li=document.createElement("li");

		let isbn=document.createElement("div");
		isbn.className="lijstVeld";
		isbn.innerHTML="<span class='label'>club:</span><br>"+boeken[i].isbn;
		let title=document.createElement("div");
		title.innerHTML="<span class='label'>Plaats:</span><br>"+boeken[i].title;
		title.className="lijstVeld";
		let auteur=document.createElement("div");
		auteur.innerHTML="<span class='label'>auteur(s)</span><br>"+boeken[i].auteurs;
		auteur.className="lijstVeld";
		let controls=document.createElement("div");


		let edit=document.createElement("button");
		edit.innerHTML="edit";
		edit.setAttribute("action","edit");
		edit.setAttribute("data",i);
		edit.addEventListener("click",listView.controlElement)
		let del=document.createElement("button");
		del.innerHTML="verwijderen";
		del.setAttribute("action","delete");
		del.setAttribute("data",i);
		del.addEventListener("click",listView.controlElement)
		controls.appendChild(edit);
		controls.appendChild(del);
		controls.className="lijstVeld controls";

		li.appendChild(isbn);
		li.appendChild(title);
		li.appendChild(auteur);
		li.appendChild(controls);
		ul.appendChild(li);
	}
}

listView.controlElement=function(ev)
{
	var nr=ev.currentTarget.getAttribute("data");
	var action=ev.currentTarget.getAttribute("action");
	let boeken=listModel.getElements(); 	switch(action)
	{
		case "delete":
			if(confirm("Weet je zeker dat je '"+boeken[nr].title+"' wilt verwijderen?"))
			{
				listModel.deleteElement(nr);
				listView.update();
			}
		break;
		case "edit":
			showSection("update",nr);
		break;
	}
}

listView.createRecord=function(ev)
{
	showSection("create");
}

listView.clearData=function(ev)
{
	listModel.clear();
	listView.update();
}

listView.initData=function(ev)
{
	listModel.init();
	listView.update();
}

listView.init=function(dom)
{
	listView.dom=dom;
	console.log("listView init");

	let create=document.getElementById("createRecordButton");
	create.addEventListener("click",listView.createRecord);
	let clearButton=document.getElementById("clearDataButton");
	clearButton.addEventListener("click",listView.clearData);
	let initButton=document.getElementById("initDataButton");
	initButton.addEventListener("click",listView.initData);

	listView.update();
}
