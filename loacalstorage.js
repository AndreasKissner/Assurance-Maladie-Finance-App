function saveToLocalStorage() {
    localStorage.setItem("clients", (JSON.stringify(clients)))
}

function getFromLocalStorage() {
    const savedClients = JSON.parse(localStorage.getItem("clients"));
  if (savedClients) {
        clients.push(...savedClients); // oder clients = savedClients, je nach Bedarf
    }
}


function saveNotPayingToLocalStorage(){
  localStorage.setItem("notPayingClients", (JSON.stringify(notPayingClients)))
}

function getNotPayingFromLocalStorage() {
        notPayingClients.length = 0; // ← Liste vorher leeren 
    const savedNotPayingClients = JSON.parse(localStorage.getItem("notPayingClients"));
  if (savedNotPayingClients) {
        notPayingClients.push(...savedNotPayingClients);
    }
}


function savedpaymenttoLocalStorage(){
    localStorage.setItem("paymentCompleteClients", (JSON.stringify(paymentCompleteClients)))
}

function getPaymentCompleteClientsFromLocalStorage(){
       paymentCompleteClients.length = 0; // ← Hier leeren
    const savePaymentComplete = JSON.parse(localStorage.getItem("paymentCompleteClients"))
    if(savePaymentComplete){
        paymentCompleteClients.push(...savePaymentComplete);
    }
}

function saveTrashtoLocalStorage(){
localStorage.setItem("trashClients", (JSON.stringify(trashClients)));
}


function getTrashFromLocalStorage(){
    trashClients.length = 0;
    const saveTrashClientsComplete = JSON.parse(localStorage.getItem("trashClients"))
    if(saveTrashClientsComplete){
        trashClients.push(...saveTrashClientsComplete);
    }
}

function saveArchivtoLocalStorage(){
localStorage.setItem("archivClients", (JSON.stringify(archivClients)));
}


function getArchivFromLocalStorage(){
    archivClients.length = 0;
    const saveArchivClientsComplete = JSON.parse(localStorage.getItem("archivClients"))
    if(saveArchivClientsComplete){
       archivClients.push(...saveArchivClientsComplete);
    }
}