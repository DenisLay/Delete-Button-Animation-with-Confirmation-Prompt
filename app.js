window.onload = () => {
    const btn = document.querySelector('.btn');
    const front = btn.querySelector('.front');
    const back = btn.querySelector('.back');
    const btnYes = btn.querySelector('.btn_yes');
    const btnNo = btn.querySelector('.btn_no');

    mount(btn, front, back, btnYes, btnNo);
}

function mount(btn, front, back, btnYes, btnNo) {
    front.addEventListener('click', function() {
        btn.classList.toggle('btn-open');
        back.classList.toggle('back-open');
    });

    btnYes.addEventListener('click', function() {
        btn.classList.toggle('btn-open');
        back.classList.toggle('back-open');
    });

    btnNo.addEventListener('click', function() {
        btn.classList.toggle('btn-open');
        back.classList.toggle('back-open');
    });
}