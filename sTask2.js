
var data = [
    {
        principal : 2500,
        time : 1.8
    },
    {
        principal: 1000,
        time : 5 
    },
    {
        principal:3000,
        time :1 
    },
    {
        principal: 2000,
        time : 3 
    }
]


function interestCalculator(array) {
    var interestData = []
    array.forEach(element => {
        var princiPal = element["principal"];
        var tiMe = element["time"];
        var raTe = 0;
        var inTerest = 0;


        if (princiPal >= 2500 && (tiMe >1 || tiMe<=3)){
            raTe = 3 
        }
        else if (princiPal >= 2500 && tiMe >=3 ) {
            raTe = 4
        }
        else if (princiPal < 2500 || tiMe <= 1) {
            raTe = 2
        }
        else{
            raTe = 1
        }
        inTerest = (princiPal * raTe * tiMe)/100;
        interestData.push({
           principal : princiPal,
           time : tiMe,
           rate : raTe,
           interest : inTerest,
        });  
    });
    console.log(interestData);
    return interestData;
}
interestCalculator(data);








