let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    const id = document.querySelector('#rejtett').value;
    const cim = document.querySelector('#cim').value;
    const epizodokSzama = Number(
        document.querySelector('#epizodokSzama').value
    );
    const plakat = document.querySelector('#plakat').value;
    const temp = Array.from(
        document.querySelector('#statuszok').selectedOptions
    );
    let statuszok = [];

    for (let i = 0; i < temp.length; i++) {
        statuszok.push(temp[i].value);
    }

    const response = await fetch('/api/cinema/egyedisorozatmodosit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            cim,
            epizodokSzama,
            plakat,
            statuszok,
        }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/cinema/sorozatok');
    }
});
