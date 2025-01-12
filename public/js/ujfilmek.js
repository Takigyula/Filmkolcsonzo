let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        const cim = document.querySelector('#cim').value;
        const hossz = Number(document.querySelector('#hossz').value);
        const plakat = document.querySelector('#plakat').value;
        const temp = Array.from(
            document.querySelector('#statuszok').selectedOptions
        );
        let statuszok = [];

        for (let i = 0; i < temp.length; i++) {
            statuszok.push(temp[i].value);
        }

        const response = await fetch('/api/cinema/ujfilm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cim,
                hossz,
                plakat,
                statuszok,
            }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.replace('/api/cinema/filmek');
        } else {
            window.alert(valasz.msg);
        }
    } catch (error) {
        console.log(error.msg);
    }
});
