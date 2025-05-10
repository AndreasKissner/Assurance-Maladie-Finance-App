const clients = [];
const notPayingClients = [];
const paymentCompleteClients = [];
const trashClients = [];
const archivClients = [];

function init() {
    getArchivFromLocalStorage();
    getTrashFromLocalStorage();
    getNotPayingFromLocalStorage();
    getFromLocalStorage();
    getPaymentCompleteClientsFromLocalStorage();
    renderClient();
    renderClientNotPaying();
    renderCompletedPayment();
     renderTrashClient(); 
}

function moveClientInClient() {
    const nameOfClientInput = document.getElementById("name_of_client");
    const clientName = nameOfClientInput.value;
    const receivedFactureInput = document.getElementById("received_facture");
    const amountDue = receivedFactureInput.value;
    const dueFactureInput = document.getElementById("due_facture");
    const amountReceived = dueFactureInput.value;
    const dateForPayingInput = document.getElementById("date_for_paying");
    const dueDate = dateForPayingInput.value;
    //KOntrolle mit parameter èbergabe ansonsten müssen alle const Input open rauslagern global     
    if (!contollInputFields(clientName, amountDue, amountReceived, dueDate)) return;
    // Dann neues Objekt machen
    const newClient = {
        clientName, amountDue, amountReceived, dueDate
    };

    // In Array speichern
    clients.push(newClient);
    console.log("Klient Aufname ins system", clients);
    notPayingClients.push(newClient);
    renderClientNotPaying();

    console.log("Klien not paye ", notPayingClients);
    saveToLocalStorage();
    saveNotPayingToLocalStorage()
    renderClient();
}

function moveToPaying(notPayingIndex) {
    const isPayingInputRef = document.getElementById(`is_paying_${notPayingIndex}`);
    const isPaying = isPayingInputRef.value;
    if (isPaying.trim() === "") {
        alert("Bitte das Datumsfeld ausfüllen!");
        return;
    }
   //ALte Version ---> 
    const client = notPayingClients[notPayingIndex];
    client.isPaying = isPaying;
    paymentCompleteClients.push(client);
    notPayingClients.splice(notPayingIndex, 1);   // Entfernt den Eintrag aus notPayingClients
    
    console.log("bezahlt:", paymentCompleteClients);
    savedpaymenttoLocalStorage();
    saveNotPayingToLocalStorage()
    renderCompletedPayment();
    renderClientNotPaying(); // Liste neu anzeigen
}



function moveToTrash(paymentCompleteIndex){
    const client = paymentCompleteClients[paymentCompleteIndex];
    if (!trashClients.includes(client)) {
        trashClients.push(client);
        paymentCompleteClients.splice(paymentCompleteIndex, 1);// endscheidet das es weg ist nach Klick
    }
    console.log("Müll", trashClients);
    saveTrashtoLocalStorage();
    savedpaymenttoLocalStorage();
    renderClientNotPaying();
    renderCompletedPayment();
    renderTrashClient();
}


function moveToArchiv(paymentCompleteIndex){
      const client = paymentCompleteClients[paymentCompleteIndex];
    if (!archivClients.includes(client)) {
       archivClients.push(client);
        paymentCompleteClients.splice(paymentCompleteIndex, 1);
    }
    console.log("Archiv", archivClients);
    saveArchivtoLocalStorage()
     renderClientNotPaying();
    renderCompletedPayment();
    renderTrashClient();
    renderArchivClient();
}

function contollInputFields(clientName, amountDue, amountReceived, dueDate,) {
    if (
        clientName.trim() === "" ||
        amountDue.trim() === "" ||
        amountReceived.trim() === "" ||
        dueDate.trim() === ""
    ) {
        alert("Bitte alle Felder ausfüllen!");
        return false;
    }
    if (isNaN(amountReceived)) {
        alert("Betragfelder müssen Zahlen sein!");
        return false;
    }
    return true;
}


