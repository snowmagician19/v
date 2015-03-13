

/*

function TAelement(category, question, trueanswer, c1, c2, c3, c4)
{
	this.category = category;
    this.question = question;
    this.trueanswer = trueanswer;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
}

if the length is 2 then do that and than jQuery merge.  

*/


function fillthequestionpanel()
{
	var extractedelement = testarray[0];

	testarray.splice( $.inArray(extractedelement, testarray), 1 );
	
	if(testarray.length >=2 ) 		{ var extractedelement2 = testarray[0]; var extractedelement3 = testarray[1]; }
	else if(testarray.length ==1 ) { var extractedelement2 = testarray[0]; }
	else /*testarray.length==0*/	{ db.transaction( preparetestarray ); } 
	
	$manualwronganswers.hide(); 	$wronganswer1.text("");		$wronganswer2.text("");
	
	
	var categorytype1 = extractedelement.category.substring(0,2);
	var categorytype2 = extractedelement2.category.substring(0,2);
	var categorytype3 = extractedelement3.category.substring(0,2);

	// types
	
	// rs 
	// se2e
	// n2e
	// e2n
	// se2n

	
	// show everything and hide
	$answeringtoolscomponents.show();
	
	if(categorytype == "rs")
	{
		$audiohear1.hide();
		$question1textarea.hide();
		$submitbutton1.hide();
	}
	else if(categorytype == "se")
	{
		$question1choice.hide();
	}
	else //n2e e2n
	{	
		$question1choice.hide();
		$audiohear1.hide();

	}
	
	$question1view.text(extractedelement.question);
	
	ultimateanswer = extractedelement.trueanswer;
	choice1.text(extractedelement.c1);
	choice2.text(extractedelement.c2);
	choice3.text(extractedelement.c3);
	choice4.text(extractedelement.c4);
	
	
	
	if(categorytype2 == "rs")
	{
		$audiohear2.hide();
		$question2textarea.hide();
		$submitbutton2.hide();
		
		
	}
	else if(categorytype2 == "se")
	{
		$question2choice.hide();
	}
	else //n2e e2n
	{	
		$question2choice.hide();
		$audiohear2.hide();

	}
	
	choice5.text(extractedelement2.c1);
	choice6.text(extractedelement2.c2);
	choice7.text(extractedelement2.c3);
	choice8.text(extractedelement2.c4);
	
	
	
	if(categorytype3 == "rs")
	{
		$audiohear3.hide();
		$question3textarea.hide();
		$submitbutton3.hide();
		
		
	}
	else if(categorytype3 == "se")
	{
		$question3choice.hide();
	}
	else //n2e e2n
	{	
		$question2choice.hide();
		$audiohear2.hide();

	}
	
	choice9.text(extractedelement3.c1);
	choice10.text(extractedelement3.c2);
	choice11.text(extractedelement3.c3);
	choice12.text(extractedelement3.c4);
	
	
	
	
	
}

