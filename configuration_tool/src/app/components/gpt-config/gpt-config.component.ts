import {
  Component,
  ViewChild,
  Inject,
  OnInit,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { ATmega328Values, GptDriverConfig } from "src/app/models/GptDriver";
import { MatSelect, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { DriverService } from "src/app/services/driver.service";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "gpt-cfg",
  templateUrl: "./gpt-config.component.html",
  styleUrls: ["./gpt-config.component.css"]
})
export class GptCfgConfigComponent implements AfterViewInit {
  @ViewChild("select1", { static: false }) channelIdDropDown: MatSelect;
  @ViewChild("select2", { static: false }) hwChannelDropDown: MatSelect;
  displayedColumns = [
    "gptChannelID",
    "gptContainerHwChannel",
    "gptContainerClockReference",
    "gptClockPrescaler",
    "gptChannelTickValueMax",
    "gptNotification",
    "deleteRow"
  ];


  configurations: GptDriverConfig[];                                                // tutte le configurazioni istanziate / datasource della tabella
  atMega328values = new ATmega328Values();                                          // per la visualizzazione dei menu a tendina
  config = new GptDriverConfig();                                                   // singola configurazione
  get enableTable() {
    return this.configurations.length == 0 ? false : true;
  }

  constructor(
    private driverService: DriverService,
    private toastr: ToastrService,
    private cdRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<GptCfgConfigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  { this.configurations = this.driverService.gptDriverConfigurations }

  ngAfterViewInit() {
    this._refreshDropDownAndTable();
    this.cdRef.detectChanges();
  }
  /**************************
   * funzioni pubbliche
   **************************/
  // aggiunge una nuova configurazione (nuova riga in tabella)
  addConfig(config: GptDriverConfig) {
    // aggiornamento dei channelId e hwChannel già selezionati
    this.driverService.channelIdSelected.push(config.gptChannelID);
    this.driverService.hwChannelSelected.push(config.gptContainerHwChannel);
    // inserimento nell'array delle configurazioni
    let result = Object.assign({}, config);
    this.driverService.gptDriverConfigurations.push(result);
    this._refreshDropDownAndTable();
  }
  // cancella una configurazione (tasto X sulla tabella)
  deleteConfig(config: GptDriverConfig) {
    // rimozione hwChannel da quelli già selezionati (visualizzaione dropdown)
    let hwChannelIndex = this.driverService.hwChannelSelected.indexOf(
      config.gptContainerHwChannel
    );
    this.driverService.hwChannelSelected.splice(hwChannelIndex, 1);
    // rimozione channelId da quelli già selezionati (visualizzaione dropdown)
    let channelIdIndex = this.driverService.channelIdSelected.indexOf(
      config.gptChannelID
    );
    this.driverService.channelIdSelected.splice(channelIdIndex, 1);
      // rimozione configuraione dall'array configurazioni
    let element = this.driverService.gptDriverConfigurations.find(
      _ => _.gptContainerHwChannel == config.gptContainerHwChannel
    );
    let configIndex = this.driverService.gptDriverConfigurations.indexOf(element);
    this.driverService.gptDriverConfigurations.splice(configIndex, 1);
    this._refreshDropDownAndTable();
  }
  // sull'inserimento delle notification api (area di testo) per controllo caratteri
  onGptNotificationKeydown(evt: KeyboardEvent) {
    let keyPressed = evt.key;
    if (DENIED_CHARS.includes(keyPressed)) {
      this.toastr.warning("carattere " + keyPressed + " non permesso");
      return false;
    } else {
      return true;
    }
  }
  // scatenata quando cambia il valore della select del'hw channel - settaggio automatico del thick value max
  onHwSelectionChange(evt: any) {
    if (evt.value == this.atMega328values.gptContainerHwChannelValues[1]) {
      this.config.gptChannelTickValueMax = this.atMega328values.gptChannelTickValues[1];
    } else {
      this.config.gptChannelTickValueMax = this.atMega328values.gptChannelTickValues[0];
    }
  }
  // quando viene chiuso il popup per click esterno al componente
  onNoClick(): void {
    this.dialogRef.close();
  }
  /**************************
   * funzioni private
   **************************/
  // abilitazione/disabilitazione matSelect (dropdown) hwChannel e channelId e rendering della tabella
  private _refreshDropDownAndTable() {
    this.configurations = this.driverService.gptDriverConfigurations;
    this.configurations = [...this.configurations]
    this.hwChannelDropDown.options.forEach(_ => {
      _.disabled = this.driverService.hwChannelSelected.includes(_.value);
    });
    this.channelIdDropDown.options.forEach(_ => {
      _.disabled = this.driverService.channelIdSelected.includes(_.value);
    });
    this.hwChannelDropDown.value = null;
    this.channelIdDropDown.value = null;
  }
}

/****************************
 * costanti
 ****************************/
const DENIED_CHARS = '\\<>"°£$%&/)(=^*§#]|[?!@,';
