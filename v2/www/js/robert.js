// <button id=thetestcontinues class=thexohasbeendisplayed data-icon="carat-r" data-iconpos="right" data-theme="b" >Continue</button>

// personal record table it saves owinningmessagedisplayedall opponentssethe date.  

// Speak Up History Speak Up Frequency 

// News - Ad-free version coming up on April 15, 2015

// The don't bother key.  When preparing also store the associated value and change it along with the global variable

// for versions outside the three East Asian languages, i.e. French Espanol German / Russian Vietnamese Portuguese 

// for Sri Lankan and Punjabi the format will be SAME AS Korean.  Sri Lankan Punjabi 

/*

ok from now on, 

For Korean, Japanese, Mandarin, 

Tamil, Punjabi, 

var nativeinsertword = $nativeinsert.val(); var englishinsertword = $englishinsert.val();
				
var r1a = englishinsertword.split(/[^a-z0-9\s.\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");
var r2a = nativeinsertword.split(/[^a-z\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");

				if( englishinsertword.length > 1 && nativeinsertword.length > 1 &&  r1a == englishinsertword && r2a.length == 0) 
				{	

if( englishinsertword.length <=1 || r1a != englishinsertword) { $screen2keyup.html(englishinsertword+"<span class=errorindicator> X !!!</span>"); }
if( nativeinsertword.length <= 1 || r2a.length != 0 ) { $screen2keyupnative.html(nativeinsertword+"<span class=errorindicator> X !!!</span>"); }
								
*/

/*

German, French, Danish, 

Russian, Portuguese, Vietnamese

Three Nordic languages,

var r1a = englishinsertword.split(/[^a-z0-9\s.\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");
// var r2a = nativeinsertword.split(/[^a-z\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");

				if( englishinsertword.length > 1 && nativeinsertword.length > 1 &&  r1a == englishinsertword ) 
				{

if( englishinsertword.length <=1 || r1a != englishinsertword) { $screen2keyup.html(englishinsertword+"<span class=errorindicator> X !!!</span>"); }
if( nativeinsertword.length <= 1  ) { $screen2keyupnative.html(nativeinsertword+"<span class=errorindicator> X !!!</span>"); }
			
*/


$document = $(document);

$document.ready(  
					function( ) 
					{
						
	incorgivencount = 0;	correctones = 0; 	streak = 0; overallopponents = 0;	vital = 0; percentage = 0;	answerextracted = "fille";  
	meaningretrieved = "curves";				insertvalue = "VAV";	winningmessageonscreen = "woc";		incorrectvar = "<p>";
	currentmeaning = "urrentmeaning";			
	se2equestiontext = "GT R";	se2nativequestiontext = "Dora Dora";	databaseaccesskeyword = "Ballpark";	addrandomcycle = 1;	cutoffvalue = 5;																						audioreplaycontent = "audioreplaycontent";

	carray = 	[];		incarray = 	[];		randomindexpool = [];
	
	allowedcharacters = [8,16,17,20,35,36,37,38,39,40,45,46,48,49,32,94,222]; 
	
	for(var i = 65; i <= 90; i++){ allowedcharacters.push(i); }
	
	for(var i = 190; i <= 200; i++){ allowedcharacters.push(i); }
	
se2nativequestiontext1 = "<p>Answer in Numbers</p> <p>1 2 3 4 5 6 7 8 9 0</p>"; 
se2nativequestiontext2 = "<p>Sound Only!<p>" + se2nativequestiontext1;

var datevar = new Date(); 	var fullyear = datevar.getFullYear();
	// screen1engword = "s1engword"; screen1natmeaning = "s1natm";
	
carraybase =	

[ "Good Job!", "Excellent!", "Fantastic!","Yes!", "Awesome!", "Tremendous!", "Marvelous!", "Magical!", "Smart!", " :) :) :) :) :) ", " :D :D :D :D :D "];

incarraybase =	

[ "Incorrect!", "Wrong!", "No, No!", "Try Again!", "Oh No!" ];

// choicearrow = [ ">", "→", "_" ];  // http://www.sabinanore.com/design/html-special-symbols/ 

choicearrow = 

[ " ♠ "," ♥ "," ♦ "," ♣ "," ♞ "," ♜ "," ♚ "," ♘ ",
" ♖ "," ♔ "," ♕ "," ♗ "," ♙ "," ♛ "," ♝ "," ♟ ",
" ☿ "," ♅ "," ♀ "," ♃ "," ♆ "," ♁ "," ♄ "," ♇ "," ♈ ",
" ♑ "," ♉ "," ♌ "," ♊ "," ♍ "," ♐ "," ♓ "," ☀ "," ☃ ",
" ☆ "," ☉ "," ☼ "," ☄ "," ☂ "," ★ "," ☈ "," ☾ "," Ω ",
" ☠ "," ☢ "," ☤ "," ✞ "," ☩ "," ✙ "," ✟ "," ☡ "," ✍ ",
" ✌ "," ✓ "," ✎ "," ✐ "," ✆ "," ✈ "," ☑ "," ✏ "," ✂ ",
" ✄ "," ✇ "," ❦ "," ✦ "," ✩ "," ✫ "," ✭ "," ✯ "," ✱ ",
" ✳ "," ✵ "," ✷ "," ✹ "," ❁ "," ❃ "," ❅ "," ❇ "," ❉ ",
" ❋ "," ✧ "," ✪ "," ✬ "," ✮ "," ✰ "," ✲ "," ✴ "," ✶ ",
" ✸ "," ✺ "," ✼ "," ✾ "," ❀ "," ❂ "," ❄ "," ❆ "," ❊ ",
" ❖ "," > "," → "," _ "," & "];


choicecolourset = 

[ "#33CC33" , "#0066FF", "#FF66FF", "#669999", "#0000FF", "#3399FF", "#336699", "#FFCC66","BC9AFF","#FF66CC","#9191B5","#B4B4FF",
"#FF3399","#6699FF", "#0000CC","#CC99FF","#FF9933","#FFCC99","#FF00FF","#5C5CE6","#58588F","#9090B5","#A2A2E6","#BEBEEE","#C4C4F0"];


randomindexpoolbase = [ "rn1", "rn2", "rn3", "rn4", "rn5", "rn1", "rn2" ];

		// rn1 SEVENTEEN 12 13 14 15
		// rn2 15 TWO FIVE THREE NINE  // can't be translated into hybrid
		// rn3 Audio Only 12 13 14 15
		// rn4 Audio SEVENTEEN 12 13 14 15
		// rn5 Audio only TWO FIVE THREE NINE // can't be translated into hybrid 
		
 
$.merge( carray, carraybase ); $.merge( incarray, incarraybase ); $.merge( randomindexpool, randomindexpoolbase );

incarray = shufflearray(incarray);	carray = shufflearray(carray);	choicearrow = shufflearray(choicearrow); randomindexpool = shufflearray(randomindexpool);
					
finalresult = ""; 			useranswer = "behehe"; 			
meaning		="lul";			testarray = [];		thelineup = [];		meaningarray = [];
fisplit = [];	 			vslength = 0; 				
		r1a = "r1a";				r2a = "r2a";			
category = "cat"; 	elementword = "eword";				
/* screen1targetword = "targetword";	*/		newEword = "Cody"; 			newNmeaning = "TestMeaning";  	
currentslidedown = "history";/*frequency*/		deletemode = false;			quickfill = true;
deleteindicator = "[x] ";		historyindex = 0;	screen1targetword = "elsa";		randomcentre = 50; 

audio = new Audio(); 		audio.src = ""; 	audio.play(); 				//  // if it is here it creates a bug
audioword = new Audio(); 	audioword.src=""; 	audioword.play();
	
standard = 0;	
		
audioscreenone = new Audio();

// navigator.tts.startup(); navigator.tts.speak("hello student");

userlanguage = 0; // 1 - Korean 2 - Japanese 3 - Mandarin 0 - english

$andtheresultisclass = $('.andtheresultisclass');

$areyousuredeleteeverything= $("#areyousuredeleteeverything");

$body = $('body');  
 
// $screen1navbar1= $("#screen1navbar1");
// $screen1navbar2= $("#screen1navbar2");

$canceldeletethetable= $("#canceldeletethetable");									
$choosejapanese= $("#choosejapanese");				
$choosekorean= $("#choosekorean");
$choosemandarin= $("#choosemandarin");
$chooselanguagefirst= $("#chooselanguagefirst");	
$choosecantonese= $("#choosecantonese");
$clearbutton = $("#clearbutton");
$confirmdiv = $('#confirmdiv'); 
$contentpart1 = $('#contentpart1');
$contentpart2 = $('#contentpart2'); 
$contentpart3 = $('#contentpart3');
$resetbutton 			= $('#resetbutton'); 
$creditsinformation 		= $('#creditsinformation');
$testarraystate = $('.testarraystate');  // function to update - databasedisplayer
$deletemodebutton = $('#deletemodebutton'); // deletemodebutton
$desiredpart = $("#desiredpart");
$devicemodelspan	= $('#devicemodelspan');
$deviceplatformspan	= $('#deviceplatformspan');
$e1 = $('.error1'); 
$e2 = $('.error2');  

$elsstaff	= $('#elsstaff');
// $entriesdisplayed = $(".entriesdisplayed");
$group = $('#group');

$gobackbutton = $('.gobackbutton');
$hearitbutton = $("#hearitbutton");
$instructionsbutton 	= $('#instructionsbutton');
$instructions	= $('#instructions');
$individual = $("#individual");		
$gobacktonormalscreen = $('.gobacktonormalscreen');
$languagedecided	= $('#languagedecided');
$newlanguagechosen = $('.newlanguagechosen');	 
$helpelements = $('.helpelements');	
$oneword = $("#oneword");
$overall = $('#overall');
$page1navbar= $('.page1navbar'); 
$piletabledisplayed = $('.piletabledisplayed'); 
// $pileentries = $('.pileentries');
// $publicrankingreserve = $('#publicrankingreserve'); 
$screen1message = $('#screen1message');	//<div id=screen1message> </div>
$screen2lower = $('.screen2lower'); 
$screen2upper = $('#screen2upper'); 
$screen2top = $('#screen2top');
$settingsinformation		= $('#settingsinformation');
$settingsbutton 		= $('#settingsbutton'); // NECESSARY
$studentidspan		= $('#studentidspan');
$studentinfobutton 		= $('#studentinfobutton');
$studentnamespan	= $('#studentnamespan');
$studentprofile				= $('#studentprofile');
$submitbuttonfortextarea = $('.submitbuttonfortextarea');
$technologiesbutton 	= $('#technologiesbutton');
$technologiesinformation 	= $('#technologiesinformation');
$testquitno = $('#testquitno');	
$testquityes = $('#testquityes');  
// $totalentries = $('#totalentries');
$viewthefrequency = $('#viewthefrequency');
$wordclick = $('#wordclick'); 
$jellybeanpanel = $('#jellybeanpanel');
$nonjellybeanpanel = $('#nonjellybeanpanel');

$trulydeleteeverythingshowconfirm= $("#trulydeleteeverythingshowconfirm");

$trulydeleteeverythingdiv= $("#trulydeleteeverythingdiv");

$answeringtoolscomponents1= $(".answeringtoolscomponents1");
// $answeringtoolscomponents2= $(".answeringtoolscomponents2");
// $answeringtoolscomponents3= $(".answeringtoolscomponents3");

$answercomponents= $(".answercomponents");

$audiohear1= $("#audiohear1");	
$audiohear2= $("#audiohear2");	
$audiohear3= $("#audiohear3");	

$categorydisplayed1= $("#categorydisplayed1");	 // <div id=categorydisplayed1></div>

$additionalmessage= $(".additionalmessage");

$newgamestart = $("#newgamestart");

$newgametriggerclass= $(".newgametriggerclass");

$question1textarea= $("#question1textarea");
$gameoverpanel= $("#gameoverpanel");
$gameovermessage= $("#gameovermessage");
$gamewelcomepanel= $("#gamewelcomepanel");

$gamestartmessagenative= $("#gamestartmessagenative");

$incorrectanswerclass= $(".incorrectanswerclass");
$winningmessagedisplayed= $("#winningmessagedisplayed");
						
$question1view= $("#question1view");
$question2view= $("#question2view");
$question3view= $("#question3view");	

$questionpanel= $("#questionpanel");

// $questionhousing= $(".questionhousing");

// $question1housing= $("#question1housing");
// $question2housing= $("#question2housing");
// $question3housing= $("#question3housing");

$questiontype= $(".questiontype");

$questiontextarea= $(".questiontextarea");

$screen3panels= $(".screen3panels");
$screen2panels= $(".screen2panels");

// $theguyswhocontributed= $("#theguyswhocontributed");

$eachmultiplechoice = $('.eachmultiplechoice');

$choice1= $("#choice1");
$choice2= $("#choice2");
$choice3= $("#choice3");
$choice4= $("#choice4");
$choice5= $("#choice5");
$choice6= $("#choice6");
$choice7= $("#choice7");
$choice8= $("#choice8");
$choice9= $("#choice9");
$choice10= $("#choice10");
$choice11= $("#choice11");
$choice12= $("#choice12");

$choice1class= $(".choice1class");
$choice2class= $(".choice2class");
$choice3class= $(".choice3class");
$choice4class= $(".choice4class");

$submitbutton1= $("#submitbutton1");

// $correctpanelpress = $(".correctpanelpress");

// $multiplechoicecstyle= $(".multiplechoicecstyle");

// $manualgroup= $(".manualgroup");
$manualgroup1= $(".manualgroup1");
$manualgroup2= $(".manualgroup2");
$manualgroup3= $(".manualgroup3");

$manualwronganswers= $("#manualwronganswers");

$multichoicearrow= $(".multichoicearrow");

// $timetocompare= $("#timetocompare");

$question1choice= $("#question1choice");
$question2choice= $("#question2choice");
$question3choice= $("#question3choice");
$userstathorizontalbar= $("#userstathorizontalbar");

// $bigxoclass= $(".bigxoro");
$bigxo= $("#bigxo");

$additionalmessage= $(".additionalmessage");

$messageabovexo= $("#messageabovexo");

$incorrectmeaning= $("#incorrectmeaning");

$andtheresultis= $("#andtheresultis");					

$viewtherecent = $('#viewtherecent');    

$thatguy = $('#thatguy');

$thetestcontinues = $('#thetestcontinues'); 

$thexohasbeendisplayed = $(".thexohasbeendisplayed");	

	$savedmessage =  $('#savedmessage');
	$screen2keyupnative = $('.screen2keyupnative');
	$addmeaningpanel = $('#addmeaningpanel');
	$screen2meaningwordinsert = $('#screen2meaningwordinsert');
	$englishinsert = $('#englishinsert');
	$nativeinsert = $('#nativeinsert');
	$screen2keyup = $('.screen2keyup');
	$wordmeaninginsertbutton = $('#wordmeaninginsertbutton');
	
	$addmeaningbutton = $('#addmeaningbutton');
	
	$clearbuttonclass = $('.clearbuttonclass');
	
	$addmeaningbutton.click( function(e){ $screen2panels.hide(); $addmeaningpanel.show(); screen2inputpanelclear();} );
	

	
	$wordmeaninginsertpanelclear = $('#wordmeaninginsertpanelclear');

	$screen2inputpaneltop =$("#screen2inputpaneltop");
	
	$nativemeaningsc2low =$("#nativemeaningsc2low");
		

	
	$nativemeaningsc2top = $("#nativemeaningsc2top");
	
	
	// var varvar = new Date(); 
	

	
	$(".sc1credits").text("© "+fullyear+" E Digital Net All Rights Reserved");

	$articles = $(".articles"); 
	
	$upperarticles = $(".upperarticles");
	
	$article1 = $("#article1");	$article2 =$("#article2");	$article3 = $("#article3"); 

	$articles.hide();       //$upperarticles.hide();
	
	$.mobile.pageContainer.pagecontainer( "change", $article2 ); slideID = 2;	
	
	$articles.show();       //$upperarticles.show();

	$screen3panels.hide();$gamewelcomepanel.show();
						

$choosekorean.click( function(e){   	db.transaction( changeToKorean );

										$screen2panels.hide();  $languagedecided.show();
										userlanguage = 1;
										updateLanguageInterface();

													} );
	
$choosejapanese.click( function(e){ 	db.transaction( changeToJapanese );

										$screen2panels.hide();  $languagedecided.show();
										userlanguage = 2;
										updateLanguageInterface();

													} );
									
$choosemandarin.click( function(e){ 	db.transaction( changeToMandarin );

										$screen2panels.hide();  $languagedecided.show();
										userlanguage = 3;
										updateLanguageInterface();

													} );
													
$choosecantonese.click( function(e){ 	db.transaction( changeToCantonese );

										$screen2panels.hide();  $languagedecided.show();
										userlanguage = 4;
										updateLanguageInterface();

													} );

$gobacktonormalscreen.click( function(e){ 		$screen2panels.hide();  $languagedecided.fadeIn(); }		);


$technologiesbutton.click( function(e){ 	$screen2panels.hide();  $elsstaff.fadeIn(); }		);
							
													
$testquityes.click(		/* Leaving The Game To Slide 2 */ 

						function(e) 	
						{	
						
							testquityesstatements();
				
									} 	);

$testquitno.click(	/* staying in the game */ 

					function(e) 
					{	
				
						$screen3panels.hide(); 
						$questionpanel.show();
						
					} 	);
				
$group.click(		function(e)
					{
						db.transaction(fillthealldata);
					}	);

		
// EXAM BEGINS
								
$newgametriggerclass.click( function(e){  newgame();	navigator.tts.startup(); navigator.tts.speak("The Game Starts"); }	);


function newgame()
{
	correctones = 0; streak = 0; overallopponents = 0;	vital = 3; percentage = 0;	answerextracted = "fille";
	
	$screen3panels.hide();
	$questionpanel.show();

	panel();
	
	// updatehorizontalbar();	 $userstathorizontalbar.text("99/99 [100%] STREAK 1000 VITAL");
	
	$userstathorizontalbar.text( "0/0 [100%] STREAK 0 VITAL " + vital );
	
	//viewtestarray(); // DEBUGGGKING
}

// databaseasdfdfseyword = "Ballpark";	



function panel()   
{
	// viewtestarray(); // DEBUGGGKING
	//	db.transaction(fillthealldata); 
	//


	incorgivencount = 0;	$manualwronganswers.hide(); $question1textarea.val('');	incorrectvar = "";
	
	audioreplaycontent = "audioreplaycontent";

	var extractedelement1 	= testarray[0];
	var extractedelement2 	= testarray[1];
	var extractedelement3 	= testarray[2];
		
	category1 = extractedelement1.category;	
	category2 = extractedelement2.category;	
	category3 = extractedelement3.category;
	
	winningmessageonscreen = extractedelement1.winningmessage; cutoffvalue = extractedelement1.currentvalue;
			
	var categorytype1 = category1.substring(0,2); 
	var categorytype2 = category2.substring(0,2); 
	var categorytype3 = category3.substring(0,2); 
	
	answerextracted = extractedelement1.trueanswer;
	
	$andtheresultis.hide();

	testarray.splice( $.inArray(extractedelement1, testarray), 1 );
	
	if(answerextracted == extractedelement2.question ) var extractedelement2question = "Listen, Learn, You Rock! ELS!"; else var extractedelement2question = extractedelement2.question;
	if(answerextracted == extractedelement3.question ) var extractedelement3question = "Timeless Classic!"; else var extractedelement3question = extractedelement3.question;
		
	// alert( answerextracted+" - "+extractedelement2.trueanswer+" - "+extractedelement2.question+" - "+categorytype1);	
	
if( ( 	categorytype1 !="rn" || categorytype2 !="rn") 	&& 

	( 	extractedelement1.trueanswer == extractedelement2.question 		|| 
		extractedelement1.trueanswer == extractedelement2.trueanswer 	|| 
		extractedelement1.question 	 == extractedelement2.trueanswer ) 	)
{ //alert("ema"); 

emergent = []; var em1 = addrandom(); var em2 = addrandom(); emergent.push(em1); emergent.push(em2); testarray = $.merge( emergent, testarray ); }
// else //alert("no EMA");
	
	//	sendtext19 = "중국어로 답하세요"; sendtext20 = "MDRN 영어로 답하세요";	
	// 	|| extractedelement1.question == extractedelement2.question
	// 	se2equestiontext = "Sound Only <p>"+sendtext18+"</p> Answer In English! <p>"+sendtext20+"</p>";
	


	// YES STARTS
	var hybridkey = false; var hybridkey2 = false; var hybridkey3 = false;
	
	if( (category1 == "se2native" || category1 == "e2n")  && (extractedelement1.c1 != extractedelement1.c2) ) // hybrid question
	{
		hybridkey = true; 
	}

		
	if( (category2 == "se2native" || category2 == "e2n")  && (extractedelement2.c1 != extractedelement2.c2) ) // hybrid question
	{
		hybridkey2 = true; 
	}
	
	if( (category3 == "se2native" || category3 == "e2n")  && (extractedelement3.c1 != extractedelement3.c2) ) // hybrid question
	{
		hybridkey3 = true; 
	}
	
	// YES ENDS
	
	/* BUGGY
	if(category1 == "se2e") 			$question1view.html(se2equestiontext);
	else if(category1 == "se2native")	if(!hybridkey) $question1view.html(se2nativequestiontext);
	else if(category1 == "n2e")		$question1view.html("<p>"+extractedelement1.question+"</p> <p>Answer In English!</p> <p>"+sendtext20+"</p>");
	else if(category1 == "e2n")		if(!hybridkey) $question1view.html("<p>"+extractedelement1.question+"</p> <p>"+sendtext19+"</p>");
	else								$question1view.html("<p>"+extractedelement1.question+"</p>");
	BUGGY */
	
		if(category1 == "se2e") 		$question1view.html(se2equestiontext);
	else if(category1 == "se2native")	{ if(!hybridkey) $question1view.html(se2nativequestiontext); }
	else if(category1 == "n2e")		$question1view.html("<p>"+extractedelement1.question+"</p> <p>Answer In English!</p> <p>"+sendtext20+"</p>");
	else if(category1 == "e2n")		{ if(!hybridkey) $question1view.html("<p>"+extractedelement1.question+"</p> <p>"+sendtext19+"</p>"); }
	else								$question1view.html("<p>"+extractedelement1.question+"</p>");
	
		
		/*

	if(category1 == "se2e") 			$question1view.html(se2equestiontext);
	else if(category1 == "se2native")	$question1view.html(se2nativequestiontext);
	else if(category1 == "n2e")		$question1view.html("<p>"+extractedelement1.question+"</p> <p>Answer In English!</p> <p>"+sendtext20+"</p>");
	else if(category1 == "e2n")		$question1view.html("<p>"+extractedelement1.question+"</p> <p>"+sendtext19+"</p>");
	else								$question1view.html("<p>"+extractedelement1.question+"</p>");
	
	*/
	
	if(category2 == "se2e") 			$question2view.html(se2equestiontext);
	else if(category2 == "se2native")	{ if(!hybridkey2) (se2nativequestiontext);}
	else if(category2 == "n2e")		$question2view.html("<p>"+extractedelement2question+"</p> <p>"+sendtext20+"</p>");
	else if(category2 == "e2n")		{ if(!hybridkey2) $question2view.html("<p>"+extractedelement2question+"</p> <p>"+sendtext19+"</p>"); }
	else								$question2view.html("<p>"+extractedelement2question+"</p>");
		
	if(category3 == "se2e") 			$question3view.html(se2equestiontext);
	else if(category3 == "se2native")	{ if(!hybridkey3) $question3view.html(se2nativequestiontext);}
	else if(category3 == "n2e")		$question3view.html("<p>"+extractedelement3question+"</p> <p>"+sendtext20+"</p>");
	else if(category3 == "e2n")		{ if(!hybridkey3) $question3view.html("<p>"+extractedelement3question+"</p> <p>"+sendtext19+"</p>");}
	else								$question3view.html("<p>"+extractedelement3question+"</p>");


	
	if(category1 == "se2e" || category1 == "n2e" ) databaseaccesskeyword = answerextracted; else databaseaccesskeyword = extractedelement1.question;
	
	// DEBUGGING PURPOSE '
	$categorydisplayed1.text("C1 - "+category1+" C2 - "+category2+" C3 - "+category3);

	
	$answercomponents.hide();
	
		// rn1 SEVENTEEN 12 13 14 15
		// rn2 15 TWO FIVE THREE NINE
		// rn3 Audio Only 12 13 14 15
		// rn4 Audio SEVENTEEN 12 13 14 15
		// rn5 Audio only TWO FIVE THREE NINE // if the number is higher than 
		
	if(categorytype1=="rn")
	{
		$question1choice.show();
		
		$choice1.text(extractedelement1.c1);$choice2.text(extractedelement1.c2);$choice3.text(extractedelement1.c3);$choice4.text(extractedelement1.c4);	
					
	}
	else $manualgroup1.show();
	
	if(categorytype2=="rn")
	{
		$question2choice.show();

		$choice5.text(extractedelement2.c1);$choice6.text(extractedelement2.c2);$choice7.text(extractedelement2.c3);$choice8.text(extractedelement2.c4);		
	}
	else 	$manualgroup2.show(); 
	
	if(categorytype3=="rn")
	{
		$question3choice.show();
		
		$choice9.text(extractedelement3.c1);$choice10.text(extractedelement3.c2);$choice11.text(extractedelement3.c3);$choice12.text(extractedelement3.c4);	
	}
	else  	$manualgroup3.show();
	
	
	
if(category2 == "se2native" || category2 == "se2e" || category2 == "rn3" || category2 ==  "rn4" || category2 == "rn5") $audiohear2.show(); else $audiohear2.hide();
		
if(category3 == "se2native" || category3 == "se2e" || category3 == "rn3" || category3 ==  "rn4" || category3 == "rn5") $audiohear3.show(); else $audiohear3.hide();	
	// Get the audio content global variable audioplaycontent 
	
	// audioreplaycontent should be arranged for category rn3 rn4 se2n se2e 
	
	// alert(extractedelement1.category); 

	if( category1 == "rn3" ) // Audio Only 12 13 14 15
	{
			  if( answerextracted == "m1" ) audioreplaycontent = numbertranslate( extractedelement1.c1 );
		else if( answerextracted == "m2" ) audioreplaycontent = numbertranslate( extractedelement1.c2 );
		else if( answerextracted == "m3" ) audioreplaycontent = numbertranslate( extractedelement1.c3 );
			else  							audioreplaycontent = numbertranslate( extractedelement1.c4 );
	}
	else if(category1 == "rn4" || category1 == "se2native" || category1 == "se2e" ) // Audio SEVENTEEN 12 13 14 15)
	{
		audioreplaycontent = extractedelement1.question;
	}
	else if( category1 == "rn5"  )// Audio only TWO FIVE THREE NINE
	{
			if( answerextracted == "m1" ) audioreplaycontent =  extractedelement1.c1;
		else if( answerextracted == "m2" ) audioreplaycontent =  extractedelement1.c2;
		else if( answerextracted == "m3" ) audioreplaycontent =  extractedelement1.c3;
			else  							audioreplaycontent =  extractedelement1.c4;
	}
	

	if(audioreplaycontent != "audioreplaycontent" )   $audiohear1.show(); 	else $audiohear1.hide(); 


	var chosenarrow = choicearrow[Math.floor(Math.random()*choicearrow.length)];	
	
	var chosencolour = choicecolourset[Math.floor(Math.random()*choicecolourset.length)];	
	
	//$multichoicearrow.text(chosenarrow);

	$multichoicearrow.text(chosenarrow).css("color", chosencolour);

	// if(hybridkey)
	// if( (category1 == "se2native" || category1 == "e2n")  && (extractedelement1.c1 != extractedelement1.c2) ) // hybrid question
	
	// var se2nativequestiontext1 = "<p>Answer in Numbers</p> <p>1 2 3 4 5 6 7 8 9 0</p>"; 
	// se2nativequestiontext2 = "<p>Sound Only!<p>" + se2nativequestiontext1;
		
	if(hybridkey)
	{
		if(category1 == "se2native") $question1view.html(se2nativequestiontext2);
		else $question1view.html(extractedelement1.question + se2nativequestiontext1);
	}
	
	if(hybridkey2)
	{
		if(category2 == "se2native") $question2view.html(se2nativequestiontext2);
		else $question2view.html(extractedelement2.question + se2nativequestiontext1);
	}		
	
	if(hybridkey3)
	{
		if(category3 == "se2native") $question3view.html(se2nativequestiontext2);
		else $question3view.html(extractedelement3.question + se2nativequestiontext1);
	}		
		
	if(testarray.length == 2 || testarray.length == 1)  db.transaction( preparetestarray );
}

	// if( category1 == "rn1" || category1 == "rn2" || category1 == "rn3" || category1 ==  "rn4" || category1 == "rn5" )
	// $eachmultiplechoice.hide().each(	function(index) {	$(this).delay(200*index).fadeIn(300);	}	); 


// $choice1.click( function(e){  useranswer = "m1"; checkanswermultiple(); }	); $choice2.click( function(e){  useranswer = "m2"; checkanswermultiple(); }	); $choice3.click( function(e){  useranswer = "m3"; checkanswermultiple(); }	); $choice4.click( function(e){  useranswer = "m4"; checkanswermultiple(); }	);		

$choice1class.click( function(e){  useranswer = "m1"; checkanswermultiple(); }	);
$choice2class.click( function(e){  useranswer = "m2"; checkanswermultiple(); }	);
$choice3class.click( function(e){  useranswer = "m3"; checkanswermultiple(); }	);
$choice4class.click( function(e){  useranswer = "m4"; checkanswermultiple(); }	);	
			
function checkanswermultiple()
{
	$question1view.hide();		window.scrollTo(0, 0);
	if(useranswer==answerextracted)
		correctmultipleansweraction();
	else
		incorrectmultipleansweraction();
}

function correctmultipleansweraction()
{	
	//viewtestarray(); // DEBUGGGKING
	$bigxo.text("O");
	
	standard++;
	
	$answeringtoolscomponents1.hide();	
	
	winningmessageonscreen = carray[0]+winningmessageonscreen;
	$winningmessagedisplayed.html(winningmessageonscreen);
	
	$answeringtoolscomponents1.hide();	
	
	$andtheresultis.show();
	
	if(incorgivencount == 0) streak++; 	else  streak= 0; 
	
	incorgivencount = 7777777;	

	$answeringtoolscomponents1.hide();

	overallopponents++;
	correctones++;
	
	updatehorizontalbar();
	
	var streakmodulus = streak % 10;
	
	if( streak > 5 && streakmodulus == 0) var streaktext = "<p class=specialstreak>"+streak+" !!! </p>"; else var streaktext = streak;

	var correctpanelmessage = 
	
" <p> STREAK - " + streaktext + " </p> <p> CORRECT - " + correctones + " </p> <p> OVERALL - " + overallopponents + " </p> <p> PERCENTAGE - "+percentage+"%</p>";

	$additionalmessage.html(correctpanelmessage);
	
	$question1view.text(carray[0]);  // <div id=messageabovexo>Message Above XO</div>
						
	carray.splice( $.inArray(carray[0], carray), 1 ); if(carray.length <=0 ) { $.merge( carray, carraybase ); carray = shufflearray(carray);	}
}

function incorrectmultipleansweraction()
{
	//viewtestarray(); // DEBUGGGKING
		
	$andtheresultis.show();	
	$winningmessagedisplayed.text(incarray[0]);
	$bigxo.text("X");
	
	if(standard > 20 ) standard -= 8; 
	
	// standard++	if(standard > 20 ) standard -= 8; 
	
	incorgivencount++;
	streak = 0;
	overallopponents++;
	vital--;
	
	updatehorizontalbar();

	if(useranswer == "m1")		 { var coll = $choice1.text(); coll = "<strike>"+ coll + "</strike>  -  X "; $choice1.html(coll);}
	else if(useranswer == "m2") { var coll = $choice2.text(); coll = "<strike>"+ coll + "</strike>  -  X "; $choice2.html(coll);}
	else if(useranswer == "m3") { var coll = $choice3.text(); coll = "<strike>"+ coll + "</strike>  -  X "; $choice3.html(coll);}
	else 						 { var coll = $choice4.text(); coll = "<strike>"+ coll + "</strike>  -  X "; $choice4.html(coll);}
	
incarray.splice( $.inArray(incarray[0], incarray), 1 ); if(incarray.length <=0 ) { $.merge( incarray, incarraybase ); incarray = shufflearray(incarray);	}

	//if( vital< 0 ) { $gameoverpanel.show(); }	
}


/*

useranswer = useranswer.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	).split("'S").join("'s").split("'T").join("'t");
		
		$manualwronganswers.show();
		
		if(incorgivencount==1)
		{
			$wronganswer1.text(useranswer+" ( X )");
		}
		else if(incorgivencount==2)
		{
			$wronganswer2.text(useranswer+" ( X )");
		}
	
		var correctpanelmessage = "<p>CORRECT - "+correctones+"</p><p>OVERALL - "+overallopponents+"</p><p>PERCENTAGE - "+percentage;

		$additionalmessage.html(correctpanelmessage);
	*/

// YES $thexohasbeendisplayed.click( 	function(e){ 	alert("behehe"); }	);

$thexohasbeendisplayed.click( 	

									function(e){  
													$question1view.show();
													if(vital >= 0)
													{
														if(incorgivencount >= 3) 
														{ 
															panel();	
														}
														else 
														{ 
															$thexohasbeendisplayed.hide();
														}

													}
													else 
													{
														$screen3panels.hide();		
														$gameoverpanel.show(); $userstathorizontalbar.text( " " );
													
											if(standard > 10) { standard *= 0.5; standard = Math.round(standard); }													
														

														
													}
	
														}	 );
											


	// attempts == 0 fresh
	// attempts == 1 first wrong answer
	// attempts == 2 
	

$audiohear1.click( 				function(e){  		navigator.tts.startup();	navigator.tts.speak(audioreplaycontent);	}	);


function updatehorizontalbar()
{
	if(overallopponents>0) percentage = Math.round(correctones/overallopponents* 100);
	else percentage = 0;
	
	if(vital == -1) vital = "--"; 
	
	if( streak > 5 && streakmodulus == 0) var streaktext = "<p class=specialstreak>"+streak+" !!! </p>"; else var streaktext = streak;

	var updatedstats = correctones+"/"+overallopponents+" ["+percentage+"%] STREAK "+streaktext+" VITAL "+vital;
	
	$userstathorizontalbar.text(updatedstats);
	
	//  3/5 [60%] STREAK 3 VITAL 5
	
	// minimum 11 100 There is something called centralvalue
	
	// and the four choices are variations of centralvalue 
	
	// the centralvalue goes up everytime user gets 10 correct.  

}

// correctmanualanswer = "cma"; incorrectmanualanswer = "ima";

// 	alert("up "+category1+"+"+correctmanualanswer);
/*
function screenONEpress(tx) 
{				
	tx.executeSql(
	
"UPDATE PILE SET frequency = COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [newEword, newEword] , errorcode	);

}

function manualcorrectanswer(tx)
{
	tx.executeSql(
// "UPDATE PILE SET frequency    = COALESCE( (SELECT frequency  FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [newEword, newEword] , errorcode	);
   "UPDATE PILE SET ?         	 = COALESCE( (SELECT ?         	FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", 

				[category1, category1, insertvalue, insertvalue] , errorcode	);

// NO   "UPDATE PILE SET se2e         	 = COALESCE( (SELECT se2e         	FROM PILE WHERE word = Dog), 0 ) + 1 WHERE word = Dog", 

// no				[] , errorcode	);
	
	alert("up "+category1+"+"+insertvalue);


}

function manualincorrectanswer(tx)
{
	tx.executeSql(
	
"UPDATE PILE SET ? = COALESCE( (SELECT ? FROM PILE WHERE word = ?), 0 ) -1 WHERE word = ?", 

				[category1, category1, insertvalue, insertvalue] , errorcode	);
	
	alert("down "+category1+"+"+insertvalue);
}


'CREATE TABLE IF NOT EXISTS PILE (word primary key unique, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount)' );

*/

function manualcorrectanswer(tx)
{

		tx.executeSql(
		
   "UPDATE PILE SET "+category1+" = COALESCE( (SELECT "+category1+" FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", 

																						[databaseaccesskeyword, databaseaccesskeyword]		);

		// alert(category1+" UP "+databaseaccesskeyword);
}

function manualincorrectanswer(tx)
{

		tx.executeSql(
		
   "UPDATE PILE SET "+category1+" = COALESCE( (SELECT "+category1+" FROM PILE WHERE word = ?), 0 ) - 1 WHERE word = ?", 

																						[databaseaccesskeyword, databaseaccesskeyword]		);

		// alert(category1+" DOWN "+databaseaccesskeyword);
}

function increasewrongcount(tx)
{
		tx.executeSql(
		
   "UPDATE PILE SET wrongcount = COALESCE( (SELECT wrongcount FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", 

																						[databaseaccesskeyword, databaseaccesskeyword]		);
}

function maximumisfiveparttwo(tx, results)
{
	// results.row
	results.rows.item(0).se2e;
}

$submitbutton1.click( 	function(e){  


		var offlettercount = 0; var index = 0; var newstart = 0; var isitclose = 0; /* 0=close 1=completelywrong */

		var useranswer = $.trim($question1textarea.val()); var ultimateanswercompare = $.trim(answerextracted);									
		window.scrollTo(0, 0);
		$question1view.hide();
		
if( category1 !="se2native" && category1 !="e2n") { useranswer = useranswer.toLowerCase(); ultimateanswercompare = ultimateanswercompare.toLowerCase(); }

								if( useranswer == ultimateanswercompare )
								{
									
									db.transaction( manualcorrectanswer ); 

									correctmultipleansweraction();
									

									
									$winningmessagedisplayed.html(winningmessageonscreen);
									
									$question1textarea.val('');
								}
								else if(useranswer.length > 1)
								{	
									db.transaction(increasewrongcount);
																
									if( cutoffvalue > -2 ) db.transaction( manualincorrectanswer );
									
									incorrectmultipleansweraction();
																		
									incorrectvar += "<p>"+useranswer+" -  X  <p>"; $manualwronganswers.show().html(incorrectvar);

									
				var lengthdifference = useranswer.length - ultimateanswercompare.length;
				
									if( lengthdifference == 0 )
									{
										while(index++ < ultimateanswercompare.length)
										{
											if(ultimateanswer.charAt(index) != useranswer.charAt(index) )
											{
												offlettercount++;
											}
									
											if( offlettercount == 3) index = 500;
										}
										
										if(index > 400 )
										{
											isitclose = 100; // alert("SAME LENGTH NOT NEAR MISS");
										}
										else isitclose = 0; // alert("SAME LENGTH NEAR MISS"); 
				
									}
									else if( lengthdifference == 1 )
									{			
										var upperlimit = useranswer.length;
								
										while( index++  < upperlimit )
										{
										
										newstart = index + 1;
										
							nast = useranswer.slice(0, index) + useranswer.slice(newstart, upperlimit);
	
								if(ultimateanswer == nast)  index = 1000;

										}
										
										if(index >=1000) 
										isitclose = 0;  // alert("Close");
										else isitclose = 100; // // alert("not Close");
		
									}
									else if(lengthdifference == -1)
									{		
										while( index++  < ultimateanswer.length )
										{   
											
										newstart = index + 1;
										
							nast = ultimateanswer.slice(0, index) + ultimateanswer.slice(newstart, ultimateanswer.length);
							
							if(useranswer == nast) index = 100;
											
										}
										
										if(index >= 100) isitclose = 0; // // alert("near Miss"); 
										else isitclose = 100; //  // // alert("not Near Miss");
									}
									
									else isitclose = 100; // alert("It was not a near miss");
									

									if( isitclose <= 1 ) // near miss
									{
										useranswer = " > " + useranswer + " < ";

									
									} 	// no need for else because if it is not else it is a wrong answer

								}else { $question1view.show();}
								
								
		//viewtestarray(); // FOR DEBUGGING	
					

}	);




// EXAM ENDS




function incorrectmultipleansweractionBACKUP()
{
							/* COMMON */ // $answeringtoolscomponents1.hide();	$andtheresultis.show();
	$bigxo.text("X");
	
	incorgivencount++;
	streak = 0;
	overallopponents++;
	vital--;
	
	updatehorizontalbar();
		
	$manualwronganswers.show();
		
	if(vital>=1)
	{
	
		$messageabovexo.text(incarray[0]);
	
incarray.splice( $.inArray(incarray[0], incarray), 1 ); if(incarray.length <=0 ) { $.merge( incarray, incarraybase ); incarray = shufflearray(incarray);	}
		
		var categorytype = category.substring(0,2);

		if(incorgivencount==1)
		{
			useranswer = useranswer.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	).split("'S").join("'s").split("'T").join("'t");
			$wronganswer1.text(useranswer+" ( X )");
		}
		else if(incorgivencount==2)
		{
				$wronganswer2.text(useranswer+" ( X )");
		}
		else
		{
			// going to the next question
			
			panel();
			
		}
		
	}
		
	else
	{
		$gameoverpanel.show();
		
		var correctpanelmessage = 
	
"<p>CORRECT - "+correctones+"</p><p>OVERALL - "+overallopponents+"</p><p>PERCENTAGE - "+percentage;

		$additionalmessage.html(correctpanelmessage);
	
	}	
}


/*
	$savedmessage =  $('#savedmessage');
	$screen2keyupnative = $('.screen2keyupnative');
	$addmeaningpanel = $('#addmeaningpanel');
	$screen2meaningwordinsert = $('#screen2meaningwordinsert');
	$englishinsert = $('#englishinsert');
	$nativeinsert = $('#nativeinsert');
	$screen2keyup = $('.screen2keyup');
	$wordmeaninginsertbutton = $('#wordmeaninginsertbutton');
	
	$addmeaningbutton = $('#addmeaningbutton');
	
	$clearbuttonclass = $('.clearbuttonclass');
	
	$addmeaningbutton.click( function(e){ $screen2panels.hide(); $addmeaningpanel.show(); screen2inputpanelclear();} );
	

	
	$wordmeaninginsertpanelclear = $('#wordmeaninginsertpanelclear');

	$screen2inputpaneltop =$("#screen2inputpaneltop");
	
	$nativemeaningsc2low =$("#nativemeaningsc2low");
		

	
	$nativemeaningsc2top = $("#nativemeaningsc2top");
	
*/	
	
//$wordmeaninginsertbutton.click( function(e){ db.transaction(insertNewLine); $englishinsert.val(''); $nativeinsert.val(''); } );

$wordmeaninginsertbutton.click( function(e){ 

var nativeinsertword =  $.trim($nativeinsert.val());
// var nativeinsertword = $nativeinsert.val(); 
var englishinsertword = $englishinsert.val();			
				
var r1a = englishinsertword.split(/[^a-z0-9\s.\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");
var r2a = nativeinsertword.split(/[^a-z\|]/gi).join("").split(/([~@#$%^&*()_+=`{}\[\]\\:;<>\/ ])+/g).join("");

				if( englishinsertword.length > 1 && nativeinsertword.length > 1 &&  r1a == englishinsertword && r2a.length == 0) 
				{

newEword = newEword.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	).split("'S").join("'s").split("'T").join("'t");
newNmeaning = nativeinsertword;
db.transaction(insertNewLine); 
					
screen2inputpanelclear();
					
$savedmessage.html(englishinsertword+" - "+ nativeinsertword + "<p>"+	sendtext25 +" </p>");
					

// YES alert("nwl"+nativeinsertword.length);
					
				}
				else
				{
					
if( englishinsertword.length <=1 || r1a != englishinsertword) { $screen2keyup.html(englishinsertword+"<span class=errorindicator> X !!!</span>"); }
if( nativeinsertword.length <= 1 || r2a.length != 0 ) { $screen2keyupnative.html(nativeinsertword+"<span class=errorindicator> X !!!</span>"); }

$savedmessage.html("<p class=errorindicator>"+	sendtext28 +" </p>");

				}
				

												
												});
												

$wordmeaninginsertpanelclear.click( function(e){ $englishinsert.val(''); $nativeinsert.val('');  $savedmessage.text(''); screen2inputpanelclear();} );
	
	function screen2inputpanelclear()
	{
		$screen2meaningwordinsert.text(sendtext23);$screen2inputpaneltop.text( "Enter English Word And Meaning" );
			$englishinsert.val(''); $nativeinsert.val(''); $savedmessage.text('');
	}
	
	
	
/*

			tx.executeSql( 

"INSERT OR REPLACE INTO PILE (word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount) 	VALUES ( ?,?, COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0) + 1 ,  0, 0,0,0, COALESCE( (SELECT wrongcount FROM PILE WHERE word = ?), 0 ) + 1)",

		[ newEword, newNmeaning , newEword , newEword ] , errorcode 

						); 

*/	
	
	
	
	$englishinsert.keyup( 	// keyup includes the last key pressed keydown does not
						function( ) 
						{
							newEword = "";
								
$englishinsert.val().split(/[ ,]+/).forEach(	

							function(entry) 
							{	
								
								illegalwords.forEach(
								
														function(illegalwordelement) 
														{
						
						if ( entry.length != entry.toLowerCase().split(illegalwordelement).join("").length )
						{
							entry = entry.toLowerCase().split(illegalwordelement).join("");
						}	
														} 	
															);	
															
											newEword += " " + entry;
											
								}
													); // foreach ends here and by this time the input is sanitized
													
			newEword = newEword.split(/([~!@#$%^&*()_+={}\[\]\\:;<>,.\/ ])+/g).join("");

							newEword = $.trim(newEword);

							audio.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+newEword;
							$screen2keyup.text(newEword);

							//audio.play();
							
							}
						);

						
	$englishinsert.on( "keydown", function(event){
					

if($.inArray(event.which, allowedcharacters) === -1) { event.preventDefault(); }
	
														} );
	
	
	
	$nativeinsert.keyup( 	// keyup includes the last key pressed keydown does not
						function( ) 
						{
							newNmeaning = "";
								
newNmeaning = $nativeinsert.val();
													
			newNmeaning = newNmeaning.split(/([~@#$%^&*()_+={}\[\]\\:;<>,.\/ ])+/g).join("");

							newNmeaning = $.trim(newNmeaning);

							$screen2keyupnative.text(newNmeaning);

							//audio.play();
							
							}
						);
	
	



																																			
$desiredpart.keyup( 	// keyup includes the last key pressed keydown does not
						function( ) 
						{
							finalresult = "";
								
$desiredpart.val().split(/[ ,]+/).forEach(	

							function(entry) 
							{	
								
								illegalwords.forEach(
								
														function(illegalwordelement) 
														{
						
						if ( entry.length != entry.toLowerCase().split(illegalwordelement).join("").length )
						{
							entry = entry.toLowerCase().split(illegalwordelement).join("");
						}	
														} 	
															);	
															
											finalresult += " " + entry;
											
								}
													); // foreach ends here and by this time the input is sanitized
													
			finalresult = finalresult.split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>,.\/? ])+/g).join("");

							finalresult = $.trim(finalresult);

							audio.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+finalresult;
							$oneword.text(finalresult);

							//audio.play();
							
							}
						);

// alert("V7");							<div id=chooselanguagefirst class=screen2panels> 	
					
$resetbutton.click(	function(e) {	

				db.transaction(studentinfotablereset); db.transaction( initializeStudentInfoTable ); db.transaction(setInterfaceLanguage); } );
						
$hearitbutton.click(	
							function(e) 
							{	
									newEword = "newEword"; 	vslength = 6;	newNmeaning = "TestMeaning"; 
if( finalresult != "" )
{	
	if( !isNaN($desiredpart.val().split(/[^a-z0-9\s!.\|?']/gi).join("").split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>\/? ])+/g).join("")) ) 		
	{
		navigator.tts.startup();
		
		newNmeaning = $desiredpart.val().split(/[^a-z0-9\s!.\|?']/gi).join("").split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>\/? ])+/g).join("");
		
		if( newNmeaning > 100000000000000000 ) newNmeaning = 100000000000000000;

		newEword = numbertranslate(newNmeaning);
		
		navigator.tts.speak(newEword);
	
		vslength = -588;
	}
	else // is normal English or English/meaning combo
	{
		fisplit = finalresult.split("|"); 
	
		vslength = fisplit.length;
		
		//	outputString = inputString.replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, '-').replace(/^(-)+|(-)+$/g,'');
		
		if( vslength > 2 ) 
		{ 
			invalidinputaction(); 
		}
 
		else if( vslength == 2) 
		{	 
			var r1a = fisplit[0].split(/[^a-z0-9\s!.\|?']/gi).join("").split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>\/? ])+/g).join("");
			var r2a = fisplit[1].split(/[^a-z0-9!.\|?']/gi).join("").split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>\/? ])+/g).join("");
			
			if(  r1a.length == fisplit[0].length && r2a.length == 0 )  
			{
				newEword 	= fisplit[0];
				
				newNmeaning = fisplit[1];
			}

			else
			{
				invalidinputaction();
			}	
		}  // END vslength == 2

		else if( vslength == 1)
		{						   
			newEword = finalresult.split(/[^a-z0-9\s!.\|?']/gi).join("").split(/([~!@#$%^&*()_+=`{}\[\]\\:;'<>\/? ])+/g).join("");
			
			if( newEword != finalresult )	{ invalidinputaction();  }; 
		}
		
		else { 
		
		 invalidinputaction(); }  // vslength == 0		 End of vslength >2, ==2, ==1 and still inside != NaN
		 
	} // END == NaN
	
		if(  vslength == 2 || vslength == 1 || vslength == -588)  // validinput
		{	
			if(vslength == -588)
			{		
				$oneword.html( "<div>"+sendtext3+"</div> <div>&nbsp;</div> <div>"+ newEword+"<div>&nbsp;</div>"  );	
			}	
			else 
			{
				$oneword.text( sendtext3 );	
			}
					
			
			
			newEword  = $.trim(newEword);    newNmeaning = $.trim(newNmeaning); 

	newEword = newEword.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);

	newEword = newEword.split("'S").join("'s").split("'T").join("'t");
	
	$wordclick.html( ' <span class=interface2span> ' + newEword.split(/[ ,]+/).join(' </span> <span class=interface2span> ') + ' </span> ');
		
			if( vslength == 1) { db.transaction(checkExistingNewMeaning); }
	
			db.transaction(insertNewLine);

			if( isNaN(finalresult) ) 
			{	
				// alert("ajax will run");
				
				$.ajax(		
						{
							url		: "http://englishdigital.net/Client2CentralServer.php",
							type	: "POST",
							data 	: {			comingover : finalresult 	}
						}		
							);
			}
			else
			{
				// alert("Ajax wil NOTRUN");
			}
			
			if(  vslength == 2 || vslength == 1 ) audio.play();
			
			/*
			
			if( there is a ) then google tts
			else ( built in tts )
			
			*/
	
			finalresult = fisplit[0];
	
			db.transaction( fillRecent );
			db.transaction( updatePileEntriesCount );
	
		} 	// END if(  vslength <= 2 ) 
														
} // END finalresult != ''

else  // finalresult == ""
{
	invalidinputaction();
	$oneword.text(sendtext2);
}
							}
					);
			
$clearbutton.click(		function(e) 
						{	
	$desiredpart.val(''); 	$oneword.text(sendtext4); 	finalresult = "";
						}					);
				
$viewtherecent.click(		function(e) {	 	quickfill = false;
												db.transaction( fillRecent ); 
												currentslidedown = "history";
												$screen1message.text("History - "+sendtext13);
												
												navigator.tts.startup(); navigator.tts.speak("Displaying History");
											} 	);

$viewthefrequency.click(	function(e) {	 	
												quickfill = false;
												db.transaction( filltheFREQUENCYDIV ); 
												currentslidedown = "frequency";
												$screen1message.text("Frequency - "+sendtext14);
												navigator.tts.startup(); navigator.tts.speak("Displaying Frequency");

												meaningarray.forEach( 	function(e)
																		{
																			meaningarraylisted += e.word + " - " + e.meaning + "<br>";
																			
																		}	); 

											} 	);
											
		// sendtext13 = "MDRN 기록 ";	sendtext14 = "MDRN 많이 들은 단어들 ";	sendtext15 = "MDRN 지우기";
											
											
$deletemodebutton.click(	function(e) {	 
											if(deletemode == true)  		// turning it OFF
											{
												deletemode = false;
												quickfill = true;
												

													
												
												if(currentslidedown == "history")
												{
													quickfill = true;
													db.transaction( fillRecent ); 
												}
												else
												{
													quickfill = true;
													db.transaction( filltheFREQUENCYDIV );														
												}
												
											}
											else	// turning it on
											{
												deletemode = true;
												
												quickfill= true;
												
												$screen1message.text(sendtext10);
												
												if(currentslidedown == "history")
												{
													$screen1message.text(sendtext10 + " HISTORY");
													db.transaction( fillRecent ); 
												}
												else
												{	
													$screen1message.text(sendtext10 + " FREQUENCY");
													db.transaction( filltheFREQUENCYDIV );
												}
											}
												
												
												
												
												
												
												
												/*  // The below is YES
												*/
												
											}	);
	
// alert("V8");		
											
$body.on( 'click', '.entriesdisplayed', 

				function() 
				{
					$t = $(this); screen1targetword = $t.text();  // deleteindicator = "[x]";
					
					screen1targetword = $.trim(screen1targetword);	

					if(deletemode) 
					{
						var targetwordsplit = screen1targetword.split("[x]");
						screen1targetword = $.trim(targetwordsplit[1]);	
						
						db.transaction( deletealine );	
						quickfill = false;
						db.transaction( fillRecent );	
						deletemode = false;	
						$screen1message.text(" > "+screen1targetword + " < Deleted");						
							
					}
					
					else
					{
					
					db.transaction(findhistoryindex); 	
					
						if(historyindex > 8) { newEword = screen1targetword; db.transaction( refreshHISTORY ); }

						var temparray = screen1targetword.split("[");
					
						if( temparray.length <= 1 ) 
						{	 
							
							newEword = screen1targetword;	
							
							db.transaction( screenONEpress); 
							
							navigator.tts.startup();
							
							var clickmessage = screen1targetword; 
							
							meaningretrieved = "beforetheloop";
							
							meaningarray.forEach(	
							
										function(meaningarrayelement) 
										{
											if(meaningarrayelement.word == screen1targetword) { meaningretrieved = meaningarrayelement.meaning;  }
										} 		
												);
							
							if( meaningretrieved != "beforetheloop")
							{
								clickmessage += " - " + meaningretrieved;	 
							}
	 
							$screen1message.text(clickmessage);
							
							meaningretrieved = "lulz";
						
							navigator.tts.speak(screen1targetword);
						
						}

					}
				}
		
		
		).on( 'click', '.pileentries', 

				function() 
				{
					$t = $(this); screen1targetword = $t.text(); 	
					
					if(deletemode) 
					{
						var targetwordsplit = screen1targetword.split("[x]");
						screen1targetword = targetwordsplit[1];
						
					}

					var temparray = screen1targetword.split(" x ");
					
					if(temparray.length > 1 ) { screen1targetword = temparray[0]; }
												
					screen1targetword = $.trim(screen1targetword);
						
					if(!deletemode)
					{
						navigator.tts.startup();
				
						newEword = screen1targetword;

						db.transaction( screenONEpress);	

						meaningretrieved = "beforetheloop";
						
						meaningarray.forEach(	function(meaningarrayelement) 
												{
													currentmeaning = meaningarrayelement.meaning;
													
													if(meaningarrayelement.word == screen1targetword) 
													{ 
														meaningretrieved = currentmeaning; 
													}
												} 			);
													
							//alert("outsideloop"+meaningretrieved);		
						
						if( meaningretrieved != "beforetheloop")
						{
							var clickmessage = screen1targetword + " - " + meaningretrieved;	 meaningretrieved = "lulz";
						}
						else  var clickmessage = screen1targetword;  
					
						$screen1message.text(clickmessage); 
						
						navigator.tts.speak(screen1targetword);
	
						quickfill = true;
				
					}
					else
					{
						
						db.transaction( deletealine );	
						deletemode = false;		
						quickfill = false;
					}
					
						db.transaction( filltheFREQUENCYDIV	 );	
					
				}
				
			).on( 'click', '.incorrectlisting', 

				function() 
				{
					$t = $(this); screen1targetword = $t.text();  // deleteindicator = "[x]";
					
					navigator.tts.startup();
				
					newEword = screen1targetword;
										
					db.transaction( screenONEpress);	

					var meaningretrieved = "beforetheloop";
					
					var temparray = screen1targetword.split(" x ");
					
					if(temparray.length > 1 ) { screen1targetword = temparray[0]; }
												
					screen1targetword = $.trim(screen1targetword);
						
					meaningarray.forEach(	function(meaningarrayelement) 
											{
													currentmeaning = meaningarrayelement.meaning;
													
													if(meaningarrayelement.word == screen1targetword) 
													{ 
														meaningretrieved = currentmeaning; 
													}
												} 			);

					if( meaningretrieved != "beforetheloop")
					{
							var clickmessage = screen1targetword + " - " + meaningretrieved;
					}
					else  var clickmessage = screen1targetword;  
					
					$incorrectmeaning.text(clickmessage); 
						
					navigator.tts.speak(screen1targetword);
	
				
				}
				
			);			
			
			
//$overall.click( function(e) 	{	

// create an array of objects each time the table gets ready

// pilearray is ready.  historyarray is ready.

// 

/*
var insidethattag = $publicrankingreserve.text();	
	
var publicarray = insidethattag.split("+");

	var list = " "; 

	for( var i = 0 ; i < 100 ; i++)
	{
	
	list = ' <p class=entriesdisplayed style="display:none;"> '+ publicarray[i] + " </p> " + list;
	
	}

	$piletabledisplayed.html(list); 
	
	$(".entriesdisplayed").each(		function(index) {	$(this).delay(200*index).fadeIn(300);	});*/	

	
//
//if( /* it has been more than one hour since last update */ )
//{
	
	//	$.ajax(
		
		//		{
		//			crossOrigin	: 	true,
		//			url			: 	"http://englishdigital.net/CentralServer2Client2.php",
					//	dataType: 	"json", 	//no need. if you use crossOrigin, the dataType will be override with "json"
			//		charset		: 	'UTF-8', 			//use it to define the charset of the target url
			//		context		: 	{},
			//		success		: 	function(data) 
				//					{
										// alert(data);
						//				$publicrankingreserve.text(data);
					//				}
				//}			);	

//}


//								} );

								
// alert("V10");	
							
$document.on( 'click' , 'span',		function( ) 
									{
										if( slideID == 2 )
										{
										
										$t = $(this); var thistext = $t.text(); 
		
		audioword.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+thistext; // work with thistext to deal with SQLite
																		
										$oneword.text( thistext );
										
										// $oneword.text( " Word : " ); $oneword.writeText( $(this).text() );
										
										audioword.play();
										
				
										$t.addClass("blue")
											.delay(400)
											.queue(
														function(next) 
														{
																$t.css('border', '3px solid transparent WHITE')
																	.removeClass("blue");
																		next();
														}
													);	
										}											
									} 	
				);	

				
// alert("V11");

$instructionsbutton.click(	function(e) {	$screen2panels.hide(); $instructions.show();});
$settingsbutton.click(		function(e) {	$screen2lower.hide();	$settingsinformation.show();		$helpelements.hide();	});
$studentinfobutton.click(	function(e) {	$screen2lower.hide();	$studentprofile.show();					}); 

$individual.click(		function(e) 
						{	
							//viewtestarray(); testarray = []; db.transaction( preparetestarray ); 	
						}				);
					
				
function viewtestarray()
{
	var testarraydisplayed = "TArray-LENGTH-"+testarray.length+"-<br>";

	var index = 1;
	
	testarray.forEach(
							function(testarrayelement) 
							{
testarraydisplayed +=  testarrayelement.category +"<br>" + testarrayelement.question +"<br>" + testarrayelement.trueanswer +"<br><br>";
								} 			
										);

	testarraydisplayed =  testarraydisplayed + "<br> TTS E.N.D.";

	$testarraystate.html(testarraydisplayed);				
	db.transaction(fillthealldata);  			$piletabledisplayed.html(list); // and yes they are all classes not ids.  
	
	
	
	// Nothing wrong in this function definition and it is called inside individual.click(_) correctly too
}
									

// alert("V23");					
						
	// END of vocabulary.js
	
			//} 	);
// alert("Somemagic");
			
	/*		
	// START OF vocabulary.js
			
	var offlettercount = 0; var index = 0; var newstart = 0; var isitclose = 0; /* 0=close 1=completelywrong */
				
	/*	useranswer = $.trim($gameinputtextarea.val().toLowerCase()); realanswer = $.trim(realanswer.toLowerCase());
				
				var lengthdifference = useranswer.length - realanswer.length;
					
								if( useranswer == realanswer )
								{
									// alert("yes");
									//presentanewquestion();
								}
								else
								{	
									//wronganswerresponse( );
									
									if( lengthdifference == 0 )
									{
										while(index++ < realanswer.length)
										{
											if(realanswer.charAt(index) != useranswer.charAt(index) )
											{
												offlettercount++;
											}
									
											if( offlettercount == 3) index = 500;
										}
										
										if(index > 400 )
										{
											isitclose = 100; // alert("SAME LENGTH NOT NEAR MISS");
										}
										else isitclose = 0; // alert("SAME LENGTH NEAR MISS"); 
				
									}
									else if( lengthdifference == 1 )
									{			
										var upperlimit = useranswer.length;
								
										while( index++  < upperlimit )
										{
										
										newstart = index + 1;
										
							nast = useranswer.slice(0, index) + useranswer.slice(newstart, upperlimit);
	
								if(realanswer == nast)  index = 1000;

										}
										
										if(index >=1000) 
										isitclose = 0;  // alert("Close");
										else isitclose = 100; // // alert("not Close");
		
									}
									else if(lengthdifference == -1)
									{		
										while( index++  < realanswer.length )
										{   
											
										newstart = index + 1;
										
							nast = realanswer.slice(0, index) + realanswer.slice(newstart, realanswer.length);
							
							if(useranswer == nast) index = 100;
											
										}
										
										if(index >= 100) isitclose = 0; // // alert("near Miss"); 
										else isitclose = 100; //  // // alert("not Near Miss");
									}
									
									else isitclose = 100; // alert("It was not a near miss");
									
									
									if( isitclose >= 0 ) // near miss
									{
										useranswer = " > " + useranswer + " < ";
									
									} 	// no need for else because if it is not else it is a wrong answer
								}
						
						
					//	}	);
	// END of vocabulary.js
	
	// It is a better idea to create many <div> tags.
	
	// 
	
*/
// alert("first class team"); YES


// alert("V10");

function invalidinputaction()
{
	$desiredpart.val(''); $oneword.text(sendtext1); 
	finalresult = ""; vslength = 6;
	newEword = "newEword"; newNmeaning = "TestMeaning"; 
}


// $footer1 = $('#footer1');	$footer2 = $('#footer2');	$footer3 = $('#footer3'); $duhfooter = $('#duhfooter');

/*

	$.ajax(
		
				{
					crossOrigin	: 	true,
					url			: 	"http://englishdigital.net/CentralServer2Client2.php",
					//	dataType: 	"json", 	//no need. if you use crossOrigin, the dataType will be override with "json"
					charset		: 	'UTF-8', 			//use it to define the charset of the target url
					context		: 	{},
					success		: 	function(data) 
									{
										// alert(data);
										$( '#test' ).text(data);
									}
				}
				
					);			//.done(function( data, textStatus, jqXHR ) { // alert(data); });

*/
					
$trulydeleteeverythingshowconfirm.click(	function(e) 
											{ 
											$page1navbar.hide();	
											$trulydeleteeverythingdiv.show(); 
											$screen1message.text(""); 
											
											$piletabledisplayed.hide();
											
											}	);	

$canceldeletethetable.click(	function(e) {		canceldeletetablestatements();	 }	);	

$thestorm = $("#thestorm");	

$thestorm.click(	function(e) {	
										db.transaction( clearthetable ); 

										
												$page1navbar.show();	
												$trulydeleteeverythingdiv.hide(); 
												$screen1message.text(sendtext12); 
										
										$viewtherecent.text( sendtext13 + " Recent"); $viewthefrequency.text( sendtext14 + " Frequency");
										
										$piletabledisplayed.show().text(" ");
												} 	);

// $("#thestorm").click(	function(e) {	alert("the nucleaer bomb"); }	);	




// docheight = innerHeight; $screen2upper.css("min-height",docheight);  //ERROR HERE





$thatguy.click( function(e){ 

				db.transaction(steptwo);
				
				//viewtestarray();
				
								});
					
$("#thatgirl").click( function(e){ 

				db.transaction(stepgirl);
				
				//viewtestarray();
				
								});		
								
$incorrectviewrequest = $(".incorrectviewrequest");
$frequentincorrectlisting = $("#frequentincorrectlisting");
$frequentlyincorrectpanel  = $("#frequentlyincorrectpanel"); 
$gobacktogamestartupbutton = $(".gobacktogamestartupbutton"); 

$incorrectviewrequest.click( function(e){    $screen3panels.hide(); $frequentlyincorrectpanel.show();

												$userstathorizontalbar.text("");

										db.transaction( showthemostwrongones ); } );
										
										
$gobacktogamestartupbutton.click( function(e){    $screen3panels.hide(); 
													$gamewelcomepanel.show();
													$userstathorizontalbar.text("99/99 [100%] STREAK 1000 VITAL");	
												} );
										
												
$frequentincorrectlisting.css("min-height",innerHeight);  			
 		

$screen2upper.css("min-height",innerHeight);  

$screen2panels.hide();  $languagedecided.show();

//$helpelements.hide();


} );	// READY ENDS

// at the end of function getStudentInformation(tx) not at the end of the READY
// jellybeancheckformostversions() should be included for majority of ELS including all iOS
// nonjellybeancheckforjellybean() for ELS for Jelly only

// if included inside iOS, nothing inside will be executed and run normally
// or you can choose to include none of the two methods below for any PhoneGap builds.  

function jellybeancheckformostversions()
{
	
	var andyversion = device.version; var versionsplit = andyversion.split("4.1");
	
	if(versionsplit.length > 1) 
	{ 
		slideID = 10000;
		$('.screen2panels').hide();$('#jellybeanpanel').show(); $('.s2b').hide(); 
		$('.andyversiondisplayed').text(andyversion); 
		$('#contentpart1').hide();$('#contentpart3').hide(); 
	}
}
// inside jellybean version call for this function instead of the above function
function nonjellybeancheckforjellybean()
{
	
	var andyversion = device.version; var versionsplit = andyversion.split("4.1");
	
	if(versionsplit.length == 1) 
	{ 
		slideID = 10000;
		$('.screen2panels').hide();$('#nonjellybeanpanel').show(); $('.s2b').hide(); 
		$('.andyversiondisplayed').text(andyversion); 
		$('#contentpart1').hide();$('#contentpart3').hide(); 
	}

}

function steptwo(tx)
{
	var keyword = "Dog"; var category1 = "se2native"; // "dOG did not work"yes it is case sensitive.  
	
	tx.executeSql(
	
"UPDATE PILE SET "+category1+" = COALESCE( (SELECT "+category1+" FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [keyword, keyword] , errorcode	);
	
}

function stepgirl(tx)
{
	var keyword = "Dog"; var category1 = "se2native"; // "dOG did not work"yes it is case sensitive.  
	
	tx.executeSql(
	
"UPDATE PILE SET "+category1+" = COALESCE( (SELECT "+category1+" FROM PILE WHERE word = ?), 0 ) - 1 WHERE word = ?", [keyword, keyword] , errorcode	);
	
}



function stepone(tx) // YES 
{
	
	var keyword = "Dog"; var category1 = "se2e"; // "dOG did not work"yes it is case sensitive.  
	
		tx.executeSql(
	
"UPDATE PILE SET "+category1+" = COALESCE( (SELECT "+category1+" FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [keyword, keyword] , errorcode	);

	alert("alternative "+keyword+ "CAT"+category1);
}


function steponeYES(tx) // YES 
{
	
	var keyword = "Dog";
	
		tx.executeSql(
	
"UPDATE PILE SET se2e = COALESCE( (SELECT se2e FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [keyword, keyword] , errorcode	);


}


function steponeBUGGIEST(tx)
{
	
	var keyword = "Dog"; var category1 = "se2e";
	
		tx.executeSql(
	
"UPDATE PILE SET ? = COALESCE( (SELECT se2e FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [category1, keyword, keyword] , errorcode	); // BUGGIEST

	alert("buggy1 "+keyword+ " catg1 " + category1);
}
	
function steponeTURNSINTO1forsomereason(tx)
{
	
	var keyword = "Dog"; var category1 = "se2e";
	
		tx.executeSql(
	
"UPDATE PILE SET se2e = COALESCE( (SELECT ? FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [category1, keyword, keyword] , errorcode	); // BUGGY

	alert("V1 "+category1+" V2 "+keyword);
}	
			
function examcalculation()
{
	
	
}
			

function screenONEpress(tx) 
{				
	tx.executeSql(
	
"UPDATE PILE SET frequency = COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", [newEword, newEword] , errorcode	);

}


// "INSERT INTO STUDENTINFO (name, studentid, deviceid, totalnumber, totalcorrect, level, teams, streakrecord, onegamerecord, hardwareinfo, userlanguage) VALUES (?,?,?,?,?,?,?,?,?,?,?)", 

// "INSERT OR REPLACE INTO PILE (word, frequency)	VALUES ( ?,   COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0 ) + 1 )",

/*
function manualcorrectanswerBACKUP(tx)
{
	tx.executeSql(

"UPDATE PILE SET ?         = COALESCE( (SELECT ?         	FROM PILE WHERE word = ?), 0 ) + 1 WHERE word = ?", 

					[category1, category1, insertvalue, insertvalue] , errorcode	);

// NO   "UPDATE PILE SET se2e         	 = COALESCE( (SELECT se2e         	FROM PILE WHERE word = Dog), 0 ) + 1 WHERE word = Dog", 

// no				[] , errorcode	);
	
	alert("up "+category1+"+"+insertvalue);


}
*/


function updateLanguageInterface()
{

	if(userlanguage == 1)
	{
		sendtext0 = "영어의 발음을 들어보자! Hear It!";
		sendtext1 = "Cat|고양이 형식만 가능합니다";
		sendtext2 = "공간이 비어있습니다! 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
		sendtext3 = "단어를 누르면 그 단어만 들으실수 있습니다";
		sendtext4 = "발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
		sendtext5 = "공간 지우기";
		sendtext6 = "<p>게임에 오신걸</p> <p>환영합니다!</p>";
		sendtext7 = "정답확인!";
		sendtext9 = "단어 하나만 지우기";
		sendtext10 = "지우고싶은 단어를 누르세요";
		sendtext11 = "앱의 모든 기록을 지우시겠습니까?";
		sendtext12 = "모든 기록이 지워졌습니다";
		
		sendtext13 = "기록 ";
		sendtext14 = "많이 들은 단어들 ";
		
		sendtext16 = "예 ";
		sendtext17 = "아니요 ";
		sendtext18 = "소리만 듣기";
		sendtext19 = "한국어로 답하세요";
		sendtext20 = "영어로 답하세요";
		sendtext21 = "돌아가기";
		sendtext22 = "모든 단어를 지우기";
		sendtext23 = "저장하고싶은 영어단어와 뜻을 입력하세요";
		sendtext24 = "전화기에 저장하기";
		sendtext25 = "성공적으로 저장돼었습니다";

		sendtext26 = "한국어 뜻";
		sendtext27 = "영어";
		sendtext28 = "저장돼지 않았습니다! 위에 X !!! 라 표시돼어있는곳에 문제가 있습니다";
		sendtext29 = "가장 많이 틀린 단어들";
		sendtext30 = "게임시작하기!";
		sendtext31 = "영어 - 한국어 뜻 저장하기";

	}
	
	else if(userlanguage == 2) // Japanese
	{
		sendtext0 = "英語の発音を聴いてみよう! Hear It!";       
					// "JPN 영어의 발음을 들어보자! Hear It!";
		sendtext1 = "Only Cat|猫 type of input is possible"; // "JPN Cat|고양이 형식만 가능합니다";  // "JPN Cat|고양이 형식만 가능합니다";
		
		sendtext2 = "テキストが入力されていません！ 「発音を聞きたい英単語を入力し、Hear It!を押してください。」"; 
					// "JPN 공간이 비어있습니다! 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
		
		sendtext3 = "単語を押すとその単語だけ聞くことができます。"; 
					// "JPN 단어를 누르면 그 단어만 들으실수 있습니다";
		
		sendtext4 = "発音を聞きたい英単語を入力し、Hear It!を押してください。";
					// "JPN 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
		
		sendtext5 = "内容を消す"; 
					// "JPN 공간 지우기";   // "JPN 내용 지우고 새로운 영어 넣기";
		
		sendtext6 = "ゲームへ ようこそ"; 
					// "JPN 게임에 오신걸 환영합니다!";
		
		sendtext7 = "正解を確認";       
					// "JPN Submit! 정답확인!";
					
		sendtext9 = "単語１つのみ除去";       
					// "JPN 단어 하나만 지우기";
		
		sendtext10 = "消したい単語を押してください ";       
					// "JPN 지우고 싶은 단어를 누르세요";
					
		sendtext11 = "全ての履歴を削除しますか? ";     
					// "JPN 앱의 모든 기록을 지우시겠습니까?";
					
		sendtext12 = "全ての履歴が削除されました。";       
					// "JPN 모든 기록이 지워졌습니다";
		
		sendtext13 = "アイテムを記録";       
						// "JPN 기록 ";アイテムを記録
		
		sendtext14 = "最も頻度の高いアイテム";       
					// "JPN 많이 들은 단어들 ";最も頻度の高いアイテム

		sendtext16 = "はい";       
						// JPN 예 ";
		sendtext17 = "いいえ "; 
						// "JPN 아니요 ";
		
		sendtext18 = "音声だけ聞く";       
						// "JPN 소리만 듣기";音声だけ聞く 
						
		sendtext19 = "日本語で答えて下さい ";       
						// "일본어로 답하세요";日本語で答えて下さい 
						
		sendtext20 = "英語で答えて下さい";       
						//"JPN 영어로 답하세요";英語で答えて下さい
						
		sendtext21 = "戻る";   
						// "돌아가기";
						
		sendtext22 = "全ての単語を削除する "; 
						// "모든 단어를 지우기";全ての単語を削除する 
		
		sendtext23 = "保存したい英単語と日本語の意味を入力して下さい ";
						// 저장하고싶은 영어단어와 뜻을 입력하세요";保存したい英単語と日本語の意味を入力して下さい 
						
		sendtext24 = " 保存する ";
						//"전화기에 저장하기"; 保存する 
		
		sendtext25 = "保存されました"; 
						// "성공적으로 저장돼었습니다";保存されました 
		
		sendtext26 = "日本語の意味 "; 
						// "일본어 뜻";日本語の意味 
		
		sendtext27 = "英語";
						//"영어";
		
		sendtext28 = "保存中にエラーが発生しました！ Xがついている個所に問題があります!!！";
					// "저장돼지 않았습니다! 위에 X !!! 라 표시돼어있는곳에 문제가 있습니다";
					// 保存中にエラーが発生しました！ Xがついている個所に問題があります!!！"
					
		sendtext29 = " 最も間違えた単語"; 
					//"JPN 가장 많이 틀린 단어들"; 最も間違えた単語 
		
		sendtext30 = "ゲームスタート! ";
					// "JPN 게임시작하기!";
		
		sendtext31 = "英語の単語を挿入します – 日本語の意味"; 
					// insert English words J Meaning
					// 英語の単語を挿入します – 日本語の意味
	}
	
	else if(userlanguage == 3) // Mandarin
	{
		sendtext0 = 	"让我们听到英语发音! Hear It!";
					//  "讓我們聽到英語發音! Hear It!";
					 // "MDRN 영어의 발음을 들어보자! Hear It!";
					
		sendtext1 = "Only Cat|貓 type input is allowed";  
					// "MDRN Cat|고양이 형식만 가능합니다";
					
		sendtext2 = 	  "文本区是空的！输入你想听到英文发音的英文单词，然后按Hear It!"
						//"文本區是空的！輸入你想聽到英文發音的英文單詞，然後按Hear It!"
		
					// "MDRN 공간이 비어있습니다! 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
					//文本區是空的！輸入你想聽到英文發音的英文單詞，然後按Hear It!
					
		sendtext3 =   "如果按一个字词，你只能听到这个字词";
					//"如果按一個字詞，你只能聽到這個字詞";
					// "MDRN 단어를 누르면 그 단어만 들으실수 있습니다";
					// 如果按一個字詞，你只能聽到這個字詞
					
		sendtext4 =  "输入你想听到英文发音的英文单词，然后按Hear It!";
					//輸入你想聽到英文發音的英文單詞，然後按Hear It!
					"MDRN 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";

		
		sendtext5 =   "删除文本区域中的所有内容";
					// 刪除文本區域中的所有內容
					//"MDRN 공간 지우기";     // "MDRN 내용 지우고 새로운 영어 넣기";
					
					
		sendtext6 = 	"欢迎加入遊戏！";
					//	"歡迎加入遊戲！";
					//"MDRN 게임에 오신걸 환영합니다!";
		
		sendtext7 = 	"请检查答案！";
					//  "請檢查答案！";
					//	"MDRN Submit! 정답확인!";
					
		sendtext9 = "只删除一个字";
					//"只刪除一個字";
					 
					//"MDRN 단어 하나만 지우기";
					// 只刪除一個字
		
		sendtext10 =  "请按你要删除的字词。";
					//"請按你要刪除的字詞";
					// "MDRN 지우고 싶은 단어를 누르세요";
					// 請按你要刪除的字詞。
					
		sendtext11 = "你要删除软件上的所有记录？";
					 //"你要刪除軟件上的所有記錄？";
					// "MDRN 앱의 모든 기록을 지우시겠습니까?";
					
		sendtext12 = "所有的記錄已被刪除";
					// "MDRN 모든 기록이 지워졌습니다";
					// 所有的記錄已被刪除
		
		sendtext13 =  "已记录的相关文件";
					//"已記錄的相關文件";
					// "MDRN 기록 ";
		
		sendtext14 = "最常见的项目";
				//	 "最常見的項目";
					// "MDRN 많이 들은 단어들 ";
					// 最常見的項目

		sendtext16 =  "是的";
					//"是的";
					//"MDRN 예 ";
		
		sendtext17 = "没有";
					//"沒有";
					//"MDRN 아니요 ";
		
		sendtext18 =  "只能听到声音";
					//"只能聽到聲音";
		
					// "MDRN 소리만 듣기";
					
		sendtext19 = "用中文回答";
					//"用中文回答";
					// "중국어로 답하세요";
					
		sendtext20 = "用英语回答";
					// "用英語回答";
					//	"MDRN 영어로 답하세요";
		
		sendtext21 =  "倒退";
					// "倒退";
					// "돌아가기";
					
		sendtext22 = "全部删除";
					// "全部刪除";
					//"모든 단어를 지우기";
		
		sendtext23 =  "输入要保存字词和相关意义的英文字词";
					// 輸入要保存字詞和相關意義的英文字詞
					// "저장하고싶은 영어단어와 뜻을 입력하세요";
					
					
		sendtext24 = "保存";
					// "전화기에 저장하기";
					// 保存
					
		sendtext25 = "全部删除";
					// "保存成功";
					// "성공적으로 저장돼었습니다";
					
		sendtext26 = "中文含义";
					//"中文含義";
					// "중국어 뜻";
					
		sendtext27 = "英文";
					// "영어";
					
		sendtext28 =  "存储时出错！X上出了问题！ ";
					//"存儲時出錯！X上出了問題！ ";
					//"저장돼지 않았습니다! 위에 X !!! 라 표시돼어있는곳에 문제가 있습니다";
						
		sendtext29 =  "最容易出错的字词";
					//"最容易出錯的字詞";
					// "MDRN 가장 많이 틀린 단어들";

		sendtext30 = "开始游戏!";
					// "開始遊戲!";
					// "게임시작하기!";게임 이란뜻의 遊戏 를 游戏 로 바꿔주셔야 합니다
					
		sendtext31 =  "插入英文字词 – 中文含义";
					//"插入英文字詞 – 中文含義";
	
	}
	
	else if(userlanguage == 4) // CANTONESE
	{
		sendtext0 = "讓我們聽到英語發音! Hear It!";
					 // "MDRN 영어의 발음을 들어보자! Hear It!";
					
		sendtext1 = "Only Cat|貓 type input is allowed";  
					// "MDRN Cat|고양이 형식만 가능합니다";
					
		sendtext2 = "文本區是空的！輸入你想聽到英文發音的英文單詞，然後按Hear It!"
		
					// "MDRN 공간이 비어있습니다! 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
					//文本區是空的！輸入你想聽到英文發音的英文單詞，然後按Hear It!
					
		sendtext3 = "如果按一個字詞，你只能聽到這個字詞";
					// "MDRN 단어를 누르면 그 단어만 들으실수 있습니다";
					// 如果按一個字詞，你只能聽到這個字詞
					
		sendtext4 = "輸入你想聽到英文發音的英文單詞，然後按Hear It!";
					"MDRN 발음을 듣고싶은 영어단어 또는 문장을 써 놓으신 후 들어보기! Hear it! 을 누르세요";
					//輸入你想聽到英文發音的英文單詞，然後按Hear It!
		
		sendtext5 = "刪除文本區域中的所有內容";
					//"MDRN 공간 지우기";     // "MDRN 내용 지우고 새로운 영어 넣기";
					// 刪除文本區域中的所有內容
					
		sendtext6 = "歡迎加入遊戲！";
					//"MDRN 게임에 오신걸 환영합니다!";
		
		sendtext7 = "請檢查答案！";
					//	"MDRN Submit! 정답확인!";
					
		sendtext9 = "只刪除一個字";
					//"MDRN 단어 하나만 지우기";
					// 只刪除一個字
		
		sendtext10 = "請按你要刪除的字詞";
					// "MDRN 지우고 싶은 단어를 누르세요";
					// 請按你要刪除的字詞。
					
		sendtext11 = "你要刪除軟件上的所有記錄？";
					// "MDRN 앱의 모든 기록을 지우시겠습니까?";
					
		sendtext12 = "所有的記錄已被刪除";
					// "MDRN 모든 기록이 지워졌습니다";
					// 所有的記錄已被刪除
		
		sendtext13 = "已記錄的相關文件";
					// "MDRN 기록 ";
		
		sendtext14 = "最常見的項目";
					// "MDRN 많이 들은 단어들 ";
					// 最常見的項目

		sendtext16 = "是的";
					//"MDRN 예 ";
		
		sendtext17 = "沒有";
					//"MDRN 아니요 ";
		
		sendtext18 = "只能聽到聲音";
		
					// "MDRN 소리만 듣기";
					
		sendtext19 = "用中文回答";
					// "중국어로 답하세요";
					
		sendtext20 = "用英語回答";
					//	"MDRN 영어로 답하세요";
		
		sendtext21 = "倒退";
					// "돌아가기";
					
		sendtext22 = "全部刪除";
					//"모든 단어를 지우기";
		
		sendtext23 = "輸入要保存字詞和相關意義的英文字詞";
					// "저장하고싶은 영어단어와 뜻을 입력하세요";
					// 輸入要保存字詞和相關意義的英文字詞
					
		sendtext24 = "保存";
					// "전화기에 저장하기";
					// 保存
		sendtext25 = "保存成功";
					// "성공적으로 저장돼었습니다";
					
		sendtext26 = "中文含義";
					// "중국어 뜻";
					
		sendtext27 = "英文";
					// "영어";
		sendtext28 = "存儲時出錯！X上出了問題！ ";
					//"저장돼지 않았습니다! 위에 X !!! 라 표시돼어있는곳에 문제가 있습니다";
						
		sendtext29 = "最容易出錯的字詞";
					// "MDRN 가장 많이 틀린 단어들";
					// 
		sendtext30 = "開始遊戲!";
					// "게임시작하기!";
		sendtext31 = "插入英文字詞 – 中文含義";
	
	}
		
	se2equestiontext = "Sound Only <p>"+sendtext18+"</p> Answer In English! <p>"+sendtext20+"</p>";
	se2nativequestiontext = "<p>Answer in Your Native Language</p> <p>"+sendtext19+"</p>";
	$hearitbutton.text(sendtext0);
	$screen2top.text(sendtext4);
	$oneword.text(sendtext4);
	$wordmeaninginsertbutton.text(sendtext24);
	$gamestartmessagenative.html(sendtext6);
	$submitbuttonfortextarea.text("Submit! "+sendtext7);
	$clearbuttonclass.text(sendtext5);
	
		$nativemeaningsc2low.text(sendtext26+" -");
	$nativemeaningsc2top.text("English "+ sendtext27+" -");
	
			//alert("ninja7");
	
	// $deleteeverythingbutton.text(sendtext8);
	
				//alert("ninja8");
	
	$deletemodebutton.text(sendtext9);
	
		
				//alert("ninja9");
	
	//alert("littlebaby");
	$areyousuredeleteeverything.text(sendtext11);
	//alert("GWANGNAM");
	
	$viewtherecent.text(sendtext13 + " Recent");
													
	$viewthefrequency.text(sendtext14 + " Frequency");
	
	$thestorm.text(sendtext16+" Yes");
	$canceldeletethetable.text(sendtext17+" No");
	
	$gobackbutton.text("Go Back "+sendtext21);

	$trulydeleteeverythingshowconfirm.text(sendtext22);
	
	$screen2meaningwordinsert.text(sendtext23);
	$incorrectviewrequest.text(sendtext29);
	$newgamestart.html("<p>Start The Game! </p> <p>"+sendtext30+"</p>");
	
	$addmeaningbutton.text("sendtext31");
	
	// alert("NINJA-Where SLI ends");
}



// alert("V15");
	
// The below deal with SQLite and display how many times each word was heard.  beside each word.  AWESOME INDEED

// CUT START

// NOT GOING TO SCREEN2 not going to 
// BEFORE IF CLAUSE
// INSide IF
// END of insert 0

// When checking levels, no need to do both.  It should always include one >

/* 

	TTS TRUE TEST STRATEGY

	if 8 or higher - no random questions
	
	if lower - always 4 random questions mixed
	
	it means the array should be created everytime the user solves a question
	
	or just check length
	
	if wrong, it goes to the back of the array
	
	if right, it is simply removed from the array
	
	PILE should display all 
	


*/




document.addEventListener( "deviceready", onDeviceReady, false );

function onDeviceReady( )  // Things here will load only after device is ready
{

	db = sqlitePlugin.openDatabase( { name: "russianbeauty.db" } );  

	db.transaction( initializeSQLite );
	db.transaction( fillRecent );
	db.transaction( initializeStudentInfoTable );	// This is where it ends
	db.transaction( setInterfaceLanguage ); // This guy should be BELOW initializeStudentINfoTable
	db.transaction( getStudentInformation );
	// db.transaction( preparetestarray );
	
}

function checkExistingNewMeaning(tx)	// db.transaction(checkExistingNewMeaning);
{
	tx.executeSql( 'SELECT * FROM PILE WHERE word=?', [newEword], storethatExistingMeaning, errorcode ); 
}


function clearthetable(tx)	// db.transaction(checkExistingNewMeaning);
{
	tx.executeSql( 'DELETE FROM PILE'); 
	tx.executeSql( 'DELETE FROM HISTORY'); 
}

function storethatExistingMeaning(tx, results)
{
	var len = results.rows.length; 	// if(newNmeaning == "TestMeaning") will not run if there is a | in the input
	
	if( len == 1 ) // YES and if a brand new word, it will no
	{
		newNmeaning = results.rows.item(0).meaning; // will only run if len ==1 (existing already in Pile) and a custom meaning is there. 
		// alert("CM - "+tword); YES
	}
	else newNmeaning = "TestMeaning";
	
}
/*
function fillseethatinfo(tx)
{
		
	tx.executeSql( 'SELECT * FROM PILE', [], fillseethatinfofillvar, errorcode ); 
}

function fillseethatinfofillvar(tx, resultsdatvar)
{
	var datvar = "DSTART-"; 
	
	var len = resultsdatvar.rows.length; 
	
	for( var i = 0 ; i < len ; i++)
	{
		// word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount
		
		var datvar = datvar+i+ */


function infoalert(tx)
{
	tx.executeSql( 'SELECT * FROM STUDENTINFO', [], infoalertdisplay, errorcode ); 	
}	// name, studentid, deviceid, totalnumber, totalcorrect, level, teams, streakrecord, onegamerecord, hardwareinfo, userlanguage) ' );

function infoalertdisplay(tx, results)
{

	var len = results.rows.length; 
	
	// alert("table row count - "+len);
	
	for( var i = 0 ; i < len ; i++)
	{
		// word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount
		
// alert(results.rows.item(i).name		);
		
// alert(results.rows.item(i).studentid);
		
// alert(results.rows.item(i).deviceid );
		
// alert(results.rows.item(i).totalnumber);	
		
// alert(results.rows.item(i).totalcorrect	);
		
// alert(results.rows.item(i).level	);
		
// alert(results.rows.item(i).teams );
		
// alert(results.rows.item(i).streakrecord);
		
// alert(results.rows.item(i).onegamerecord);
		
// alert(results.rows.item(i).hardwareinfo);
		
// alert(results.rows.item(i).userlanguage);
	}
	
}

function setInterfaceLanguage(tx)
{
	tx.executeSql( 'SELECT * FROM STUDENTINFO', [], setInterfaceLanguageDEMAND, errorcode ); 	
}

function setInterfaceLanguageDEMAND(tx, results)
{
	userlanguage = results.rows.item(0).userlanguage;
	
	// alert(userlanguage); // undefined
	
	if( userlanguage == 10 )
	{
				$screen2panels.hide();
		$chooselanguagefirst.show();  //languagedecided

	}
	
	updateLanguageInterface();  //I think this guy does not have to be here.  It just has to modify userlanguage

}

// db.transaction( findhistoryindex); // historyindex = 0;

function findhistoryindex(tx)
{
	tx.executeSql( 'SELECT * FROM HISTORY', [], findhistoryindexparttwo, errorcode ); 

}

function findhistoryindexparttwo(tx, historyresults)
{
	var historylength = historyresults.rows.length; 
	
	var startingfrom = historylength - 1;
	
	for( var i = startingfrom ; i >= 0 ; i-- )
	{
		if(screen1targetword == historyresults.rows.item(i).word)
		{
			historyindex = historylength - i;
			i = -1;
			//alert(historyindex);
			
		}
	}
}
			  
function changeToKorean(tx)
{
	tx.executeSql( "UPDATE STUDENTINFO SET userlanguage =?", [ 1 ] , errorcode ); 	
}

function changeToJapanese(tx)
{
	tx.executeSql( "UPDATE STUDENTINFO SET userlanguage =?", [ 2 ] , errorcode ); 	
}

function changeToMandarin(tx)
{
	tx.executeSql( "UPDATE STUDENTINFO SET userlanguage =?", [ 3 ] , errorcode ); 	
}

function changeToCantonese(tx)
{
	tx.executeSql( "UPDATE STUDENTINFO SET userlanguage =?", [ 4 ] , errorcode ); 	
}

function initializeSQLite(tx) 
{
	tx.executeSql( 
	
'CREATE TABLE IF NOT EXISTS PILE (word primary key unique, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount)' );

	tx.executeSql( 'CREATE UNIQUE INDEX IF NOT EXISTS wordindex ON PILE (word)' );  // necessary 
	
	tx.executeSql( 'CREATE TABLE IF NOT EXISTS HISTORY (word, datestored) ' );
	
	tx.executeSql( 
	
'CREATE TABLE IF NOT EXISTS STUDENTINFO (name, studentid, deviceid, totalnumber, totalcorrect, level, teams, streakrecord, onegamerecord, hardwareinfo, userlanguage) ' );

}

	/* 	STUDENTINFO will have only one row and logically it will look like 
	
			STUDENTINFO
	===========================
	name
	studentid
	deviceid
	totalnumber
	totalcorrect
	level
	teams
	streakrecord
	onegamerecord
	hardwareinfo
	userlanguage

	
	0 ENG 1 KOR 2 JPN 3 MND
		
	e2e - unnecessary 
	e2n 
	n2e 
	n2n - unnecessary
	
	se2e
	se2native
	sn2e - unnecessary
	sn2n - unnecessary  MUST to let the users see his flawed answers
	
	
	
	order should be
	
	se2e
	e2n
	n2e
	se2native
	
	If no meaning, then it will be cleared if se2e is cleared.
	
	If user enters the meaning, then ask the meaning again.  NO HARM. 
	
	And if wrong, all three of them become back to the orignial stuation
	
	
	You can't possibly develop an algorithm that can make each and everyone happy.
	
	
	
	
	Types of hints available 
	
	se2e 	- NO HINT available 	- 
	e2n		- Multiple Choice		
	n2e		- First letter, Multiple Choice, lengths shown,		- 
	se2native	- Multiple Choice
	
	
	Generate Question
	
	Generate Answer
	
	Check
	
	If Right - Check the number of custom base
	
	If wrong - 
	
	
	
	When the required answer is negative, you can't provide the first letter.  
	
	User will can get it wrong maximum of twice and will see the answer.
	
	First Trial
	Second Trial - no hints	
	Third trial - yes hint
	Fourth trial - answer shown.  Next question.  
	

	Vital is 10
	
	Each wrong takes one vital down.
	
	If you get everything wrong in a question you lose 3 vital points.  first wrong second wrong even with hint third wrong 
	
	
	Bonus of 1 
	
	Streak of 10
	
	Streak of 20
	
	Streak of 30
	
	When Going to level 5
	
	full bonus - going to level 7
	
	What is the hardest level?
	
	
	
	Very Hard Levels
	
	- Just go to University Engineering Terms
	
	
	영어 
	
	
	Each time a question is done, it checks how many custom base questions are remaining.
	
	
	
	
	
	
	If wrong, 
	
	
	- let the student see his incorrect answers
	- give the student one more chance
	
	
	If there are no meaning inserted
	
	
	
	
	
	Will the question ever be very long?
	
	
	
	Level 1 
	
	It should also contain 
	
	Say the full sentence
	
	Blank
	
	Level 2 
	
	야너 혼날래? 
	
	사람들 많은데서 꼭 껴안고 막 뽀뽀하고 그런다?
	
	
	
	
	CAT 
	CUT ( X ) // smaller letters
	CAM ( X ) // smaller letters
	
	What do you plan to do if question is lengthy ( higher levels )
	
	And how would you prevent no question goes missing?
	
	
	
	It is like this 
	
	When the user starts the game, the chain is already formed.
	
	It is a matter of how many non-base questions pop up.
	
	
	No need to worry about non-base questions popping up over and over again.
	
	
	
	
	
	
	
	At first, it will 
	
	As for entering the meaning
	
	What if it gets inserted 
	
	
	n2e and e2n will be "RAW" when being entered into the row.  User may choose to enter the meaning later on
	
	User can choose to enter "meaning" in the future ( or let the server automatically fill it )

	
	
	
	*/
	
// $resetbutton.click(	function(e) {	

//				db.transaction(studentinfotablereset); db.transaction( initializeStudentInfoTable ); db.transaction(setInterfaceLanguage); } );

function studentinfotablereset(tx)
{
	tx.executeSql( "DELETE FROM STUDENTINFO"); // or call initializeStudentInfoTableInsert after this statement
}

function initializeStudentInfoTable(tx)
{
	tx.executeSql( 'SELECT * FROM STUDENTINFO', [], initializeStudentInfoTableInsert, errorcode ); 	
}

function initializeStudentInfoTableInsert(tx, results)
{
	var len = results.rows.length; 
	
	// alert("BEFORE IF CLAUSE "+len);
	
	if(len==0) // YES
	{
		var hardwareinfovariable = "Model-"+device.model+"-Platform-"+device.platform+"-Version-"+device.version;
	
tx.executeSql( 

"INSERT INTO STUDENTINFO (name, studentid, deviceid, totalnumber, totalcorrect, level, teams, streakrecord, onegamerecord, hardwareinfo, userlanguage) VALUES (?,?,?,?,?,?,?,?,?,?,?)", 

[ "INSTALLNAME", "INSTALLID" , device.uuid, 0,0,1,"DokoINSTALL",0,0, hardwareinfovariable, 10] , errorcode ); 	

// YES // alert("STUDENTINFO DATA WIILL BE INITIALIZED");

// alert("INside IF ");

	}	else //YES
		{
// YES // alert("L -"+len); for( var i = 0 ; i < len ; i++){ // alert("D-ID"+results.rows.item(i).deviceid); // alert("D-HW"+results.rows.item(i).hardwareinfo); }
		}
		
	// alert("End Of insert "+len);

}


/*
function studentinfotablereset(tx)
{

	var hardwareinfovariable = "Model-"+device.model+"-Platform-"+device.platform+"-Version-"+device.version;
	// YES // alert("LOL 1");
tx.executeSql( "DELETE FROM STUDENTINFO", errorcode ); // or call initializeStudentInfoTableInsert after this statement
	// YES // alert("LOL 2");
tx.executeSql( 

"INSERT INTO STUDENTINFO (name, studentid, deviceid, totalnumber, totalcorrect, level, teams, streakrecord, onegamerecord, hardwareinfo, userlanguage) VALUES (?,?,?,?,?,?,?,?,?,?,?)", 

[ "RESETNAME", "RESETID" , device.uuid, 0,0,1,"DokoRESET",0,0, hardwareinfovariable, 10] , errorcode );	


	// YES // alert("LOL 3");
//  YES  // alert("tablerset"); 	Update or Reset    tx.executeSql( "UPDATE STUDENTINFO SET userlanguage =?", [ 3 ] , errorcode );
DELETE BUTTON in SCREEN2 BOTTOM }	

	tx.executeSql( 
					//      word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount
   "INSERT OR REPLACE INTO PILE (word, frequency)	VALUES ( ?,   COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0 ) + 1 )",

		[ screen1targetword, screen1targetword ] , errorcode 
		
		deleting a row from SQLite
		
db.transaction(
 function(t){
  t.executeSql("DELETE FROM favourites WHERE id = ?", [rec_id]);
        }
				);
		
		*/


function responseupdateDB(tx)		// category = "category";  elementword = "elementword"; goodjob = can either be 1 or -1
{

		tx.executeSql( 
					//      word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount
   "INSERT OR REPLACE INTO PILE (word, ?)	VALUES ( ?,   COALESCE( (SELECT ? FROM PILE WHERE word = ?), 0 ) + 1 )",

								[ category, elementword, category, elementword ] , errorcode 

					); 
}

// CLASS DEFINITON DORAEMON

function TAelement(category, question, trueanswer, c1, c2, c3, c4, winningmessage, currentvalue)
{
	this.category = category;
    this.question = question;
    this.trueanswer = trueanswer;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
	this.winningmessage = winningmessage;
	this.currentvalue = currentvalue;
}

function wordmeaningpair(word, meaning)
{
	this.word = word;
	this.meaning = meaning;
}

function preparetestarray(tx)
{
	tx.executeSql( 'SELECT * FROM PILE', [], preparetestarrayparttwo, errorcode ); 
}

// function TAelement(category, question, trueanswer, c1, c2, c3, c4, winningmessage)

function preparetestarrayparttwo(tx, magictest) // if gets 2 correct and is found 2 again it won't be added to the text array
{
	thelineup = []; var se2nativearray = [];	var len = magictest.rows.length; 	
	
	for( var i = 0 ; i < len ; i++)
	{
		if( magictest.rows.item(i).se2e < 3 )		
		{ 	
			var winningtext = "<p>"+magictest.rows.item(i).word+"</p>";
	
			var newTAelement = new TAelement( "se2e", magictest.rows.item(i).word, magictest.rows.item(i).word,1,1,1,1,  winningtext, magictest.rows.item(i).se2e); // BUG HERE

			thelineup.push( newTAelement );  
		}
	
		if( magictest.rows.item(i).e2n  < 3 && magictest.rows.item(i).meaning != "TestMeaning")	
		{	
			var winningtext = "<p>"+magictest.rows.item(i).word+"</p><p>"+magictest.rows.item(i).meaning+"</p>";
			var newTAelement = new TAelement( "e2n", magictest.rows.item(i).word, magictest.rows.item(i).meaning,1,1,1,1, winningtext, magictest.rows.item(i).e2n);
				
			thelineup.push( newTAelement ); 
		}
		
		if( magictest.rows.item(i).n2e  < 3 && magictest.rows.item(i).meaning != "TestMeaning")	
		{	
			var winningtext = "<p>"+magictest.rows.item(i).word+"</p><p>"+magictest.rows.item(i).meaning+"</p>";
			
			var newTAelement = new TAelement( "n2e",  magictest.rows.item(i).meaning, magictest.rows.item(i).word,1,1,1,1, winningtext, magictest.rows.item(i).n2e );
			
			thelineup.push( newTAelement ); 
		}			
	}

	for( var i = 0 ; i < len ; i++)
	{
		if( magictest.rows.item(i).meaning != "TestMeaning" ) // you have to add meaning too eh
		{
			if( magictest.rows.item(i).se2native < 3 || magictest.rows.item(i).se2e < 3  || magictest.rows.item(i).e2n  < 3  ||  magictest.rows.item(i).n2e < 3 )	
			{
				var winningtext = "<p>"+magictest.rows.item(i).word+"</p><p>"+magictest.rows.item(i).meaning+"</p>";
				
				var newTAelement = new TAelement( "se2native", magictest.rows.item(i).word, magictest.rows.item(i).meaning,1,1,1,1, winningtext, 2);
			
				se2nativearray.push( newTAelement ); 
			}
		}
	}

	thelineup = shufflearray(thelineup); se2nativearray = shufflearray(se2nativearray); 
	
	$.merge( thelineup, se2nativearray );							// YES se2nativearray.forEach(	function(se2nativearrayelem) {	thelineup.push(se2nativearrayelem);	} 	);
		
	if(thelineup.length < 20) 
	{ 
		for( var i = 0 ; i < 4 ; i++)
		{ 
			var generatedelement = addrandom();
			
			thelineup.splice( Math.floor(Math.random() * thelineup.length) , 0, generatedelement);	
		} 
	} else{}
																// YES thelineup.forEach(	function(se2nativearrayelem) {	testarray.push(se2nativearrayelem);	} 	);
	$.merge( testarray, thelineup );
}	


		/* The below chooses one from 12345 */
		
		/*
		var categorymin = 1; var categorymax = categorymin + 4; // YES 
				
		var categoryindex = Math.floor(Math.random() * (categorymax - categorymin + 1)) + categorymin;
		
		var randomcategory = "rn"+categoryindex; // YES
		
		NOT THEA BOVEEEEEEE
		*/
	

	
function addrandom()
{
// min will always be 10 at least each cycle increases random by 10  Global variable = addrandomcycle = 1;

	// standard = 0;
	// standard++	
	// if(standard > 20 ) standard -= 8; 
	// if(standard > 10) { standard *= 0.5; standard = Math.round(standard); }	
														
		if(standard < 40) 		{ var minimum = 10; 	var maximum = 100; }
		else if(standard < 80) { var minimum = 100; 	var maximum = 200; }
		else if(standard < 160){ var minimum = 200; 	var maximum = 500; }
		else if(standard < 200){ var minimum = 500; 	var maximum = 1000; }
		else if(standard < 300){ var minimum = 1000; 	var maximum = 2000; }
		else if(standard < 400){ var minimum = 10; 	var maximum = 3000; }
		else if(standard < 500){ var minimum = 3000; 	var maximum = 5000; }
		else if(standard < 700){ var minimum = 5000; 	var maximum = 10000; }
		else 					{ var minimum = 10; 	var maximum = 99999999999; }
																	   
		var answerpool = [];  // while(answerpool.length) { answerpool.pop(); }	
		
		var audioonlyquestioncontent = "<p>Sound Only</p> </p>"+sendtext18+"</p>"; 	var questioncontent = "Q Text"; var winningmessage = "V";
		
		var randomcategory = randomindexpool[0]; randomindexpool.splice( $.inArray( randomindexpool[0], randomindexpool ), 1 );

		if(randomindexpool.length <= 0 ) { $.merge( randomindexpool, randomindexpoolbase ); randomindexpool = shufflearray(randomindexpool);}

		while(answerpool.length != 4)
		{
				while(answerpool.length) { answerpool.pop(); } 
				// var randomtranslated = numbertranslate(randomchosen);
				var choice1gen = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; // includes miinimum and maximum
				
				var choice2gen = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
				
				var choice3gen = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
				
				var varier = Math.floor(Math.random() * (9)) + 1;
				
				var choice4gen = choice3gen + varier;
				
				if(choice4gen > maximum ) choice4gen = choice3gen - varier;

				answerpool.push(choice1gen);
				answerpool.push(choice2gen);
				answerpool.push(choice3gen);
				answerpool.push(choice4gen);
				
				answerpool = $.unique( answerpool );		
		}
				
		answerpool = shufflearray(answerpool);		
		
		// var answerindex = Math.floor(Math.random() * (3)) + 1; // chooses one from 2 3 4

		var answerindex = Math.floor(Math.random() * (4));  // chooses one from 0 1 2 3
		
		var answergenerated = "m"+(answerindex+1);
		
		if(randomcategory == "rn1") // SEVENTEEN 12 13 14 15
		{
			questioncontent = numbertranslate(answerpool[answerindex]);
			
			questioncontent = questioncontent.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			winningmessage = "<p>"+answerpool[answerindex]+"</p><p>"+questioncontent+"</p>";
			
			
				var categorydirection = Math.floor(Math.random() * 2); //  successfully chooses 1 or 0
				
				// if(standard > 150) categorydirection = 1;
				
				if(categorydirection == 1 || standard > 150)
				{	
					randomcategory = "e2n";
					answergenerated = answerpool[answerindex];
				}
			
			newTAelement = new TAelement( randomcategory, questioncontent, answergenerated, answerpool[0], answerpool[1], answerpool[2], answerpool[3], winningmessage ); 

		}
		else if(randomcategory == "rn2") // 15 TWO FIVE THREE NINE //  IMPOSSIBLE TO BE CONVERTED
		{
			questioncontent = answerpool[answerindex];
			
			index1 = numbertranslate(answerpool[0]); index2 = numbertranslate(answerpool[1]); index3 = numbertranslate(answerpool[2]); index4 = numbertranslate(answerpool[3]); 
			
			index1 = index1.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index2 = index2.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index3 = index3.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index4 = index4.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			var winningtranslated = numbertranslate(questioncontent);
				winningtranslated = winningtranslated.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);

			winningmessage = "<p>"+questioncontent+"</p><p>"+winningtranslated+"</p>";
			
			newTAelement = new TAelement( randomcategory, questioncontent, answergenerated, index1,  index2,  index3,  index4, winningmessage ); 

		}	
		
		else if(randomcategory  == "rn3") // Audio Only 12 13 14 15
		{
			questioncontent = audioonlyquestioncontent; var part1 = "V"; var part2 = "V2";
			
			if(answergenerated == "m1") 		part1 = answerpool[0]; 	
			else if(answergenerated == "m2")	part1 = answerpool[1]; 
			else if(answergenerated == "m3")	part1 = answerpool[2]; 
			else 								part1 = answerpool[3]; 
			
			part2 = numbertranslate(part1);
			part2 = part2.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			winningmessage = "<p>"+part1+"</p><p>"+part2+"</p>";
			
				var categorydirection = Math.floor(Math.random() * 2); //  successfully chooses 1 or 0
				
				if(categorydirection == 1 || standard > 150)
				{	
					randomcategory = "se2native";
					answergenerated = part1;
					questioncontent = part2; // can be commented out later on
				}
			
			newTAelement = new TAelement( randomcategory, questioncontent, answergenerated, answerpool[0], answerpool[1], answerpool[2], answerpool[3], winningmessage ); 
		}
		
		else if(randomcategory  == "rn4") // 4 Audio SEVENTEEN 12 13 14 15
		{
			questioncontent = numbertranslate(answerpool[answerindex]);
			
			questioncontent = questioncontent.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			winningmessage = "<p>"+answerpool[answerindex]+"</p><p>"+questioncontent+"</p>";
			
				var categorydirection = Math.floor(Math.random() * 2); //  successfully chooses 1 or 0
				
				if(categorydirection == 1 || standard > 150)
				{	
					randomcategory = "se2native";
					answergenerated = answerpool[answerindex];
				}
			
			newTAelement = new TAelement( randomcategory, questioncontent, answergenerated, answerpool[0], answerpool[1], answerpool[2], answerpool[3], winningmessage  ); 
		}
		
		else // Audio only TWO FIVE THREE NINE // IMPOSSIBLE TO BE CONVERTED
		{
						questioncontent = audioonlyquestioncontent;
			
			
			index1 = numbertranslate(answerpool[0]); index2 = numbertranslate(answerpool[1]); index3 = numbertranslate(answerpool[2]); index4 = numbertranslate(answerpool[3]); 
			
			index1 = index1.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index2 = index2.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index3 = index3.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			index4 = index4.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			if(answergenerated == "m1") 		part1 = answerpool[0]; 	
			else if(answergenerated == "m2")	part1 = answerpool[1]; 
			else if(answergenerated == "m3")	part1 = answerpool[2]; 
			else 								part1 = answerpool[3]; 
			
			part2 = numbertranslate(part1);
			part2 = part2.toLowerCase().replace(/\b[a-z]/g, function(firstletter){ return firstletter.toUpperCase(); }	);
			
			winningmessage = "<p>"+part1+"</p><p>"+part2+"</p>";
			
			newTAelement = new TAelement( randomcategory, questioncontent, answergenerated, index1, index2, index3,index4, winningmessage  ); 
		}

		// testarray.push(newTAelement);
		
		// thelineup.splice( Math.floor(Math.random() * thelineup.length) , 0, newTAelement);
		
		return newTAelement;
}

/*

	
		// rn1 SEVENTEEN 12 13 14 15
		// rn2 15 TWO FIVE THREE NINE
		// rn3 Audio Only 12 13 14 15
		// rn4 Audio SEVENTEEN 12 13 14 15
		// rn5 Audio only TWO FIVE THREE NINE // if the number is higher than 100, 
		

		// if the # is higher than 40, 
		
		// rn1 e2n 
		
		// rn2 becomes n2e
		
		// rn5 becomes se2e

		// rn1 becomes e2n but 
		
		// e2n
		
		// in the panel(), there is a if(!NaN(index1)) "Answer in Native Language" becomes "Answer in Numeric Numbers" and "Answer in Native Language" becomes "1 2 3 4 5 6 7 8 9 0"
		
		// n2e
		
		// se2n
		
		


var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [20, 21, 22, 23];

for (i = 0; i < 4; i++) 
{
    var idx = Math.floor(Math.random() * a.length);
    a.splice(idx, 0, b[i]);
}

*/

function shufflearray(array)
{
	var currentIndex = array.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) 
	{
		randomIndex = Math.floor(Math.random() * currentIndex);	currentIndex -= 1;
		
		temporaryValue = array[currentIndex];	array[currentIndex] = array[randomIndex];	array[randomIndex] = temporaryValue;
	}
	
	return array;
}


// Divide Element into Category, word and meaning

// There is a function called "fillthechallengepanel"

// Major Panels - five of them.  

// - Starter Panel 
// - Game Panel
// - CORRECT 			has go to next button  				which says "NEXT"
// - INCORRECT			has go back to the question button 	which says "NEXT"
// - Game Over panel 	displays the number
// 

// Audio Question
// Multiple Choice Question (large panel)

// Audio Question format

// Audio Question

// [ HEAR IT AGAIN ]

// When Multiple, it should be easy to click

// Use large fonts with sufficient margin inbetween

//

// REMEMBER to remove the element after presenting that element on the panel. 

// If correct, display correct panel with NEXT QUESTION button

// If no, display 

// Hear it! => Play!  	I think they both wear C-Cups           Laughing now?      Yes      C컵 C컵 입 함부로 놀리지 말아요    흥 C컵  

// Find an investor

// It builds smartphones, tablets and social network

// Make a program that lets smartphones multi-boot

// I make an environment which specializes in multi-boot OS

// Profit....

// I took a picture of my best friend sleeping in my room.   O RLY 

// get BlackBerry involved to bring price down.

// smartphone that can run multi-boot

// get BB involved to bring price down.

// Chicken nuggets.   When printing from UPS store, if you are printing out 20 cents per page

// If you are printing Supplier is willing to give Wendy's USA discount because 

// 	remove element from array - y.splice( $.inArray(removeItem, y), 1 ); OU y = jQuery.grep(y, function(value) { return value != removeItem; } );

//  ask but se2native will go up only when se2e, n2e and e2n is cleared.  

/*

from jQuery website 

// Creating empty arrays and adding values
 
var myArray = [];


// Adds "hello" on index 0
myArray.push( "hello" );
 
// Adds "world" on index 1
myArray.push( "world" );
 
// Adds "!" on index 2
myArray[ 2 ] = "!";

function initializePileTable(tx) // for preparing the non-custom base 
{
	tx.executeSql( 'SELECT * FROM PILE', [], initializePileTableInsert, errorcode ); 	
}

function initializePileTableInsert(tx, results)
{
	var len = results.rows.length; 
	
	if(len==0) // YES
	{	
	
		// tx.executeSql( 

// "INSERT INTO PILE (word, meaning, frequency, se2e, se2native, n2e) VALUES (?,?,?,?,?,?)", 
		
	}
}

*/


function fillthealldata(tx) // ASC | DESC
{
	tx.executeSql( 'SELECT * FROM PILE ORDER BY frequency DESC', [], fillthealldataparttwo, errorcode);
}

function fillthealldataparttwo( tx, re )
{
	var list = " word - meaning - frequency - se2e - n2e - e2n - se2native - XC"; 
	
	var len = re.rows.length; 
	
	for( var i = 0 ; i < len ; i++)
	{
	
list += '<p class=rawforprogrammer>' 

+  re.rows.item(i).word      + ' - '  +   re.rows.item(i).meaning 		+ ' - ' 
+  re.rows.item(i).frequency + ' - '  +   re.rows.item(i).se2e    		+ ' - '
+  re.rows.item(i).n2e       + ' - '  +   re.rows.item(i).e2n        	+ ' - ' 
+  re.rows.item(i).se2native + ' - '  +   re.rows.item(i).wrongcount 	+ '</p>'

// 'CREATE TABLE IF NOT EXISTS PILE (word primary key unique, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount)
	
	}	
	
	$piletabledisplayed.html(list); 
																					
}



function testquityesstatements()
{
	$article2.show();	$article1.hide();$article3.hide();		testarray = [];
	$.mobile.pageContainer.pagecontainer( 	"change", $article2, { transition: "slide", reverse: true }  ); slideID = 2; 
						$article1.hide();$article3.hide();
}

function getStudentInformation(tx)
{
	tx.executeSql( 'SELECT * FROM STUDENTINFO', [], getStudentInformationStoreInVar, errorcode ); 
	// YES // alert("getStudentInformatio");
	
	jellybeancheckformostversions();
}

function getStudentInformationStoreInVar(tx, results)  
{

	studentlevel = results.rows.item(0).level;
	studenttotalcorrect = results.rows.item(0).totalcorrect;
	studenttotalnumber = results.rows.item(0).totalnumber;

	
	/* YES	// alert("length is "+len);
	
	// variables declared outside document.ready will be made even before the document is fully loaded.
	
	for( var i = 0 ; i < len ; i++)
	{
		studentlevel = results.rows.item(i).level;
		
		// alert("Level is "+results.rows.item(i).level);
	}

	
		/*		

		
		
			
	studentlevel = results.rows.item(0).level;
		
results.rows.item(i).datestored
					
	"INSERT INTO STUDENTINFO (name, studentid, deviceid, totalnumber, totalcorrect, level, teams, hardwareinfo) VALUES (?,?,?,?,?,?,?,?)", 

	[ "basicname", "basicid" , device.uuid, 0,0,8,"Dokodai", hardwareinfovariable] , errorcode ); 	
	
	*/

}




function wordmeaningpair(word, meaning)
{
	this.word = word;
	this.meaning = meaning;
}


function fillRecent(tx) 
{
	tx.executeSql( 'SELECT * FROM HISTORY', [], fillRecentGenerate, errorcode ); 
	
	
	// if(deletemode) // alert("dmodetrue1937"); else // alert("dmodeFALSE1937");
}


function fillRecentGenerate(tx, results)  
{
	var list = " "; lastdate = " "; 	
	
	var len = results.rows.length;
	
	if(deletemode) deleteindicator = "[x] "; else deleteindicator = "";
	
	for( var i = 0 ; i < len ; i++)
	{
		if( i > 0 && lastdate != results.rows.item(i).datestored ) // Insert Date Indicator OR datechange instead
		{
			list = ' <p class="entriesdisplayed DateDivider" style="display:none;"> ' + lastdate + " </p> " + list;
		}
		
list = ' <p class="entriesdisplayed"  style="display:none;"> '+ deleteindicator + results.rows.item(i).word + " </p> " + list;
		
		lastdate = results.rows.item(i).datestored;
		
	}
	
			
	// 	sendtext13 = "JPN 기록 "; 	sendtext14 = "JPN 많이 들은 단어들 ";
	$piletabledisplayed.html(list); $viewtherecent.text( " RECENT [ " + len + " ] "); 

	//$(".entriesdisplayed").fadeIn(700);

	if(quickfill)
	$(".entriesdisplayed").each(		function(index) {	$(this).show();	}	);
	else
	$(".entriesdisplayed").each(		function(index) {	$(this).delay(200*index).fadeIn(300);	}	);

	//$totalentries.text("There are " + len + " entries");	
}

function showthemostwrongones(tx)
{
	tx.executeSql( 'SELECT * FROM PILE ORDER BY wrongcount DESC', [], showthemostwrongonesPARTTWO, errorcode);
	
}

function showthemostwrongonesPARTTWO( tx, resu )
{
	
	var list = "<p> S.T.A.R.T.</p>"; 	
	
	var len = resu.rows.length; 

	for( var i = 0 ; i < len ; i++)
	{

		if(resu.rows.item(i).wrongcount >= 2 ) var wcount = 'x '+resu.rows.item(i).wrongcount; else var wcount = ' ';

		list += ' <p class=incorrectlisting> ' + resu.rows.item(i).word + ' <span class=frequencyalpha>' + wcount +  "</span></p> ";
	}
	
	list +="<p> E.N.D.</p>"; 
	
	$frequentincorrectlisting.html(list);
}

/*



<button class=incorrectviewrequest>View The Most Incorrect Ones</button>


<div id=frequentincorrectlisting> </div>

Current 6 + Vietnamese + Portuguese + Russian 

*/

function filltheFREQUENCYDIV(tx) // ASC | DESC
{
	tx.executeSql( 'SELECT * FROM PILE ORDER BY frequency DESC', [], filltheFREQUENCYDIVGenerate, errorcode);
}

function filltheFREQUENCYDIVGenerate( tx, resultspileup )
{
	var list = " "; 			// meaningarray = [];
	
	var len = resultspileup.rows.length; 
	
	if(deletemode) deleteindicator = "[x] "; else deleteindicator = "";
	
	for( var i = 0 ; i < len ; i++)
	{
	

		if( resultspileup.rows.item(i).frequency > 1 )

   list += ' <p class=pileentries style="display:none;">' +  deleteindicator + resultspileup.rows.item(i).word + ' <span class=frequencyalpha> x ' + resultspileup.rows.item(i).frequency + " </span></p> ";

		else
		
   list += ' <p class=pileentries style="display:none;"> '+  deleteindicator + resultspileup.rows.item(i).word + ' </p> ';

// TUrning off to look at frequency

// list = ' <p class=pileentries style="display:none;">' +  deleteindicator + resultspileup.rows.item(i).word + ' <span class=frequencyalpha> x ' + resultspileup.rows.item(i).frequency + " </span></p> "+ list;
	
		// if(resultspileup.rows.item(i).meaning != "TestMeaning") { var newwordmeaningpair = new wordmeaningpair( resultspileup.rows.item(i).word, resultspileup.rows.item(i).meaning ); meaningarray.push( newwordmeaningpair );  }
	
	}	
		// 	sendtext13 = "JPN 기록 "; 	sendtext14 = "JPN 많이 들은 단어들 ";""
	$piletabledisplayed.html(list); $viewthefrequency.text( " FREQUENCY [ " + len +  " ] ");
	
	
	if(quickfill)
	$(".pileentries").each(		function(index) {	$(this).show();	}	);
	else
	$(".pileentries").each(		function(index) {	$(this).delay(200*index).fadeIn(300);	}	); 
	 
	// deletemode = false;
																					
}

function updatePileEntriesCount(tx)
{
	tx.executeSql( 'SELECT * FROM PILE', [], updatePileEntriesCountPartTwo, errorcode ); 
}
 
function updatePileEntriesCountPartTwo(tx, resultspileup )
{
	$viewthefrequency.text( "Frequent [ "+ resultspileup.rows.length+ " ]" );
}

function refreshHISTORY()
{

datearray = Date().split(/[ ,]+/);

var dateobject = new Date(), currentmonth = dateobject.getMonth() + 1; //Months are zero based

thedateproperty = datearray[0]+", "+datearray[1]+" "+datearray[2]+" [ "+currentmonth +" / " +datearray[2]+ " ] ";

tx.executeSql( "INSERT INTO HISTORY (word, datestored) VALUES (?,?)", [ newEword , thedateproperty ] , errorcode ); 	


}

function insertNewLine(tx) 
{	
	/*
	if(newNmeaning == "TestMeaning")
	{
		// alert("one word SQL");
	}
	else
	{
		// alert("Word-MEaningSQL");
		// alert(newNmeaning);
	}
	*/
		tx.executeSql( 

"INSERT OR REPLACE INTO PILE (word, meaning, frequency, se2e, e2n, n2e, se2native, wrongcount) 	VALUES ( ?,?, COALESCE( (SELECT frequency FROM PILE WHERE word = ?), 0) + 1 ,  0, 0,0,0, COALESCE( (SELECT wrongcount FROM PILE WHERE word = ?), 0 ) + 1)",

		[ newEword, newNmeaning , newEword , newEword ] , errorcode 

						); 
// when creating test array, do things differently depending on the meaning.  if there is a meaning not newNmeaning, then add if higher values.  if newNmeaning then 
	
datearray = Date().split(/[ ,]+/);

var dateobject = new Date(), currentmonth = dateobject.getMonth() + 1; //Months are zero based

thedateproperty = datearray[0]+", "+datearray[1]+" "+datearray[2]+" [ "+currentmonth +" / " +datearray[2]+ " ] ";

tx.executeSql( "INSERT INTO HISTORY (word, datestored) VALUES (?,?)", [ newEword , thedateproperty ] , errorcode ); 	

}


function deletealine(tx)
{
	tx.executeSql( 
	
	"DELETE FROM PILE WHERE word=?", [screen1targetword], errorcode
				
					);
	
	tx.executeSql( 
	
	"DELETE FROM HISTORY WHERE word=?", [screen1targetword], errorcode
				
					);
					
}



function errorcode(errorhaha) 
{
	//alert(errorhaha.code); alert(errorhaha.message);
	$e1.text(errorhaha.code);	$e2.text(errorhaha.message); 
	
	// alert("E CODE - "+ errorhaha.code); // alert("E MSG - "+ errorhaha.message);
}


												 
function canceldeletetablestatements()
{
	$page1navbar.show();	
	$trulydeleteeverythingdiv.hide(); 
	$screen1message.text("Deleting Table Cancelled"); 
	$piletabledisplayed.show();
}												 



// NAVIGATION STARTS
					
$document.swipe(	{
						tap:function(event, target) 
						{
							// $duhfooter.toggle(); // location.reload();
						},
       
						doubleTap:function(event, target) 
						{
							
						},
						
						longTap:function(event, target) 
						{
							
						},
					
						swipe:function(event, direction, distance, duration, fingerCount)
						{

							if ( direction=="right") // && slideID > 1 ) 
							{
								if ( slideID == 2 )
								{
								//$swipepurposes.hide();  $contentpart1.show();
								
								//$contentpart1.show();	$contentpart2.show();
								deletemode = false;
								$article1.show();	$article2.hide();	$article3.hide();						
	$.mobile.pageContainer.pagecontainer( 	"change", $article1, {transition: "slide", reverse: true}  ); slideID = 1;
								//$contentpart2.hide();	$contentpart3.hide(); 
								$article1.show();	$article2.hide();	$article3.hide();
								
								db.transaction(getnativewords); 
								
								canceldeletetablestatements();								

								quickfill = true;
								
								if(currentslidedown == "history") 
								{	
									db.transaction( fillRecent ); 
									$screen1message.text("Screen 1 - "+sendtext13);

								}	
								else 
								{
									db.transaction( filltheFREQUENCYDIV ); 
									$screen1message.text("Screen 1 - "+sendtext14);
								}

								
								
								//Set Time Out Here
								//db.transaction( fillRecent );  	
	
	/* $.mobile.pageContainer.pagecontainer( 	"change", $article1, { transition: "slide", reverse: true }  ,
	
						function( ) {	$contentpart2.hide();	$contentpart3.hide();	}	); slideID = 1;*/

								}
							
								else if ( slideID == 3 ) // Chickening from slide 3 to 2 - confirmation needed.
								{
	// $challengepanel.show();	 $confirmdiv.hide();	
	

								if(vital <= 0)
								{
									testquityesstatements();
								}
								else // still in the game
								{
									$screen3panels.hide();	$confirmdiv.show(); 
								}
		
		/*						

function newgame()
{

	incorgivencount = 0;	correctones = 0; streak = 0; overallopponents = 0;	vital = 3; 
			
						$contentpart2.show();	$contentpart3.show();
	$.mobile.pageContainer.pagecontainer( 	"change", $article2, {transition: "slide", reverse: true}  ); slideID = 2; 
								$contentpart1.hide();	$contentpart3.hide(); 
			
			
	Robert if black people punched your parents ten times doesn't mean you can punch them once  
	
	
	This is a threat
	
	
	
								
	/* $.mobile.pageContainer.pagecontainer( 	"change", $article2, { transition: "slide", reverse: true }  ,
																							
						function( ) {	$contentpart1.hide();	$contentpart3.hide();	}	); slideID = 2; */
								
								}

							/* $.mobile.pageContainer.pagecontainer( 		"change", 

							$.mobile.pageContainer.pagecontainer( "getActivePage" ).prev('[data-role="page"]') ,

																		{transition: "slide", reverse: true} );
							if (slideID > 1 ) slideID--; */	
							}

						else if ( direction=="left" ) // && slideID < 3 )
						{
							if (slideID == 1 )
							{
							$article2.show();	$article1.hide();	$article3.hide();
							deletemode = false;	
	 $.mobile.pageContainer.pagecontainer( 	"change", $article2, {transition: "slide"}  ); slideID = 2; 
							$article2.show();	$article1.hide();	$article3.hide();
							
							$screen2panels.hide(); $languagedecided.show();
															
	/*$.mobile.pageContainer.pagecontainer( 	"change", $article2, { transition: "slide" } ,
	
						function( ) {	$contentpart1.hide();	$contentpart3.hide();	}	); slideID = 2; */
							
							
							}
							
							else if (slideID == 2 ) // going from 2 to 3.  No confirmation needed.  
							{
							
							$userstathorizontalbar.text("99/99 [100%] STREAK 1000 VITAL");
								
							$article3.show();	$article1.hide();	$article2.hide();
	$.mobile.pageContainer.pagecontainer( 	"change", $article3, {transition: "slide"}  ); slideID = 3;
							$article3.show();	$article1.hide();	$article2.hide();
						
							$screen3panels.hide();
							
							$gamewelcomepanel.show();
										
							testarray = [];			
							db.transaction( preparetestarray );
							db.transaction(getnativewords );

							
							
	/* $.mobile.pageContainer.pagecontainer( 	"change", $article3, { transition: "slide" } ,

						function( ) {	$contentpart1.hide();	$contentpart2.hide();	}	); slideID = 3;*/
							}

							/*$.mobile.pageContainer.pagecontainer( 		"change", 

							$.mobile.pageContainer.pagecontainer( "getActivePage" ).next('[data-role="page"]')	,

																		{transition: "slide"} );	
							if (slideID < 3 ) slideID++;*/
						}
						
// Read to remove the following lineout if it does not improve horizontal swipe sensitivity or horizontal scroll does not function
						// else if ( direction=="up" ) { } else if (direction =="down") { } else { }
						

					},
					
					threshold:30 , 		allowPageScroll:"vertical"
					
					// threshold:30  
				}						)	

.on( "pageinit" , 

					function( ) 
					{
						$("[data-role='navbar']").navbar();
						$("[data-role='header'], [data-role='footer']").toolbar();
					}				
									)

.on( "pageshow" , "[data-role='page']" ,  // Update the contents of the toolbars

					function( ) 
					{
						// Each of the four pages in this demo has a data-title attribute
						// which value is equal to the text of the nav button
						// For example, on first page: <div data-role="page" data-title="Info">
    
						var current = $(this).jqmData("title");
						
						// Change the heading
						//
						$("[data-role='header'] h1").text(current);
						
						// Remove active class from nav buttons
						//
						//$("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
    
						// Add active class to current nav button
						
						$("[data-role='navbar'] a").each(
						
							function( ) 
							{
								if ($(this).text() === current) 
								{
									$(this).addClass("ui-btn-active");
								}
							}				);
					}								);


function getnativewords(tx)
{
	tx.executeSql( 'SELECT * FROM PILE ORDER BY frequency DESC', [], getnativewordsparttwo, errorcode);	
}	

function getnativewordsparttwo(tx,  resultslol)
{
	var list = " "; meaningarray = [];
	
	var len = resultslol.rows.length; 
	
	for( var i = 0 ; i < len ; i++)
	{
		if(resultslol.rows.item(i).meaning != "TestMeaning")
		{
			var newwordmeaningpair = new wordmeaningpair( resultslol.rows.item(i).word, resultslol.rows.item(i).meaning ); // BUG HERE

			meaningarray.push( newwordmeaningpair );  
		}
	}
}
