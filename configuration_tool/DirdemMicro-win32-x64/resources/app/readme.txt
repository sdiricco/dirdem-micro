	Per far funzionare il tool
		- Posizionarsi in questa root da riga di comando: C:\sorgenti\dirdem-micro.git\trunk\configuration_tool>
		- se non c'è la cartella node_modules esegui "npm install" 
			in caso di errore:
		
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

		- esegui "npm audit fix"
		- esegui "ng serve"
		
	ATT! 
	
	1) Non committare la cartella node_modules poichè è piena di librerie
	2) da eseguire nuovamente "npm install" se cambia il file json
