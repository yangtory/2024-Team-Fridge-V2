document.addEventListener('DOMContentLoaded', () => {
    const btn_update = document.querySelector('button.update');
    const btn_delete = document.querySelector('button.delete');
    const btn_list = document.querySelector('button.list');
    const div = document.querySelector('div.divBox');
    btn_update.addEventListener('click', () => {
        const p_seq = div.dataset.food;
        document.location.href = `/fridge/${p_seq}/update`;
    });
    btn_delete.addEventListener('click', () => {
        const p_seq = div.dataset.food;

        if (confirm('음식정보를 삭제할까요?')) {
            document.location.replace(`/fridge/${p_seq}/delete`);
        }
    });
    btn_list.addEventListener('click', () => {
        document.location.href = '/fridge/list_fridge';
    });
});
