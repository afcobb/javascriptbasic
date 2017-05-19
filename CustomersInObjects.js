var customers = [
	{ id: 1000, 
		name: "Waldorf Electronics",
		address: "123 Any Street",
		city: "Berlin",
		state: "Germany",
		postalcode: "ABC123",
		creditlimit: 100000
		// this is the data for the first object entry, note no comma after final attribute and curly brackets are at the end
	},
	{id: 1010, 
		name: "Google",
		address: "1 Google Way",
		city: "Mountain View",
		state: "California",
		postalcode: "12345",
		creditlimit: 1000000
	},
	{id: 1020, 
		name: "Native Instruments",
		address: "2 Guitar Way",
		city: "New York",
		state: "New York",
		postalcode: "10101",
		creditlimit: 10000
	}
];
//below is a refactoring function, trCtrl is the parent for the data thats being created
function formatTableData(trCtrl, data) {
	var tdCtrl = document.createElement("td");
	trCtrl.appendChild(tdCtrl);
	var textCtrl = document.createTextNode(data);
				// new text node is coming in as the data parameter
	tdCtrl.appendChild(textCtrl);
}	

function formatTableRow(id, name, address, postal, credit) {
	var tbodyCtrl = document.getElementById("customers")
	// this  creates a variable to work with the tbody tag. a reference so we can add new elements
	var trCtrl = document.createElement("tr");
		// creates table row element. creates opening and closing tags automatically.
	tbodyCtrl.appendChild(trCtrl)
		// this tells us to put the tr tag inside the tbody tag, make it a child of tbody - DO THIS FOR EACH FIELD
	// var tdIdCtrl = document.createElement("td");
		// creates the tag for td element
	//trCtrl.appendChild(tdIdCtrl);
		// this adds the tdIdCtrl tag to the row. 
	//var textIdCtrl = document.createTextNode(id);
	//tdIdCtrl.appendChild(textIdCtrl); - this is all combined in the below function
	formatTableData(trCtrl, id);
	// NOW FOR NAME
	// var tdNameCtrl = document.createElement("td");
	// trCtrl.appendChild(tdNameCtrl);
	//var textNameCtrl = document.createTextNode(name);
	//tdNameCtrl.appendChild(textNameCtrl);
	formatTableData(trCtrl, name);

	// NOW FOR ADDRESS
	// var tdaddressCtrl = document.createElement("td");
	// trCtrl.appendChild(tdaddressCtrl);
	// var textaddressCtrl = document.createTextNode(address);
	// tdaddressCtrl.appendChild(textaddressCtrl); COMBINED BELOW
	formatTableData(trCtrl, address);

	// POSTAL
	// var tdPostalCtrl = document.createElement("td");
	// trCtrl.appendChild(tdPostalCtrl);
	// var textPostalCtrl = document.createTextNode(postal);
	// tdPostalCtrl.appendChild(textPostalCtrl);
	formatTableData(trCtrl, postal);
	formatTableData(trCtrl, credit);


}
function listCustomers() {
	console.log("Called listCustomers()");
	for(var idx= 0; idx < customers.length; idx++) {
		var id = customers[idx].id;
			// this gives us the id for a specific customer 
		var name = customers[idx].name;
		var address = customers[idx].address;
		var citystpostal = customers[idx].city + ", " +
								customers[idx].state + " " +
								customers[idx].postalcode;
		var creditlimit =	parseInt(customers[idx].creditlimit);
								console.log(id, name, address, citystpostal, creditlimit);	
								// the formatting for citystpostal has 3 components, so we've added them all together
		formatTableRow(id, name, address, citystpostal, creditlimit)
		


		} // end for loop

}