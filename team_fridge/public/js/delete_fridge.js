document.addEventListener('DOMContentLoaded', () => {
    const fridge = document.querySelector('div.fridge');
    const btn_delete = document.querySelector('div.btn');

    btn_delete.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'A') {
            document.location.replace('/fridge/list_fridge');
        }
    });
});
