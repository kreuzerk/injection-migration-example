import {ChangeDetectionStrategy, Component, Host, Optional, SkipSelf} from "@angular/core";
import {TestService} from "./test.service";

@Component({
  standalone: true,
  selector: 'app-test',
  template: `<h1>Test Component</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {

  constructor(@Optional() @SkipSelf() @Host() private testService: TestService){
  }
}
