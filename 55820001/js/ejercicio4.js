
var btn = document.getElementById("button_add");
var numcharacters ;
var namee;
var promedio;

function countName(name_character){
    namee =  name_character.value;
}

function countCourse(course_characters){
    course =  course_characters.value;
 }

 function countNote1(note1_characters){
    note1 = parseFloat(note1_characters.value);
 }

 function countNote2(note2_characters){
    note2 =  parseFloat(note2_characters.value);
 }

 function countNote3(note3_characters){
    note3 =  parseFloat(note3_characters.value);
 }



function press(){
    suma = note1 + note2  + note3 
    promedio = suma/3
    if(promedio < 3){
        console.log(document.getElementById("character_num").innerHTML = "Lo siento "+ namee+ ",su nota es "+ promedio.toFixed(2)+ ",NO pasaste la materia "+ course );
    }
    else if(promedio >= 3) {
        console.log(document.getElementById("character_num").innerHTML = "Felicitaciones "+ namee+ ",su nota es "+ promedio.toFixed(2)+ ",Pasaste la materia "+ course );
    }
    else{
        console.log(document.getElementById("character_num").innerHTML = "Ingrese valores validos ");
    }

    }
    

