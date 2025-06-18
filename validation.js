const form=document.getElementById("form")

const uname=document.getElementById("uname")
console.log(uname)
const email=document.getElementById("email")

const password=document.getElementById("password")

const cpassword=document.getElementById("cpassword")

const tandc=document.getElementById("tc")


var isvalidname=false
var isvalidemail=false
var isvalidpassword=false
var isvalidcpassword=false
var ischecked=false

uname.addEventListener('keyup', checkusername)
email.addEventListener('keyup',checkemail)
password.addEventListener('keyup',pass)
cpassword.addEventListener('keyup',cpass)
tandc.addEventListener('change',checkbox)
form.addEventListener('submit',(e)=>{
    // ikkada e kakunda emina evvochhu. submit ni click chesina tharuvatha aa event antha console lo untundhi
  
    e.preventDefault()
    // submit chesina tharuvatha action page ki redirect avvakunda manam danni stop chesthunnam danne preventdefault antunnaam.
    validate()
})


function validate(){
    let namevalue=uname.value.trim()
    let emailvalue=email.value.trim()
    let passwordvalue=password.value.trim()
    let cpasswordvalue=cpassword.value.trim()
    // trim ante user spaces ichhi submit chesthe adhi submit avvakudadhu andukani trim use chestham.
     isvalidname=false
     isvalidemail=false
     isvalidpassword=false
     isvalidcpassword=false
     ischecked=false
     //ee values starting lo rasamu kada ante avi page eppudu ithe load avuthundho appudu mathrame initialize avuthai. ippudu ichhina values enduku ante user enni sarlu submit chesina manam everytime false or true ani check cheyyali kada.

    
    //user name check
    checkusername()

    // email check
    checkemail()


    //password check
   pass()


    //confirm password check
    cpass()
    

    //terms and condition check
    checkbox()

  
    if(isvalidname && isvalidemail && isvalidpassword && isvalidcpassword &&  ischecked){
       
        form.submit()
    }

}

    function SetError(input,message){
        let parent=input.parentElement;
        let small=parent.querySelector('small')
        small.innerText=message
        parent.classList.add('error')
        parent.classList.remove('success')
    }

    function setSuccess(input){
        let parent=input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


   



function checkusername(){
    let namevalue=uname.value.trim()
    if(namevalue==''){
        SetError(uname, 'user cannot be empty')
    }
    else if(namevalue.length<3){
        SetError(uname, 'user name should be minimum 3 characters')
    }
    else{
        setSuccess(uname)
        isvalidname=true
    }
}

function checkemail(){
    let emailvalue=email.value.trim()
    if(emailvalue==''){
        SetError(email, 'Email cannot be empty')
    }
    else if(!emailcheck(emailvalue)){
        SetError(email, 'enter valid email id')
    }
    else{
        setSuccess(email)
        isvalidemail=true
    }
}

function emailcheck(input){
    let emailreg=/^[a-z0-9_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    let valid=emailreg.test(input)
     return valid
}

function pass(){
    let passwordvalue=password.value.trim()
    if(passwordvalue==''){
        SetError(password,'password cannot be empty')
    }
    else if(passwordvalue.length<8){
        SetError(password,'password should be contain 8 characters')
    }
    else{
        setSuccess(password)
        isvalidpassword=true
    }
}


function cpass(){
    let cpasswordvalue=cpassword.value.trim()
    let passwordvalue=password.value.trim()
    if(cpasswordvalue==''){
        SetError(cpassword,'password cannot be empty')
    }
    else if(cpasswordvalue!=passwordvalue){
        SetError(cpassword,'password not matched')
    }
    else{
        setSuccess(cpassword)
        isvalidcpassword=true
    }
}


function checkbox(){
    if(!tandc.checked){
        SetError(tandc, 'click on agree terms checkbox')
    }
    else{
        setSuccess(tandc)
        ischecked=true
    }
}



