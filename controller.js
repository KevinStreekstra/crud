
hideAllSections();
function hideAllSections()
{
	var sections= document.getElementsByTagName("section");

	for(var i=0;i<sections.length;i++)
	{
		sections[i].style.display="none";
	}
}


function showSection(name,...rest)
{

	hideAllSections();

	var dom=document.getElementById(name);

	dom.style.display="block";

	var naam=name+"View";
	if(window[naam] && window[naam].defined==true)
	{
		window[naam].init(dom,rest);
	}
}

listModel.init();

showSection("list");
