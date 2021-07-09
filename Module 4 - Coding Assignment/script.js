// Creating a variable named names
var names = new Array(); // Declaring array dynamically
names[0] ="Yadhu";
names[1] ="james";
names[2] = "kevin";
names[3] = "Jerry";
names[4] = "Mark";
names[5] = "freddy";
names[6] = "justin";
names[7] = "Ronaldo";
names[8] = "messi";
names[9] = "Jennifer";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='j'|| names[i].charAt(0)==='J'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}


