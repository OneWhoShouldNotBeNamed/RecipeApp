import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("data-toggle") isOpen = "";
  @HostListener("click") toggleOpen() {
    this.isOpen = "dropdown";
  }
}
