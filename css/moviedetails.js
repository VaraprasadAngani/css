var moviedata = [
    {
        "moviename": "Athadu",
        "theaters": [
            "t1", "t2"
        ]
    },
    {
        "moviename": "Interstellar",
        "theaters": [
            "imax", "inox"
        ]
    }
]

function submitDetails(){
    for(var i=0; i<moviedata.length; i++){
        document.getElementById("mt").innerHTML += '<option>'+moviedata[i].moviename+'</option>';
        document.getElementById("tt").innerHTML += '<option>'+moviedata[i].theaters[i]+'</option>';
    }
}

