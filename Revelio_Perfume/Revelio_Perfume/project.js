var num1 = 1, num2 = 1, num3 = 1, num4 = 1, num5 = 1, num6 = 1;
function add(number) {
    if (number == 1) {
        num1++;
        document.getElementById("num1").innerHTML = num1;
    }
    if (number == 2) {
        num2++;
        document.getElementById("num2").innerHTML = num2;
    }
    if (number == 3) {
        num3++;
        document.getElementById("num3").innerHTML = num3;
    }
    if (number == 4) {
        num4++;
        document.getElementById("num4").innerHTML = num4;
    }
    if (number == 5) {
        num5++;
        document.getElementById("num5").innerHTML = num5;
    }
    if (number == 6) {
        num6++;
        document.getElementById("num6").innerHTML = num6;
    }
}
function minus(number) {
    if (number == 1) {
        if (num1 > 0) {
            num1--;
            document.getElementById("num1").innerHTML = num1;
        }
    }
    if (number == 2) {
        if (num2 > 0) {
            num2--;
            document.getElementById("num2").innerHTML = num2;
        }
    }
    if (number == 3) {
        if (num3 > 0) {
            num3--;
            document.getElementById("num3").innerHTML = num3;
        }
    }
    if (number == 4) {
        if (num4 > 0) {
            num4--;
            document.getElementById("num4").innerHTML = num4;
        }
    }
    if (number == 5) {
        if (num5 > 0) {
            num5--;
            document.getElementById("num5").innerHTML = num5;
        }
    }
    if (number == 6) {
        if (num6 > 0) {
            num6--;
            document.getElementById("num6").innerHTML = num6;
        }
    }
}