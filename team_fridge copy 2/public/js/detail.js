document.addEventListener('DOMContentLoaded', () => {
    const btn_box = document.querySelector('div.btnBox');
    btn_box.addEventListener('click', (e) => {
        const button = e.target;

        if (button.tagName === 'BUTTON') {
            const className = button.className;
            const par = button.closest('DIV');
            const p_seq = par.dataset.p_seq;
            let url = '/alarm';

            if (className === 'update') {
                url += `/${p_seq}/update`;
            } else if (className === 'delete') {
                if (!confirm('음식정보를 삭제할까요?')) {
                    return false;
                }
                url += `/${p_seq}/delete`;
            }
            document.location.href = `${url}`;
        }
    });
});
