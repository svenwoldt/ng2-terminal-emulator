import { Injectable } from "@angular/core";
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: any;
  data?: any;
}

@Injectable()
export class TerminalService {
    me:any;
    private event: Subject<BroadcastEvent>;
    constructor() {
      this.event = new Subject<BroadcastEvent>();
    }

    fetch(url:string){
      return Observable.create(observer=>{
        // angular http lib does not support arrayBuffer hence XMLHTTP
        let req = new XMLHttpRequest();
        req.open('get',url);
        req.responseType = "arraybuffer";
        req.onreadystatechange = function() {
          if (req.readyState == 4 && req.status == 200) {
            observer.next(req.response);
            observer.complete();
          }
        };
        req.send();
      });
    }
    // calls the next event with listener id on listening component and data to send
    broadcast(key: any, data?: any) {
      this.event.next({key, data});
    }

    // filters through active observers and maps data to a matching observer
    on<T>(key: any): Observable<T> {
      return this.event.asObservable()
        .filter(event => event.key === key)
        .map(event => <T>event.data);
    }

    public getPrompt() {
      return this.me
    }

    public prompt(config:any) {
        this.me = {};
        let _user:any , _path:any, _userPathSeparator:any, _promptEnd:any;
        config = config ? config.promptConfiguration : null;
        let build = ()=> {
            this.me.text = _user + _userPathSeparator + _path + _promptEnd;
        };
        this.me.reset = ()=> {
            _user = config && config.user != null ? (config.user || '') : 'anon';
            _path = config && config.path != null ? (config.path || '') : '\\';
            _userPathSeparator = config && config.separator != null ? (config.separator || '') : '@';
            _promptEnd = config && config.end != null ? (config.end || '') : ':>';
            build();
        };
        this.me.text = '';
        this.me.reset();
        return this.me;
    };
}
