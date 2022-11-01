import { NgModule, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomFieldConfig } from '@vendure/common/lib/generated-types';
import { SharedModule, FormInputComponent, registerFormInputComponent } from '@vendure/admin-ui/core';

@Component({
  template: `
    <input
        type="range"
        [min]="0"
        [max]="100"
        [formControl]="formControl" />
    {{ formControl.value }}
  `,
})
export class SliderControl implements FormInputComponent<CustomFieldConfig> {
  readonly: boolean;
  config: CustomFieldConfig;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [SliderControl],
  providers: [
    registerFormInputComponent('slider-form-input', SliderControl),
  ]
})
export class SharedExtensionModule {}