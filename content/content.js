// SaaS
function show() {
  document.querySelector('.background').className = 'background show';
}

function close() {
  document.querySelector('.background').className = 'background';
}

document.querySelector('#show').addEventListener('click', show);
document.querySelector('#close').addEventListener('click', close);

// PaaS
function show2() {
  document.querySelector('.background2').className = 'background2 show2';
}

function close2() {
  document.querySelector('.background2').className = 'background2';
}

document.querySelector('#show2').addEventListener('click', show2);
document.querySelector('#close2').addEventListener('click', close2);

// IaaS
function show3() {
  document.querySelector('.background3').className = 'background3 show3';
}

function close3() {
  document.querySelector('.background3').className = 'background3';
}

document.querySelector('#show3').addEventListener('click', show3);
document.querySelector('#close3').addEventListener('click', close3);

// ESC키 종료 버튼 구현 (key code 27)
document.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    close(); // SaaS
    close2(); // PaaS
    close3(); // IaaS
  }
});
