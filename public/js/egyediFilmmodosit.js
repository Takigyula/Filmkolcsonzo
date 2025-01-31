let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    const id = document.querySelector('#rejtett').value;
    const cim = document.querySelector('#cim').value;
    const hossz = Number(document.querySelector('#hossz').value);
    const plakat = document.querySelector('#plakat').value;
    const leiras = document.querySelector('#leiras').value;
    const tempS = Array.from(
        document.querySelector('#statuszok').selectedOptions
    );
    let statuszok = [];

    for (let i = 0; i < tempS.length; i++) {
        statuszok.push(tempS[i].value);
    }
    const tempK = Array.from(
        document.querySelector('#kategoriak').selectedOptions
    );
    let kategoriak = [];

    for (let i = 0; i < tempK.length; i++) {
        kategoriak.push(tempK[i].value);
    }

    const response = await fetch('/api/cinema/egyedifilmmodosit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            cim,
            hossz,
            plakat,
            statuszok,
            leiras,
            kategoriak,
        }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/cinema/filmek');
    }
});
