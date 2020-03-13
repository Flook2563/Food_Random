function AddFood(){
    const form = document.querySelector('#addData')
        document.getElementById("btn_AddFood").addEventListener("click", function () {
        let firestore = firebase.firestore()
        firestore.collection("Food").doc(form.inpuNo.value).set({
                no : form.inpuNo.value,
                img: form.inputFile.value,
                name: form.inputName.value,
                calories: form.inputCal.value,
                price: form.inputPrice.value
            });
            console.log("Add Success!")
        });
}

//random 1 - 10
function RandomNumber(){
    let number ;
    number = Math.floor(Math.random() * 10) + 1;
    return number;
}
function PlayAudioRandom(){
    var x = document.getElementById("myAudio"); 
    x.play();
}


function RandomFood(){
    let numbers = RandomNumber();
    let number = numbers.toString();
    console.log(number);

    let firestore = firebase.firestore()
    firestore.collection("Food").doc(number).get().then((doc) => {
        if(doc.exists)
            //console.log(doc.data())
            console.log(doc.data().img)
            document.getElementById('MyImg').src =doc.data().img;
            document.getElementById("Tname").innerHTML = "ชื่ออาหาร : "+doc.data().name;
            document.getElementById("Tcalories").innerHTML = "ให้พลังงาน : "+doc.data().calories+" กิโลแคลอรี่";
            document.getElementById("Tprice").innerHTML = "ราคา : "+doc.data().price+" บาท";
        }).catch(error =>{
        console.warn(error)
      })
}