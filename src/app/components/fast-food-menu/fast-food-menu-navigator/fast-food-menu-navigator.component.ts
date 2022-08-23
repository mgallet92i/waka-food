import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { W7NavItemInterface } from '../../../../w7-lib/w7-navigation/w7-nav-item/w7-nav-item.interface';
import pkg from 'package.json';
import { W7NavItemComponent } from '../../../../w7-lib/w7-navigation/w7-nav-item/w7-nav-item.component';
import { W7ClickItemEvent } from '../../../../w7-lib/w7-event/w7-click-item-event';
import categoryListConfig from '../../../config/category-list-config.json';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'ff-menu-navigator',
  templateUrl: './fast-food-menu-navigator.component.html',
  styleUrls: ['./fast-food-menu-navigator.component.scss']
})
export class FastFoodMenuNavigatorComponent implements OnInit {

  @Output()
  onNavItemClick: EventEmitter<any> = new EventEmitter();

  @ViewChildren(W7NavItemComponent)
  navItemComponents!: QueryList<W7NavItemComponent>;

  headerLogoSrc: string = './assets/img/logo.png';
  contentTitleSrc: string = './assets/img/carte-ruban.png';
  ffVersion: string = pkg.version;
  navItemsData!: W7NavItemInterface[];
  iconTag: IconDefinition = faBars;
  showMenu: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.navItemsData = categoryListConfig.map((item: W7NavItemInterface) => {
      const navItem: W7NavItemInterface = item;
      navItem.callback = () => this.onNavItemClick.emit({ label: item.label, code: item.code });
      return navItem;
    });

    // active first item by default
    this.onNavItemClick.emit({ label: this.navItemsData[0]?.label, code: this.navItemsData[0]?.code })
  }

  onItemClick(event: W7ClickItemEvent): void {
    this.deselectActiveItem();
    this.selectItemByCode(event.data.code);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }

  private deselectActiveItem() {
    const navItem: W7NavItemComponent = this.navItemComponents.find((cmp: W7NavItemComponent) => cmp.selected)!;
    if (navItem !== undefined) {
      navItem.deselect();
    }
  }

  private selectItemByCode(code: string) {
    const navItem: W7NavItemComponent = this.navItemComponents.find((cmp: W7NavItemComponent) => cmp.item.code === code)!;
    if (navItem !== undefined) {
      navItem.select();
    }
  }

}
