function render () {
    const name = document.getElementById('name').value;
    const period = document.getElementById('period').value;
    const income = document.getElementById('income').value;
    const amort = amortization (income);
    const text = `Инженер ${name} за ${period} получит ${amort} гривен`  ;
    document.getElementById('result').innerHTML = text;
}