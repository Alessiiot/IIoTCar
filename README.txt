Alessio - Server NodeJS
Michele - Client C#

Lo scopo del programma è quello di mandare dei dati raccolti da sensori ad un server SQL
con database. Il database sarà utilizzato come storage dei dati letti dai sensori.
Il client è scritto in C# e la parte server in NodeJS.

SPIEGAZIONE UTILIZZO PROTOCOLLO MQTT

Utilizzo di Mosquitto come broker MQTT https://test.mosquitto.org. Successivamente abbiamo deciso la struttura da dare
ai topic e payload "/frequency" per i dati del sensore di frequenza. "/speed" per i dati del sensore di velocità. 
I dati vengono poi inseriti in un Database PostgreSQL nelle rispettive colonne "Frequency" e "Speed" nella tabella "Sensors".

Si sono eseguiti di test di lettura dei messaggi ai topic attraverso MQTT.fx per verificare la funzionalità del codice del client.

SPIEGAZIONE DEL CODICE PROTOCOLLO MQTT

Nella cartella Protocols sono presenti MQTT, ProtocolInterface. 
La classe Http è progettata per inviare dati a un endpoint specifico utilizzando 
il protocollo HTTP e ha un campo privato chiamato Endpoint, 
che rappresenta l'indirizzo dell'endpoint a cui verranno inviati i dati.
Il metodo Send è definito per inviare dati all'endpoint specificato.

L'interfaccia ProtocolInterface fornisce un'astrazione per definire 
il comportamento di vari protocolli di comunicazione. 

L'interfaccia ISensorInterface viene usata per l'invio di stringhe come Json.

L'interfaccia IFrequencySensorInterface viene utilizzata per definire
il comportamento di sensori che ricevono la frequenza come dato.

L'interfaccia ISpeedSensorInterface viene utilizzata per definire
il comportamento di sensori che ricevono la velocità come dato.

La classe VirtualFrequencySensor implementa IFrequencySensorInterface e ISensorInterface.
Genera un numero random utilizzato come esempio di dato raccolto utilizzato come frequenza.

La classe VirtualFrequencySensor implementa IFrequencySensorInterface e ISensorInterface.
Genera un numero random utilizzato come esempio di dato raccolto utilizzato come frequenza.

La classe VirtualSpeedSensor implementa ISpeedSensorInterface e ISensorInterface.
Genera un numero random utilizzato come esempio di dato raccolto utilizzato come velocità.

La classe Frequency è progettata come un oggetto che rappresenta una frequenza. 
Essa incapsula un singolo valore rappresentante la frequenza e non fornisce alcun comportamento aggiuntivo.

La classe Speed è progettata come un oggetto che rappresenta una frequenza. 
Essa incapsula un singolo valore rappresentante la velocità e non fornisce alcun comportamento aggiuntivo.

Nel file Program vengono istanziati i sensori e creata una comunicazione di dati dei sensori con un server.
Si usa l'interfaccia del protocollo per stabilire una connessione tramite protocollo MQTT col server.

