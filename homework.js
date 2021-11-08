// Asal Sayı Bulma 
function findPrimeNumber(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let primeNumber = true
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i]%j==0){
                primeNumber = false
                break
            }
        }
        if(primeNumber&&numbers[i]!=1){
            console.log("Asal Sayı: " + numbers[i])
        }else{
            console.log("Asal Sayı Değil:" + numbers[i])
          
        }
    }
}

findPrimeNumber(2,5,8,21,13);

/// Arkadaş Sayıları Bulma
function finFriendsNumbers(number1,number2) {
    let number1Total = 0
    let number2Total = 0
    for (let i = 1; i <= number1/2; i++) {
        if(number1%i==0){
            number1Total+=i;
        }
    }
    for (let i = 1; i <= number2/2; i++) {
        if(number2%i==0){
            number2Total+=i;
        }
    }
	
    if(number1Total==number2&&number2Total==number1){
        console.log(number1 + " ve " + number2 +" Arkadaş Sayılardır.")
    }else{
        console.log(number1 + " ve " + number2 +" Arkadaş Sayı Değildir!")
    }
}

// finFriendsNumbers(220, 284);
finFriendsNumbers(1000, 284);

/// Mükemmel Sayıları Bulma
function perfectNumbers() {
    for (let i = 1; i <= 1000; i++) {
        let toplam = 0
        for (let j = 1; j <= i; j++) {
            if (i%j==0) {
                toplam+=j
            }
        }
        if(toplam == i*2){
            console.log(i  + "Mükemmel sayıdır")
        }
        toplam=0
    }
}

 perfectNumbers() 

// 1000'e kadar olan asal sayıları bulma
function findPrimeNumberUpToThousand() {
    for (let i = 0; i < 1001; i++) {
        let primeNumber = true
        for (let j = 2; j <= i/2; j++) {
            if(i%j==0){
                primeNumber = false;
                break
            }
        }
        if(primeNumber&&i!=1){
            console.log("Asal Sayı: " + i)
        }else{
            console.log("Asal Sayı Değil:" + i)
          
        }
    }
}

findPrimeNumberUpToThousand()