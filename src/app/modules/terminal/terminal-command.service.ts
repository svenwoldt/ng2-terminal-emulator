import { Injectable } from "@angular/core";
import {TerminalService} from "./terminal.service";

@Injectable()
export class TerminalCommandService {
  terminalService: TerminalService;
  constructor(terminalService: TerminalService) {
    this.terminalService = terminalService;
  }

  public interpret(cmd:any) {
    let prompt = this.terminalService.getPrompt();
    if (cmd.command == 'help') {
      this.terminalService.broadcast('terminal-output', {
        output: true,
        text: [prompt.text + cmd.command,
          'List of available commands',
          'help   clear   restart',
          'stop   ls      cd',
          'Please type {#command help} to see specific help'],
        breakLine: true,
      });
    } else {
      this.terminalService.broadcast('terminal-output', {
        output: true,
        text: [prompt.text + cmd.command,
          'Command is not supported. please consult {help}',
          'for a list of available commands'],
        breakLine: true,
      });
    }
  }
}


