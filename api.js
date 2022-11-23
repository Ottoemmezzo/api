var Vestiario = /** @class */ (function () {
    function Vestiario(_codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Vestiario.prototype.getSaldoCapo = function () {
        return (this.saldo * this.prezzoivaesclusa) / 100;
    };
    Vestiario.prototype.getAcquistoCapo = function () {
        return Math.round((this.prezzoivainclusa - this.getSaldoCapo()) * 100) / 100;
    };
    return Vestiario;
}());
var collezione;
fetch('http://localhost:3000/capi').then(function (r) { return r.json(); }).then(function (data) {
    collezione = data.map(function (e) {
        var step = new Vestiario(e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
        console.log(step);
        console.log(step.getAcquistoCapo());
        return step;
    });
});
