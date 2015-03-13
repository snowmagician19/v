

// db.transaction(getnativewords); it will be placed where db sqlite functions are located and it will populate global meaningarray = [];

// db.transaction(getnativewords);  will be called when the user goes to slide1

// and 



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

// and then in screenONEpress


						
meaningarray.forEach(	function(meaningarrayelement) 
						{
							currentmeaning = lmeaningarrayelement.meaning;

if(meaningarrayelement.word == screen1targetword) { meaningretrieved = meaningarrayelement.meaning;  }

												} 			);
