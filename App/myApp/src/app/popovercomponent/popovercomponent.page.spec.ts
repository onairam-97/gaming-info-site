import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopovercomponentPage } from './popovercomponent.page';

describe('PopovercomponentPage', () => {
  let component: PopovercomponentPage;
  let fixture: ComponentFixture<PopovercomponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopovercomponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopovercomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
