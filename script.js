let formEle=document.getElementById('form');

let fetch = (event) =>{
    event.preventDefault();

    const formData= new FormData(formEle);

    const data={};

    formData.forEach((value,key)=>{
        data[key]=+value;
    });
    
    const sum=data.maths+data.eng+data.hindi+data.sci;
    const per=sum/4;
    addHtml(sum,per);
};

function addHtml(sum,pro){
   let ele=document.querySelector('#para');
   ele.innerHTML=`You have got ${sum} marks out of 400 and your percentage is ${pro.toFixed(2)}%`;
   document.querySelector('#para').style.visibility="visible";
}



//Don't do this
// let fetch = () =>{
    //     let mathsNum=document.querySelector('#maths').value;
//     let engNum=document.querySelector('#eng').value;
//     let hindiNum=document.querySelector('#hindi').value;
//     let sciNum=document.querySelector('#sci').value;
//     let sum=(+mathsNum)+(+engNum)+(+hindiNum)+(+sciNum);
//     let per=sum/4;
//     addHtml(sum,per);
// };

// document.getElementById("btn").addEventListener("click", fetch);

let clear =()=>{
    document.querySelector('#para').style.visibility="hidden";
}
document.getElementById("rst").addEventListener("click", clear);