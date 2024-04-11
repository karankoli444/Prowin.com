

let entry_btn=document.querySelector('.entry-btn');


function openForm() {
    let contest_form=document.querySelector('.first-contest-form');
    contest_form.classList.add('open-form')
}
function closeForm() {
    let contest_form=document.querySelector('.first-contest-form');
    contest_form.classList.remove('open-form')
}

function validiation(e){
    e.preventDefalut()
    let phone_num=document.getElementById('phone').value
    let emailId=document.getElementById('email').value
    let name=document.getElementById('name').value
    let gameId=document.getElementById('game-id').value
    let game_name=document.getElementById('game-name').value
    let error_msg= document.querySelector('.error-msg')
    if(phone_num.length!==10){
        error_msg.innerHTML='Valid phone Number'
        return false
    }else if(phone_num.length<10){
        error_msg.innerHTML='Phone Number 10* digit'
        return false
      }else{
        error_msg.innerHTML='';
        return true

      }
    }
function  toggleModal(){
    let modal=document.querySelector('.modal');
    modal.classList.toggle('openmodal');
}