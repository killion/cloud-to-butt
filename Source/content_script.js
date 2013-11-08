walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bAllegedly\b/g, "Kinda probably");
	v = v.replace(/\bnew study\b/g, "Tumblr post");
	v = v.replace(/\bNew study\b/g, "Tumblr post");
	v = v.replace(/\brebuild\b/g, "avenge");
	v = v.replace(/\bRebuild\b/g, "Avenge");
	v = v.replace(/\brebuilding\b/g, "avenging");
	v = v.replace(/\bRebuilding\b/g, "Avenging");
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bSpace\b/g, "Spaace");
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bsmartphone\b/g, "Pokédex");
	v = v.replace(/\bSmartphone\b/g, "Pokédex");
	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bSenator\b/g, "Elf-lord");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bcars\b/g, "cats");
	v = v.replace(/\bCars\b/g, "Cats");
	v = v.replace(/\belection\b/g, "eating contest");
	v = v.replace(/\bElection\b/g, "Eating contest");
	v = v.replace(/\bcongressional leader\b/g, "river spirit");
	v = v.replace(/\bCongressional leader\b/g, "River spirit");
	v = v.replace(/\bcongressional leaders\b/g, "river spirits");
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	v = v.replace(/\bhomeland security\b/g, "Homestar Runner");
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
	v = v.replace(/\bCould Not Be Reached For Comment\b/g, "Is Guilty And Everyone Knows It");
	v = v.replace(/\bCould Not Be Reached for Comment\b/g, "Is Guilty And Everyone Knows It");
	
	textNode.nodeValue = v;
}


