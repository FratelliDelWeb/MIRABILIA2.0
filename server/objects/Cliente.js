  class  Cliente{
    constructor(ClienteID,CodiceAgenzia,CodiceCliente,
                TitoloAcc,TipoRagioneSociale,Denominazione,Cognome,
                Nome,Sesso,Indirizzo,Indirizzo2,Località,Località2,
                CAP,CAP2,Provincia,Provincia2,Telefono1,Telefono2,
                Telefono3,Fax,Email,DataNascita,CodiceFiscale,PartitaIVA,
                IBAN,Note,ImportoRata,ImportoSaldoContabile,DataAggiornamentoSaldo,
                CodiceCollab,Operatore,Categoria,DataRichiamo,Contattabile,ContattoID,
                TipoCliente,ImportoSaldoStorico,ImportoRataStorica,ImportoSaldoAttualizzato,
                TipoContoStorico,TipoPagamentoStorico,CategoriaCliente){
      this.ClienteID = ClienteID;
      this.CodiceAgenzia = CodiceAgenzia;
      this.CodiceCliente = CodiceCliente;
      this.TitoloAcc = TitoloAcc;
      this.TipoRagioneSociale	= TipoRagioneSociale;
      this.Denominazione = Denominazione;
      this.Cognome	= Cognome;
      this.Nome	= Nome;
      this.Sesso = Sesso;
      this.Indirizzo	= Indirizzo;
      this.Indirizzo2	= Indirizzo2;
      this.Località	= Località;
      this.Località2	= Località2;
      this.CAP = CAP;
      this.CAP2	= CAP2;
      this.Provincia = Provincia;
      this.Provincia2 = Provincia2;
      this.Telefono1 = Telefono1;
      this.Telefono2 = Telefono2;
      this.Telefono3 = Telefono3;
      this.Fax = Fax;
      this.Email	= Email;
      this.DataNascita	= DataNascita;
      this.CodiceFiscale	= CodiceFiscale;
      this.PartitaIVA	= PartitaIVA;
      this.IBAN	= IBAN;
      this.Note	= Note;
      this.ImportoRata	= ImportoRata;
      this.ImportoSaldoContabile	= ImportoSaldoContabile;
      this.DataAggiornamentoSaldo	= DataAggiornamentoSaldo;
      this.CodiceCollab	= CodiceCollab;
      this.Operatore	= Operatore;
      this.Categoria	= Categoria;
      this.DataRichiamo	= DataRichiamo;
      this.Contattabile	= Contattabile;
      this.ContattoID	= ContattoID;
      this.TipoCliente	= TipoCliente;
      this.ImportoSaldoStorico	= ImportoSaldoStorico;
      this.ImportoRataStorica	= ImportoRataStorica;
      this.ImportoSaldoAttualizzato	= ImportoSaldoAttualizzato;
      this.TipoContoStorico	= TipoContoStorico;
      this.TipoPagamentoStorico	= TipoPagamentoStorico;
      this.CategoriaCliente	= CategoriaCliente;
    }
  }
  
  module.exports = Cliente;