let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    const id = document.querySelector('#rejtett').value;
    const cim = document.querySelector('#cim').value;
    const hossz = Number(document.querySelector('#hossz').value);
    const plakat = document.querySelector('#plakat').value;
    const idopontokLeker = document.querySelector('#idopontok').value;
    const arkategoriaLeker = document.querySelector('#arkategoria').value;

    let eloIdopontok = [];

    const idopont = document.getElementsByName('idopont');

    for (let i = 0; i < idopont.length; i++) {
        if (idopont[i].checked) {
            eloIdopontok.push(idopont[i].value);
        }
    }

    let idopontok = [];

    if (idopontokLeker.split('\n')[0] !== '') {
        idopontok = eloIdopontok.concat(idopontokLeker.split('\n'));
    } else {
        idopontok = eloIdopontok;
    }

    console.log(idopontok);

    let eloArkategoria = [];

    const arKat = document.getElementsByName('arkat');

    for (let i = 0; i < arKat.length; i++) {
        if (arKat[i].checked) {
            eloArkategoria.push(arKat[i].value);
        }
    }

    let arkategoria = [];

    if (arkategoriaLeker.split('\n')[0] !== '') {
        arkategoria = eloArkategoria.concat(arkategoriaLeker.split('\n'));
    } else {
        arkategoria = eloArkategoria;
    }

    console.log(arkategoria);

    const response = await fetch('/api/cinema/egyedifilmmodosit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            cim,
            hossz,
            plakat,
            idopontok,
            arkategoria,
        }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/cinema/filmek');
    }
});
