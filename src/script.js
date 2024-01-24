const pass = document.getElementById('pass');
const btn = document.getElementById('btn');

pass.addEventListener('focus', () => {
    const div = document.getElementById('divInput');
    div.classList.add('border-blue-300');
    div.classList.add('dark:border-blue-500');
    div.classList.add('ring-2');
    div.classList.add('trasition');
    div.classList.add('duration-300');
    div.classList.add('ease-in-out');
    btn.classList.remove('hidden')
})

pass.addEventListener('blur', () => {
    const div = document.getElementById('divInput');
    div.classList.remove('border-blue-300');
    div.classList.remove('dark:border-blue-500');
    div.classList.remove('ring-2');
})

const mudar = ( event ) => {
    event.preventDefault();

    if (btn.innerText === "visibility"){
        pass.type = 'text';
        btn.innerText = 'visibility_off';
    }
    else{
        pass.type = 'password';
        btn.innerText = 'visibility';
    }
};