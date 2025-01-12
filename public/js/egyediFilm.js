let torol = async (id) => {
    console.log(id);
    const response = await fetch('/api/cinema/egyedifilm', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.replace('/api/cinema/filmek');
    }
};
