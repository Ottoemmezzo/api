class Vestiario implements fetchCapo{
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    constructor(_codprod,_collezione,_capo,_modello,_quantita,_colore,_prezzoivaesclusa,_prezzoivainclusa,_disponibile,_saldo)
    {
        this.codprod=_codprod;
        this.collezione=_collezione;
        this.capo=_capo;
        this.modello=_modello;
        this.quantita=_quantita;
        this.colore=_colore;
        this.prezzoivaesclusa=_prezzoivaesclusa;
        this.prezzoivainclusa=_prezzoivainclusa;
        this.disponibile=_disponibile;
        this.saldo=_saldo;
    }
    getSaldoCapo():number
    {
        return (this.saldo*this.prezzoivaesclusa)/100;
    }
    getAcquistoCapo():number
    {
        return Math.round((this.prezzoivainclusa-this.getSaldoCapo())*100)/100;
    }
}
interface fetchCapo{
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

}

var collezione:Vestiario[];


fetch('http://localhost:3000/capi').then((r) => {return r.json()}).then((data:fetchCapo[]) =>{
   
   collezione=data.map(e=>{
                let step=new Vestiario(e.codprod,e.collezione,e.capo,e.modello,e.quantita,e.colore,e.prezzoivaesclusa,e.prezzoivainclusa,e.disponibile,e.saldo);
                console.log(step);
                console.log(step.getAcquistoCapo());
                return step;
                });
    
   
   
});
