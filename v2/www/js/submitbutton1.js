
$submitbutton1.click( 	function(e){  


		var offlettercount = 0; var index = 0; var newstart = 0; var isitclose = 0; /* 0=close 1=completelywrong */

		var useranswer = $.trim($question1textarea.val()); var ultimateanswercompare = $.trim(answerextracted);
		
if( category1 !="se2native" && category1 !="e2n") { useranswer = useranswer.toLowerCase(); ultimateanswercompare = ultimateanswercompare.toLowerCase(); }

								if( useranswer == ultimateanswercompare )
								{
									
									db.transaction( manualcorrectanswer ); 

									correctmultipleansweraction();

									$question1textarea.val('');
								}
								else
								{	
																
									db.transaction( manualincorrectanswer );
									
									incorrectmultipleansweraction();
									
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
									else
									{
										// not near miss useranswer stays the same
									}

									$manualwronganswers.show();$incorrectanswerclass.show();
									
									alert(incorgivencount);
									if( incorgivencount == 1 )
									{	
										$wronganswer1.text(useranswer + " - ( X )");
										alert("in1");
									}
									else if( incorgivencount == 2 )
									{
										//alert("thatbooty");
										$wronganswer2.text(useranswer + " - ( X )");
										alert("in2");
									}
										
								}
								
								
		viewtestarray(); // FOR DEBUGGING	
					

}	);

