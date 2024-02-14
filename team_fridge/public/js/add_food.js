document.addEventListener('DOMContentLoaded', () => {
    const btn_add = document.querySelector('div.btn');

    btn_add?.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'INPUT') {
            const f_seq = btn_add.dataset.f_seq;
            document.location.replace(`/fridge/${f_seq}/fridge_list`);
        }
    });
});
