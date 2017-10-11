import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TerminalComponent} from "./terminal.component";
import {TerminalService} from "./terminal.service";
import {FormsModule} from "@angular/forms";
import {ScrollDirective} from "./scroll.directive";
import {TerminalCommandService} from "./terminal-command.service";

@NgModule({
    declarations: [ TerminalComponent, ScrollDirective ],
    providers   : [ TerminalService, TerminalCommandService ],
    imports     : [ BrowserModule, FormsModule],
    exports     : [ TerminalComponent ],
    schemas     : [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TerminalModule {}
