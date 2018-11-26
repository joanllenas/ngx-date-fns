import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import * as esLocale from "date-fns/locale/es/index.js";

@Component({
  selector: "test-default-component",
  template: `
    <p>
      {{ dateOne | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin | dfnsFormat : 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat : 'ddd MMM D YYYY' }}
    </p>
    <p>
      {{ dateThree | dfnsDistanceInWordsToNow : options }} - (Explicit 'es' locale)
    </p>
    <p *ngFor="let d of dates">
      {{ d | dfnsDistanceInWordsToNow }}
    </p>
  `
})
export class TestStrategyDefaultComponent {
  @Input() dateOne: Date;
  @Input() dateTwo: Date;
  @Input() dateThree: Date;
  @Input() dates: Date[];
  options = {
    locale: esLocale
  };
}
