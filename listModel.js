
var listModel={defined: true,dom:null};

listModel.data=[];


listModel.createElement=function(data)
{
	listModel.data.push(data);
};

listModel.deleteElement=function(nr)
{
	listModel.data.splice(nr,1);
};

listModel.clear=function()
{
	listModel.data=[];
};


listModel.updateElement=function(nr,data)
{
	listModel.data[nr]=data;
};


listModel.getElements=function()
{
	return listModel.data;
};


listModel.init=function(dom)
{
	console.log("listModel init");

	var boek={
		isbn: "AJAX",
			title: "Club uit Amsterdam",
			auteurs: "Kevin Streekstra"
    };
	listModel.createElement(boek);

	var boek={
			isbn: "PSV",
			title: "Club uit Eindhoven",
			auteurs: "Jesse de Jong"
    };
	listModel.createElement(boek);

	var boek={
			isbn: "Feyenoord",
			title: "Club uit Rotterdam",
			auteurs: "Hjalmar Snoep"
    };
	listModel.createElement(boek);
}
