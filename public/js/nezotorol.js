async function torles(id) {
    console.log(id);

    const response = await fetch(`/api/cinema/nezok/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.href = '/api/cinema/nezok';
    } else {
        window.alert(valasz.msg);
    }
}
