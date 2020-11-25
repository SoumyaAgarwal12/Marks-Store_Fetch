// function calculate(){
//     var oops = document.getElementById("Oops").value;
//     var data_Analysis = document.getElementById("Data_Analysis").value;
//     var maths = document.getElementById("Maths").value;
//     var cloud_Computing = document.getElementById("Cloud_Computing").value;
//     var machine_Learning = document.getElementById("Machine_Learning").value;

//     var marks = parseFloat(oops) + parseFloat(data_Analysis) + parseFloat(maths) + parseFloat(cloud_Computing) + parseFloat(machine_Learning)

//     if(oops!="" && data_Analysis!="" && maths!="" && cloud_Computing!="" && machine_Learning!="" && marks<=500)
//     {
//     var per = marks/5;

//     if (per >= 80)
//     {
//         grade = 'A'
//     }
//     else if (per >= 60)
//     {
//         grade = 'B'
//     }
//     else if (per >= 33)
//     {
//         grade = 'C'
//     }
//     else
//     {
//         grade = 'F'
//     }

//     if (per >=33)
//     {
//         res = "Pass"
//     }
//     else{
//         res = "Fail"
//     }

//     document.getElementById("result").innerHTML=
//     `Your marks : ${marks} / 500 and Your Percentage : ${per}%.<br>Your Grade is ${grade}.
//     You are ${res}.`
// }
// else
// {
//     alert("Error : Enter the Marks of all Subjects Correctly.(Calculation is Out of 500)`")
// }
// }

// // INPUT VALIDATION
// function validate(){
//  for(var i=0;i<5;i++){
//     if(document.getElementsByClassName("inpt")[i].value.match(/[0-9]*/)){
//         return true;
//     }
//     else{
//         alert("Input should be a number");
//     }
//  }

// }

class marks {
    constructor(oops, data_Analysis, maths, cloud_Computing, machine_Learning) {
        this.oops = oops
        this.data_Analysis = data_Analysis
        this.maths = maths
        this.cloud_Computing = cloud_Computing
        this.machine_Learning = machine_Learning
    }
}

class Show {
    store(storeMarks) {
        var getMarks = localStorage.getItem("storeMarks")
        // console.log(getMarks);
        if (getMarks == null) {
            var marks = [];
        }
        else {
            var marks = JSON.parse(getMarks);
        }
        marks.push(storeMarks)
        localStorage.setItem('storeMarks', JSON.stringify(marks)) // Set in localstorage
    }
}

// SHOW DIAPLAY DIV
function showM() {
    d = document.getElementById("display")
    d.style.display = "block";
}

// Show MARKS
function display() {
    i = document.getElementById("dis").value;
    console.log(i);

    // document.getElementById("roll_no").value=i
    var getMarks = localStorage.getItem("storeMarks")
    // console.log(getMarks);

    if (getMarks == null) {
        var marks = [];
    }
    else {
        var marks = JSON.parse(getMarks);
    }
    // console.log(marks[i])
    var totalmarks = parseFloat(0);

    document.getElementsByClassName("namee")[0].innerHTML = "";
    tableBody.innerHTML = "";

    let marksRecord = ""

    if (marks[i] == undefined) {
        document.getElementById("result").innerHTML =
            `Result Not Found`
    }
    else {
        for (var prop in marks[i]) {
            var head_name = `<h1>${prop}</h1>`
            for (var ob in marks[i][prop]) {
                // console.log(marks[i][prop][ob]);
                marksRecord += `<tr>
                                <td>${ob}</td>
                                <td>${marks[i][prop][ob]}</td>
                            </tr>`


                totalmarks += parseFloat(marks[i][prop][ob])
            }
            // console.log([prop])
        }
        document.getElementsByClassName("namee")[0].innerHTML = head_name
        tableBody.innerHTML = marksRecord;

        // console.log(totalmarks);
        var per = totalmarks / 5;

        if (per >= 80) {
            grade = 'A'
        }
        else if (per >= 60) {
            grade = 'B'
        }
        else if (per >= 33) {
            grade = 'C'
        }
        else {
            grade = 'F'
        }

        if (per >= 33) {
            res = "Pass"
        }
        else {
            res = "Fail"
        }

        document.getElementById("result").innerHTML =
            `Your marks : ${totalmarks} / 500 and Your Percentage : ${per}%.<br>Your Grade is ${grade}.
    You are ${res}.`
    }
}


// SHOW STORE DIV 
function store() {
    s = document.getElementById("store")
    s.style = `display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`
    a = document.getElementsByClassName("ask")[0];
    a.style = `display:none`
    d = document.getElementById("display")
    d.style.display = "none";

}

// SAVE MARKS
function save() {
    var name = document.getElementById("name").value;
    var roll_no = document.getElementById("roll_no").value;
    var oops = document.getElementById("Oops").value;
    var data_Analysis = document.getElementById("Data_Analysis").value;
    var maths = document.getElementById("Maths").value;
    var cloud_Computing = document.getElementById("Cloud_Computing").value;
    var machine_Learning = document.getElementById("Machine_Learning").value;


    if (name != "" && oops != "" && data_Analysis != "" && maths != "" && cloud_Computing != "" && machine_Learning != "") {
        var storeMarks = {}
        storeMarks[name] = new marks(oops, data_Analysis, maths, cloud_Computing, machine_Learning)
        console.log(storeMarks);

        var show = new Show()

        show.store(storeMarks);  // In localstorage

        s = document.getElementById("store")
        s.style.display = "none"
        a = document.getElementsByClassName("ask")[0];
        a.style = `display:block`
    }
    else {
        alert("Error : Enter the Marks of all Subjects Correctly.")
    }
}


// Local storage can only save strings, so storing objects requires that they be turned into 
// strings using JSON. stringify - you can't ask local storage to store an object directly 
// because it'll store “[object Object]”, which isn't right at all! That also means the object
// must be run through JSON. ... parse(localStorage.