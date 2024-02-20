//아이디 조건 확인
let inputId = document.getElementById("name");
let idConditionMs = document.getElementById("id_condition");
let idSuccessMs = document.getElementById("id_success_ms");

function idCondition(){

    inputId.value = inputId.value.replace(/[^ㄱ-힣a-zA-Z0-9]/ig,'');

    if(inputId.value.length < 4 || inputId.value.length > 12){
        idConditionMs.classList.add('message_fail');
        idSuccessMs.classList.remove('message_success');
        if(inputId.value.length === 0){
            idConditionMs.classList.remove('message_fail');
            idSuccessMs.classList.remove('message_success');
        }
    }else{
        idConditionMs.classList.remove('message_fail');
        idSuccessMs.classList.add('message_success');
        inputId.id = 'name';
    }
}

inputId.addEventListener('input',idCondition);

//이메일 조건 확인
let inputEmail = document.getElementById("email");
let emailConditionMs = document.getElementById("email_condition");
let emailSuccessMs = document.getElementById("email_success_ms");

function emailCondition() {
    let emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

    if (emailRegex.test(inputEmail.value)) {
        emailConditionMs.classList.remove('message_fail');
        emailSuccessMs.classList.add('message_success');
        inputEmail.id = 'email';
    }else if(inputEmail.value === ""){
        emailConditionMs.classList.remove('message_fail');
        emailSuccessMs.classList.remove('message_success');
    }else{
        emailConditionMs.classList.add('message_fail');
        emailSuccessMs.classList.remove('message_success');
    }
}

inputEmail.addEventListener('focusin', function() {
    emailConditionMs.classList.remove('message_fail');
    emailSuccessMs.classList.remove('message_success');
});

inputEmail.addEventListener('focusout', emailCondition);


//비밀번호 조건 확인
let inputPw = document.getElementById("password");
let pwConditionMs = document.getElementById("pw_condition");
let pwSuccessMs = document.getElementById("pw_success_ms");

function pwCondition(){
    let pwRegex = /^(?=.*[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣@$!%*#?&]{8,}$/;

    if (inputPw.value === "") {
        pwConditionMs.classList.remove('message_fail');
        pwSuccessMs.classList.remove('message_success');
    } else if (pwRegex.test(inputPw.value)) {
        pwConditionMs.classList.remove('message_fail');
        pwSuccessMs.classList.add('message_success');
        inputPw.id = 'password';
    } else {
        pwConditionMs.classList.add('message_fail');
        pwSuccessMs.classList.remove('message_success');
    }
    //비밀번호 변경 시 중복 확인 메시지 삭제
    pw2ConditionMs.classList.remove('message_fail');
    pw2SuccessMs.classList.remove('message_success');
}

inputPw.addEventListener('input',pwCondition);

//비밀번호 중복 확인
let inputPw2 = document.getElementById("confilm_password");
let pw2ConditionMs = document.getElementById("pw2_condition");
let pw2SuccessMs = document.getElementById("pw2_success_ms");

function pw2Condition(){
    if(inputPw.value === inputPw2.value){
        pw2ConditionMs.classList.remove('message_fail');
        pw2SuccessMs.classList.add('message_success');
        inputPw2.id = 'confilm_password';
    }else{
        pw2ConditionMs.classList.add('message_fail');
        pw2SuccessMs.classList.remove('message_success');
    }
}

inputPw2.addEventListener('input',pw2Condition);

//폰 번호 조건 확인
let inputPhone = document.getElementById("phone");

function phoneCondition(){
    inputPhone.value = inputPhone.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

inputPhone.addEventListener('input',phoneCondition);



//제출 버튼 조건 확인
let submitBtn = document.getElementById("submit_btn");

// 모든 조건을 체크하는 함수
function checkAllConditions() {
    return (
        idSuccessMs.classList.contains('message_success') &&
        emailSuccessMs.classList.contains('message_success') &&
        pwSuccessMs.classList.contains('message_success') &&
        pw2SuccessMs.classList.contains('message_success')
    );
}

// 폼 제출 함수
function submitForm(event) {
    if (checkAllConditions()) {
        window.location.href = "a.html";
    } else {
        event.preventDefault();
        
        if (!idSuccessMs.classList.contains('message_success')) {
            idConditionMs.classList.add('message_fail');
            inputId.id = 'red_input';
        }
        if (!emailSuccessMs.classList.contains('message_success')) {
            emailConditionMs.classList.add('message_fail');
            inputEmail.id = 'red_input';
        }
        if (!pwSuccessMs.classList.contains('message_success')) {
            pwConditionMs.classList.add('message_fail');
            inputPw.id = 'red_input';
        }
        if (!pw2SuccessMs.classList.contains('message_success')) {
            pw2ConditionMs.classList.add('message_fail');
            inputPw2.id = 'red_input';
        }
    }
}

submitBtn.addEventListener('click', submitForm);