import { Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { HeaderPaginationComponent } from './components/header-pagination/header-pagination.component';
import { InputFieldsComponent } from './components/input-fields/input-fields.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SteppersComponent } from './components/steppers/steppers.component';
import { TabsSaperatorComponent } from './components/tabs-saperator/tabs-saperator.component';
import { ToggleRadioCheckComponent } from './components/toggle-radio-check/toggle-radio-check.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { ComponentsListComponent } from './components/components-list/components-list.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CalenderComponent } from './calender/calender.component';

export const routes: Routes = [
    { path: '', component: ComponentsListComponent},
    { path: "accordion", component: AccordionsComponent},
    { path: "alerts", component: AlertsComponent},
    { path: "buttons", component: ButtonsComponent},
    { path: "breadcrumb", component: BreadcrumbsComponent},
    { path: "dataTable", component: DatatableComponent},
    { path: "header-pagination", component: HeaderPaginationComponent},
    { path: "input-fields", component: InputFieldsComponent},
    { path: "menu-dropdown", component: MenuDropdownComponent},
    { path: "modals", component: ModalsComponent},
    { path: "progressbar", component: ProgressbarComponent},
    { path: "steppers", component: SteppersComponent},
    { path: "tab-saperators", component: TabsSaperatorComponent},
    { path: "toggle-radio-check", component: ToggleRadioCheckComponent},
    { path: "tooltip", component: TooltipsComponent},
    { path: "badges", component: BadgesComponent},
    { path: "chips", component: ChipsComponent},
    { path: "calender", component: CalenderComponent}
];

