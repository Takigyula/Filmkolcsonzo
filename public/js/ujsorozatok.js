let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
    const cim = document.querySelector('#cim').value;
    const epizodokSzama = Number(
        document.querySelector('#epizodokSzama').value
    );
    const plakat = document.querySelector('#plakat').value;
    const tempS = Array.from(
        document.querySelector('#statuszok').selectedOptions
    );
    let statuszok = [];

    for (let i = 0; i < tempS.length; i++) {
        statuszok.push(tempS[i].value);
    }
    const leiras = document.querySelector('#leiras').value;
    const szereplok = document.querySelector('#szereplok').value;
    const trailer = document.querySelector('#trailer').value;

    const tempK = Array.from(
        document.querySelector('#kategoriak').selectedOptions
    );
    let kategoriak = [];

    for (let i = 0; i < tempK.length; i++) {
        kategoriak.push(tempK[i].value);
    }

    const response = await fetch('/api/cinema/ujsorozat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cim, epizodokSzama, plakat, statuszok,leiras,kategoriak,szereplok,trailer }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/cinema/sorozatok');
    } else {
        window.alert(valasz.msg);
    }
  } catch (error) {
    console.log(error.msg);
  }
});
