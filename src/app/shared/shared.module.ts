import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {

  static forRoot() {
    return {
        ngModule: SharedModule,
        providers: [],
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error('SharedModule has already been loaded. You should only import Shared modules in the AppModule only.');
    }
  }

}
