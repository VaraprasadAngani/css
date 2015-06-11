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

function openFunction(){
    for(var i=0; i<moviedata.length; i++){
        document.getElementById("movie").innerHTML += '<option>'+moviedata[i].moviename+'</option>';
        document.getElementById("theater").innerHTML += '<option>'+moviedata[i].theaters[i]+'</option>';
    }
}
