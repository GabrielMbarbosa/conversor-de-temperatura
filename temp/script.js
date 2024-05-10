function converterTemp(value, temp) {
    value = parseFloat(value);

    if (isNaN(value)) {
        document.getElementById('celsius').value = '';
        document.getElementById('fahrenheits').value = '';
        document.getElementById('kelvin').value = '';

        return;
    }

    switch (temp) {
        case 'celsius':
            document.getElementById('fahrenheits').value = (value * 9/5) + 32;
            document.getElementById('kelvin').value = value + 273.15
            break;
        case 'fahrenheits':
            document.getElementById('celsius').value = (value - 32) * 5/9;
            document.getElementById('kelvin').value = (value - 32) * 5/9 + 273.15;;
            break;
        case 'kelvin':
            document.getElementById('celsius').value = value - 273.15;
            document.getElementById('fahrenheits').value = (value - 273.15) * 9/5 + 32;
            break;
        default:
            break;
    }
}