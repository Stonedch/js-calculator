function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1)
}
