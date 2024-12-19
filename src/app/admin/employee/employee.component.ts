import { Component } from "@angular/core";
import { Location, LocationStrategy } from "@angular/common";
import { EmployeeConfig } from "src/app/shared/models/employee-config";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrl: "./employee.component.scss",
})
export class EmployeeComponent {
  EmployeeConfig;
  navCollapsed: boolean;
  navCollapsedMob = false;
  windowWidth: number;

  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
  ) {
    this.EmployeeConfig = EmployeeConfig;

    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }

    if (
      current_url === baseHref + "/layout/theme-compact" ||
      current_url === baseHref + "/layout/box"
    ) {
      this.EmployeeConfig.isCollapse_menu = true;
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed =
      this.windowWidth >= 1025 ? EmployeeConfig.isCollapse_menu : false;
  }

  navMobClick() {
    if (
      this.navCollapsedMob &&
      !document
        .querySelector("app-navigation.coded-navbar")
        ?.classList.contains("mob-open")
    ) {
      this.navCollapsedMob = !this.navCollapsedMob;
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
}
