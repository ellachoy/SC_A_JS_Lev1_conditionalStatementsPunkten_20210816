console.log("hi! conditional-statements punkten");

//  lev1_1: conditional-statements punkten

// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Alter >=18 =>true

// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Alter <=18 =>false

// Lass Dir das Ergebnis der Funktion im HTML in “volljährig” oder “minderjährig” ausgeben.

function adult(){
    let alter =document.getElementById("Alters").value
    console.log(alter);

    if (alter >= 18 ) {

        console.log(true)
        document.getElementById("result").innerHTML ="Volljärig";
    }else {

        console.log(false)
        document.getElementById("result").innerHTML ="Minderjärig";
    }

}


// lev1_3: conditional statements mit form 

function greaterThan(age){
    age=document.getElementById("input").value
   
    if (age >=18 ) {

        document.getElementById("result1").innerHTML ="Ja. Du kannst Shisha rauchen";
      }else {
    
        document.getElementById("result1").innerHTML ="Du darfst noch nicht Shisha rauchen";
      }
    
}

