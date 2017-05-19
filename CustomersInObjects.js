var customers = [
	{ id: 1000, 
		name: "Waldorf Electronics",
		address: "123 Any Street",
		city: "Berlin",
		state: "Germany",
		postalcode: "ABC123"
		// this is the data for the first object entry, note no comma after final attribute and curly brackets are at the end
	},
	{id: 1010, 
		name: "Google",
		address: "1 Google Way",
		city: "Mountain View",
		state: "California",
		postalcode: "12345"
	},
	{id: 1020, 
		name: "Native Instruments",
		address: "2 Guitar Way",
		city: "New York",
		state: "New York",
		postalcode: "10101"
	}
];

function formatTableRow(id, name, address, postal) {
	var tbodyCtrl = document.getElementById("customers")
	// this  creates a variable to work with the tbody tag. a reference so we can add new elements
	var trCtrl = document.createElement("tr");
		// creates table row element. creates opening and closing tags automatically.
	tbodyCtrl.appendChild(trCtrl)
		// this tells us to put the tr tag inside the tbody tag, make it a child of tbody - DO THIS FOR EACH FIELD
	var tdIdCtrl = document.createElement("td");
		// creates the tag for td element
	trCtrl.appendChild(tdIdCtrl);
		// this adds the tdIdCtrl tag to the row. 
	var textIdCtrl = document.createTextNode(id);
	tdIdCtrl.appendChild(textIdCtrl);
	// NOW FOR NAME
	var tdNameCtrl = document.createElement("td");
	trCtrl.appendChild(tdNameCtrl);
	var textNameCtrl = document.createTextNode(name);
	tdNameCtrl.appendChild(textNameCtrl);
	// NOW FOR ADDRESS
	var tdaddressCtrl = document.createElement("td");
	trCtrl.appendChild(tdaddressCtrl);
	var textaddressCtrl = document.createTextNode(address);
	tdaddressCtrl.appendChild(textaddressCtrl);
	//
	var tdPostalCtrl = document.createElement("td");
	trCtrl.appendChild(tdPostalCtrl);
	var textPostalCtrl = document.createTextNode(postal);
	tdPostalCtrl.appendChild(textPostalCtrl);


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
								console.log(id, name, address, citystpostal);	
								// the formatting for citystpostal has 3 components, so we've added them all together
		formatTableRow(id, name, address, citystpostal)
		


		} // end for loop

}