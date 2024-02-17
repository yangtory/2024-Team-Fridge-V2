document.addEventListener('DOMContentLoaded', () => {
    const btn_box = document.querySelector('div.list.btn');
    const fridge = document.querySelector('div.list.fridge');

    btn_box.addEventListener('click', (e) => {
        const target = e.target;
        if (target.innerText === '냉장고 추가 ') {
            document.location.href = '/fridge/add_fridge';
        }
        if (target.innerText === '장바구니 추가 ') {
            document.location.href = '/fridge/shopmemo';
        }
    });
    fridge.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName === 'IMG') {
            const ul = target.closest('UL');
            const f_seq = ul.dataset.num;
            document.location.href = `/fridge/${f_seq}/fridge_list`;
        }
    });
});
