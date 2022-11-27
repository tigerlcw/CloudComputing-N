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

// Public Cloud
function show4() {
  document.querySelector('.background4').className = 'background4 show4';
}

function close4() {
  document.querySelector('.background4').className = 'background4';
}

document.querySelector('#show4').addEventListener('click', show4);
document.querySelector('#close4').addEventListener('click', close4);

// Private Cloud
function show5() {
  document.querySelector('.background5').className = 'background5 show5';
}

function close5() {
  document.querySelector('.background5').className = 'background5';
}

document.querySelector('#show5').addEventListener('click', show5);
document.querySelector('#close5').addEventListener('click', close5);

// Hybrid Cloud
function show6() {
  document.querySelector('.background6').className = 'background6 show6';
}

function close6() {
  document.querySelector('.background6').className = 'background6';
}

document.querySelector('#show6').addEventListener('click', show6);
document.querySelector('#close6').addEventListener('click', close6);

// ESC키 종료 버튼 구현 (key code 27)
document.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    close(); // SaaS
    close2(); // PaaS
    close3(); // IaaS
    close4(); // Public Cloud
    close5(); // Private Cloud
    close6(); // Hybrid Cloud
  }
});
