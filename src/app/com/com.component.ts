import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-com",
  templateUrl: "./com.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComComponent {
  @Input() obj;
}
