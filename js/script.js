function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("box-1").value;
    b2 = document.getElementById("box-2").value;
    b3 = document.getElementById("box-3").value;
    b4 = document.getElementById("box-4").value;
    b5 = document.getElementById("box-5").value;
    b6 = document.getElementById("box-6").value;
    b7 = document.getElementById("box-7").value;
    b8 = document.getElementById("box-8").value;
    b9 = document.getElementById("box-9").value;


    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Priya (Won)');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;

        window.alert('Player: Priya (Won)');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player: Priya (Won)');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player: Priya (Won)');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player: Priya (Won)');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Priya (Won)');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: priya (Won)');
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Priya (Won)";
        document.getElementById("b0x-1").disabled = true;
        document.getElementById("b0x-2").disabled = true;
        document.getElementById("b0x-3").disabled = true;
        document.getElementById("b0x-7").disabled = true;
        document.getElementById("b0x-8").disabled = true;
        document.getElementById("b0x-9").disabled = true;
        window.alert('Player: Priya (Won)');
    }

    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Varun (Won)');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Player: Varun (Won)";
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player: Varun (Won)');
    }

    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('next-player')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }
    else {

        if (flag == 1) {
            document.getElementById('next-player')
                .innerHTML = "Player: Priya";
        }
        else {
            document.getElementById('next-player')
                .innerHTML = "Player: Varun";
        }
    }
}

function myfunc_2() {
    location.reload();
    document.getElementById('box-1').value = '';
    document.getElementById("box-2").value = '';
    document.getElementById("box-3").value = '';
    document.getElementById("box-4").value = '';
    document.getElementById("box-5").value = '';
    document.getElementById("box-6").value = '';
    document.getElementById("box-7").value = '';
    document.getElementById("box-8").value = '';
    document.getElementById("box-9").value = '';

}

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("box-1").value = "X";
        document.getElementById("box-1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-1").value = "0";
        document.getElementById("box-1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("box-2").value = "X";
        document.getElementById("box-2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-2").value = "0";
        document.getElementById("box-2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("box-3").value = "X";
        document.getElementById("box-3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-3").value = "0";
        document.getElementById("box-3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("box-4").value = "X";
        document.getElementById("box-4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-4").value = "0";
        document.getElementById("box-4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("box-5").value = "X";
        document.getElementById("box-5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-5").value = "0";
        document.getElementById("box-5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("box-6").value = "X";
        document.getElementById("box-6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-6").value = "0";
        document.getElementById("box-6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("box-7").value = "X";
        document.getElementById("box-7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-7").value = "0";
        document.getElementById("box-7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("box-8").value = "X";
        document.getElementById("box-8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-8").value = "0";
        document.getElementById("box-8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("box-9").value = "X";
        document.getElementById("box-9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-9").value = "0";
        document.getElementById("box-9").disabled = true;
        flag = 1;
    }
}
