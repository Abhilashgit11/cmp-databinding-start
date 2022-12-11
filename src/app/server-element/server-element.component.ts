import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, 
          AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
          OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  //This way we are binding to the property 'element'
  // @Input() 
  // This way we are binding to the property element but with 'srvElement'. 
  //This 'srvElement' is only used outside the component. for instance: in parent component "app.component.html"
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header!: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph!: ElementRef;
  
  constructor() {
    this.element = {type: '',name: '',content: ''};
    this.name = '';
    console.log('Constructor called!');
   }

  //  This is the only hook which takes arguments
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
