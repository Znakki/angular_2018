import {Injectable} from "@angular/core";
import {AppService} from "../app.service";
import {Resolve} from "@angular/router";


@Injectable()
export class LoginResolver implements Resolve<any>{

  constructor(private appService: AppService) {
  }

  async resolve():Promise<any> {
    return this.appService.isAuthChecked(false);
  }
}
