function createKeyCode(e) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const codeKeys = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
        'e.which': e.which,
    }

    for (let keys in codeKeys) {

        const div = document.createElement('div');
        div.className = 'box-keys';
        const small = document.createElement('small')

        const keyTitle = document.createTextNode(keys);
        const keyValue = document.createTextNode(codeKeys[keys]);

        small.appendChild(keyTitle);
        div.appendChild(keyValue);
        div.appendChild(small);
        container.appendChild(div)
    }

}



window.document.addEventListener('keydown', createKeyCode)