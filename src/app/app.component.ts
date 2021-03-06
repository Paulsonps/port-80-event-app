import { DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit, Component } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
// import { bootstrap } from '@angular/platform-browser-dynamic';


@Component({
  moduleId: module.id,
  selector: 'pwa-root',
  template: `
  <td-layout #layout>
  <td-navigation-drawer logo="assets:covalent" sidenavTitle="Landing Page">
    <md-nav-list>
      <ng-template let-item let-last="last" ngFor [ngForOf]="routes">
        <a md-list-item (click)="layout.close()"><md-icon>{{item.icon}}</md-icon>{{item.title}}</a>
      </ng-template>
    </md-nav-list>
    <md-nav-list td-navigation-drawer-menu>
      <a md-list-item ><md-icon>exit_to_app</md-icon>Sign out</a>
    </md-nav-list>
  </td-navigation-drawer>
  <td-layout-nav color="none" logo="assets:covalent">
    <div td-toolbar-content layout="row" layout-align="start center" flex>
      <span hide-gt-xs class="tc-blue-500 md-subhead">Landing</span>
      <span hide-xs class="tc-blue-500 md-subhead">Landing Page Template</span>
      <span flex ></span>
      <button md-icon-button >
        <td-notification-count color="accent" [notifications]="12">
          <md-icon>notifications</md-icon>
        </td-notification-count>
      </button>
      <md-menu >
        <td-menu>
          <div td-menu-header class="md-subhead">Job Openings</div>
          <md-nav-list dense>
            <a md-list-item>
              <md-icon md-list-avatar>fiber_new</md-icon>
              <h4 md-line><span class="text-wrap">Sr. Frontend Engineer</span></h4>
              <p md-line>UX team</p>
            </a>
            <md-divider></md-divider>
            <a md-list-item>
              <md-icon md-list-avatar>fiber_new</md-icon>
              <h4 md-line><span class="text-wrap">Sr. Data Scientist</span></h4>
              <p md-line>Data science team</p>
            </a>
            <md-divider></md-divider>
            <a md-list-item>
              <md-icon md-list-avatar>fiber_new</md-icon>
              <h4 md-line><span class="text-wrap">Sr. DevOps Engineer</span></h4>
              <p md-line>DevOps team</p>
            </a>
          </md-nav-list>
          <a md-button color="accent" td-menu-footer>
            View Jobs
          </a>
        </td-menu>
      </md-menu>
    </div>
    <md-toolbar class="pad-none">
      <nav  md-stretch-tabs md-tab-nav-bar class="pull-bottom-xl pull-top-md text-upper" flex>
        <a md-tab-link >
          <span hide-xs>Home</span>
          <span hide-gt-xs><md-icon>home</md-icon></span>
        </a>
        <a md-tab-link>
          <span hide-xs>Technology</span>
          <span hide-gt-xs><md-icon>laptop_mac</md-icon></span>
        </a>
        <a md-tab-link>
          <span hide-xs>Locations</span>
          <span hide-gt-xs><md-icon>language</md-icon></span>
        </a>
        <a md-tab-link>
          <span hide-xs>Job Openings</span>
          <span hide-gt-xs><md-icon>assignment</md-icon></span>
        </a>
        <a md-tab-link>
          <span hide-xs>Leadership</span>
          <span hide-gt-xs><md-icon>people</md-icon></span>
        </a>
      </nav>
    </md-toolbar>
    <!-- router outlet goes here -->
    <section class="bgc-blue-grey-50">
      <div layout-gt-xs="row">
        <div flex class="pad" tdMediaToggle="gt-xs" [mediaClasses]="['pad-xl']">
          <div class="push-top-xl" hide-xs></div>
          <div tdMediaToggle="gt-sm" [mediaClasses]="['push-lg']">
            <h1 class="md-display-1 tc-blue-A400 push-top-xs push-bottom-sm">Main Site Slogan</h1>
            <h2 class="md-headline tc-grey-800 push-top-xs push-bottom-sm">Supporting Secondary Text</h2>
            <p class="md-subhead tc-grey-600">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            <button md-raised-button color="accent" class="push-bottom mat-button-lg text-upper">Call to Action</button>
          </div>
          <div class="push-bottom-xl" hide-xs></div>
        </div>
        <div flex="40" layout="row" layout-align="center center">
          <md-icon class="push" style="height:auto;width:auto;" svgIcon="assets:covalent-mark"></md-icon>
        </div>
      </div>
    </section>

    <section class="bgc-blue-A700 tc-white"  tdMediaToggle="gt-xs" [mediaClasses]="['pad-top-md', 'pad-bottom-xl']">
      <h2 class="md-display-1 text-upper text-center push-bottom">Work with bleeding edge technology</h2>
      <div layout="row" layout-align-gt-xs="center center">
        <div flex-gt-xs="80" layout="row" layout-wrap>
          <ng-template let-item let-last="last" ngFor [ngForOf]="[0,1,2,3]">
            <div class="text-center" flex-xs="50" flex-gt-xs="25">
              <md-icon class="push" style="height:auto;width:auto;" svgIcon="assets:covalent-mark"></md-icon>
            </div>
          </ng-template>
        </div>
      </div>
      <div class="text-center push-top">
          <button md-raised-button color="accent" class="mat-button-lg text-upper">View Technology</button>
      </div>
    </section>
    <section class="bgc-blue-grey-100" tdMediaToggle="gt-xs" [mediaClasses]="['pad-top-xl', 'pad-bottom-xl']">
      <h2 class="md-display-1 text-upper text-center push-bottom">Current Team Openings</h2>
      <div  layout-gt-xs="row" layout-align-gt-xs="center center">
        <div layout-gt-xs="row" flex-gt-xs="90" layout-margin>
          <div flex-gt-xs="25">
            <md-card>
              <md-toolbar color="accent" class="bgc-blue-A400 push-bottom">
                <span class="text-upper">Frontend</span>
              </md-toolbar>
              <md-card-subtitle>Openings</md-card-subtitle>
              <md-divider></md-divider>
              <md-list>
                <ng-template let-item let-last="last" ngFor [ngForOf]="[0,1,2,3,4]">
                  <md-list-item>
                      <md-icon md-list-icon class="fill-grey-700">description</md-icon>
                      <h4 md-line>Frontend Engineer</h4>
                  </md-list-item>
                  <md-divider md-inset *ngIf="!last"></md-divider>
                </ng-template>
              </md-list>
              <md-divider></md-divider>
              <md-card-actions>
                <a md-button color="accent" class="text-upper">View All</a>
              </md-card-actions>
            </md-card>
          </div>

          <div flex-gt-xs="25">
            <md-card>
              <md-toolbar color="accent" class="bgc-light-blue-A400 push-bottom">
                <span class="text-upper">Backend</span>
              </md-toolbar>
              <md-card-subtitle>Openings</md-card-subtitle>
              <md-divider></md-divider>
              <md-list>
                <ng-template let-item let-last="last" ngFor [ngForOf]="[0,1,2,3,4]">
                  <md-list-item>
                      <md-icon md-list-icon class="fill-grey-700">description</md-icon>
                      <h4 md-line>Backend Engineer</h4>
                  </md-list-item>
                  <md-divider md-inset *ngIf="!last"></md-divider>
                </ng-template>
              </md-list>
              <md-divider></md-divider>
              <md-card-actions>
                <a md-button color="accent" class="text-upper">View All</a>
              </md-card-actions>
            </md-card>
          </div>

          <div flex-gt-xs="25">
            <md-card>
              <md-toolbar color="accent" class="bgc-cyan-A700 push-bottom">
                <span class="text-upper">DevOps</span>
              </md-toolbar>
              <md-card-subtitle>Openings</md-card-subtitle>
              <md-divider></md-divider>
              <md-list>
                <ng-template let-item let-last="last" ngFor [ngForOf]="[0,1,2,3,4]">
                  <md-list-item>
                      <md-icon md-list-icon class="fill-grey-700">description</md-icon>
                      <h4 md-line>DevOps Engineer</h4>
                  </md-list-item>
                  <md-divider md-inset *ngIf="!last"></md-divider>
                </ng-template>
              </md-list>
              <md-divider></md-divider>
              <md-card-actions>
                <a md-button color="accent" class="text-upper">View All</a>
              </md-card-actions>
            </md-card>
          </div>
          <div flex-gt-xs="25">
            <md-card>
              <md-toolbar color="accent" class="bgc-teal-A700 push-bottom">
                <span class="text-upper">Quality</span>
              </md-toolbar>
              <md-card-subtitle>Openings</md-card-subtitle>
              <md-divider></md-divider>
              <md-list>
                <ng-template let-item let-last="last" ngFor [ngForOf]="[0,1,2,3,4]">
                  <md-list-item>
                      <md-icon md-list-icon class="fill-grey-700">description</md-icon>
                      <h4 md-line>Quality Engineer</h4>
                  </md-list-item>
                  <md-divider md-inset *ngIf="!last"></md-divider>
                </ng-template>
              </md-list>
              <md-divider></md-divider>
              <md-card-actions>
                <a md-button color="accent" class="text-upper">View All</a>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
      <div class="text-center push-top">
          <button md-raised-button color="accent" class="mat-button-lg text-upper">View All Openings</button>
      </div>
    </section>
    <section class="bgc-green-A700">
      <div layout-gt-xs="row">
        <div flex="40" layout="row" layout-align="center center">
          <md-icon class="push" style="height:auto;width:auto;" svgIcon="assets:covalent-mark"></md-icon>
        </div>
        <div flex class="pad" tdMediaToggle="gt-xs" [mediaClasses]="['pad-xxl']">
          <div class="push-top-xxl" hide-xs></div>
          <h3 class="md-display-1 tc-white push-top-xs push-bottom-sm">The most desirable locations</h3>
          <p class="md-title tc-blue-50">Austin, Boston, San Diego and The Bay Area!</p>
          <button color="accent" md-raised-button class="push-bottom-md text-upper">View More</button>
          <div class="push-top-xxl" hide-xs></div>
        </div>
      </div>
    </section>
    <!-- end content -->
    <section class="bgc-blue-grey-800 tc-blue-grey-100">
      <div layout-gt-xs="row" layout-align-gt-xs="center center">
        <div layout-gt-sm="row" flex-gt-xs="75" layout-margin layout-padding>
          <div flex>
            <md-nav-list>
              <h3 md-subheader class="text-upper tc-blue-grey-100">About Teradata</h3>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">Company Info</p>
              </md-list-item>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">Our Customers</p>
              </md-list-item>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">Press</p>
              </md-list-item>
            </md-nav-list>
          </div>
          <div flex>
            <md-nav-list>
              <h3 md-subheader class="text-upper tc-blue-grey-100">Career Info</h3>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">Benefits</p>
              </md-list-item>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">Locations</p>
              </md-list-item>
              <md-list-item>
                <p md-line class="tc-blue-grey-300">List item</p>
              </md-list-item>
            </md-nav-list>
          </div>
          <div flex-gt-xs="10">
          </div>
          <div flex layout="column" flex-gt-xs="30">
            <md-icon class="push-top-md" svgIcon="assets:covalent" style="height:auto;width:auto;"></md-icon>
            <p class="md-body-1">&copy; Copyright 2017 Teradata, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  </td-layout-nav>
  <a md-fab color="accent" mdTooltip="Contact Us" mdTooltipPosition="above" class="mat-fab-position-bottom-right fixed">
    <md-icon>send</md-icon>
  </a>
</td-layout>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit{
  routes: Object[] = [
    {
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Technology',
      route: '/',
      icon: 'laptop_mac',
    }, {
      title: 'Locations',
      route: '/',
      icon: 'language',
    }, {
      title: 'Job Openings',
      route: '/',
      icon: 'assignment',
    }, {
      title: 'Leadership',
      route: '/',
      icon: 'people',
    },
  ];

  constructor(private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
              this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
              this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
              this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }
  ngAfterViewInit(): void {

  }
}
