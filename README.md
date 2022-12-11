# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
----------------------- Angular project ----------------------------------------
----------------------- 5. Components and Data Binding Deep Dive -----------------
1. Created a new project with "ng new cmp-databinding-start"
2. Extracted the "src" folder from Exercise file and pasted in the newly created project "cmp-databinding-start".
3. Generated 2 components
    1. cockpit
    2. server-element
4. (5.4) Created a property "element" in "server-element.component.ts" and addedd "@Input()" decorator to it. By doing this parent component can pass values to child component.
This can be verified, as the property "element" is used in its parent component "app.component.html".
5. (5.6) Created two events "serverCreated" and "blueprintCreated" in "cockpit.component.ts" and added "@Output()" decorator to it. By doing this child component can pass values to parent component.
6. (5.9 - 5.10) View Encapsulation. (I did not test this.)
    @Component({
        selector: 'some..',
        templateUrl: 'some..',
        styleUrls: ['some..'],
        encapsulation: ViewEncapsulation.None
    })
    "ViewEncapsulation.none" will add CSS styling to all the components.
    Possible values: "ViewEncapsulation.Native", "ViewEncapsulation.Emulated" (default)
7. (5.11) Local References in templates: Local References can be placed on any HTML elements. Refer to cockpit.component.html
For intsnace: <input type="text" class="form-control" #newServerName>
Here #newServerName is the Local Reference 
With a local reference we are able to work with any properties of any HTML elements.
8. (5.13) @ViewChild: Using this annotation is similar to Local Reference, however we dont need to pass the Local Reference variable in a method.
Refer to cockpit.component.ts
Usage: @ViewChild('newServerContent') ServerContent!: ElementRef;
9. (5.14) "ng-content" : projecting content (Need to lear more.)
10. Lifecycle hooks: 
    1. ngOnchanges : Called after a bound input property changes.
    2. ngOnInit : Called once the component is initialized. It is called after the constructor.
    3. ngDoCheck : Called during every change detection run.
    4. ngafterContentInit : Called after content(ng-content) has been projected into view.
    5. ngafterContentChecked : Called everytime the projected content has been checked.
    6. ngAfterViewInit : Called after the component's view (and child views) has been initialized.
    7. ngAfterViewChecked : Called everytime the view (and child views) has been checked.
    8. ngOnDestroy : Called once the component is about to be destroyed.

Note: References vs primitive types (https://academind.com/tutorials/reference-vs-primitive-values) 

Additional info on the above note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

11. (5.19) @ContentChild : Using this annotation we can access the HTML element placed(by using           "ng-content" tag) between selector tag in its parent component.
    For instance: as the "p" tag is placed inside the "app-server-element" tag
    Usage: We can access the "p" tag by using the Local Reference variable "contentParagraph"

##### In server-element.component.html
@ContentChild('contentParagraph', {static: true}) paragraph!: ElementRef;
#### In app.ccomponent.html 
<app-server-element 
    *ngFor = "let serverElement of serverElements"
    [srvElement] = "serverElement"
    [name] = "serverElement.name"
    >
        <p #contentParagraph>
        <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
        <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
        </p>
</app-server-element>
12. Assignment:

    1. Create three new components. GameControl, Odd and Even
    2. The GameControl Component should have buttons to start and stop the game
    3. When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setinterval|)
    4. The event should be listenable from outside the component
    5. When stopping the game, no more events should get emitted (clearlnterval(ref)
    6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
    7. Simply output Odd- NUMBER or Even - NUMBER in the two components
    8. Style the element (e.g. paragraph) holding your output text differently in both components
