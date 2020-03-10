const { app, BrowserWindow, electron } = require('electron');
const { ipcMain } = require('electron');
const { spawn } = require('child_process');
const child_process = require('child_process');
const path = require('path');


// Mantiene un riferimento globale all'oggetto window, se non lo fai, la finestra sarà
// chiusa automaticamente quando l'oggetto JavaScript sarà garbage collected.

function createWindow () {
  // Creazione della finestra del browser.
  let win = new BrowserWindow({
    width: 1300,
    height: 920,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    },
  })
  // and load the index.html of the app.
  win.loadFile('./dist/index.html')
  win.webContents.openDevTools()


  // Apre il Pannello degli Strumenti di Sviluppo.
  //win.webContents.openDevTools()

  // Emesso quando la finestra viene chiusa.
  win.on('closed', () => {
    // Eliminiamo il riferimento dell'oggetto window;  solitamente si tiene traccia delle finestre
    // in array se l'applicazione supporta più finestre, questo è il momento in cui 
    // si dovrebbe eliminare l'elemento corrispondente.
    win = null
  })
  win.removeMenu()
}

// Questo metodo viene chiamato quando Electron ha finito
// l'inizializzazione ed è pronto a creare le finestre browser.
// Alcune API possono essere utilizzate solo dopo che si verifica questo evento.
app.on('ready', createWindow)

// Terminiamo l'App quando tutte le finestre vengono chiuse.
app.on('window-all-closed', () => {
  // Su macOS è comune che l'applicazione e la barra menù 
  // restano attive finché l'utente non esce espressamente tramite i tasti Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Su macOS è comune ri-creare la finestra dell'app quando
  // viene cliccata l'icona sul dock e non ci sono altre finestre aperte.
  if (win === null) {
    createWindow()
  }
})

// in questo file possiamo includere il codice specifico necessario 
// alla nostra app. Si può anche mettere il codice in file separati e richiederlo qui.




ipcMain.on('run-script', (event, arg) => {
  console.log(
      arg
  );
  let python = spawn('python', ['../core/tools/python/script.py']);
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
   });
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {
   console.log(`child process close all stdio with code ${code}`);
   // send data to browser
   res.send(dataToSend)
   });
});





/**
 * Esegue uno script da riga di comando passato come argomento
 */
function executeScript(command, args, callback) {
  var child = child_process.spawn(command, args, {
      encoding: 'utf8',
      shell: true
  });
  // You can also use a variable to save the output for when the script closes later
  child.on('error', (error) => {
    console.log(error);
  });

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', (data) => {
      //Here is the output
      data=data.toString();   
      console.log(data);      
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (data) => {
      // Return some data to the renderer process with the mainprocess-response ID
      mainWindow.webContents.send('mainprocess-response', data);
      //Here is the output from the command
      console.log(data);  
  });

  child.on('close', (code) => {
      //Here you can get the exit code of the script  
      switch (code) {
          case 0:
              console.log({
                  title: 'Title',
                  type: 'info',
                  message: 'End process.\r\n'
              });
              break;
      }

  });
  if (typeof callback === 'function')
      callback();
}