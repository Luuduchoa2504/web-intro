import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService {

  constructor(
    private _toastr: ToastrService
  ) { }

  private individualConfig: Partial<IndividualConfig> = {};

  showSuccess(title?: string, content?: any, individualConfig?: Partial<IndividualConfig>): void {
    this._toastr.success(content, title, { ...this.individualConfig, ...individualConfig });

  }

  showError(title?: string, content?: any, individualConfig?: Partial<IndividualConfig>): void {
    this._toastr.error(content, title, { ...this.individualConfig, ...individualConfig });

  }

  showWarning(title?: string, content?: any, individualConfig?: Partial<IndividualConfig>): void {
    this._toastr.warning(content, title, { ...this.individualConfig, ...individualConfig });

  }

  showInfo(title?: string, content?: any, individualConfig?: Partial<IndividualConfig>): void {
    this._toastr.info(content, title, { ...this.individualConfig, ...individualConfig });

  }
}
