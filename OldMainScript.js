

var fGenerateLargePrime = function(pPrimeList, pLowerBound, pTimeOut){
	 var lclStartDate = new Date();
	 var lclStartTime = lclStartDate.getTime();
	 
	 var lclReturnValue = pPrimeList.getNumberCoprimeWithList(pLowerBound);
	 while(true){
		
		
		if (lclReturnValue.isPrime()) {
			break;
		} else {
			var lclDateNow = new Date();
			var lclTimeNow = lclDateNow.getTime();
			lclReturnValue = bigInt(pPrimeList.getNumberCoprimeWithList(lclReturnValue + 2, pTimeOut - lclTimeNow + lclStartTime));
		}
		
		var lclDateNow = new Date();
		var lclTimeNow = lclDateNow.getTime();
		if (lclStartTime + pTimeOut < lclTimeNow || lclReturnValue === -1){
			return -1;
		}
	}
	return lclReturnValue;
}

var fGenerateLargePrimeWithMultipleAttempts = function(pLowerBound, pTimeOut){
	var lclStartDate = new Date();
	var lclStartTime = lclStartDate.getTime();
	var yourPL = new PrimeList(5);
	
	while (true){
		var lclDateNow = new Date();
		var lclTimeNow = lclDateNow.getTime();
		if (lclTimeNow > lclStartTime + pTimeOut){
			return -1;
		}
		
		var lclNumberGenerated = bigInt(fGenerateLargePrime(yourPL, pLowerBound, Math.min(10, pTimeOut - lclTimeNow + lclStartTime)));
		if (lclNumberGenerated.neq(bigInt(-1)))
			return lclNumberGenerated;
	}
}

$("#GenerateButton").click(function(){
	try {
		var robinson = fGenerateLargePrimeWithMultipleAttempts(fGenerateBigInt(1), 1000);
		
		//$("#Box1").val(robinson);
		//$("#Box2").val(robinson.isPrime());
		$("#Box3").val(robinson);
	}
	catch(err){
		console.log(err.message);
	}
});

$("#KillButton").click(function(){
	
})

$().click(function(){

})