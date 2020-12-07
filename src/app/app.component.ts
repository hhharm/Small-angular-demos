import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "CodeSandbox";
  obj: any = {};

  constructor(private cdr: ChangeDetectorRef) {}
  change() {
    this.obj.value = 321;
    this.cdr.markForCheck();
  }

  changeImmute() {
    this.obj = { ...this.obj, value: 123 };
    this.cdr.markForCheck();
  }
}
